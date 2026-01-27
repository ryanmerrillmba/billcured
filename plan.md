# BillCured.com - Complete Build Plan

## Project Overview

**Domain:** BillCured.com (owned)
**Product:** "Bill Cured Blueprint" - $50 PDF Guide
**Tagline:** "Cut Your Medical Bills by 30-70% in a Single Phone Call"
**Upsell:** "Escalation Playbook" - $39 one-time offer
**Target Markets:** Medical Emergency Survivors (primary), Young Families, Chronic Illness Patients

---

## Phase 1: Website Build (Priority)

### Tech Stack
- **Framework:** React (Vite or Create React App)
- **Hosting:** Cloudflare Pages
- **Payments:** Stripe Checkout
- **Repository:** Public GitHub repo

### Site Pages to Build
1. **Homepage** - Hero, value prop, social proof, CTA
2. **Product Page** - Bill Cured Blueprint details, pricing, buy button
3. **About Page** - Brand story, mission, credibility
4. **Blog** - SEO content hub (15-20 articles at launch)
5. **FAQ Page** - Common questions about medical bill negotiation
6. **Testimonials Page** - Customer success stories (placeholder for now)
7. **Resources Page** - Free tools, links, industry info
8. **Checkout/Thank You** - Stripe integration, upsell offer, delivery

### Branding Direction
- **Style:** Calm & Empowering
- **Voice:** "You aren't alone, you can do this"
- **Colors:** To be determined (suggest blues/teals with warm accent)
- **Elements to Create:**
  - Logo
  - Color palette
  - Typography system
  - Brand guidelines

### Homepage Structure
```
- Hero Section
  - Headline: "Medical Bill Too High? Here's How to Fight Back."
  - Subhead: "Most bills contain errors. Learn the exact words to say."
  - CTA: "Get the Blueprint - $50"

- Problem Section
  - Statistics on billing errors
  - Pain points by audience segment

- Solution Section
  - What's in the Blueprint
  - How it works (3 steps)

- Social Proof Section
  - Testimonials (placeholder initially)
  - Statistics/results

- FAQ Preview

- Final CTA
```

---

## Phase 2: Product Creation

### Main Product: Bill Cured Blueprint ($50)

**Format:** PDF Guide/Ebook
**Delivery:** Email with download link via Stripe

**Contents:**
1. **Introduction**
   - Why bills are often wrong
   - Your rights as a patient

2. **Step-by-Step Process**
   - Getting itemized bills
   - Identifying errors
   - Preparing for the call
   - Making the call
   - Follow-up steps

3. **Negotiation Scripts**
   - Word-for-word phone scripts
   - Handling common objections
   - Escalation phrases

4. **Letter Templates**
   - Dispute letter templates
   - Financial hardship letters
   - Appeal letters
   - Payment plan requests

5. **Checklists & Worksheets**
   - Bill review checklist
   - Call preparation worksheet
   - Tracking spreadsheet

### Upsell Product: Escalation Playbook ($39)

**One-time offer at checkout** for major medical events

**Contents:**
- Advanced negotiation tactics
- Hospital administrator contacts
- Legal leverage points
- Insurance appeal strategies
- Debt collector handling
- Bankruptcy alternative strategies

---

## Phase 3: SEO & Content Strategy

### Blog Content Plan

**Launch batch:** 15-20 articles
**Ongoing:** 1-2 articles per month
**Creation:** AI-generated with human editing

**⚠️ REMINDER:** Finalize keyword research before writing articles

### Suggested Article Topics (pending keyword research)

**For Medical Emergency Survivors:**
- "How to Negotiate an ER Bill After an Accident"
- "What to Do When You Get a $50,000 Hospital Bill"
- "Understanding Your Rights After Emergency Surgery"

**For Young Families:**
- "How to Reduce Hospital Bills After Having a Baby"
- "Negotiating Pediatric Medical Bills"
- "Understanding NICU Costs and How to Challenge Them"

**For Chronic Illness Patients:**
- "Managing Ongoing Medical Debt with a Chronic Condition"
- "How to Negotiate Recurring Treatment Costs"
- "Insurance Denials: How to Appeal and Win"

**General SEO Content:**
- "X% of Medical Bills Contain Errors - Here's How to Find Them"
- "The Exact Script to Use When Calling Hospital Billing"
- "Medical Bill Negotiation: A Complete Guide"
- "Understanding Your Itemized Hospital Bill"
- "Can You Negotiate Medical Bills? Yes - Here's How"

---

## Phase 4: Lead Magnet

### Document: "The Billing Blind Spot" (working title)

**Format:** 1-2 page PDF
**Purpose:** Email list growth
**Core message:** Billing offices don't have the customer's side of the story, which causes many bills to simply be wrong

