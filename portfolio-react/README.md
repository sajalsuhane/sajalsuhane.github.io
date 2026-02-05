# 🚀 Sajal Suhane - React Portfolio

## 📋 Overview

This is the enhanced React.js version of Sajal Suhane's professional portfolio website. The portfolio showcases expertise in distributed systems, research publications, and professional experience.

## 🎯 Features

### ✨ Key Enhancements
- **React.js Architecture**: Component-based, reactive design
- **Tailwind CSS**: Modern, responsive styling
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Seamless navigation
- **GitHub Pages Ready**: Optimized for deployment

### 📁 Project Structure

```
portfolio-react/
├── public/                  # Static assets
│   ├── images/             # Portfolio images
│   └── favicon.ico         # Favicon
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   └── Footer.jsx      # Footer component
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home page
│   │   ├── About.jsx       # About page with timeline
│   │   └── Research.jsx    # Research publications
│   ├── App.jsx             # Main application
│   └── main.jsx            # Entry point
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite build configuration
└── package.json            # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/sajalsuhane/sajalsuhane.github.io.git
cd sajalsuhane.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development

```bash
# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌍 Deployment

### GitHub Pages Deployment

The portfolio is configured for easy GitHub Pages deployment:

```bash
# Run the deployment script
./deploy-gh-pages.sh
```

Or manually:

```bash
# Update Vite config for GitHub Pages
sed -i 's|base: '/'|base: '/sajalsuhane.github.io/'|' vite.config.js

# Build and deploy
npm run deploy

# Revert config changes
sed -i 's|base: '/sajalsuhane.github.io/'|base: '/'|' vite.config.js
```

### Deployment Notes
- The site will be available at: https://sajalsuhane.github.io
- GitHub Pages uses the `gh-pages` branch
- Production builds are optimized for performance

## 🛠️ Customization

### Update Content
1. **Home Page**: Edit `src/pages/Home.jsx`
2. **About Page**: Edit `src/pages/About.jsx` (includes timeline)
3. **Research Page**: Edit `src/pages/Research.jsx` (publications and projects)
4. **Navigation**: Edit `src/components/Navbar.jsx`
5. **Footer**: Edit `src/components/Footer.jsx`

### Add New Pages
1. Create a new component in `src/pages/`
2. Add route to `src/App.jsx`
3. Add navigation link to `src/components/Navbar.jsx`

### Styling
- Tailwind CSS classes are used throughout
- Customize colors in `tailwind.config.js`
- Add new animations using Framer Motion

## 🎨 Design Features

### Animations
- Page transitions with Framer Motion
- Hover effects on buttons and cards
- Smooth scrolling and navigation
- Interactive elements with scale and opacity effects

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interactive elements
- Optimized for all screen sizes

### Color Scheme
- Primary: Blue (#3b82f6)
- Dark mode: Gray (#1f2937)
- Light mode: White (#ffffff)
- Accents: Gradient blues for visual appeal

## 📊 Performance

### Optimizations
- Code splitting for faster loading
- Image optimization
- Production build minification
- Lazy loading support
- Efficient state management

### Build Output
- Minified JavaScript and CSS
- Optimized assets
- Tree-shaking for unused code removal
- Gzip compression ready

## 🔧 Technical Stack

### Core Technologies
- **React.js** - Component-based UI
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **React Router** - Navigation

### Development Tools
- **ESLint** - Code quality
- **PostCSS** - CSS processing
- **GitHub Pages** - Hosting
- **npm** - Package management

## 📋 Timeline Data

The professional timeline includes:
- **2021-Present**: Senior Software Engineer at Goldman Sachs
- **2020-2021**: Software Engineer at Digitate (TCS)
- **2019-2020**: Research Assistant at UT Dallas
- **2018-2019**: Software Engineering Intern at TCS
- **2016-2018**: Undergraduate Studies at University of Mumbai

Each timeline entry includes:
- Position and company details
- Duration and location
- Key responsibilities
- Major achievements

## 📚 Research Publications

### Published Papers
1. **Real-time Predictive Analytics for Industrial Robots**
   - Journal: International Journal of Engineering and Advanced Technology (IJEAT)
   - Year: 2020
   - Focus: Distributed machine learning for predictive maintenance

2. **Distributed Algorithms for Biomedical Sensor Networks**
   - Institution: University of Texas at Dallas
   - Year: 2019-2020
   - Focus: IoT sensor networks and real-time data processing

### Research Projects
- Cloud Migration Framework for Financial Systems
- Autonomous Remediation Systems for IT Operations
- Real-time Data Pipeline Optimization

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature`
3. **Commit changes**: `git commit -m 'Add some feature'`
4. **Push to branch**: `git push origin feature/your-feature`
5. **Open a Pull Request**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

For questions or collaboration opportunities:
- **LinkedIn**: https://linkedin.com/in/sajalsuhane
- **GitHub**: https://github.com/sajalsuhane
- **Twitter**: https://twitter.com/SajalSuhane1998

## 🎉 Acknowledgements

- React.js and Vite communities
- Tailwind CSS team
- Framer Motion contributors
- All open source contributors

---

**Built with ❤️ using React.js and Tailwind CSS**

© 2026 Sajal Suhane. All rights reserved.