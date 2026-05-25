#!/bin/bash

# Quick deployment setup script for URL Shortener

echo "🚀 URL Shortener - Free Deployment Setup"
echo "=========================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

echo "📋 Step 1: Initialize Git Repository"
echo "====================================='"
git init
git add .
git commit -m "Initial commit: URL Shortener project"

echo ""
echo "✅ Git repository initialized!"
echo ""
echo "📋 Step 2: Create GitHub Repository"
echo "===================================="
echo "1. Go to https://github.com/new"
echo "2. Create a repository named 'url-shortener'"
echo "3. Copy the HTTPS URL from GitHub"
echo "4. Run this command:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/url-shortener.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "📋 Step 3: Setup MongoDB Atlas"
echo "==============================="
echo "1. Go to https://www.mongodb.com/cloud/atlas"
echo "2. Create free M0 cluster"
echo "3. Create database user 'urlshortener' with password"
echo "4. Whitelist your IP (or 0.0.0.0/0 for anywhere)"
echo "5. Copy connection string with your password"
echo ""
echo "📋 Step 4: Deploy Backend (Railway)"
echo "===================================="
echo "1. Go to https://railway.app"
echo "2. Sign up with GitHub"
echo "3. New Project → Deploy from GitHub → Select url-shortener"
echo "4. Add environment variables:"
echo "   - MONGO_URI: Your MongoDB Atlas connection string"
echo "   - APP_URL: Your Railway URL (shown after deployment)"
echo "   - JWT_SECRET: Any random secret string"
echo "   - NODE_ENV: production"
echo "   - FRONTEND_URL: Your Vercel URL (after next step)"
echo ""
echo "📋 Step 5: Deploy Frontend (Vercel)"
echo "==================================="
echo "1. Go to https://vercel.com"
echo "2. Import Project → Select url-shortener"
echo "3. Set Root Directory to 'FRONTEND'"
echo "4. Add environment variable:"
echo "   - VITE_API_URL: Your Railway backend URL"
echo "5. Deploy!"
echo ""
echo "✅ All set! Your app should be live soon!"
echo ""
echo "Need help? Check DEPLOYMENT_CHECKLIST.md in the root directory"
