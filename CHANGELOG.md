# Changelog

All notable changes to sajalsuhane.github.io. Versions use the 4-digit
`MAJOR.MINOR.PATCH.MICRO` format.

## [1.0.1.0] - 2026-06-12

Design polish from the live-site design review: the site keeps its quiet,
senior tone but gains a signature.

### Changed

- **The name is now the hero.** "Sajal Suhane" renders in Space Grotesk at up
  to 128px — a real typographic anchor instead of a heading floating in dark
  space. Space Grotesk also carries section headings and the impact numerals;
  Inter stays for body text.
- **Impact stats read as an editorial strip** — borderless numerals with
  hairline rules instead of four boxed cards.
- **Sections alternate surface tones**, giving the page scroll rhythm instead
  of one undifferentiated dark column.
- **Section headings rise subtly as you scroll** (transform-only, so content
  stays visible in print, screenshots, and search-engine renders; respects
  reduced-motion).

### Fixed

- Desktop nav links now meet the 44px touch-target floor.

## [1.0.0.0] - 2026-06-11

Portfolio refresh: the site now ranks properly for name searches, unfurls as a
real card when shared, and converts recruiters instead of just looking busy.

### Added

- **Real HTML for search engines.** Both pages are prerendered to static HTML at
  build time — Google (and anyone on slow wifi) gets full content instead of an
  empty JavaScript shell. Each route has its own title, description, and
  canonical URL.
- **Rich link previews.** Sharing the site in Slack/LinkedIn/Twitter now renders
  a proper 1200×630 card with name, title, and the $1M+ metric (the old site
  declared a preview image that didn't exist).
- **Google entity data.** JSON-LD Person schema (job title, employer, alma
  maters, LinkedIn/GitHub/Scholar/ResearchGate profiles) plus sitemap.xml and
  robots.txt.
- **Visible, copyable contact.** The email address is readable text with a
  copy button (with a "Copied ✓" confirmation) — no more dead-end mailto-only
  contact on machines without a mail client.
- **Privacy-light analytics.** GoatCounter (cookie-less) with resume-download
  and email-copy events, so conversion is measurable.
- **Test suite.** 19 vitest tests guard the prerender pipeline, routing,
  analytics events, and interactive states; CI runs them on every push.

### Changed

- **One true title everywhere.** "Software Engineer at Goldman Sachs" in the
  hero, footer, page title, and link previews; the exact ladder title lives in
  the experience timeline and structured data. The hero badge now reads
  "Tech Lead · 10-member team · Dallas, TX" instead of internal jargon.
- **Resume is the primary button.** Download Resume is the filled CTA;
  View My Work is secondary; the email sits right under both.
- **The experience timeline is the page spine.** Project details fold into
  their roles, education is one line, and no metric repeats — the page went
  from 7 sections to 5.
- **Quieter, senior visual language.** Gradient name text, blur blobs, glow
  hovers, rainbow card colors, and the gradient photo ring are gone; one blue
  accent on dark slate. Content renders without JavaScript and respects
  reduced-motion preferences.
- **Faster first paint.** Hero photo cut from 1.38MB to 132KB, fonts load
  without blocking render, and the JS bundle dropped ~33% (framer-motion
  removed; animations are now CSS).

### Fixed

- Deep links to /research no longer depend on a JavaScript redirect hack —
  it's a real page.
- The deploy workflow published to a branch GitHub Pages never served (and
  overwrote the prerendered homepage); it's now a build-verification check.
- robots.txt and sitemap.xml actually deploy (they previously never left the
  build directory). Jekyll preprocessing disabled via .nojekyll.
- WCAG AA contrast floor for body text; 44px touch targets; skip-to-content
  link and proper landmarks.

### Removed

- Dead About page (the route redirected for months), stale hashed bundles
  accumulated by previous builds, and the unused framer-motion and gh-pages
  dependencies.
