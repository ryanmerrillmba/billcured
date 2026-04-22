# BillCured — Google Stitch Design Brief

## Site Purpose

BillCured sells a $49.99 PDF guide ("Bill Cured Blueprint") that teaches people how to
negotiate medical bills down 30–80%. The founder spent 10 years as a medical billing
executive overseeing $1B+ in annual billing. This inside knowledge is the core
credibility hook.

The visitor arrives scared, overwhelmed, and skeptical. The design must immediately
answer three silent questions:
1. "Is this legitimate?" (authority + trust signals)
2. "Will this work for me?" (social proof + specificity)
3. "Is this worth $49.99?" (value framing + risk reversal)

---

## Brand Personality

**Tone:** Calm authority. Not a hype page. Not a scammy "SAVE THOUSANDS NOW" design.
Think: the serious, trustworthy financial advisor who actually knows what they're talking
about and isn't trying to panic you into buying anything.

**Voice contrast:** Most medical billing sites are either clinical and cold (hospital
sites) or chaotic and salesy (discount offers). BillCured sits between: expert,
empathetic, direct. Like a knowledgeable friend who happens to have inside information.

**Visual reference:** The visual weight of a law firm or financial services firm, but
with the warmth of a consumer health brand. Think NerdWallet or Wirecutter — trusted
editorial authority, clean layouts, clear CTAs.

---

## Color Palette

### Primary
- **Deep Navy:** `#1B2B4B` — headlines, primary text, nav background
- **Trustworthy Blue:** `#2563EB` — primary CTA buttons, links, accent
- **Calm Teal:** `#0D9488` — secondary accents, success states, highlights

### Neutral
- **Off-White:** `#F8FAFC` — page background, section alternates
- **Light Gray:** `#E2E8F0` — dividers, card borders, input backgrounds
- **Slate:** `#64748B` — body text, secondary labels
- **Dark Slate:** `#334155` — subheadings, secondary text

### Signal Colors
- **Savings Green:** `#16A34A` — savings amounts, positive outcomes, money saved
- **Warning Amber:** `#D97706` — used sparingly for urgency (not alarm)
- **Error-Free White:** `#FFFFFF` — primary card backgrounds

### Color Rules
- No red anywhere on the page. Red triggers alarm and this audience is already stressed.
- Green is reserved exclusively for savings amounts and positive outcomes.
- Navy + white is the primary pair for high-trust sections.
- Avoid gradients except a subtle navy-to-dark-navy on the hero background.

---

## Typography

### Fonts
- **Headlines:** `Inter` — weight 700 (Bold). Clean, modern, professional. Not a
  generic sans. Feels like a quality tech product.
- **Body:** `Inter` — weight 400 (Regular), 500 (Medium) for emphasis
- **Savings/Numbers:** `Inter` — weight 800 (ExtraBold) in Savings Green. Numbers
  need to pop. "$16,100 saved" should be visually unmissable.
- **Testimonial quotes:** `Georgia` or `Lora` — serif adds warmth and credibility to
  real human voices. Italic style.

### Scale
- H1: 48px / 56px line-height (desktop), 32px (mobile)
- H2: 36px / 44px (desktop), 26px (mobile)
- H3: 22px / 30px
- Body: 17px / 26px (slightly larger than typical — medical content benefits from
  readability, audience skews 35–65)
- Small/labels: 14px / 20px
- Savings callouts: 42px ExtraBold in Savings Green

---

## Layout System

### Grid
- **Desktop:** 12-column, 1240px max-width, 24px gutters, 80px section padding
- **Tablet:** 8-column, 768px, 20px gutters, 60px section padding
- **Mobile:** 4-column, full-width, 16px margins, 48px section padding

### Spacing Scale (8px base)
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 40px
- 2xl: 64px
- 3xl: 96px

### Corner Radius
- Cards: 12px
- Buttons: 8px
- Badges: 100px (pill)
- Input fields: 6px

### Shadows
- Card default: `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)`
- Card hover: `0 4px 12px rgba(0,0,0,0.12)`
- CTA button: `0 4px 14px rgba(37,99,235,0.35)` (blue glow — signals clickability)

---

## Trust Signal System

These elements appear throughout the design, not just at the top. Trust is built
cumulatively, section by section.

### Tier 1 — Authority (Above the Fold)
- Founder credential badge: "10 Years | Medical Billing Executive | $1B+ Processed"
  displayed as a pill-shaped badge in navy, positioned directly under the headline
