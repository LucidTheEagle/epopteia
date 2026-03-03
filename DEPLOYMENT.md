# Deployment Guide

**Epopteia deployment instructions.**

---

## Pre-Deployment Checklist

- [ ] Replace all `#` Cal.com placeholders in Navigation.tsx, FinalCTA.tsx, msa/page.tsx
- [ ] Update canonical URL in layout.tsx → `https://epopteia.io`
- [ ] Update OG image URL in layout.tsx → `https://epopteia.io/og.png`
- [ ] Create OG image 1200×630 → `public/og.png`
- [ ] Update favicon on logo launch
- [ ] `npm run build` locally — must succeed before pushing

---

## Vercel Settings

| Setting | Value |
|---|---|
| Framework | Next.js (auto-detected) |
| Build Command | `npm run build` |
| Node Version | 20.x |

No environment variables required.

---

## Custom Domain DNS

Root (`epopteia.io`): `A @ 76.76.21.21`
WWW: `CNAME www cname.vercel-dns.com`

SSL auto-provisioned by Vercel.

---

## Post-Deployment

- [ ] All sections render and animate
- [ ] Navigation scrolls to correct sections
- [ ] Legal pages load: /privacy /terms /msa
- [ ] System links open: PRISM, NexOps, Ascent Ledger
- [ ] Mobile responsive
- [ ] Lighthouse 90+ all metrics
- [ ] DevTools Console — zero errors

---

Contact: hello@epopteia.io · **The fog has a solution.**