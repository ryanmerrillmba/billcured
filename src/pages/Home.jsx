import { Link } from 'react-router-dom'
import { Hero, CTASection, FAQAccordion, TestimonialCard } from '../components'
import faqData from '../data/faq.json'
import featuresData from '../data/features.json'
import testimonialsData from '../data/testimonials.json'
import './Home.css'

function Home() {
  const previewFaq = faqData.slice(0, 4)

  return (
    <>
      <Hero
        headline="80% of Medical Bills Contain Errors"
        subheadline="They're missing something very important. Get the free guide that reveals why—and how to use it to save thousands."
        showEmailSignup={true}
        emailSignupSource="homepage-hero"
        image="/images/billing-blind-spot-mockup.svg"
        secondaryCta={{ text: 'get the complete Blueprint', link: '/product' }}
      />

      {/* Social Proof Bar */}
      <section className="social-proof">
        <div className="container">
          <div className="social-proof-stats">
            <div className="stat">
              <span className="stat-number">$2.4M+</span>
              <span className="stat-label">Saved by customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">Bills negotiated</span>
            </div>
            <div className="stat">
              <span className="stat-number">47%</span>
              <span className="stat-label">Average savings</span>
            </div>
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
                <p><strong>Hospitals expect you to negotiate</strong> &mdash; their listed prices are just the starting point, not the final answer.</p>
              </div>
              <div className="problem-point">
                <span className="problem-icon">!</span>
                <p><strong>Financial assistance exists</strong> &mdash; but they don&apos;t advertise it. You have to know how to ask.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="text-center mb-8">Everything You Need to Fight Back</h2>
          <p className="section-subtitle text-center">
            The Bill Cured Blueprint gives you proven tools that work
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
        subheadline="Join thousands who have taken control of their medical bills."
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
