# Gold Nexus — Site Skeleton (Next.js + Tailwind)

Production-ready **skeleton** for Netlify + GitHub with Next.js (App Router) and Tailwind.

## Quick start

```bash
npm i
npm run dev
```

## Deploy to Netlify
- Connect this repo to Netlify
- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs` (already in `netlify.toml`)

## Structure
- `app/` — pages & API routes
- `app/api/quotes/route.ts` — placeholder for live pricing
- `app/globals.css` — Tailwind base styles
- `public/logo.svg` — simple gold logo

## Env
Copy `.env.example` to `.env` (local) or Netlify env vars.

```
# Metals provider demo
METALS_API_URL=
METALS_API_KEY=
```

## What to build next
- Auth (NextAuth or custom)
- Orders (bars/coins), P2P old-gold marketplace
- Payment & escrow integrations
- External logistics/insurance providers
- Admin dashboard
```

