# RouleurCo — Vercel Deployment Playbook

Live WP site is currently at `rouleurco.com`. This playbook deploys the Next.js rebuild to Vercel first (on a preview URL), verifies, then swaps DNS — with a rollback path back to WordPress at every step.

---

## 0. Pre-flight checklist

Before you start, confirm you have:

- [ ] A Vercel account ([vercel.com](https://vercel.com)) — Pro tier recommended for custom domain + analytics
- [ ] Access to the DNS for `rouleurco.com` (current registrar / WP host control panel)
- [ ] The real GHL webhook URL for the Register Interest form
- [ ] A branded social-share image (`rouleurco-social-share.png`, 1200×630) — drop into `public/` before deploy
- [ ] A real favicon — replace `app/favicon.ico` (currently the default Next.js one)
- [ ] A Google Search Console account verified for `rouleurco.com`

---

## 1. First-time Vercel setup

### Option A — Vercel CLI (recommended for first deploy)

```powershell
cd "C:\Users\daniel\RouleurCo Website\rouleurco-next"
npm install -g vercel
vercel login
vercel link        # creates .vercel/project.json — answer the prompts (new project, name "rouleurco")
```

### Option B — Git push (recommended for ongoing deploys)

1. Initialise a repo (skip if already done):
   ```powershell
   cd "C:\Users\daniel\RouleurCo Website\rouleurco-next"
   git init
   git add .
   git commit -m "Initial Next.js rebuild"
   ```
2. Create a private repo on GitHub (e.g. `rouleurco/rouleurco-next`)
3. Push:
   ```powershell
   git remote add origin git@github.com:rouleurco/rouleurco-next.git
   git push -u origin main
   ```
4. Vercel dashboard → New Project → Import the repo. Vercel auto-detects Next.js.

---

## 2. Environment variables

In the Vercel dashboard: **Project → Settings → Environment Variables**

| Variable | Value | Environments |
|---|---|---|
| `NEXT_PUBLIC_GHL_WEBHOOK_URL` | The real GHL webhook URL for the `/register-interest` form | Production, Preview, Development |
| `SITE_URL` | `https://rouleurco.com` | Production |
| `SITE_URL` | `https://preview.rouleurco.com` (or leave unset) | Preview |

The `NEXT_PUBLIC_` prefix is required — without it the form will throw "GHL webhook URL not configured".

`SITE_URL` controls the canonical URLs in `sitemap.xml` and `robots.txt`. Without it, the sitemap generator defaults to `https://rouleurco.com`.

---

## 3. First deploy to a preview URL

```powershell
vercel              # preview deploy — gives you a *.vercel.app URL
```

Or via git: push to a non-`main` branch — Vercel auto-deploys a preview.

**Verify on the preview URL:**

- [ ] Homepage renders, hero pipeline mock visible
- [ ] Click through nav: Lead Generation, How It Works, Features (hover dropdown), Pricing, Compare, About
- [ ] `/contact` — confirm the GHL iframe loads (sees `api.rouleurco.com/widget/form/z32IZHrmlAUbbSA7f8To`)
- [ ] `/register-interest` — submit a test enquiry. Should land in your GHL workflow.
- [ ] `/sitemap.xml` returns XML with all 23 pages (some excluded: `/thank-you`, `/404`)
- [ ] `/robots.txt` returns the right policy and sitemap reference
- [ ] Mobile: resize to ~375px, check hamburger drawer + every hero
- [ ] Open browser DevTools → Network → reload → confirm response headers include `X-Frame-Options: SAMEORIGIN`, `Strict-Transport-Security`, `Referrer-Policy`
- [ ] DevTools → Lighthouse: aim for 90+ on Performance, 95+ on SEO

If anything fails: fix locally, commit, re-deploy. The preview URL stays live.

---

## 4. Production deploy (still on preview URL — no DNS change yet)

```powershell
vercel --prod
```

Or push to `main` — Vercel auto-deploys production builds.

Vercel assigns a production `*.vercel.app` URL (e.g. `rouleurco.vercel.app`). The site is live, just not on your domain yet.

---

## 5. DNS cutover plan — WP is currently live on rouleurco.com

This is the riskiest step. Plan a low-traffic window (early morning UK is usually safest).

### Step 5.1 — TTL prep (do this 24 hours before cutover)

In your DNS panel, drop the TTL on your `rouleurco.com` A / CNAME records to **300 seconds (5 minutes)**. This means when you swap them in step 5.3, the change propagates fast — and rollback is fast too.

### Step 5.2 — Add the domain in Vercel

Vercel dashboard → Project → Settings → Domains → **Add `rouleurco.com` + `www.rouleurco.com`**.

Vercel will show you the DNS records to point. You'll see one of two options:

- **A record** for the apex: `76.76.21.21`
- **CNAME** for `www`: `cname.vercel-dns.com`

Vercel will say the domain is "Invalid Configuration" until DNS points correctly. That's expected — you haven't swapped yet.

### Step 5.3 — DNS swap

In your DNS panel:

1. **Change the A record** for `rouleurco.com` (apex) from the WP host IP to `76.76.21.21`
2. **Change the CNAME** for `www.rouleurco.com` from the WP host to `cname.vercel-dns.com`
3. Keep MX records (email) unchanged — they're independent

DNS will propagate over 5–60 minutes depending on TTL. Vercel auto-issues a Let's Encrypt SSL certificate within minutes of the change.

### Step 5.4 — Verify the swap

Once Vercel shows "Valid Configuration":

- [ ] Visit `https://rouleurco.com` — should be the new Next.js site
- [ ] Visit `https://www.rouleurco.com` — should redirect to apex
- [ ] HTTPS works (no cert warnings)
- [ ] All 23 pages render
- [ ] `/register-interest` form submits successfully

### Step 5.5 — Rollback plan (if anything breaks)

If you see errors on the live site:

1. In your DNS panel, revert the A record from `76.76.21.21` back to the old WP host IP
2. Revert the CNAME back too
3. Because TTL is 5 minutes, WP comes back fast
4. Diagnose on the Vercel preview URL, fix, retry

Do not cancel the WP host yet — keep it warm for **at least 48 hours** as the rollback target.

---

## 6. Post-cutover (within 24 hours of going live)

- [ ] Submit `https://rouleurco.com/sitemap.xml` to **Google Search Console** (Sitemaps → Add new sitemap)
- [ ] Submit to **Bing Webmaster Tools** if you use it
- [ ] Verify in Vercel dashboard → **Analytics** that page-views are being recorded
- [ ] Verify in Vercel dashboard → **Speed Insights** that Core Web Vitals are being recorded (data appears after ~24 hours)
- [ ] Test the Register Interest form end-to-end — submit a real-looking enquiry, confirm it arrives in your GHL workflow
- [ ] Test the Contact form — confirm the GHL iframe still submits
- [ ] Spot-check on real iOS Safari + Android Chrome (not just desktop DevTools)
- [ ] If you have an existing Google Ads account pointing at rouleurco.com — verify landing pages still match ad copy

---

## 7. After 48 hours of stability

- [ ] Cancel WordPress hosting subscription (or downgrade to a backup tier)
- [ ] Push TTL back up to 3600 (1 hour) — only do this once you're confident the new site is stable
- [ ] Take a snapshot of the WP install before cancelling, just in case (zip the WP files + export DB)

---

## 8. Ongoing — deploys after cutover

Once set up, deploys are trivial:

```powershell
git add .
git commit -m "Update homepage copy"
git push                # Vercel auto-deploys main as production
```

Or:

```powershell
vercel --prod           # CLI deploy
```

**Recommendation**: use git-based deploys with **preview environments enabled**. Every PR gets its own preview URL — you review it before merging to `main`.

---

## Things to check before going to production

- [ ] `app/favicon.ico` — replace the default Next.js favicon with your actual brand favicon
- [ ] `public/rouleurco-social-share.png` — drop the real 1200×630 OG share image in here
- [ ] `components/layout/Logo.tsx` — currently shows a blue "RC" tile + "RouleurCo" wordmark. If you have a proper SVG logo, replace this component
- [ ] Footer copyright year — auto-renders the current year, no action needed
- [ ] Verify the GHL webhook URL works in a local `.env.local` first before relying on it in Vercel

---

## Troubleshooting

**"NEXT_PUBLIC_GHL_WEBHOOK_URL is not defined"** — env var not set in Vercel, or set without the `NEXT_PUBLIC_` prefix. Add it, redeploy.

**Sitemap not generating** — make sure `postbuild` script ran. Check Vercel build logs. The `next-sitemap` package should run after `next build` automatically.

**Security headers not applied** — Vercel does respect `next.config.mjs` headers. Verify in the Vercel dashboard → Deployments → [deployment] → Functions → Headers. If missing, redeploy.

**GHL iframe not loading on /contact** — check browser console for CSP or CORS errors. We don't ship a CSP, so this should just work. If it doesn't, the issue is upstream at GHL.

**Domain shows "Invalid Configuration" in Vercel forever** — DNS hasn't propagated yet, or the records point at the wrong target. Use `dig rouleurco.com` or [dnschecker.org](https://dnschecker.org) to verify what nameservers are returning.

---

## What's already in place in the codebase

- `next.config.mjs` — security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- `next-sitemap.config.js` — sitemap + robots.txt generation with per-URL priority (flagship pages = 1.0, feature pages = 0.7, legal = 0.3)
- `package.json` — `postbuild` script wires up sitemap generation after every `next build`
- `app/layout.tsx` — Vercel Analytics + Speed Insights mounted (auto-enabled when deployed to Vercel)
- `.env.local.example` — template for the GHL webhook env var
- `lib/metadata.ts` — canonical URLs, OG tags, Twitter cards on every page
- 13 JSON-LD schema blocks across Organization, SoftwareApplication, FAQPage, HowTo

---

## Quick reference

| Resource | URL |
|---|---|
| Production (after cutover) | https://rouleurco.com |
| Sitemap | https://rouleurco.com/sitemap.xml |
| Robots | https://rouleurco.com/robots.txt |
| GHL form embed source | https://api.rouleurco.com/widget/form/z32IZHrmlAUbbSA7f8To |
| GHL form embed script | https://api.rouleurco.com/js/form_embed.js |
| Vercel project | (your-team).vercel.app/rouleurco-next |
| Google Search Console | https://search.google.com/search-console |
