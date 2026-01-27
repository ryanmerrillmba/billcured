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
- **Routing:** React Router v7 with routes defined in `App.jsx`
- **Components:** `src/components/` with barrel export via `index.js`
- **Pages:** `src/pages/` with barrel export via `index.js`
- **Static data:** `src/data/` contains JSON files (faq, testimonials, features, blog-posts)
- **Blog content:** 34 SEO-optimized posts in `src/data/blog-posts.json` covering negotiation, financial assistance, patient rights, and medical debt topics
- **Blog images:** Featured images in `public/images/blog_*.jpg` (1200x630px for OG/social sharing)
- **Stripe client:** `src/utils/stripe.js` handles checkout redirect
- **ScrollToTop:** `src/components/ScrollToTop.jsx` - Scrolls to top on route navigation

### Serverless Functions (Cloudflare Pages Functions)
- `functions/api/create-checkout.js` - Creates Stripe checkout sessions
- `functions/api/webhook.js` - Handles Stripe webhooks, sends order confirmation emails via Resend
- `functions/api/subscribe.js` - Handles email subscriptions via Beehiiv API, sends lead magnet via Resend

### Lead Generation
- **EmailSignup component:** Reusable email capture form with variants (default, dark, compact)
- **Homepage hero:** Leads with free guide ("The Billing Blind Spot") email capture
- **FreeGuide page:** Dedicated landing page at `/free-guide`
- **PPC landing pages:** Minimal header versions at `/lp/free-guide` and `/lp/blueprint`
- **Footer newsletter:** Compact signup in footer
- **Blog CTA:** Email signup embedded in blog posts
- **Newsletter:** Beehiiv at `newsletter.billcured.com`

### SEO (Search Engine Optimization)
- **SEO component:** `src/components/SEO.jsx` - Dynamic meta tags via react-helmet-async
- **StructuredData:** `src/components/StructuredData.jsx` - JSON-LD schemas
  - OrganizationSchema (all pages)
  - ProductSchema (Product page)
  - FAQPageSchema (FAQ page)
  - ArticleSchema (Blog posts)
  - BreadcrumbSchema (inner pages)
  - WebSiteSchema (homepage)
- **Breadcrumbs:** `src/components/Breadcrumbs.jsx` - Visual + schema breadcrumbs
- **Static files:** `public/robots.txt`, `public/sitemap.xml`

### Environment Variables
Frontend (VITE_ prefix, exposed to browser):
- `VITE_STRIPE_PUBLISHABLE_KEY`
- `VITE_STRIPE_BLUEPRINT_PRICE_ID`
- `VITE_STRIPE_ESCALATION_PRICE_ID`

Server-side (Cloudflare Pages secrets):
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `RESEND_API_KEY`
- `BEEHIIV_API_KEY`
- `BEEHIIV_PUBLICATION_ID`

## Code Style

- No semicolons, single quotes, 2-space indent, trailing commas (es5)
- ESLint with React hooks plugin; `react/prop-types` set to warn
- Components use default exports, organized with barrel files
