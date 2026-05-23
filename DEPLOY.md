# Deploy to Vercel in 60 Seconds

## Option A — Vercel Dashboard (Easiest, No Terminal)

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select: tahamohsin42-dotcom/fikar-fardan
4. Add Environment Variable (optional):
   - Name:  ANTHROPIC_API_KEY
   - Value: your key from console.anthropic.com
   - NOTE: If skipped, AI chat still works in DEMO mode automatically
5. Click Deploy
6. Live at: https://fikar-fardan.vercel.app

## Option B — Vercel CLI

  npm install -g vercel
  vercel --prod

## Build Settings (auto-detected by Vercel)

  Framework:     Next.js
  Build Command: npm run build
  Output Dir:    .next
  Node Version:  20.x

## Environment Variables

  ANTHROPIC_API_KEY   optional  AI chat uses demo mode if not set
  NEXT_PUBLIC_SITE_URL optional  defaults to vercel domain