- NOT an avatar photo of a "stock photo founder." If no real photo, use an icon +
  credential text only. A fake photo destroys trust faster than no photo.

### Tier 2 — Social Proof (Testimonials)
- Each testimonial card must show: name, city/state, and a **specific dollar amount saved**
- Savings amount displayed in Savings Green, ExtraBold, large type — the number is
  the hero of the card, not the name
- Star ratings (5-star) in amber displayed above each quote
- Location matters: real US cities. "Austin, TX" not "United States."
- Cards have a subtle left border in Savings Green (4px) — signals positive outcome

### Tier 3 — Risk Reversal (Near CTAs)
- "60-Day Money Back Guarantee" badge — appears directly below every primary CTA button
- Lock icon + "Secure Checkout via Stripe" — appears below price display
- "Instant PDF Download" — sets expectations, removes shipping anxiety

### Tier 4 — Specificity (In Copy)
- Never say "significant savings" — always say specific numbers ("30–80%", "$16,100",
  "80% of bills contain errors")
- Never say "easy to use" — show the actual steps
- Numbers in headlines always outperform adjectives

### Tier 5 — Transparency (Pricing Section)
- Show the price clearly, no hiding it until late in the funnel
- Show what's included as a checklist — visual inventory of value
- Show the "vs. hiring a professional" comparison: "Professional negotiators charge
  $300–$500/hour. This guide: $49.99."

---

## Page Sections — Homepage

### Section 1: Navigation
**Height:** 64px fixed sticky nav
**Background:** White with a 1px bottom border in Light Gray
**Left:** BillCured logo — wordmark only, navy + teal accent dot
**Right:**
- "Blog" text link
- "FAQ" text link
- "Get the Blueprint" button — navy fill, white text, 8px radius, no drop shadow in nav

**Scroll behavior:** On scroll past 100px, nav gets a subtle box shadow:
`0 2px 8px rgba(0,0,0,0.08)` — signals the page is premium, not static

---

### Section 2: Hero
**Background:** Deep Navy (`#1B2B4B`) with a very subtle radial gradient lightening at
the center (10% opacity lighter) — not a bright gradient, just depth
**Layout:** Two-column on desktop (60/40 split). Text left, visual right.
**Mobile:** Single column, stacked.

**Left Column:**
- Credential badge at top: `[BADGE] Medical Billing Insider · 10 Years Experience`
  Pill shape, teal background, white text, 14px. This goes ABOVE the headline.
- H1 (white): "I Know Why Your Medical Bill Is Wrong"
- Subheadline (slate-200, 19px): "I spent 10 years setting these prices from the inside.
  80% of bills contain errors — and most patients never push back. Here's your guide to
  what actually works."
- Email signup form:
  - Input: "Enter your email" placeholder, white background, full-width
  - Button: Teal fill ("Get the Free Billing Blind Spot Guide →"), full-width on mobile
  - Below input (12px slate-300): "Free. No credit card. Unsubscribe anytime."
- Secondary CTA link below form: "Or get the complete Blueprint for $49.99 →"
  White underline link, not a button — maintains hierarchy

**Right Column:**
- Product mockup: a clean, realistic-looking PDF preview on a slight angle
- Below mockup: three mini-badges in a row:
  - [Lock icon] Secure
  - [Download icon] Instant
  - [Shield icon] 60-Day Guarantee

**Visual note:** The hero should feel serious and authoritative, not flashy. Dark background
with white text reads as "this person knows something I don't" which is exactly right.

---

### Section 3: Credibility Bar
**Background:** White
**Layout:** Full-width, centered, single row on desktop / stacked on mobile
**Padding:** 32px vertical

**Content:**
- Left stat: `$1 Billion+` (Savings Green, ExtraBold) / "in annual billing overseen" (slate)
- Center stat: `10 Years` (Savings Green, ExtraBold) / "medical billing executive" (slate)
- Right stat: `80%` (Savings Green, ExtraBold) / "of bills contain errors" (slate)

Stats separated by a 1px vertical divider (Light Gray) on desktop.
Below stats (centered, 14px slate): "Created by a healthcare billing insider, not a
self-help blogger or general financial advisor."

---

### Section 4: Problem Agitation
**Background:** Off-White (`#F8FAFC`)
**Layout:** Centered, max-width 720px, generous vertical padding

**H2:** "Medical Bills Shouldn't Ruin Your Life"