**Outline:**
1. The hidden truth about medical billing
2. Why billing departments make mistakes
3. What they don't know about YOUR situation
4. The one question that changes everything
5. CTA: Get the full Blueprint

---

## Phase 5: Email Newsletter

### Platform: Beehiiv

**Frequency:** Weekly
**Tone:** Empathetic & Supportive
**Content Mix:**
- Primarily: Healthcare billing news & cost updates
- Secondary: Success stories from community

### Newsletter Structure
```
- Subject line (curiosity/news-driven)
- Personal greeting
- This week's healthcare billing news
- Quick tip or insight
- Reader spotlight (when available)
- CTA to Blueprint
```

### Automation
- Just weekly broadcasts (keep simple)
- Post-purchase testimonial request email

---

## Phase 6: PPC Marketing

**Budget:** $100-500/month
**Platforms:** Google Ads (primary), Facebook Ads (secondary)

### Google Ads Strategy
- Search campaigns targeting purchase-intent keywords
- Landing page: Direct to product page or dedicated landing page
- Start with exact match keywords, expand based on performance

### Facebook Ads Strategy
- Target based on interests and life events
- Use lead magnet for cold audiences
- Retarget website visitors with product offer

---

## Phase 7: Testimonial Collection

**Method:** Post-purchase email request

**Automated email sequence:**
1. **Day 7 after purchase:** Check-in email, ask how it's going
2. **Day 21 after purchase:** Request testimonial if they've had success
3. **Include:** Simple form or reply instructions

---

## Build Order / Phases

### Phase A: Core Website + SEO Foundation
1. Set up GitHub repository (public)
2. Initialize React project
3. Create branding assets (logo, colors, typography)
4. Build all website pages
5. Set up Cloudflare Pages deployment
6. Integrate Stripe checkout
7. Create Bill Cured Blueprint PDF
8. Create Escalation Playbook PDF
9. Set up email delivery system
10. Write and publish 15-20 blog articles
11. Test full purchase flow
12. **LAUNCH WEBSITE**

**✅ SEO Technical Implementation Complete (Jan 2026):**
- Added react-helmet-async for dynamic meta tags (title, description, OpenGraph, Twitter)
- Created SEO component with per-page meta customization
- Added StructuredData component with JSON-LD schemas (Organization, Product, FAQ, Article, Breadcrumb, WebSite)
- Added Breadcrumbs component for navigation and SEO
- Created robots.txt and sitemap.xml

### Phase B: Lead Generation
13. Create lead magnet PDF
14. Set up Beehiiv account
15. Create opt-in forms on website
16. Connect lead magnet delivery
17. Set up PPC campaigns (Google, Facebook)
18. Create dedicated landing pages for ads

### Phase C: Ongoing Operations
19. Weekly newsletter sends
20. Monthly blog posts (1-2)
21. PPC optimization
22. Testimonial collection and display
23. Conversion optimization

---

## Files to Create

### Website
```
/src
  /components
    - Header.jsx
    - Footer.jsx
    - Hero.jsx
    - ProductCard.jsx
    - TestimonialCard.jsx
    - FAQAccordion.jsx
    - BlogCard.jsx
    - CTASection.jsx
  /pages
    - Home.jsx
    - Product.jsx
    - About.jsx
    - Blog.jsx
    - BlogPost.jsx
    - FAQ.jsx
    - Testimonials.jsx
    - Resources.jsx
    - Checkout.jsx
    - ThankYou.jsx
  /styles
    - global.css
    - variables.css
  /data
    - faq.json
    - testimonials.json
  App.jsx
  main.jsx
/public
  - logo.svg
  - favicon.ico
  - og-image.jpg
index.html
package.json
vite.config.js
README.md
```

### Products (separate from website)
- Bill Cured Blueprint.pdf
- Escalation Playbook.pdf
- Lead Magnet - The Billing Blind Spot.pdf

---

## Verification & Testing

Before launch, verify:
- [ ] All pages render correctly
- [ ] Mobile responsive on all pages
- [ ] Stripe checkout completes successfully
- [ ] Email delivery works after purchase
- [ ] Upsell offer displays at checkout
- [ ] Blog posts are indexed by search engines
- [ ] Lead magnet opt-in delivers PDF
- [ ] All links work (internal and external)
- [ ] Page load speed is acceptable
- [ ] Analytics tracking is active

---

## Decisions Made

- **Imagery:** Mix of stock photos, AI-generated images, and icons as appropriate
- **Analytics:** Google Analytics
- **Logo:** User will provide, Claude will resize for web use

## Open Reminders

1. **⚠️ KEYWORD RESEARCH NEEDED** - Complete before writing blog articles
2. **Color palette** - Finalize before CSS work (Calm & Empowering direction)
3. **User to provide logo file** - Before starting design work
