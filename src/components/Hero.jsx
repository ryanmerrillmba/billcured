import { Link } from 'react-router-dom'
import './Hero.css'

function Hero({
  headline,
  subheadline,
  ctaText = 'Get the Blueprint',
  ctaLink = '/product',
  benefits = [],
  image = '/images/hero.jpg'
}) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
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
          <div className="hero-image">
            <img src={image} alt="Take control of your medical bills" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
