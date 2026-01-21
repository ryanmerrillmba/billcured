import { CTASection } from '../components'
import './About.css'

function About() {
  return (
    <>
      <section className="section about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>We&apos;ve Been Where You Are</h1>
            <p className="about-lead">
              BillCured started from a personal crisis that became a mission to help others.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              It started with a $47,000 hospital bill after an unexpected emergency. Like most people,
              we assumed the bill was final &mdash; that there was nothing we could do but figure out how to pay it.
            </p>
            <p>
              But then we started researching. We learned that medical bills are almost never set in stone.
              We discovered that hospitals have financial assistance programs they don&apos;t advertise. We found
              out that billing departments expect patients to negotiate.
            </p>
            <p>
              Armed with this knowledge, we made a phone call. Then another. We wrote letters. We requested
              itemized bills and found errors. In the end, that $47,000 bill became $11,000 &mdash; a 76% reduction.
            </p>
            <p>
              We realized that if we could do this, anyone could &mdash; they just needed the right tools and
              guidance. That&apos;s why we created the Bill Cured Blueprint.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-mission">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="mission-statement">
              No one should go bankrupt or sacrifice their financial future because of medical bills
              they can&apos;t afford. We&apos;re here to give you the knowledge and confidence to fight back.
            </p>
            <div className="mission-values">
              <div className="value">
                <h3>Empowerment</h3>
                <p>We believe everyone deserves to know their rights and options when facing medical debt.</p>
              </div>
              <div className="value">
                <h3>Accessibility</h3>
                <p>Our guides are written in plain language, with step-by-step instructions anyone can follow.</p>
              </div>
              <div className="value">
                <h3>Results</h3>
                <p>We focus on practical strategies that work, backed by real success stories from real people.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-impact">
        <div className="container">
          <h2 className="text-center mb-8">Our Impact</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="impact-number">$2.4M+</span>
              <span className="impact-label">Total saved by our customers</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number">5,000+</span>
              <span className="impact-label">Medical bills negotiated</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number">47%</span>
              <span className="impact-label">Average bill reduction</span>
            </div>
            <div className="impact-stat">
              <span className="impact-number">98%</span>
              <span className="impact-label">Customer satisfaction rate</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Fight Your Medical Bills?"
        subheadline="Get the same tools and strategies that have helped thousands save money."
        ctaText="Get the Blueprint - $50"
      />
    </>
  )
}

export default About