**Intro paragraph:** "You didn't ask to get sick or injured. Now you're staring at a bill
that feels impossible to pay — and nobody's telling you that it doesn't have to be."

**Two problem cards** (white background, 12px radius, subtle shadow):

Card 1:
- Icon: Warning triangle (amber, not red)
- Headline: "80% of medical bills contain errors"
- Body: Duplicate charges. Services you never received. Upcoded procedures billed at
  higher rates. These aren't accidents — they're systemic.

Card 2:
- Icon: Clock (slate)
- Headline: "Hospitals expect you to negotiate"
- Body: They have entire departments for it. Chargemaster rates are inflated 300–1000%
  above what insurance pays. Most patients just... don't ask.

**No CTA in this section.** Let the problem breathe. A CTA here feels predatory.

---

### Section 5: The Founder Story (Trust-Builder)
**Background:** White
**Layout:** Two-column on desktop (50/50). Story left, outcome right.

**Left — Story text:**
H2: "I Reduced My Cousin's Bill by 80%"

Condensed version of the origin story:
- Cousin had catastrophic accident → hundreds of thousands in bills
- As a billing executive, the founder recognized the errors and inflated codes
- Negotiated the bill down by 80%
- Realized millions of people face this without the insider knowledge

The narrative style is plain and specific. No adjectives like "devastating" or
"overwhelming" — the facts speak. "Titanium rod. Vegetative state. 80% reduction."
That specificity is what makes it credible.

**Right — Outcome card:**
Large card with navy background, white text:
- Big number: "80%" (white, 72px ExtraBold)
- Below: "reduction on a six-figure hospital bill"
- Divider line
- Below: Short quote from the founder: "After I helped my cousin, I realized this
  knowledge belonged to everyone — not just people who happen to know a billing insider."
- Founder attribution: Name, title, years of experience

---

### Section 6: What's Inside the Blueprint
**Background:** Off-White
**H2 (centered):** "What You Get for $49.99"
**Subtitle (centered):** "Everything I wish patients knew before they paid their bills"

**Six feature cards** in a 3x2 grid (desktop), 2x3 (tablet), 1x6 (mobile):

Each card:
- White background, 12px radius, subtle shadow
- Icon (teal, 32px, line-style — not filled emoji)
- Feature name (H3, navy)
- One-sentence description (slate body text)

Features (from data):
1. Word-for-Word Scripts — phone call scripts for billing departments
2. Letter Templates — dispute letters and financial assistance applications
3. Step-by-Step Action Plan — clear roadmap from bill to resolution
4. Itemized Bill Guide — how to find errors and duplicate charges
5. Financial Assistance Secrets — charity care programs most don't know exist
6. Collections Defense — strategies for bills already in collections

**Below grid:** Single row of three mini-badges:
`[PDF icon] Immediate Download · [Pages icon] Comprehensive Guide · [Device icon] Works on Any Device`

---

### Section 7: Testimonials — "Real People, Real Savings"
**Background:** White
**H2 (centered):** "Real People, Real Savings"

**Three testimonial cards** in a row (desktop), stacked (mobile):

Each card layout (white background, 12px radius, 1px border Light Gray,
4px left border Savings Green):
- Five amber stars (★★★★★) at top
- Savings amount: `$16,100 saved` — large, Savings Green, ExtraBold, 32px
- Quote in Georgia italic, slate-700, 15px
- Bottom: Name (bold, navy) + Location (slate, small)

The savings amount leads each card. It's the headline of the testimonial, not the name.

**Testimonials to display:**
1. Sarah M., Austin TX — $16,100 saved ($23K bill → $6,900)
2. Michael R., Denver CO — $8,400 saved (used escalation script, 55% reduction)
3. Jennifer L., Chicago IL — $12,000+ saved (charity care programs)

**Below testimonials:** Link to more testimonials or product page.

---

### Section 8: Pricing + CTA
**Background:** Deep Navy
**Layout:** Centered, max-width 640px

**Above price:**
- "Simple, transparent pricing" — small label, teal, all-caps, letter-spaced

**Price display:**
- `$49.99` — white, 64px ExtraBold
- Strikethrough comparison: ~~"Professional bill negotiators: $300–$500/hr"~~ (slate-400)

**Included (white checklist, teal checkmarks):**
- [✓] Full Bill Cured Blueprint PDF
- [✓] Phone scripts for billing departments
- [✓] Letter templates (dispute + hardship + assistance)
- [✓] Itemized bill review checklist
- [✓] Financial assistance application guide
- [✓] Collections negotiation strategies

