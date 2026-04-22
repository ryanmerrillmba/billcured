# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BillCured is a React + Vite e-commerce site selling PDF guides for medical bill negotiation ("Bill Cured Blueprint" and "Escalation Playbook"). Hosted on Cloudflare Pages with Stripe for payments, Resend for transactional emails, and Beehiiv for newsletter management.

## Commands

```bash
npm run dev        # Start development server (Vite)
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Run ESLint on src/
npm run lint:fix   # Auto-fix ESLint issues
npm run format     # Format code with Prettier
```

## Architecture

### Frontend (React SPA)
- **Entry:** `src/main.jsx` → `src/App.jsx`
- **Routing:** React Router v7 with routes defined in `App.jsx`. Blog and BlogPost pages are lazy-loaded via `React.lazy()` to reduce initial bundle size.
- **Components:** `src/components/` with barrel export via `index.js`
- **Pages:** `src/pages/` with barrel export via `index.js`
- **Static data:** `src/data/` contains JSON files (faq, testimonials, features). Blog posts are **not** imported — they are fetched at runtime.
- **Stripe client:** `src/utils/stripe.js` — exports `PRODUCTS` (with price IDs from env) and `redirectToCheckout(priceIds[])` which calls `/api/create-checkout` then redirects to Stripe.

### Blog Content
- **Data file:** `public/data/blog-posts.json` — served as a static file, fetched at runtime by Blog and BlogPost pages via `fetch('/data/blog-posts.json')`. Do not import it directly. Currently **56 posts** spanning June 2023–March 2026 across 11 categories.
- **Images:** `public/images/blog_*.jpg` — 1200×630px for OG/social sharing.
- **Adding posts:** Update `public/data/blog-posts.json` AND `public/sitemap.xml`.

Each post object schema:
```json
{
  "slug": "url-slug",
  "title": "Post Title",
  "excerpt": "Short summary (used in blog listing cards)",
  "metaDescription": "150–160 char SEO description",
  "date": "Month D, YYYY",
  "lastUpdated": "Month D, YYYY",
  "category": "Negotiation|Financial Assistance|Know Your Rights|How-To|...",
  "keyword": "primary keyword phrase",
  "contentType": "Ultimate Guide|Tips|How-To|...",
  "image": "/images/blog_filename.jpg",
  "content": [ /* blocks — see below */ ]
}
```

Content block types rendered by `BlogPost.jsx`:
- `{ "type": "heading", "text": "..." }` → `<h2>`
- `{ "type": "subheading", "text": "..." }` → `<h3>`
- `{ "type": "paragraph", "text": "..." }` → `<p>`
- `{ "type": "list", "items": ["..."] }` → `<ul>`
- `{ "type": "ordered-list", "items": ["..."] }` → `<ol>`
- `{ "type": "callout", "title": "...", "text": "..." }` → styled callout box
- `{ "type": "related-links", "links": [{ "slug": "...", "text": "..." }] }` → inline related articles

### Serverless Functions (Cloudflare Pages Functions)
Functions live in `functions/api/` and export named handlers: `onRequestPost`, `onRequestOptions`. Secrets are accessed via `context.env.SECRET_NAME` — **not** `process.env`.

- `create-checkout.js` — Creates Stripe checkout session; accepts `{ priceIds: string[] }`, returns `{ url }` for redirect.
- `webhook.js` — Verifies Stripe webhook signature, on `checkout.session.completed` sends download links via Resend.
- `subscribe.js` — Adds subscriber to Beehiiv, sends free guide PDF via Resend. Source tag passed as `utm_source`.

### Landing Pages
Routes under `/lp/*` are PPC landing pages. `App.jsx` detects `pathname.startsWith('/lp/')` and passes `minimal={true}` to `<Header>` (hides nav links) and suppresses `<Footer>`. Same page components as their non-lp counterparts.

### SEO Infrastructure
- **`SEO` component** — `react-helmet-async` for `<title>`, `<meta>`, Open Graph, Twitter Card, article metadata.
- **`StructuredData.jsx`** — Named exports for each JSON-LD schema type: `OrganizationSchema`, `ProductSchema`, `FAQPageSchema`, `ArticleSchema`, `BreadcrumbSchema`, `WebSiteSchema`. All injected via `<Helmet>`.
- **`Breadcrumbs` component** — Renders visual breadcrumbs and emits `BreadcrumbSchema`.
- **`public/robots.txt`**, **`public/sitemap.xml`** — Static; update sitemap manually when adding pages or posts.

### EmailSignup Component
`src/components/EmailSignup.jsx` — variants: `default`, `dark`, `compact`. Posts to `/api/subscribe` with `{ email, source }`. Fires `window.gtag('event', 'generate_lead')` on success if GA is present.

### Environment Variables
Frontend (VITE_ prefix, exposed to browser):
- `VITE_STRIPE_PUBLISHABLE_KEY`
- `VITE_STRIPE_BLUEPRINT_PRICE_ID`
- `VITE_STRIPE_ESCALATION_PRICE_ID`

Server-side (Cloudflare Pages secrets, accessed via `context.env`):
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `RESEND_API_KEY`
- `BEEHIIV_API_KEY`
- `BEEHIIV_PUBLICATION_ID`

## Code Style

- No semicolons, single quotes, 2-space indent, trailing commas (es5)
- ESLint with React hooks plugin; `react/prop-types` set to warn
- Components use default exports, organized with barrel files

## Design Reference

`stitch.md` is the authoritative design spec (color palette, typography, spacing, component specs, copy rules). Key constraints: no red anywhere (audience is stressed), no countdown timers, specific dollar amounts over vague adjectives, calm authority tone.
