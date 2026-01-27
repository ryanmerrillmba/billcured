import { Link } from 'react-router-dom'
import { EmailSignup, TestimonialCard, SEO } from '../components'
import testimonialsData from '../data/testimonials.json'
import './FreeGuide.css'

function FreeGuide() {
  // Use a subset of testimonials
  const testimonials = testimonialsData.slice(0, 3)

  return (
    <>
      <SEO
        title="Free Medical Bill Guide"
        description="80% of medical bills contain errors. Get the free guide that reveals the 'Billing Blind Spot' and learn how to use it to save thousands on your medical bills."
        canonical="https://www.billcured.com/free-guide"
      />
      {/* Hero Section */}
      <section className="free-guide-hero">
        <div className="container">
          <div className="free-guide-hero-grid">
            <div className="free-guide-hero-content">
              <h1>80% of Medical Bills Contain Errors</h1>
              <p className="free-guide-hero-subtitle">
                And they&apos;re missing something that could save you thousands
              </p>
              <div className="free-guide-hero-form">
                <EmailSignup
                  buttonText="Send My Free Guide"
                  source="free-guide-hero"
                  showBenefits={true}
                />
              </div>
            </div>
            <div className="free-guide-hero-image">
              <img
                src="/images/billing-blind-spot-mockup.svg"
                alt="The Billing Blind Spot - Free Guide"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agitation Section */}
      <section className="section free-guide-agitation">
        <div className="container">
          <div className="agitation-content">
            <h2>You&apos;ve Done Everything Right...</h2>
            <p className="agitation-lead">
              You went to the doctor. You used the &quot;right&quot; insurance. You followed all the rules.
            </p>
            <div className="agitation-points">
              <div className="agitation-point">
                <span className="agitation-icon">?</span>
                <p>
                  <strong>Your insurance didn&apos;t cover what you thought it would.</strong> Now you&apos;re stuck with a bill that doesn&apos;t make sense.
                </p>
              </div>
              <div className="agitation-point">
                <span className="agitation-icon">?</span>
                <p>
                  <strong>A surprise bill showed up in your mailbox.</strong> From a doctor you don&apos;t even remember seeing.
                </p>
              </div>
              <div className="agitation-point">
                <span className="agitation-icon">?</span>
                <p>
                  <strong>You&apos;ve spent hours on hold, getting transferred, explaining your situation</strong> — only to hear &quot;there&apos;s nothing we can do.&quot;
                </p>
              </div>
            </div>
            <p className="agitation-reveal">
              But here&apos;s what they&apos;re not telling you: <strong>they don&apos;t know something about your bill that you can use to your advantage.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section free-guide-benefits">
        <div className="container">
          <h2 className="text-center mb-8">What You&apos;ll Discover</h2>
          <p className="section-subtitle text-center">
            In this free 2-page guide, you&apos;ll learn:
          </p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <img
                  src="/images/icon-hidden-truth.svg"
                  alt="Hidden Truth"
                  className="benefit-icon"
                />
              </div>
              <h3>The Hidden Truth</h3>
              <p>
                Why 80% of medical bills contain errors — and the specific types of mistakes billing departments make that cost you money.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <img
                  src="/images/icon-missing-piece.svg"
                  alt="Missing Piece"
                  className="benefit-icon"
                />
              </div>
              <h3>The Missing Piece</h3>
              <p>
                The crucial information that billing departments don&apos;t have about your situation — and how to use it in your favor.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <img
                  src="/images/icon-one-question.svg"
                  alt="One Question"
                  className="benefit-icon"
                />
              </div>
              <h3>The One Question</h3>
              <p>
                A simple question that changes the entire conversation and puts you in control of the negotiation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section free-guide-testimonials">
        <div className="container">
          <h2 className="text-center mb-8">People Just Like You Are Saving Thousands</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section free-guide-final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Start Saving Today</h2>
            <p>
              Get your free copy of &quot;The Billing Blind Spot&quot; and discover what hospitals don&apos;t want you to know about your medical bill.
            </p>
            <div className="final-cta-form">
              <EmailSignup
                buttonText="Send My Free Guide"
                source="free-guide-footer"
                showBenefits={true}
              />
            </div>
            <p className="final-cta-secondary">
              Want the complete system? <Link to="/product">Get the Bill Cured Blueprint</Link> — word-for-word scripts, letter templates, and step-by-step action plans.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default FreeGuide
