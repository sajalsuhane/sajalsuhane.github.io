/**
 * Build-step prerender (PLAN.md D8.1).
 *
 * Run after:
 *   vite build                                           -> dist/ (client)
 *   vite build --ssr src/prerender-entry.jsx --outDir dist-ssr  -> SSR bundle
 *
 * Renders "/" and "/research" to static HTML, injects each into the
 * client template's <div id="root">, rewrites per-route head meta for
 * /research, and writes:
 *   dist/index.html
 *   dist/research/index.html
 *
 * Everything outside the rewritten tags is kept byte-identical
 * (notably the SPA redirect script and the absolute /assets/... links).
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const templatePath = path.join(root, 'dist', 'src', 'entry.html')
const ssrEntryPath = path.join(root, 'dist-ssr', 'prerender-entry.js')

if (!existsSync(templatePath)) {
  fail(`Template not found: ${templatePath}\nRun "vite build" first.`)
}
if (!existsSync(ssrEntryPath)) {
  fail(
    `SSR bundle not found: ${ssrEntryPath}\n` +
      'Run "vite build --ssr src/prerender-entry.jsx --outDir dist-ssr" first.'
  )
}

const template = readFileSync(templatePath, 'utf8')
const { render } = await import(pathToFileURL(ssrEntryPath).href)

if (typeof render !== 'function') {
  fail('SSR bundle does not export a render(url) function.')
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function fail(message) {
  console.error(`[prerender] ERROR: ${message}`)
  process.exit(1)
}

function escapeAttr(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function escapeText(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;')
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** Replace the inner HTML of <div id="root"> (template root must be empty). */
function injectRoot(html, appHtml) {
  const rootRe = /<div id="root">\s*<\/div>/
  if (!rootRe.test(html)) {
    fail('Could not find an empty <div id="root"></div> in the template.')
  }
  // Replacement via function so "$" sequences in appHtml are taken literally.
  return html.replace(rootRe, () => `<div id="root">${appHtml}</div>`)
}

/** Replace <title>...</title>. */
function setTitle(html, title) {
  const titleRe = /<title>[\s\S]*?<\/title>/
  if (!titleRe.test(html)) fail('Could not find <title> in the template.')
  return html.replace(titleRe, () => `<title>${escapeText(title)}</title>`)
}

/**
 * Rewrite the content="" of a <meta> tag matched by attribute key/value
 * (e.g. name="description" or property="og:title"), regardless of
 * attribute ordering within the tag. Only the content value changes.
 */
function setMeta(html, attr, key, content) {
  const tagRe = new RegExp(
    `<meta\\b[^>]*\\b${attr}=["']${escapeRegExp(key)}["'][^>]*>`,
    'i'
  )
  const match = html.match(tagRe)
  if (!match) {
    fail(`Could not find <meta ${attr}="${key}"> in the template.`)
  }
  const newTag = match[0].replace(
    /\bcontent=["'][^"']*["']/i,
    () => `content="${escapeAttr(content)}"`
  )
  if (newTag === match[0] && !/\bcontent=/i.test(match[0])) {
    fail(`<meta ${attr}="${key}"> has no content attribute to rewrite.`)
  }
  return html.replace(match[0], () => newTag)
}

/**
 * Like setMeta, but the tag may use either property="" or name="" for the
 * key (twitter:* tags are written both ways in the wild).
 */
function setMetaEither(html, key, content) {
  const probe = new RegExp(
    `<meta\\b[^>]*\\bproperty=["']${escapeRegExp(key)}["'][^>]*>`,
    'i'
  )
  return probe.test(html)
    ? setMeta(html, 'property', key, content)
    : setMeta(html, 'name', key, content)
}

/**
 * Rewrite <link rel="canonical"> href (attribute order independent).
 * If the template has no canonical link, insert one before </head>.
 */
function setCanonical(html, href) {
  const tagRe = /<link\b[^>]*\brel=["']canonical["'][^>]*>/i
  const match = html.match(tagRe)
  if (match) {
    const newTag = match[0].replace(
      /\bhref=["'][^"']*["']/i,
      () => `href="${escapeAttr(href)}"`
    )
    return html.replace(match[0], () => newTag)
  }
  console.warn('[prerender] No canonical link in template; inserting one.')
  return html.replace(
    /<\/head>/i,
    () => `  <link rel="canonical" href="${escapeAttr(href)}" />\n  </head>`
  )
}

function writePage(outPath, html) {
  mkdirSync(path.dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  console.log(
    `[prerender] Wrote ${path.relative(root, outPath)} (${html.length} bytes)`
  )
}

// ---------------------------------------------------------------------------
// Route: /
// ---------------------------------------------------------------------------

const homeHtml = render('/')
if (!homeHtml || homeHtml.length < 100) {
  fail(`render("/") produced suspiciously little HTML (${homeHtml.length} bytes).`)
}
writePage(path.join(root, 'dist', 'index.html'), injectRoot(template, homeHtml))

// ---------------------------------------------------------------------------
// Route: /research
// ---------------------------------------------------------------------------

const { ROUTE_META } = await import(
  pathToFileURL(path.join(root, 'src', 'lib', 'site.js')).href
)
const RESEARCH = ROUTE_META.research

const researchHtml = render('/research')
if (!researchHtml || researchHtml.length < 100) {
  fail(
    `render("/research") produced suspiciously little HTML (${researchHtml.length} bytes).`
  )
}

let researchPage = injectRoot(template, researchHtml)
researchPage = setTitle(researchPage, RESEARCH.title)
researchPage = setMeta(researchPage, 'name', 'title', RESEARCH.title)
researchPage = setMeta(researchPage, 'name', 'description', RESEARCH.description)
researchPage = setMeta(researchPage, 'property', 'og:url', RESEARCH.url)
researchPage = setMeta(researchPage, 'property', 'og:title', RESEARCH.title)
researchPage = setMeta(researchPage, 'property', 'og:description', RESEARCH.description)
researchPage = setMetaEither(researchPage, 'twitter:url', RESEARCH.url)
researchPage = setMetaEither(researchPage, 'twitter:title', RESEARCH.title)
researchPage = setMetaEither(researchPage, 'twitter:description', RESEARCH.description)
researchPage = setCanonical(researchPage, RESEARCH.url)

writePage(path.join(root, 'dist', 'research', 'index.html'), researchPage)

console.log('[prerender] Done.')
