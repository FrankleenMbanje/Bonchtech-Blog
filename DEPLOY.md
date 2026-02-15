# BONCH_OS Deployment Guide

Your site is fully built, styled, and content-filled.

## 🚀 One-Step Deployment

Run the included script in your terminal to deploy to Vercel:

```powershell
./deploy.ps1
```

## Manual Deployment (Alternative)

If you prefer determining the steps yourself:

1. **Deploy to Vercel:**
   ```bash
   npx vercel --prod
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/bonchtech-blog.git
   git branch -M main
   git push -u origin main
   ```

## Features Included
- 10 AI Blog Posts with real images
- Light/Dark Mode Toggle
- Fully Responsive Navigation
- "Solutions" Landing Page
- "Self-Healing" AI Badge (Demo Mode)