**Primary CTA button:**
- "Get the Blueprint Now →"
- Teal background (#0D9488), white text, full-width on mobile, 280px on desktop
- 16px text, 16px vertical padding
- Box shadow: `0 4px 14px rgba(13,148,136,0.4)` — teal glow
- Below button (centered, slate-300, 13px): "[Lock icon] Secure checkout via Stripe"

**Below CTA:**
- "60-Day Money-Back Guarantee" badge — white pill, navy text, shield icon
- Small text below: "If you don't save more than the cost of this guide, email us for
  a full refund. No questions asked."

---

### Section 9: FAQ (Preview)
**Background:** Off-White
**H2 (centered):** "Common Questions"
**Layout:** Single column, max-width 720px

Show 4 accordion items (closed by default). Accordion chevron animates on open.
Each item: Q in navy bold, A in slate body text.

Sample questions:
1. "What if my bill is already in collections?"
2. "Does this work for bills covered by insurance?"
3. "How long does negotiation usually take?"
4. "What if the hospital won't negotiate?"

Below accordion: "View all FAQs →" text link in teal.

---

### Section 10: Final CTA Bar
**Background:** Teal (`#0D9488`)
**Layout:** Centered, full-width, 80px vertical padding

**H2 (white):** "Stop Overpaying for Medical Care"
**Subheadline (white, 70% opacity):** "You already have the right to negotiate.
  Get the knowledge to do it."

**Button:** "Get the Blueprint — $49.99" — white background, navy text, 8px radius
No glow on this button — the teal background is already high-contrast.

Below button (white, 80% opacity, 13px): "60-Day Money-Back Guarantee · Instant Download"

---

### Section 11: Footer
**Background:** `#0F172A` (darker navy)
**Layout:** Three columns + bottom bar

**Column 1 — Brand:**
- BillCured wordmark (white)
- One-line tagline: "Medical billing knowledge for real people."
- Small print: "Not legal or medical advice. For informational purposes only."

**Column 2 — Links:**
- Blog
- FAQ
- About
- Resources

**Column 3 — Legal:**
- Privacy Policy
- Terms of Service
- Contact

**Bottom bar:** 1px top border (slate-700)
`© 2024 BillCured. All rights reserved.`

---

## Inner Pages — Trust-First Patterns

### Blog Post Layout
- Reading width: 680px max, centered
- Author byline: founder name + credential under every post headline
- Sidebar (desktop): sticky "Get the Blueprint" card with price + CTA
- Every post ends with an email signup block before comments
- Breadcrumbs above headline (schema-friendly)
- Table of contents for posts over 1,500 words

### Product Page
- Lead with outcome: "Reduce Your Medical Bills by 30–80%"
- Full testimonials section (all 5)
- Expanded feature breakdown with screenshots/examples
- FAQ specific to the product
- Price + CTA appears three times: top, middle (after features), bottom
- "As featured in" or press logos if available

### Free Guide Landing Page (`/free-guide`, `/lp/free-guide`)
- Minimal header (logo only, no nav links)
- Single-column, no distractions
- Email form above the fold, always
- Condensed credibility signals (no full story)
- No footer links — keep focus on conversion

---

## Component Specifications

### Primary Button
```
Background: #2563EB (primary) or #0D9488 (secondary)
Text: White, Inter 600, 15px
Padding: 14px 28px
Border-radius: 8px
Box-shadow: 0 4px 14px rgba(37,99,235,0.35)
Hover: Brightness 1.08, shadow intensifies
Active: Scale 0.98
Transition: all 150ms ease
Focus-visible: 3px offset outline in matching color
```

### Testimonial Card
```
Background: #FFFFFF
Border: 1px solid #E2E8F0
Border-left: 4px solid #16A34A
Border-radius: 12px
Padding: 28px
Savings amount: #16A34A, Inter 800, 32px
Quote: Georgia italic, #475569, 15px, line-height 24px
Name: Inter 600, #1B2B4B, 14px
Location: Inter 400, #64748B, 13px
```

### Feature Card
```
Background: #FFFFFF
Border: 1px solid #E2E8F0
Border-radius: 12px
Padding: 28px
Shadow: 0 1px 3px rgba(0,0,0,0.08)
Icon: 32px, color #0D9488, stroke-based (not filled)
Title: Inter 600, #1B2B4B, 18px
Body: Inter 400, #64748B, 15px, line-height 23px
Hover: shadow deepens to 0 4px 12px rgba(0,0,0,0.12), translate -2px Y
```

### Trust Badge / Pill
```
Background: #EFF6FF (light blue) or #F0FDF4 (light green for savings)
Text: #1E40AF (blue) or #15803D (green)
Border: 1px solid #BFDBFE (blue) or #86EFAC (green)
Border-radius: 100px
Padding: 6px 14px
Font: Inter 500, 13px
Icon: 14px, same color, inline left of text
```

### Stat Display
```
Number: Inter 800, #16A34A, 48px desktop / 36px mobile
Label: Inter 400, #64748B, 15px
Alignment: Centered
Divider between stats: 1px solid #E2E8F0, 48px height (vertical)
```

### Accordion (FAQ)
```
Container: 1px border #E2E8F0, 8px radius
Item border-bottom: 1px solid #E2E8F0 (except last)
Question: Inter 600, #1B2B4B, 16px, padding 20px 24px
Chevron: #64748B, rotates 180° on open, 200ms ease
Answer: Inter 400, #64748B, 15px, padding 0 24px 20px, line-height 24px
Open state: question color shifts to #2563EB
```

---

## Mobile-Specific Rules

- Every CTA button is full-width on mobile (no cramped buttons)
- The hero email form stacks: input on top, button below (full-width both)
- Testimonial cards stack vertically — do not try to scroll horizontally
- Feature cards: 1 column on mobile, 2 on tablet, 3 on desktop
- Savings stats: remove vertical dividers, add 16px bottom margin between stats
- Nav collapses to hamburger at 768px and below. Drawer opens from right.
- Font sizes reduce: H1 48→32, H2 36→26. Body stays at 17px (readability priority).
- Sticky "Get the Blueprint" floating bar appears on mobile only, slides up from bottom
  after user scrolls past the hero. Height: 64px. Shows price + button. Dismiss-able.

---

## Accessibility

- All color combinations must meet WCAG AA (4.5:1 minimum contrast)
- Deep Navy on Off-White: passes AAA
- Teal CTAs: white text on #0D9488 meets AA
- Focus states: visible on all interactive elements, 3px offset
- Alt text: every image and icon needs descriptive alt text
- Heading hierarchy: H1 → H2 → H3 only, no skipped levels
- Form labels: explicit `<label for>` on all inputs
- ARIA: accordion items use proper `aria-expanded`, `aria-controls`
- Reduced motion: animations/transitions respect `prefers-reduced-motion`

---

## Things to Avoid (Design Anti-Patterns for This Site)

- **No red.** The audience is already stressed. Red triggers alarm.
- **No countdown timers.** They're manipulative and erode trust for a serious product.
- **No "LIMITED TIME OFFER" banners.** The price is $49.99. Show it plainly.
- **No stock photos of smiling doctors or happy families.** They read as fake immediately.
- **No dark patterns** (pre-checked upsells, hidden fees, confusing pricing).
- **No spinning loading animations** on the price — just show the price.
- **No "As Seen On" logos unless real.** Fake press badges destroy credibility.
- **No auto-playing video.** The audience skews 35–65 and may be on mobile with no headphones.
- **No emoji in headlines.** This is a $49.99 financial product, not a TikTok post.
- **No popups in the first 10 seconds.** An exit-intent popup after 30s is acceptable.
- **No infinite scroll blog listing.** Paginate. Infinite scroll is disorienting for this audience.

---

## What Google Stitch Should Prioritize

1. **Trust accumulation over scroll.** Every section adds another trust signal. By the
   time a visitor reaches the pricing section, they should feel they know, like, and trust
   the product. The purchase is just the next logical step.

2. **Specificity over vagueness.** "$16,100 saved" always beats "significant savings."
   "10 years, $1B+ in billing" beats "years of experience."

3. **Calm authority over excitement.** The audience is scared about money. They don't
   need hype. They need a calm expert telling them: "I've seen this before. Here's what works."

4. **Mobile-first layout decisions.** Over 60% of this traffic arrives on mobile, many
   from organic search on their phone while staring at a bill. The mobile experience is
   the real product.

5. **The email list is the business.** The free guide email capture is not secondary to
   the product sale — it is equally important. The email signup should be as prominent
   and frictionless as the buy button.
