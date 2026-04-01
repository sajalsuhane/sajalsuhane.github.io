# Portfolio — sajalsuhane.github.io

## Stack

- React 19 + Vite 7
- Tailwind CSS 4
- React Router 7
- Framer Motion 12

## Commands

```bash
npm run dev      # start dev server (opens src/entry.html)
npm run build    # build + copy dist files to repo root
npm run lint     # eslint
npm run preview  # preview built site
```

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
