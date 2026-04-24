# BillCured Todo

---

## Priority 1 — Do First (Blocking or High-Impact Now)

- [x] **Submit sitemap.xml to Google Search Console** — sitemap updated with all 56 posts; submit at Search Console → Sitemaps → `https://www.billcured.com/sitemap.xml`
- [x] **Reduce JS bundle size (857KB → 305KB)** — `blog-posts.json` moved to `public/data/` (fetched at runtime, never bundled); Blog + BlogPost pages lazy-loaded via `React.lazy()`
- [x] **Remove duplicate Related sections from blog posts** — removed inline `related-links` renderer; kept bottom "Related Articles" section (proper semantic HTML, auto-curated by category)
- [x] **Remove paid product CTAs from blog posts** — removed "Want the Complete System?" box and bottom CTASection; blog posts now only show "Get the Free Guide" EmailSignup
- [ ] **Add missing images for 22 blog posts** — 22 posts have image fields in `blog-posts.json` pointing to files that don't exist in `public/images/`. Missing files: `blog_free_help.jpg`, `blog_negotiation_checklist.jpg`, `blog_bill_mistakes.jpg`, `blog_debt_validation.jpg`, `blog_negotiation_script.jpg`, `blog_nonprofit_hospital.jpg`, `blog_medicaid_spend.jpg`, `blog_hipaa_billing.jpg`, `blog_no_surprises.jpg`, `blog_billing_advocate.jpg`, `blog_bill_waived.jpg`, `blog_financial_counselor.jpg`, `blog_remove_collections.jpg`, `blog_collection_rights.jpg`, `blog_ignoring_bills.jpg`, `blog_urgent_care_er.jpg`, `blog_ambulance_bill.jpg`, `blog_insurance_complaint.jpg`, `blog_out_of_network.jpg`, `blog_prior_auth.jpg`, `blog_eob_guide.jpg`, `blog_insurance_denial.jpg`

---

## Priority 2 — Do Soon (SEO Compounding Over Time)

- [x] **Write 22 backdated blog posts** — all 22 posts written and published (Oct 2024–Mar 2026); site now has 56 total posts across 11 categories
- [ ] **Build backlinks** — content is done, off-page authority is the next bottleneck for competitive keywords; even 5–10 quality links/month moves the needle. Targets: Patient Advocate Foundation, NeedyMeds, state insurance commissioner resource pages, HARO/Connectively healthcare queries

---

## Blog Content Roadmap: 22 Backdated Posts (Oct 2024 → Mar 2026)

Bridge the 18-month publishing gap. Each post: 2,000+ words, 1–2% keyword density, 3 internal links, featured image (1200×630). Add to `src/data/blog-posts.json` and `public/sitemap.xml`.

**Skill paths:**
- Pre-writing: `.claude/skills/programmatic-seo/SKILL.md`
- Post-writing: `.claude/skills/seo-audit/SKILL.md`

**Recommended writing order:** Start with the Insurance cluster (1–5) — it's the biggest gap. Then Emergency Bills (6–7), Medical Debt (8–10), then work chronologically through the rest.

**Status key:** `[ ]` = not written, `[x]` = complete

---

