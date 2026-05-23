# Fikar e Fardan Foundation — Website

> Premium NGO + EdTech hybrid platform built with Next.js 14, TypeScript, Tailwind CSS & Framer Motion.

---

## 🚀 Quick Start (5 minutes)

```bash
# 1. Unzip and install
tar -xzf fikar-fardan-source.tar.gz
cd fikar-fardan
npm install

# 2. Add your API key
cp .env.example .env.local
# Edit .env.local → paste your ANTHROPIC_API_KEY

# 3. Run locally
npm run dev
# Open http://localhost:3000
```

---

## 📁 Folder Structure

```
fikar-fardan/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          ← AI Chat API endpoint
│   ├── globals.css               ← Global styles + animations
│   ├── layout.tsx                ← SEO metadata + Schema.org markup
│   └── page.tsx                  ← Main page (assembles all sections)
│
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx       ← Full-screen hero with particles
│   │   ├── StatsSection.tsx      ← Animated impact counters
│   │   ├── AboutSection.tsx      ← Mission + chairman quote
│   │   ├── ProgramsSection.tsx   ← 4 core programs
│   │   ├── CoursesSection.tsx    ← 8 free course cards
│   │   ├── DonationSection.tsx   ← 7 donation causes with amounts
│   │   ├── ChairmanSection.tsx   ← Full-width quote block
│   │   ├── CTASection.tsx        ← Final conversion section
│   │   └── Footer.tsx            ← Links + contact info
│   └── ui/
│       ├── Navbar.tsx            ← Sticky nav with mobile menu
│       ├── AnimatedCounter.tsx   ← Scroll-triggered number counter
│       ├── FadeSection.tsx       ← Intersection Observer fade-in
│       ├── AIChatWidget.tsx      ← Floating AI chat (calls /api/chat)
│       └── WhatsAppButton.tsx    ← Fixed WhatsApp FAB
│
├── data/
│   └── content.ts                ← All site content (CMS-ready JSON)
│
├── .env.example                  ← Copy → .env.local with real keys
├── vercel.json                   ← Vercel deployment config
└── README.md
```

---

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ANTHROPIC_API_KEY` | Get from [console.anthropic.com](https://console.anthropic.com) | ✅ Yes |
| `NEXT_PUBLIC_SITE_URL` | Your live domain | Optional |

---

## 🌐 Deploy to Vercel (Recommended)

### Option A — GitHub + Vercel (Best)
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "initial commit: Fikar e Fardan Foundation website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fikar-fardan.git
git push -u origin main

# 2. Go to vercel.com → "Add New Project" → import your repo
# 3. Add environment variable: ANTHROPIC_API_KEY = your_key
# 4. Click Deploy → done ✅
```

### Option B — Vercel CLI
```bash
npm install -g vercel
vercel
# Follow prompts → add ANTHROPIC_API_KEY when asked
```

---

## ⚙️ Customization Guide

### Update content (text, courses, stats):
→ Edit `data/content.ts` — all site copy is centralized here.

### Add a new donation cause:
```typescript
// data/content.ts → DONATION_CAUSES array
{ icon: "🕌", title: "Masjid Construction", desc: "...", amounts: [5000, 15000, 50000], color: "#2e7d32" }
```

### Update AI chat persona:
→ Edit `app/api/chat/route.ts` → modify `SYSTEM_PROMPT`

### Change colors:
→ Edit `app/globals.css` → `:root { --purple: ... }`

---

## 📱 Features

- ✅ Sticky navbar with blur effect + mobile hamburger
- ✅ Hero with animated floating particles
- ✅ Scroll-triggered animated stat counters
- ✅ About section with chairman quote
- ✅ 4 program cards with hover animations
- ✅ 8 free course cards with enrollment CTAs
- ✅ 7 donation causes with amount selectors + custom input
- ✅ AI chat widget (Fikar Assistant) powered by Anthropic API
- ✅ WhatsApp floating button
- ✅ Fully responsive (mobile-first)
- ✅ SEO optimized (meta tags, OpenGraph, Schema.org NGO markup)
- ✅ TypeScript throughout
- ✅ Zero build warnings

---

## 🛠 Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| Next.js | 16.x | Framework (App Router) |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility styles |
| Anthropic API | claude-3-5-haiku | AI chat |

---

*Built for Fikar e Fardan Foundation — Empowering Youth Through Skills, Opportunity & Impact 🇵🇰*
