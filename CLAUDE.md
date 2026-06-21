# Portfolio — sajalsuhane.github.io

Personal portfolio for Sajal Suhane (software engineer at Goldman Sachs).
A small React SPA that is **prerendered to static HTML at build time** for SEO,
then hydrated in the browser. Served by GitHub Pages from the `master` branch root.

## Stack

- React 19 + Vite 8
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- React Router 7 — **import from `react-router`, not `react-router-dom`**
  (mixing the two creates duplicate context instances under vitest)
- Heroicons for icons; Inter + Space Grotesk fonts (loaded async in `entry.html`)
- Vitest 4 + Testing Library for tests; ESLint 9 (flat config)
- GoatCounter for privacy-friendly analytics

## Commands

```bash
npm run dev      # start dev server (opens src/entry.html)
npm run build    # build + prerender + copy dist artifacts to repo root
npm test         # vitest suite, CI mode (vitest run)
npx vitest       # vitest watch mode for development
npm run lint     # eslint
npm run preview  # preview the built site
```

## Repository layout

```
src/
  entry.html            # HTML template + all <head> SEO meta + JSON-LD + analytics
  main.jsx              # client entry: hydrate if prerendered, else createRoot
  prerender-entry.jsx   # SSR entry: render(url) via StaticRouter (used at build)
  App.jsx               # routes, ScrollToTop, skip-link, <main> landmark
  index.css             # Tailwind entry + global styles
  pages/
    Home.jsx            # landing page; section data lives in top-of-file consts
    Research.jsx        # publications page
  components/
    Navbar.jsx
    Footer.jsx
    CopyEmailButton.jsx # clipboard copy with 2s "Copied ✓" state + analytics
  lib/
    site.js             # single source of truth for EMAIL, ROUTE_META, analytics
scripts/
  prerender.mjs         # build step: SSR-render routes into the HTML template
test/                   # vitest suite (see TESTING.md)
.github/workflows/deploy.yml  # CI: test + build + verify prerender + lint
```

Build output lives in `dist/` (gitignored). `npm run build` then copies the
deployable artifacts (`index.html`, `research/index.html`, `assets/`,
`robots.txt`, `sitemap.xml`, `404.html`, `cv.pdf`, favicons, `images/`) to the
**repo root** — those committed root files ARE the deployed site.

## Architecture & key conventions

- **Routes** are declared in `src/App.jsx`. Currently `/` (Home) and `/research`
  (Research); `/about` and any unknown path `Navigate` to `/`. Add a new page by
  creating it under `src/pages/` and wiring a `<Route>`. If it should be
  prerendered/indexed, also add it to `scripts/prerender.mjs` and `ROUTE_META`.
- **`src/lib/site.js` is the single source of truth** for `EMAIL`, per-route SEO
  metadata (`ROUTE_META`), and analytics helpers (`trackResumeDownload`,
  `trackEmailCopy`). Static copies in `src/entry.html` (`<title>`, meta
  description, JSON-LD email) cannot import it and **must be kept in sync by hand**.
- **Prerender / hydration pipeline** (this is the SEO contract):
  1. `vite build` → client bundle in `dist/`.
  2. `vite build --ssr src/prerender-entry.jsx` → SSR bundle in `dist-ssr/`.
  3. `scripts/prerender.mjs` renders `/` and `/research` to static HTML, injects
     them into `dist/src/entry.html`'s `<div id="root">`, and rewrites per-route
     `<head>` meta (title, description, og:*, twitter:*, canonical) for
     `/research`. Everything outside the rewritten tags stays byte-identical
     (notably the SPA redirect script and absolute `/assets/...` links).
  4. `main.jsx` `hydrateRoot`s over prerendered markup, or `createRoot`s in dev.
- **SPA routing on GitHub Pages**: `entry.html` contains a redirect script and
  there is a `404.html` so deep links / refreshes resolve correctly on Pages.
- **Analytics**: GoatCounter loaded in `entry.html`; events go through the
  `track*` helpers in `site.js` (guarded with `window.goatcounter?.count?.`).
- **Accessibility is intentional**: skip-to-content link, single `<main>`
  landmark, `aria-live` on the copy-email state, 44px touch targets. Preserve these.
- **ESLint** ignores `dist`, `dist-ssr`, `assets`, `research`, `.claude`.
  `no-unused-vars` allows `^[A-Z_]`-prefixed names.

## Deployment

GitHub Pages serves the **master branch root** (legacy mode). `npm run build`
prerenders the routes and copies the artifacts to the repo root — **committing
those root artifacts IS the deploy**. The GitHub Action (`deploy.yml`) only runs
test → build → verify-prerender → lint on pushes/PRs to `master`; it does **not**
publish. After changing anything that affects output, rebuild and commit the
regenerated root files.

## Testing

See TESTING.md. **Run `npm test` before every commit.**

- 100% test coverage is the goal — tests make vibe coding safe
- New function → corresponding test; bug fix → regression test
- New conditional → tests for BOTH paths; new error handling → test that triggers it
- Never commit code that makes existing tests fail
- Test files live in `test/` named `<subject>.test.jsx`; assert visible behavior,
  never `expect(x).toBeDefined()`
- Layers: **prerender smoke** (`test/prerender.test.jsx` — guards the SEO pipeline
  ships real, not empty, HTML), **component** (`copy-email-button`, `navbar`,
  `home`), and **route/navigation** (`routes`, `app-navigation`)

## gstack

This project uses [gstack](https://github.com/garrytan/gstack) — a virtual engineering team for Claude Code.

Skills are vendored at `.claude/skills/gstack/`. Use `/browse` for QA and browser testing.

### Available skills

`/autoplan` `/benchmark` `/browse` `/canary` `/careful` `/codex` `/connect-chrome`
`/cso` `/design-consultation` `/design-html` `/design-review` `/design-shotgun`
`/document-release` `/freeze` `/guard` `/investigate` `/land-and-deploy` `/learn`
`/office-hours` `/plan-ceo-review` `/plan-design-review` `/plan-eng-review`
`/qa` `/qa-only` `/retro` `/review` `/setup-deploy` `/ship` `/unfreeze`

### Skill routing

- QA / browser testing → `/browse`
- Code review → `/review`
- Design audit → `/design-review`
- Security audit → `/cso`
- Ship / deploy → `/ship`
- Planning → `/autoplan`