### 1. How to Appeal a Health Insurance Denial
- [ ] **Slug:** `health-insurance-denial-appeal`
- **Date:** October 10, 2024
- **Category:** Insurance
- **Keywords:** health insurance denial appeal, appeal insurance claim denial
- **Brief:** Cover the two types of denials (coverage vs. medical necessity), internal appeal process (timeline, what to submit, magic phrases like "clinical guidelines"), external independent review, state insurance commissioner escalation. Include a step-by-step checklist and sample appeal language. Reference ACA appeal rights. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 2. How to Read Your Explanation of Benefits (EOB)
- [ ] **Slug:** `explanation-of-benefits-guide`
- **Date:** October 31, 2024
- **Category:** Insurance
- **Keywords:** explanation of benefits, how to read EOB, what is an EOB
- **Brief:** Walk through every field in a typical EOB (billed amount, allowed amount, contractual adjustment, deductible applied, what you owe). Explain how an EOB ≠ a bill. Show how to spot overpayment errors and underpayment by insurer. Explain the EOB-to-bill reconciliation process. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 3. Prior Authorization Denied: How to Fight Back
- [ ] **Slug:** `prior-authorization-guide`
- **Date:** November 21, 2024
- **Category:** Insurance
- **Keywords:** prior authorization denied, how to appeal prior auth, prior authorization appeal
- **Brief:** What prior auth is, why it gets denied (wrong code, wrong provider, step therapy), how to request urgent/expedited review, peer-to-peer review (doctor-to-doctor call — highly effective), formal appeal, and state regulations on prior auth timelines. Cover the 2024 CMS transparency rule. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 4. Out-of-Network Charges: What You Actually Owe
- [ ] **Slug:** `out-of-network-charges`
- **Date:** December 12, 2024
- **Category:** Insurance
- **Keywords:** out of network charges, out of network billing, out of network costs
- **Brief:** Difference between out-of-network balance billing and standard OON cost-sharing. When the No Surprises Act protects you vs. when it doesn't (scheduled OON care). How to negotiate OON charges directly with the provider. How to ask your insurer to pay at in-network rates (gap exceptions). 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 5. How to File a Complaint Against Your Health Insurance Company
- [ ] **Slug:** `health-insurance-complaint`
- **Date:** January 9, 2025
- **Category:** Insurance
- **Keywords:** file health insurance complaint, health insurance complaint department of insurance
- **Brief:** When to complain (wrongful denial, bad-faith delays, network adequacy failures), state insurance commissioner process, ERISA self-funded plans (DOL complaint, not state), CMS complaints for Medicare/Medicaid. What happens after you file. How complaints create leverage for resolution. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 6. How to Negotiate an Ambulance Bill
- [ ] **Slug:** `ambulance-bill-negotiation`
- **Date:** January 30, 2025
- **Category:** Emergency Bills
- **Keywords:** negotiate ambulance bill, ambulance bill too high, reduce ambulance bill
- **Brief:** Why ambulance bills are enormous (often $2,000–$40,000 for air), how ground vs. air transport billing differs, when the No Surprises Act covers you, how to negotiate with the ambulance company (many are subscription-based or county-run — different leverage), how to appeal when insurance underpays, hardship waivers. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 7. Urgent Care vs. ER: Cost Differences and How to Choose
- [ ] **Slug:** `urgent-care-vs-er-costs`
- **Date:** February 20, 2025
- **Category:** Emergency Bills
- **Keywords:** urgent care vs emergency room cost, urgent care vs ER, when to go to urgent care vs ER
- **Brief:** Real cost comparison (average urgent care visit $150–$300 vs. ER $1,500–$3,000+), what each level of care can handle, how the choice affects your insurance deductible and OOP max, freestanding ERs and their billing traps, how to avoid the ER when urgent care is appropriate. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 8. What Happens If You Don't Pay Medical Bills?
- [ ] **Slug:** `ignoring-medical-bills`
- **Date:** March 13, 2025
- **Category:** Medical Debt
- **Keywords:** what happens if you don't pay medical bills, ignore medical bills, not paying medical bills
- **Brief:** Full timeline: bill → internal collections → third-party collections → credit reporting (old rules vs. CFPB 2025 rule changes) → lawsuit → wage garnishment. What's actually likely to happen for small vs. large balances. Statute of limitations by state. Why ignoring isn't always the wrong strategy. When to call vs. when to wait. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 9. Your Rights When Medical Debt Goes to Collections
- [ ] **Slug:** `medical-debt-collection-rights`
- **Date:** April 3, 2025
- **Category:** Medical Debt
- **Keywords:** medical debt collection rights, FDCPA medical debt, debt collector rights medical
- **Brief:** FDCPA protections (cease communication letters, harassment prohibitions, validation requirement), the 30-day dispute window, what collectors must provide when you request validation, state FDCPA analogs that go further, how to negotiate with collectors (different leverage than hospital), CFPB complaint process when collectors violate the law. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 10. How to Remove Medical Collections from Your Credit Report
- [ ] **Slug:** `remove-medical-collections-credit-report`
- **Date:** April 24, 2025
- **Category:** Medical Debt
- **Keywords:** remove medical collections credit report, medical debt credit report removal, medical collections removal
- **Brief:** CFPB January 2025 rule banning most medical debt from credit reports (pending litigation), what that means now, how to dispute medical collections that remain, goodwill deletion letters (template), pay-for-delete negotiations, HIPAA dispute method (controversial but used), monitoring your report post-removal. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 11. How a Hospital Financial Counselor Can Slash Your Bill
- [ ] **Slug:** `hospital-financial-counselor`
- **Date:** May 15, 2025
- **Category:** How-To
- **Keywords:** hospital financial counselor, hospital financial assistance counselor, hospital billing department help
- **Brief:** What financial counselors actually do (not just payment plans), how to request a meeting before you get a bill, what documents to bring (tax return, pay stubs, bank statements), what to ask for (charity care, prompt pay discount, itemized bill review, hardship waiver), what outcomes are realistic. Most people don't know this person exists. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 12. How to Get a Medical Bill Reduced or Waived Completely
- [ ] **Slug:** `get-medical-bill-waived`
- **Date:** June 5, 2025
- **Category:** How-To
- **Keywords:** get medical bill waived, medical bill reduced to zero, waive medical bill
- **Brief:** Income-based waivers (most hospitals have 100% charity care up to 200–300% FPL), how to trigger the charity care review process, what "hardship" means in hospital policy vs. IRS rules, the prompt-pay discount play, how to use competing quotes, what to say when the hospital says no. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 13. Should You Hire a Medical Billing Advocate?
- [ ] **Slug:** `medical-billing-advocate`
- **Date:** June 26, 2025
- **Category:** Resources
- **Keywords:** medical billing advocate, hire medical billing advocate, medical bill advocate cost
- **Brief:** What advocates do (audit bills, negotiate, appeal), how they're paid (contingency 25–35% of savings vs. flat fee), when the ROI makes sense (bills over $5K), how to find a legitimate one (NAAMBA, PFAC certifications vs. scams), DIY vs. professional comparison, what to ask before hiring. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 14. The No Surprises Act: Your Complete Protection Guide
- [ ] **Slug:** `no-surprises-act-guide`
- **Date:** July 17, 2025
- **Category:** Know Your Rights
- **Keywords:** no surprises act guide, no surprises act protections, no surprises act explained
- **Brief:** Deep-dive beyond the existing surprise-medical-bill-rights post — focus on the Good Faith Estimate requirement (effective 2022), how to use it to dispute a bill that exceeds the estimate, the Independent Dispute Resolution (IDR) process for providers, what's NOT covered (scheduled OON care), how the law interacts with balance billing bans. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 15. Using HIPAA to Catch and Fix Medical Billing Errors
- [ ] **Slug:** `hipaa-medical-billing`
- **Date:** August 7, 2025
- **Category:** Know Your Rights
- **Keywords:** HIPAA medical billing, HIPAA rights medical records, use HIPAA to dispute medical bill
- **Brief:** Right to access medical records (must be provided within 30 days, $0–minimal cost under 2021 rule), how to compare records to itemized bill to find upcoding/duplicate charges, how to file a HIPAA complaint with OCR when access is denied, the link between records access and billing dispute leverage. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 16. Medicaid Spend-Down: How to Qualify When Your Income Is Too High
- [ ] **Slug:** `medicaid-spend-down`
- **Date:** August 28, 2025
- **Category:** Financial Assistance
- **Keywords:** medicaid spend down, medicaid with high income, how does medicaid spend down work
- **Brief:** What spend-down is (like a deductible for Medicaid), which states offer it (33 states + DC), how unpaid medical bills count toward the spend-down amount, how to apply retroactively, the difference between income and asset spend-down, how to use this for a large existing hospital bill. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 17. Nonprofit Hospitals Must Help You: How to Claim It
- [ ] **Slug:** `nonprofit-hospital-charity-requirements`
- **Date:** September 18, 2025
- **Category:** Financial Assistance
- **Keywords:** nonprofit hospital financial assistance requirements, 501c3 hospital charity care, hospital community benefit
- **Brief:** IRS 501(r) rules requiring nonprofit hospitals to have Financial Assistance Policies (FAP), how to look up any hospital's FAP (Form 990 Schedule H, hospital website), the AGB (amount generally billed) standard, what happens if the hospital doesn't follow its own FAP (you can dispute the bill), list of resources to find a hospital's policy. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 18. Word-for-Word Scripts for Negotiating Medical Bills by Phone
- [ ] **Slug:** `medical-bill-negotiation-script`
- **Date:** October 16, 2025
- **Category:** Templates
- **Keywords:** medical bill negotiation script, what to say negotiating medical bills, medical bill phone negotiation
- **Brief:** Actual scripts for: opening the call, requesting an itemized bill, asking for the uninsured/cash rate, invoking financial hardship, asking for a supervisor, responding to "we can't lower the bill," closing with a settlement offer. Include scripts for both insured and uninsured patients. Cover tone, timing, and common objections. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 19. How to Write a Debt Validation Letter for Medical Bills
- [ ] **Slug:** `debt-validation-letter-medical`
- **Date:** November 13, 2025
- **Category:** Templates
- **Keywords:** debt validation letter medical bills, medical debt validation letter, request debt validation
- **Brief:** What debt validation is and why it matters, the 30-day window after first contact, exactly what to request (original creditor, amount breakdown, signed agreement), what collectors must provide vs. what they try to get away with, what to do if they can't validate (delete from credit report), full template letter. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 20. 10 Costly Mistakes People Make With Medical Bills
- [ ] **Slug:** `medical-bill-mistakes`
- **Date:** December 11, 2025
- **Category:** Tips
- **Keywords:** medical bill mistakes, common medical billing mistakes, medical billing errors to avoid
- **Brief:** Cover: (1) paying before getting itemized bill, (2) assuming you owe chargemaster price, (3) ignoring charity care eligibility, (4) not appealing insurance denials, (5) paying collections before validating, (6) missing hardship application deadlines, (7) not negotiating the first offer, (8) using credit card before payment plan, (9) ignoring statute of limitations, (10) not checking the credit report after paying. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 21. Medical Bill Negotiation Checklist: 12 Steps Before You Pay
- [ ] **Slug:** `medical-bill-negotiation-checklist`
- **Date:** January 22, 2026
- **Category:** How-To
- **Keywords:** medical bill negotiation checklist, steps to negotiate medical bill, medical bill checklist
- **Brief:** Comprehensive numbered checklist: (1) request itemized bill, (2) check against EOB, (3) look for common billing errors, (4) check charity care eligibility, (5) check if hospital is nonprofit (IRS 501r), (6) research fair market value for procedures, (7) ask for cash/prompt-pay discount, (8) submit hardship application, (9) negotiate settlement offer, (10) get agreement in writing, (11) request deletion from credit if applicable, (12) verify bill is closed. Include downloadable checklist CTA. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text

---

### 22. Where to Get Free Help With Medical Bills
- [ ] **Slug:** `free-help-medical-bills`
- **Date:** March 5, 2026
- **Category:** Resources
- **Keywords:** free help with medical bills, where to get help with medical bills, free medical bill assistance
- **Brief:** Comprehensive directory: (1) hospital social workers and financial counselors, (2) nonprofit patient advocates (RIP Medical Debt, NeedyMeds, Patient Advocate Foundation), (3) state insurance commissioner offices, (4) legal aid societies for debt collection, (5) disease-specific foundations (cancer, diabetes), (6) CFPB complaint portal, (7) Area Agencies on Aging for seniors. Include a "who to call first" decision tree. 2,000+ words.
- **Step 1 — Before writing:** Invoke `/programmatic-seo` using `.claude/skills/programmatic-seo/SKILL.md` to confirm URL structure, title/meta template, heading outline, and internal linking plan
- **Step 2 — After writing:** Invoke `/seo-audit` using `.claude/skills/seo-audit/SKILL.md` to check title tag (50–60 chars), meta description (150–160 chars), H1 keyword match, E-E-A-T signals, image alt text
