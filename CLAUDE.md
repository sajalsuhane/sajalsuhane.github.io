# Portfolio — sajalsuhane.github.io

## Stack

- React 19 + Vite 7
- Tailwind CSS 4
- React Router 7 (import from `react-router`, not `react-router-dom`)

## Commands

```bash
npm run dev      # start dev server (opens src/entry.html)
npm run build    # build + prerender + copy dist files to repo root
npm test         # vitest suite (prerender smoke, components, routes)
npm run lint     # eslint
npm run preview  # preview built site
```

## Deployment

GitHub Pages serves the **master branch root** (legacy mode). `npm run build`
prerenders `/` and `/research` to static HTML and copies everything to the repo
root — committing those artifacts IS the deploy. The GitHub Action only verifies
the build; it does not publish.

## Testing

See TESTING.md. Run `npm test` before every commit.

- 100% test coverage is the goal — tests make vibe coding safe
- New function → corresponding test; bug fix → regression test
- New conditional → tests for BOTH paths; new error handling → test that triggers it
- Never commit code that makes existing tests fail

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
