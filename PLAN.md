# Plan: Portfolio Refresh — Recruiter Conversion + Search Ranking

## Goal

Update sajalsuhane.github.io so that (1) a recruiter who lands on it converts —
contacts Sajal or downloads the resume — and (2) the site is the #1 result when
someone searches "Sajal Suhane", with a rich snippet and a proper link preview.

## Honest scope note

A personal portfolio can own name-based queries ("Sajal Suhane", "Sajal Suhane
Goldman Sachs", "Sajal Suhane software engineer"). It will not rank for generic
queries like "software engineer". The funnel this plan optimizes: recruiter sees
resume/LinkedIn → Googles the name → site is result #1 → converts in 5 seconds.

## Current state (audited 2026-06-10)

- React 19 + Vite 7 + Tailwind 4 + Router 7 SPA, deployed to GitHub Pages repo root.
- Dependencies are current (patch/minor drift only). "Update to latest" = `npm update`.
- Pages: Home (hero, stats, projects, experience, skills, education, contact),
  Research. `About.jsx` is dead code (route redirects to `/`).
- SEO infrastructure: **none.** No sitemap.xml, no robots.txt, no canonical, no
  JSON-LD, no og:image (twitter:card declares `summary_large_image` with no image).
  Client-rendered only — Google fetches an empty `<div id="root">`; all routes
  share one title.
- Content: strong, specific metrics ($1M+ savings, 650% faster queries, GS Tech Lead).
- Visual: dark slate, blue/purple gradients, Inter, blur blobs, card grids.

## Workstreams

### 1. Dependency update (trivial)
- `npm update` to pull patch/minor versions. No breaking changes expected.

### 2. SEO foundation → decisions D8
### 3. Recruiter conversion → decisions D1, D2, D4, D5
### 4. Visual identity → decisions D6, D7

## Design decisions

### D1. Canonical title (resolves the 4-way inconsistency)

One truth, composed by context:
- Hero subtitle: **"Software Engineer at Goldman Sachs"**
- Hero badge: **"Tech Lead · 10-member team · Dallas, TX"** (replaces the
  "Leading AI Initiatives at CFOSS" badge — no internal jargon as first words)
- Timeline + JSON-LD `jobTitle`: **"Software Developer – Associate"** (exact ladder title)
- `<title>` / og:title / footer: **"Sajal Suhane — Software Engineer at Goldman Sachs"**

Files to touch: `Home.jsx:163,176`, `Footer.jsx:19`, `entry.html:10`, new JSON-LD.

### D2. Information architecture (approved: 2A — timeline as spine)

```
HOME (one page, 5 sections — down from 7)
┌──────────────────────────────────────────────────────────┐
│ 1. HERO        Name → title → ONE proof point → CTAs     │
│                Primary CTA: Download Resume (filled)      │
│                Secondary: View My Work (ghost)            │
│                Tertiary: ssuhane31@gmail.com as text +    │
│                copy button. Tech ticker: 12 tags → 6.     │
│ 2. IMPACT      4 stat numerals. $1M+ appears HERE ONLY.   │
│ 3. EXPERIENCE  Timeline = page spine. Project cards fold  │
│    (merged)    into their timeline entries as detail.     │
│                Education: one line under the timeline.    │
│ 4. SKILLS      Two-column list, no rainbow cards.         │
│ 5. CONTACT     Hiring-focused closer (see D5).            │
└──────────────────────────────────────────────────────────┘
RESEARCH        Unchanged structure; gets own meta (see D6).
NAV             Home · Research · Resume (+ visible email in footer)
```

Hierarchy rule: a recruiter scanning headlines only should learn
who/where/what-level/how-to-act. Each section has exactly one job; no metric
appears twice on the page.

Delete `src/pages/About.jsx` (dead code — route already redirects).

### D3. Interaction states

| Feature            | Loading                          | Empty/Fail                       | Success |
|--------------------|----------------------------------|----------------------------------|---------|
| Initial page load  | Inline critical CSS in entry.html `<head>`: `background:#020617`, font stack — no white flash. Static hero text (name + title) inside `#root` that React hydrates over. | `<noscript>` shows name, title, email, resume link | n/a |
| Below-fold sections| Content visible by default; motion is enhancement (`whileInView` must not gate visibility — no `opacity:0` without JS) | Page is fully readable with JS/Framer failed; printable | n/a |
| Profile photo      | Explicit width/height (no layout shift), `fetchpriority="high"` | Slate circle with "SS" initials on img error | n/a |
| Email contact      | Visible text `ssuhane31@gmail.com` + copy button | mailto kept as secondary only | "Copied ✓" state, 2s revert |
| Resume link        | Points at `/cv.pdf` (verified present, 147KB) | — | Opens in new tab |
| Deep links         | `404.html` SPA redirect (verified present) | — | — |
| Reduced motion     | Global `@media (prefers-reduced-motion: reduce)` + Framer `MotionConfig reducedMotion="user"` | — | — |

### D4. Recruiter journey storyboard

| Step | Recruiter does            | Should feel        | Plan support |
|------|---------------------------|--------------------|--------------|
| 1    | Googles "Sajal Suhane"    | Found him          | #1 result, rich snippet (D6) |
| 2    | Lands on hero (5s test)   | Credible, senior   | True title + Tech Lead badge + one $-figure |
| 3    | Scans down                | Momentum, proof    | Stats → timeline spine, zero repetition |
| 4    | Wants to act              | Frictionless       | Resume primary CTA, email visible top & bottom |
| 5    | Shares link with HM       | Looks professional | og:image renders a real card in Slack/LinkedIn |

### D5. Closer copy

Replace "Let's build something together" with hiring-focused copy:
heading **"Hiring for distributed systems or platform work?"**, one supporting
sentence, visible email + copy button, Resume button repeated, LinkedIn link.
Recruiters qualify candidates; they don't co-build.

### D6. Visual system (approved: 3A — full de-template)

**Remove** (the AI-template tells):
- `gradient-text` class everywhere (`Home.jsx:171,547`, `Navbar.jsx:38`, `Research.jsx:135`,
  `index.css:67–72`) — name renders solid white, existing `font-black` weight
- Decorative blur blobs (`Home.jsx:147–148`) and ambient photo glow (`Home.jsx:227`)
- `glow-hover` (`index.css:108–115`) — replace with `border-color` shift on hover only
- Rainbow per-card coding: project gradients/borders (`Home.jsx:20–48`) and skill
  `colorMap` (`Home.jsx:130–135`) collapse to one system (below)
- Gradient photo ring (`Home.jsx:230`) → 1px `slate-700` border

**Keep** (works for the fintech/infra identity):
- Dark slate palette, `grid-bg` at 3% opacity, mono tags for tech, the timeline styling

**Token system** (no DESIGN.md exists yet — this is the seed):
```
--bg:        #020617  (slate-950)      --text:      #e2e8f0  (slate-200)
--surface:   #0f172a  (slate-900)      --text-dim:  #94a3b8  (slate-400)
--border:    #334155  (slate-700)      --accent:    #3b82f6  (blue-500) — THE one accent
```
Rules: one accent color; color signals interactivity or "current", never decoration.
Typography: Inter stays for body (legibility > novelty for this audience); optional
single differentiator = a characterful grotesk for `h1/h2` display only.
Motion budget: 3 intentional motions — hero entrance (once), timeline-dot pulse on
current role, hover border-shift. Remove per-element staggered `whileInView` fades;
sections render visible.

### D7. Responsive & accessibility

- **Mobile (375px):** hero stacks photo-under-text (photo 160px, not 320px);
  floating badges hide below `sm`; stats 2×2 grid (already); timeline keeps
  left-rail at reduced 16px indent; nav stays as-is (already has mobile menu).
- **Tablet (768px):** single-column timeline, 2-col skills.
- **Touch targets:** all CTAs and the copy-email button ≥ 44px tall.
- **Contrast:** `slate-500` body text on `#020617` fails WCAG AA (3.9:1) — minimum
  body text color becomes `slate-400`; `slate-500` allowed for non-essential
  metadata ≥ 18px only.
- **Keyboard/SR:** skip-to-content link; `<main>`/`<nav>`/`<footer>` landmarks;
  copy-email button announces success via `aria-live="polite"`; timeline is an
  ordered list (`<ol>`) for screen readers.
- **Reduced motion:** per D3 (global media query + MotionConfig).

### D8. SEO foundation (approved: 4A build-step prerender + 5A GoatCounter)

1. **Prerender:** post-`vite build` step renders `/` and `/research` to static
   HTML (vite SSG entry or headless snapshot), React hydrates over it. Kills the
   empty-div problem and the white flash in one move.
2. **Per-route meta:**
   - `/` → title "Sajal Suhane — Software Engineer at Goldman Sachs",
     description leading with the $1M+ metric
   - `/research` → title "Research & Publications — Sajal Suhane", own description
   - `<link rel="canonical">` on both; `og:url` per route
3. **JSON-LD Person schema** (the highest-leverage single item):
   `name`, `jobTitle: "Software Developer – Associate"`, `worksFor: Goldman Sachs`,
   `alumniOf: [UT Dallas, SPPU]`, `email`, `sameAs: [LinkedIn, GitHub,
   Google Scholar, ResearchGate]` — the Scholar/ResearchGate URLs already exist
   in `Research.jsx:158,181`; they're exactly what feeds Google's entity graph.
4. **og:image:** static 1200×630 PNG — dark slate, name in white, title line,
   one metric ("$1M+ annual savings delivered"), photo at right. Lives at
   `/images/og.png`; referenced by `og:image` + `twitter:image` (fixes the
   currently-broken `summary_large_image` promise). Research can share it.
5. **sitemap.xml** (2 URLs + lastmod) and **robots.txt** (allow all + sitemap
   pointer) in `public/`.
6. **Analytics:** GoatCounter script + events: `resume-download`, `email-copy`.
7. **Submit:** Google Search Console verification + sitemap submission post-deploy
   (manual step, documented in README).

## NOT in scope (considered, deferred)

- **Ranking for generic queries** ("software engineer Dallas") — not winnable for
  a personal site; the plan optimizes name-based queries only.
- **Astro/Next migration (4C)** — ocean, not lake; 4A gets ~95% of the value.
- **Blog/content marketing** — the proven long-term SEO lever, but a content
  commitment, not a design decision. Revisit if name-query dominance isn't enough.
- **Custom domain** — sajalsuhane.github.io already encodes the name; a custom
  domain adds cost without clear ranking benefit for name queries.
- **Contact form** — visible email + copy button beats a form for this audience;
  no backend exists to receive submissions anyway.
- **Display typeface swap** — optional differentiator noted in D6; not blocking.

## What already exists (reuse, don't rebuild)

- Experience timeline component (`Home.jsx:397–443`) — becomes the page spine.
- Stat metrics, project content, Research page long-form blocks.
- Navbar with working mobile menu; Framer Motion patterns (to be budgeted per D6).
- `404.html` SPA redirect + `cv.pdf` (verified present).
- Scholar/ResearchGate links in `Research.jsx` → feed JSON-LD `sameAs`.

## Implementation order

1. D1 title truth + D8.2–5 meta/JSON-LD/sitemap/robots/og-image (trust + SEO core)
2. D8.1 prerender step + D3 hydration/critical-CSS states
3. D2 restructure (timeline spine, About.jsx deletion) + D5 closer
4. D6 de-template + D7 responsive/a11y
5. D8.6 analytics + D8.7 Search Console submission
6. `npm update` (workstream 1) rides along with the first PR

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | — | — |
| Codex Review | `/codex review` | Independent 2nd opinion | 0 | — (Codex not installed) | — |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 0 | — | — |
| Design Review | `/plan-design-review` | UI/UX gaps | 1 | CLEAN (FULL) | score: 2/10 → 9/10, 8 decisions |

- **OUTSIDE VOICE:** Claude subagent design review ran `[single-model]` — 2 hard
  rejections, 7-point litmus: 1 YES / 6 NO on the current site; all findings
  integrated into D1–D8.
- **UNRESOLVED:** 0
- **VERDICT:** DESIGN CLEARED — eng review required before implementation
  (`/plan-eng-review`).
