import { Link } from 'react-router-dom'
import './CTASection.css'

function CTASection({
  headline = "Ready to Fight Your Medical Bills?",
  subheadline = "Get the exact scripts and templates you need.",
  ctaText = "Get the Blueprint - $49.99",
  ctaLink = "/product",
  variant = "default"
}) {
  return (
    <section className={`cta-section ${variant === 'dark' ? 'cta-dark' : ''}`}>
      <div className="container">
        <div className="cta-content">
          <h2>{headline}</h2>
          <p>{subheadline}</p>
          <Link to={ctaLink} className="btn btn-primary btn-large">
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
