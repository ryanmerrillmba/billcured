import { CTASection, FAQAccordion, SEO, FAQPageSchema } from '../components'
import faqData from '../data/faq.json'
import './FAQ.css'

function FAQ() {
  return (
    <>
      <SEO
        title="Medical Bill Negotiation FAQ"
        description="Get answers to common questions about negotiating medical bills. Learn if you can negotiate, how much you can save, and what strategies work best."
        canonical="https://www.billcured.com/faq"
      />
      <FAQPageSchema faqs={faqData} />
      <section className="section faq-hero">
        <div className="container">
          <div className="faq-hero-content">
            <h1>Frequently Asked Questions</h1>
            <p className="faq-lead">
              Everything you need to know about negotiating your medical bills and the Bill Cured Blueprint.
            </p>
          </div>
        </div>
      </section>

      <section className="section faq-main">
        <div className="container">
          <FAQAccordion items={faqData} />
        </div>
      </section>

      <section className="section faq-contact">
        <div className="container">
          <div className="contact-box">
            <h2>Still Have Questions?</h2>
            <p>
              We&apos;re here to help. If you have a question that isn&apos;t answered above,
              reach out to us and we&apos;ll get back to you as soon as possible.
            </p>
            <a href="mailto:support@billcured.com" className="btn btn-secondary">
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Start Saving?"
        subheadline="Get the Blueprint and start negotiating your medical bills today."
        ctaText="Get the Blueprint - $49.99"
      />
    </>
  )
}

export default FAQ
