# TODOS

## Design

### Create DESIGN.md via /design-consultation

**What:** Promote the token seed in PLAN.md §D6 (6 tokens, motion budget, one-accent rule) into a full design system with typography scale and spacing rules.

**Why:** No design source-of-truth exists; future edits will drift without one.

**Context:** The 2026-06-10 /plan-design-review scored Design System Alignment 7/10 because only a 6-token seed exists. PLAN.md §D6 documents the approved tokens and rules — start there. Do after the portfolio refresh ships.

**Effort:** S
**Priority:** P3
**Depends on:** None

## Tooling

### Configure OpenAI API key for gstack design mockups

**What:** Add an OpenAI API key so the gstack design binary can generate visual mockups for /design-shotgun and /design-review.

**Why:** Browse (screenshots) now works; mockup generation is the last missing gstack capability.

**Context:** bun was installed and gstack binaries built during the 2026-06-12 design review (the rest of the original TODO). Only the API key remains.

**Effort:** S
**Priority:** P4
**Depends on:** OpenAI account

## Completed

### Enable gstack visual mockups (bun + browse build)

**What:** Install bun, build gstack browse/design binaries, commit the v1.57.9.0 vendored upgrade.

**Completed:** v1.0.1.0 (2026-06-12) — bun 1.3.14 installed, browse binary built and used for the live design audit, gstack upgrade merged to master. Remaining OpenAI-key portion split into its own TODO above.
