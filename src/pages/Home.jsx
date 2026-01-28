import { Link } from 'react-router-dom'
import { Hero, CTASection, FAQAccordion, TestimonialCard, SEO, OrganizationSchema, WebSiteSchema } from '../components'
import faqData from '../data/faq.json'
import featuresData from '../data/features.json'
import testimonialsData from '../data/testimonials.json'
import './Home.css'

function Home() {
  const previewFaq = faqData.slice(0, 4)

  return (
    <>
      <SEO
        title="Medical Bill Negotiation Guide"
        description="I spent 10 years setting medical prices. Now I'm showing you how to fix them. 80% of medical bills contain errors. Get the insider guide to reduce your bills."
        canonical="https://www.billcured.com/"
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <Hero
        headline="I Know Why 80% of Medical Bills Have Errors"
        subheadline="I spent 10 years setting these prices. Now I'm showing you how to fix them."
        showEmailSignup={true}
        emailSignupSource="homepage-hero"
        image="/images/billing-blind-spot-mockup.svg"
        secondaryCta={{ text: 'get the complete Blueprint', link: '/product' }}
      />

      {/* Credibility Bar */}
      <section className="social-proof">
        <div className="container">
          <div className="credibility-statement">
            <p>Created by a healthcare billing insider with <strong>10+ years</strong> of executive experience at a billing office processing over <strong>$1 billion annually</strong></p>
          </div>
          <div className="trust-badges">
            <img src="/images/trust_badges.png?v=2" alt="60-Day Money Back Guarantee | Secure Checkout | Instant Download" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section problem-section">
        <div className="container">
          <div className="problem-content">
            <h2>Medical Bills Shouldn&apos;t Ruin Your Life</h2>
            <p className="problem-lead">
              You didn&apos;t ask to get sick or injured. Now you&apos;re staring at a bill that seems impossible to pay.
            </p>
            <div className="problem-points">
              <div className="problem-point">
                <span className="problem-icon">!</span>
                <p><strong>80% of medical bills contain errors</strong> &mdash; duplicate charges, inflated prices, and services you never received.</p>
              </div>
              <div className="problem-point">
                <span className="problem-icon">!</span>
                <p><strong>Medical bills are rarely final</strong> &mdash; hospitals value long-term relationships and are often willing to work with you on costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why I'm Doing This Section */}
      <section className="section why-section">
        <div className="container">
          <div className="why-content">
            <h2>How the Blueprint Helps You</h2>
            <div className="story-text">
              <p>
                Not long ago, my cousin was struck by a truck while riding his motorcycle. It was
                catastrophic. He was rushed to the emergency room where surgeons had to insert a
                titanium rod into his shattered femur.
              </p>
              <p>
                During the surgery, fatty tissue from the bone was ejected into his bloodstream,
                travelling to his brain. It caused a massive blockage. My cousin went from a broken
                leg to being in a vegetative state. He was stuck in that hospital bed for weeks
                while his brain fought to come back online.
              </p>
              <p>
                Miraculously, he recovered. He woke up. His body healed. But as soon as he was
                discharged, the second disaster struck: <strong>The Bills.</strong>
              </p>
              <p>
                Hundreds of thousands of dollars. Multiple insurance companies pointing fingers at
                each other. Confusing codes. Duplicates. It was a financial disaster served
                to a man who had just fought for his life.
              </p>
              <p>
                He obviously needed help, otherwise the financial impact of the accident would affect
                the rest of his life. So I stepped in: I had spent 10 years as an executive in the
                medical billing industry, overseeing over $1 Billion in billing annually. I didn&apos;t
                look at the bill as fixed and immovable, but as something that could be reviewed,
                reprocessed, and negotiated to a more realistic number.
              </p>
              <p className="story-highlight">
                We reduced his bill by 80%.
              </p>
              <p>
                After helping my cousin, I started talking to others and realized many were facing
                the exact same issues. Medical needs that resulted in ridiculous bills. They described
                the concern&mdash;even panic&mdash;when the bill arrived and they realized that a
                necessary medical procedure could ruin them financially. Their stories moved me to
                create this program to help others in their time of need.
              </p>
              <p>
                I&apos;ve taken everything I learned from managing $1 Billion in medical bills and
                condensed it into a simple, step-by-step guide.
              </p>
              <div className="what-you-get">
                <h3>What You Get:</h3>
                <ul>
                  <li>Comprehensive PDF guide with step-by-step instructions</li>
                  <li>Phone scripts for talking to billing departments</li>
                  <li>Letter templates for written disputes</li>
                  <li>Bill review checklist to catch common errors</li>
                  <li>Financial assistance application guide</li>
                </ul>
              </div>
              <div className="story-cta">
                <Link to="/product" className="btn btn-primary">Get the Blueprint - $49.99</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="text-center mb-8">How the Blueprint Works</h2>
          <p className="section-subtitle text-center">
            The Bill Cured Blueprint gives you the exact process I use to help with medical bills
          </p>
          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{getFeatureIcon(feature.icon)}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="text-center mb-8">Real People, Real Savings</h2>
          <div className="testimonials-grid">
            {testimonialsData.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="testimonials-cta">
            <Link to="/product" className="btn btn-primary">Get the Blueprint - $49.99</Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section faq-preview-section">
        <div className="container">
          <h2 className="text-center mb-8">Common Questions</h2>
          <FAQAccordion items={previewFaq} />
          <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
            <Link to="/faq" className="btn btn-secondary">View All FAQs</Link>
          </div>
        </div>
      </section>

      <CTASection
        variant="dark"
        headline="Stop Overpaying for Medical Care"
        subheadline="Get the insider knowledge that helped my family reduce their bills by 80%."
        ctaText="Get the Blueprint - $49.99"
      />
    </>
  )
}

function getFeatureIcon(icon) {
  const icons = {
    script: '📝',
    letter: '✉️',
    checklist: '✅',
    magnify: '🔍',
    money: '💰',
    shield: '🛡️'
  }
  return icons[icon] || '📋'
}

export default Home
