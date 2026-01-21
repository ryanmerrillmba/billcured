import { Link } from 'react-router-dom'
import './Hero.css'

function Hero({
  headline,
  subheadline,
  ctaText = 'Get the Blueprint',
  ctaLink = '/product',
  benefits = []
}) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-headline">{headline}</h1>
          <p className="hero-subheadline">{subheadline}</p>

          <Link to={ctaLink} className="btn btn-primary btn-large hero-cta">
            {ctaText}
          </Link>

          {benefits.length > 0 && (
            <ul className="hero-benefits">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <span className="benefit-check">&#10003;</span>
                  {benefit}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
