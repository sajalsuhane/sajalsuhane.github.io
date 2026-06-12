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

### Enable gstack visual mockups

**What:** Install bun (`curl -fsSL https://bun.sh/install`), run `./setup` in `.claude/skills/gstack/`, and configure an OpenAI API key.

**Why:** The 2026-06-10 design review ran text-only; the design binary generates real visual mockups for /design-shotgun and /design-review. Bun absence also breaks gstack helper scripts (e.g. gstack-review-log validates JSON via bun).

**Context:** The vendored gstack was upgraded to v1.57.9.0 but its compiled binaries (browse, design) could not be built without bun. The uncommitted upgrade in `.claude/skills/gstack/` should be committed on its own branch alongside this setup (consider migrating to team mode at the same time — vendoring is deprecated).

**Effort:** S
**Priority:** P3
**Depends on:** OpenAI account

## Completed
