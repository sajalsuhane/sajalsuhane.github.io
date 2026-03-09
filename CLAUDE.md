# CLAUDE.md — AI Assistant Guide for sajalsuhane.github.io

This file provides context and conventions for AI assistants (Claude Code, etc.) working on this repository.

## Project Overview

Personal portfolio website for Sajal Suhane, a distributed systems and cloud infrastructure engineer. Built as a React SPA deployed on GitHub Pages.

**Live site:** https://sajalsuhane.github.io

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 19 (JSX, ES modules) |
| Routing | React Router DOM 7 |
| Styling | Tailwind CSS 4 + custom CSS in `src/index.css` |
| Animations | Framer Motion 12 |
| Icons | Heroicons React 2 (24-outline set) |
| Build Tool | Vite 7 |
| Linting | ESLint 9 (flat config) |
| Deployment | GitHub Actions → GitHub Pages |

## Repository Structure

```
sajalsuhane.github.io/
├── .claude/
│   ├── settings.json          # Claude Code hooks config
│   └── hooks/
│       └── session-start.sh   # Runs on each Claude session start
├── .github/
│   └── workflows/
│       └── deploy.yml         # CI/CD: builds & deploys on push to master
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky nav, mobile hamburger menu, scroll effect
│   │   └── Footer.jsx         # Contact links, auto-updated copyright year
│   ├── pages/
│   │   ├── Home.jsx           # Hero, metrics, projects, experience, skills, education
│   │   ├── Research.jsx       # Publications, research profiles, major projects
│   │   └── About.jsx          # Currently unused (redirects to home)
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx                # Router setup + scroll-to-top on navigation
│   ├── main.jsx               # React entry point
│   ├── entry.html             # Vite HTML entry
│   ├── index.css              # Global styles, Tailwind imports, custom classes
│   └── App.css                # App-level styles
├── public/
│   ├── cv.pdf                 # Resume (served as static file)
│   ├── favicon.ico / .svg
│   ├── 404.html               # GitHub Pages SPA redirect handler
│   └── images/                # Portfolio images, credential screenshots
├── index.html                 # Built artifact (do not edit manually)
├── assets/                    # Built JS/CSS artifacts (do not edit manually)
├── images/                    # Copied image artifacts (do not edit manually)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── eslint.config.js
```

**Do not edit** the root-level `index.html`, `assets/`, or `images/` directories — they are generated build artifacts overwritten by `npm run build`.

## Development Workflow

### Setup

```bash
npm install
npm run dev        # Dev server at http://localhost:5173
```

### Build

```bash
npm run build      # Outputs to dist/, copies dist/src/entry.html → dist/index.html
npm run preview    # Preview built site locally
```

### Lint

```bash
npm run lint       # ESLint with flat config
```

### Deployment

Deployments are **fully automated** — push to `master` triggers GitHub Actions:

1. `npm ci` — clean install
2. `npm run build` — Vite build
3. Copies `dist/src/entry.html` → `dist/index.html`
4. Deploys `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`

**Never push built artifacts directly.** Let CI handle deployment.

## Design System & Conventions

### Color Palette

- **Background:** `bg-slate-950` (near-black)
- **Text:** `text-slate-200` (primary), `text-slate-400` (secondary), `text-slate-500` (muted)
- **Accent:** Blue — `text-blue-400`, `bg-blue-500`, `border-blue-500/20`
- **Cards:** `bg-slate-900`, `bg-slate-800/50`
- **Borders:** `border-slate-800`, `border-slate-700`

Custom colors in `tailwind.config.js` are strict black (`#000000`) and white (`#FFFFFF`). Do not add arbitrary colors — use the Tailwind slate palette.

### Typography

- **Primary font:** Inter (loaded from Google Fonts in `src/entry.html`)
- **Monospace:** Fira Code (for code/tags)
- **Gradient headings:** Use the `.gradient-text` class from `src/index.css`

### Custom CSS Classes (defined in `src/index.css`)

| Class | Purpose |
|-------|---------|
| `.glass` | Glassmorphism card effect (dark) |
| `.glass-light` | Glassmorphism card effect (lighter) |
| `.gradient-text` | Blue gradient for section headings |
| `.gradient-border` | Gradient border on elements |
| `.hero-gradient` | Radial gradient for hero background |
| `.grid-bg` | Subtle grid background pattern |
| `.glow-hover` | Blue glow on hover |
| `.skill-tag` | Pill-shaped skill badge |

### Animation Patterns

Use Framer Motion with consistent patterns:

```jsx
// Fade-up on scroll entry
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

- Always use `viewport={{ once: true }}` to avoid re-triggering animations on scroll back
- Stagger list items with `delay: index * 0.1`
- Keep durations between 0.3–0.6s

### Component Conventions

- All components are `.jsx` files using named exports
- Pages live in `src/pages/`, reusable components in `src/components/`
- Use Heroicons from `@heroicons/react/24/outline` for icons
- No TypeScript — plain JSX throughout
- No default props or PropTypes — keep it lean

### Routing

Defined in `App.jsx`:

```
/          → Home.jsx
/research  → Research.jsx
/about     → redirects to /
```

React Router `<Link>` for internal navigation, standard `<a>` for external links.

## Content Update Guidelines

### Updating Personal Info

All portfolio content is hardcoded directly in JSX (no CMS or data files). To update:

- **Experience / Skills / Education:** Edit `src/pages/Home.jsx`
- **Publications / Research Projects:** Edit `src/pages/Research.jsx`
- **Nav links / Footer links:** Edit `src/components/Navbar.jsx` and `src/components/Footer.jsx`
- **Resume:** Replace `public/cv.pdf`
- **Profile photo:** Update path in `Home.jsx` hero section (images served from `public/images/`)

### Adding a New Page

1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add nav link in `src/components/Navbar.jsx`

## Key Files for AI Assistants

When making changes, the most relevant files are:

| Task | Files to read/edit |
|------|--------------------|
| UI changes | `src/pages/Home.jsx`, `src/pages/Research.jsx` |
| Nav / footer | `src/components/Navbar.jsx`, `src/components/Footer.jsx` |
| Global styles | `src/index.css`, `tailwind.config.js` |
| Routing | `src/App.jsx` |
| Build config | `vite.config.js` |
| CI/CD | `.github/workflows/deploy.yml` |

## Branch Strategy

- `master` — production source code; triggers auto-deploy on push
- `gh-pages` — auto-generated built artifacts; never edit manually
- Feature branches — use `claude/<description>` naming convention (as configured in Claude Code settings)

## ESLint Configuration

Flat config format (`eslint.config.js`). Key rules:
- ES2020+ syntax
- JSX support enabled
- React Hooks rules enforced
- React Refresh rules enforced
- Uppercase variable names allowed (for React component names)
- `dist/` directory ignored

Run `npm run lint` before committing. Fix all lint errors; warnings are acceptable.

## Performance Notes

- Target: 90+ Lighthouse score
- Images in `public/images/` are served as-is — optimize before adding new ones
- Vite tree-shakes unused code automatically
- Framer Motion is chunked separately by Vite
- Tailwind purges unused styles at build time (scans `src/**/*.{js,ts,jsx,tsx}`)

## Claude Code Hooks

A `SessionStart` hook runs `.claude/hooks/session-start.sh` on each session. This installs npm dependencies to ensure the dev environment is ready.

The `.claude/settings.json` configures this hook — do not modify it unless changing the hook behavior intentionally.
