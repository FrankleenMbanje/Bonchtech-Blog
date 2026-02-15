Write-Host "🚀 Starting Deployment Process..." -ForegroundColor Cyan

# 1. Check for Vercel CLI
if (!(Get-Command "vercel" -ErrorAction SilentlyContinue)) {
    Write-Host "Installing Vercel CLI..."
    npm install -g vercel
}

# 2. Login to Vercel (Interactive)
Write-Host "`n🔑 Please log in to Vercel in the browser window that opens..." -ForegroundColor Yellow
npx vercel login

# 3. Link Project
Write-Host "`n🔗 Linking project..."
npx vercel link --yes

# 4. Deploy to Production
Write-Host "`n🚀 Deploying to Production..." -ForegroundColor Green
npx vercel --prod

Write-Host "`n✅ Deployment Complete! Your site is live." -ForegroundColor Cyan
