import { useState } from 'react'
import { FAQAccordion, TestimonialCard } from '../components'
import { redirectToCheckout, PRODUCTS } from '../utils/stripe'
import testimonialsData from '../data/testimonials.json'
import './Product.css'

const productFaq = [
  {
    question: "What exactly do I get with the Bill Cured Blueprint?",
    answer: "You get a comprehensive PDF guide including word-for-word negotiation scripts for phone calls, professional letter templates for written disputes, a step-by-step action plan, information about financial assistance programs, and strategies for dealing with collections. It's everything you need in one place."
  },
  {
    question: "Will this work for my specific situation?",
    answer: "The Blueprint covers a wide range of situations including ER bills, hospital stays, surgery costs, specialist visits, bills in collections, and more. The strategies work whether you're insured, underinsured, or uninsured."
  },
  {
    question: "How is this delivered?",
    answer: "Immediately after purchase, you'll receive an email with a download link. The Blueprint is a PDF that you can read on any device and keep forever."
  },
  {
    question: "What if it doesn't work for me?",
    answer: "We offer a 60-day money-back guarantee. If you're not satisfied for any reason, just email us and we'll refund your purchase in full. No questions asked."
  }
]

function Product() {
  const [includeUpsell, setIncludeUpsell] = useState(false)

  const basePrice = 49.99
  const upsellPrice = 149.99
  const totalPrice = includeUpsell ? (basePrice + upsellPrice).toFixed(2) : basePrice.toFixed(2)

  const handleCheckout = async () => {
    const priceIds = [PRODUCTS.BLUEPRINT.priceId]
    if (includeUpsell) {
      priceIds.push(PRODUCTS.ESCALATION.priceId)
    }
    await redirectToCheckout(priceIds)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <span className="product-badge">The Complete System</span>
            <h1>The Bill Cured Blueprint</h1>
            <p className="product-tagline">
              Cut Your Medical Bills by 30-70% Using Proven Scripts and Templates
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="product-main">
        <div className="container">
          <div className="product-grid">
            {/* Left Column - Details */}
            <div className="product-details">
              <div className="product-intro">
                <p className="lead">
                  Stop staring at that overwhelming medical bill wondering what to do.
                  The Bill Cured Blueprint gives you the exact words to say and steps
                  to take to negotiate your bills down &mdash; often by 30-70%.
                </p>
              </div>

              <div className="product-section">
                <h2>What&apos;s Inside the Blueprint</h2>
                <ul className="feature-list">
                  <li>
                    <span className="check">&#10003;</span>
                    <div>
                      <strong>Word-for-Word Phone Scripts</strong>
                      <p>Never wonder what to say. Just read these proven scripts that get results.</p>
                    </div>
                  </li>
                  <li>
                    <span className="check">&#10003;</span>
                    <div>
                      <strong>Professional Letter Templates</strong>
                      <p>Dispute letters, financial assistance applications, and appeal letters ready to customize.</p>
                    </div>
                  </li>
                  <li>
                    <span className="check">&#10003;</span>
                    <div>
                      <strong>Step-by-Step Action Plan</strong>
                      <p>Know exactly what to do first, second, and third. No guessing required.</p>
                    </div>
                  </li>
                  <li>
                    <span className="check">&#10003;</span>
                    <div>
                      <strong>Itemized Bill Analysis Guide</strong>
                      <p>Learn how to spot errors, duplicate charges, and inflated prices on your bill.</p>
                    </div>
                  </li>
                  <li>
                    <span className="check">&#10003;</span>
                    <div>
                      <strong>Financial Assistance Secrets</strong>
                      <p>Discover programs hospitals don&apos;t advertise that can reduce or eliminate your bill.</p>
                    </div>
                  </li>
                  <li>
                    <span className="check">&#10003;</span>
                    <div>
                      <strong>Collections Defense Strategies</strong>
                      <p>What to do if your bill has gone to collections. It&apos;s not too late.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="product-section">
                <h2>Who This Is For</h2>
                <div className="audience-cards">
                  <div className="audience-card">
                    <h3>Emergency Survivors</h3>
                    <p>You or a loved one had an unexpected ER visit or hospital stay, and now you&apos;re facing a massive bill you didn&apos;t plan for.</p>
                  </div>
                  <div className="audience-card">
                    <h3>Young Families</h3>
                    <p>Between pregnancy, delivery, and kids getting sick, the medical bills are piling up faster than you can pay them.</p>
                  </div>
                  <div className="audience-card">
                    <h3>Chronic Illness Patients</h3>
                    <p>Ongoing treatments and doctor visits mean ongoing bills. You need a system to manage the financial burden.</p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="product-section">
                <h2>What Our Customers Say</h2>
                <div className="product-testimonials">
                  {testimonialsData.slice(0, 2).map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Purchase Box */}
            <div className="product-sidebar">
              <div className="purchase-box">
                <div className="purchase-header">
                  <h3>Bill Cured Blueprint</h3>
                  <div className="price">
                    <span className="price-current">${basePrice}</span>
                    <span className="price-note">one-time payment</span>
                  </div>
                </div>

                <div className="purchase-includes">
                  <p className="includes-label">Includes:</p>
                  <ul>
                    <li>&#10003; Complete PDF Guide</li>
                    <li>&#10003; Phone Negotiation Scripts</li>
                    <li>&#10003; Letter Templates</li>
                    <li>&#10003; Action Plan Checklist</li>
                    <li>&#10003; Financial Assistance Guide</li>
                    <li>&#10003; Lifetime Access</li>
                  </ul>
                </div>

                {/* Upsell */}
                <div className={`upsell-box ${includeUpsell ? 'upsell-selected' : ''}`}>
                  <label className="upsell-checkbox">
                    <input
                      type="checkbox"
                      checked={includeUpsell}
                      onChange={(e) => setIncludeUpsell(e.target.checked)}
                    />
                    <span className="upsell-check"></span>
                    <div className="upsell-content">
                      <span className="upsell-badge">Add-On</span>
                      <strong>Escalation Playbook</strong>
                      <span className="upsell-price">+${upsellPrice}</span>
                    </div>
                  </label>
                  <p className="upsell-description">
                    Advanced scripts for when they say &ldquo;no.&rdquo; Supervisor escalation tactics,
                    patient advocate strategies, and regulatory complaint templates.
                  </p>
                </div>

                <div className="purchase-total">
                  <span>Total:</span>
                  <span className="total-price">${totalPrice}</span>
                </div>

                <button className="btn btn-primary btn-large purchase-btn" onClick={handleCheckout}>
                  Get Instant Access
                </button>

                <div className="purchase-guarantee">
                  <span className="guarantee-icon">🛡️</span>
                  <p>
                    <strong>60-Day Money-Back Guarantee</strong><br />
                    Not satisfied? Get a full refund, no questions asked.
                  </p>
                </div>

                <div className="purchase-secure">
                  <span>🔒</span> Secure checkout powered by Stripe
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section product-faq">
        <div className="container">
          <h2 className="text-center mb-8">Questions About the Blueprint</h2>
          <FAQAccordion items={productFaq} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section product-final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Your Medical Bill Doesn&apos;t Have to Ruin Your Finances</h2>
            <p>
              For a small investment, you can get the tools to potentially
              save thousands on your medical bills. The average customer saves 47%.
            </p>
            <button className="btn btn-primary btn-large" onClick={handleCheckout}>
              Get the Blueprint - ${totalPrice}
            </button>
            <p className="final-cta-guarantee">
              60-day money-back guarantee &bull; Instant download
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
