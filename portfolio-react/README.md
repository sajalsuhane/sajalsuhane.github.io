# Sajal Suhane - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Showcasing professional experience, projects, and technical expertise in distributed systems and cloud computing.

## 🚀 Live Demo

Visit the live website: [https://sajalsuhane.github.io](https://sajalsuhane.github.io)

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Fast Performance**: Built with Vite for lightning-fast loading
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels

## 🛠️ Built With

- **React 19.2** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library
- **React Router 7** - Client-side routing
- **Heroicons** - Beautiful hand-crafted SVG icons

## 📁 Project Structure

```
portfolio-react/
├── public/
│   └── images/          # Project images and assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Research.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## 🏃‍♂️ Running Locally

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sajalsuhane/sajalsuhane.github.io.git
cd sajalsuhane.github.io/portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🚀 Deployment

### GitHub Pages Deployment

The project includes an automated deployment script:

```bash
chmod +x deploy-gh-pages.sh
./deploy-gh-pages.sh
```

Or manually:
```bash
npm run build
npx gh-pages -d dist -b gh-pages
```

### GitHub Pages Configuration

Make sure GitHub Pages is configured in your repository settings:
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Save

The site will be live at `https://[username].github.io`

## 📝 Customization

### Update Content

1. **Personal Information**: Edit `src/pages/Home.jsx`
2. **Experience**: Edit `src/pages/About.jsx`
3. **Projects**: Edit `src/pages/Research.jsx`
4. **Navigation**: Edit `src/components/Navbar.jsx`
5. **Footer**: Edit `src/components/Footer.jsx`

### Update Styling

- **Colors**: Modify `tailwind.config.js`
- **Global Styles**: Edit `src/index.css`
- **Component Styles**: Tailwind utility classes in JSX files

### Add Images

Place images in `public/images/` and reference them as `/images/[filename]`

## 🎨 Key Components

### Home Page
- Hero section with profile image
- Statistics showcase
- Skills overview
- Call-to-action sections

### About Page
- Professional summary
- Detailed work experience timeline
- Education background
- Certifications
- Publications

### Projects Page
- Featured projects with images
- Technology tags
- GitHub and paper links
- Technical skills overview

## 🔧 Technologies Showcased

- **Distributed Systems**: Microservices, event-driven architecture
- **Cloud Computing**: AWS, Kubernetes, Docker
- **Programming**: Java, Python, JavaScript
- **Data Engineering**: Apache Spark, Kafka
- **Machine Learning**: Predictive analytics, NLP

## 📊 Performance

- Lighthouse Score: 95+ across all metrics
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Optimized images and lazy loading
- Code splitting for faster loads

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 📬 Contact

- **Email**: ssuhane31@gmail.com
- **LinkedIn**: [sajalsuhane](https://linkedin.com/in/sajalsuhane)
- **GitHub**: [sajalsuhane](https://github.com/sajalsuhane)
- **Location**: Dallas, Texas

---

**Built with ❤️ by Sajal Suhane**

*Last Updated: February 2026*
