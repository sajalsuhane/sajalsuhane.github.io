# Sajal Suhane - Portfolio

**Live Site:** [sajalsuhane.github.io](https://sajalsuhane.github.io)

A modern, brutalist-inspired portfolio showcasing distributed systems expertise, research publications, and professional experience.

## 🎨 Design Philosophy

Inspired by **zachjordan.io**, this portfolio embraces a **brutalist-lite aesthetic**:

- **Typography-First:** Bold, high-contrast text takes center stage
- **Sharp Edges:** No rounded corners, clean borders
- **Stark Contrast:** Pure black/white with minimal grays
- **Reactive Animations:** Subtle Framer Motion interactions
- **Zero Gradients:** Solid colors only
- **Card-Based Layouts:** Simple borders with hover effects

## 🛠️ Tech Stack

### Core
- **React 19** - UI framework
- **Vite 7** - Build tool & dev server (fast!)
- **React Router** - Client-side routing
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion 12** - Animations

### Tools
- **Heroicons** - Icon library
- **Inter Font** - Typography
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## 📁 Project Structure

```
sajalsuhane.github.io/
├── index.html              # Vite entry point
├── src/
│   ├── components/         # Navbar, Footer
│   ├── pages/              # Home, About, Research
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/                 # Static assets (cv.pdf, favicons)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Development

### Prerequisites
- Node.js 18+ (preferably 22+)
- npm or yarn

### Setup

```bash
npm install
```

### Development Server

```bash
npm run dev
# Open http://localhost:5173
```

### Build & Deploy to GitHub Pages

```bash
npm run build
git add -A
git commit -m "chore: update portfolio"
git push origin master
```

**Note:** GitHub Pages serves from the root of the `master` branch. Vite builds directly to the root (`assets/`, `index.html`).

## 📝 Content Updates

### Update Professional Summary
Edit: `src/pages/About.jsx`

### Update Projects
Edit: `src/pages/Research.jsx`

### Update Hero/Homepage
Edit: `src/pages/Home.jsx`

### Update Contact Links
Edit: `src/components/Footer.jsx` and `Navbar.jsx`

### Update CV
Replace: `public/cv.pdf`

## 🎨 Styling Guidelines

### Colors
- **Primary:** `black` (#000000) / `white` (#FFFFFF)
- **Gray Scale:** Use Tailwind's built-in grays sparingly
- **No Gradients:** Stick to solid colors

### Typography
- **Headings:** `font-black` (900 weight), uppercase when needed
- **Body:** `font-normal` (400) or `font-medium` (500)
- **Code:** `font-mono` for technical content

### Borders
- Always use `border-4` or `border-2` for strong lines
- No `rounded-*` classes (keep sharp corners)

### Animations
- Use `<motion.*>` from Framer Motion
- Keep animations subtle and fast (0.2-0.6s)
- Prefer `opacity`, `y`, and `x` transforms

### Hover Effects
- Background color inversions (black ↔ white)
- Instant or quick transitions (200ms)

## 🌐 Deployment

The site is hosted on **GitHub Pages** and deploys automatically when you push to the `master` branch.

**Deployment Checklist:**
1. ✅ Build completes without errors
2. ✅ All assets in `public/` are copied
3. ✅ `cv.pdf` is up-to-date
4. ✅ `dist/` contents copied to root
5. ✅ Committed and pushed to `master`

**Live URL:** https://sajalsuhane.github.io

## 📊 Performance

- **Bundle Size:** ~390KB JS, ~3KB CSS (gzipped: ~120KB)
- **First Load:** <1s on broadband
- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices, SEO)

## 🔧 Maintenance

### Update Dependencies

```bash
npm update
npm audit fix
```

### Rebuild from Scratch

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Restore Old Site
The original HTML site is backed up in `backup/`. To restore:

```bash
cp backup/*.html .
cp -r backup/assets .
```

## 📚 Key Features

- ✅ Fully responsive (mobile-first)
- ✅ Dark mode support (system preference)
- ✅ Fast page transitions (React Router)
- ✅ SEO optimized (meta tags, Open Graph)
- ✅ Accessible (ARIA labels, keyboard navigation)
- ✅ Zero JavaScript on initial load (static site)
- ✅ PDF CV download
- ✅ External publication links

## 🎯 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Project case studies with detailed breakdowns
- [ ] Testimonials/recommendations
- [ ] Contact form with email integration
- [ ] Analytics (Google Analytics or Plausible)
- [ ] RSS feed for blog posts
- [ ] Sitemap generation

## 📄 License

All rights reserved © 2026 Sajal Suhane

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
