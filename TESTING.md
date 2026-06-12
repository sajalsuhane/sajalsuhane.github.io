# Testing

100% test coverage is the key to great vibe coding. Tests let you move fast,
trust your instincts, and ship with confidence — without them, vibe coding is
just yolo coding. With tests, it's a superpower.

## Framework

- **vitest** (jsdom environment) + **@testing-library/react**
- Config: `vitest.config.js`, setup in `test/setup.js`

## Running tests

```bash
npm test          # full suite, CI mode (vitest run)
npx vitest        # watch mode for development
```

CI runs `npm test` on every push/PR via `.github/workflows/deploy.yml`.

## Test layers

- **Prerender smoke tests** (`test/prerender.test.jsx`) — render the actual SSR
  entry for `/` and `/research` and assert real content is present. These guard
  the SEO pipeline: if they fail, the build would ship empty HTML to Google.
- **Component tests** (`test/copy-email-button.test.jsx`) — behavior of
  interactive components: clipboard, analytics events, state reverts, failure paths.
- **Route tests** (`test/routes.test.jsx`) — each route renders its page,
  unknown paths redirect home, exactly one `<main>` landmark exists.

## Conventions

- Test files live in `test/` named `<subject>.test.jsx`.
- Test what the code DOES — meaningful assertions on visible behavior, never
  `expect(x).toBeDefined()`.
- jsdom's `navigator.clipboard` is getter-only: stub with
  `Object.defineProperty(..., { configurable: true })` and use `fireEvent`
  (not `userEvent`, which installs its own clipboard stub).
- Import router pieces from `react-router` (not `react-router-dom`) — mixing
  the two creates duplicate context instances under vitest.
