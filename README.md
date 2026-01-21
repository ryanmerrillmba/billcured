# BillCured.com

Marketing website for the Bill Cured Blueprint - a $50 PDF guide that helps people negotiate their medical bills down by 30-70%.

## Tech Stack

- **Framework:** React 19 + Vite
- **Routing:** React Router v7
- **Payments:** Stripe Checkout
- **Hosting:** Cloudflare Pages
- **Styling:** CSS with custom design system

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your Stripe keys:

```bash
cp .env.example .env
```

Required variables:
- `VITE_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `VITE_STRIPE_BLUEPRINT_PRICE_ID` - Price ID for main product ($50)
- `VITE_STRIPE_ESCALATION_PRICE_ID` - Price ID for upsell product ($39)

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── styles/         # Global styles and CSS variables
├── data/           # JSON data (blog posts, FAQ, etc.)
├── utils/          # Utility functions (Stripe, etc.)
└── hooks/          # Custom React hooks
```

## Pages

- `/` - Home page with hero, features, testimonials
- `/about` - Brand story and mission
- `/faq` - Frequently asked questions
- `/resources` - External helpful resources
- `/product` - Sales page with checkout
- `/blog` - Blog listing with 20 SEO articles
- `/blog/:slug` - Individual blog posts
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/success` - Post-purchase confirmation

## Deployment to Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Add environment variables in Cloudflare dashboard
4. Deploy!

## Stripe Setup

1. Create products in Stripe Dashboard:
   - "Bill Cured Blueprint" - $50 one-time
   - "Escalation Playbook" - $39 one-time
2. Copy the Price IDs to your environment variables
3. Set up webhook for order fulfillment (email delivery)

## Design System

### Colors
- Primary (Teal): `#2B6B7C`
- CTA (Salmon): `#FA8072`
- CTA Hover: `#E86B5D`
- CTA Active: `#C5544A`

### Typography
- Font: Inter (Google Fonts)
- Scale: 12px to 48px

See `/src/styles/variables.css` for complete design tokens.

## SEO

The blog contains 20 articles optimized for target keywords including:
- "how to negotiate medical bills" (1,000/mo)
- "medical debt" (22,200/mo)
- "hospital bill forgiveness" (720/mo)
- And 17 more high-intent keywords

## License

Private - All rights reserved
