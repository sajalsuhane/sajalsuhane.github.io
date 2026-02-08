#!/bin/bash

# GitHub Pages Deployment Script for Sajal Suhane's Portfolio

echo "🚀 Starting GitHub Pages deployment..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist directory not found."
    exit 1
fi

# Deploy to GitHub Pages (gh-pages branch)
echo "🌍 Deploying to GitHub Pages..."
npx gh-pages -d dist -b gh-pages

if [ $? -eq 0 ]; then
    echo "✅ Deployment complete!"
    echo "📍 Your portfolio will be available at: https://sajalsuhane.github.io"
    echo "⏳ It may take a few minutes for changes to appear."
else
    echo "❌ Deployment failed!"
    exit 1
fi

# Clean up is optional - keep dist for verification if needed
echo "🧹 Cleaning up..."
# Uncomment the next line if you want to remove the dist folder after deployment
# rm -rf dist

echo "✨ All done!"
