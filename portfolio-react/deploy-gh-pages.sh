#!/bin/bash

# GitHub Pages Deployment Script for Sajal Suhane's Portfolio

echo "🚀 Starting GitHub Pages deployment..."

# Update Vite config for GitHub Pages
echo "📝 Updating Vite configuration for GitHub Pages..."
sed -i 's|base: '/'|base: '/sajalsuhane.github.io/'|' vite.config.js

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to GitHub Pages
echo "🌍 Deploying to GitHub Pages..."
npx gh-pages -d dist

# Revert Vite config changes
echo "🔙 Reverting Vite configuration..."
sed -i 's|base: '/sajalsuhane.github.io/'|base: '/'|' vite.config.js

echo "✅ Deployment complete!"
echo "📍 Your portfolio will be available at: https://sajalsuhane.github.io"

# Clean up
echo "🧹 Cleaning up..."
rm -rf dist