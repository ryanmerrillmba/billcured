import { Link } from 'react-router-dom'
import EmailSignup from './EmailSignup'
import './Hero.css'

function Hero({
  headline,
  subheadline,
  ctaText = 'Get the Blueprint',
  ctaLink = '/product',
  benefits = [],
  image = '/images/hero.jpg',
  showEmailSignup = false,
  emailSignupSource = 'hero',
  secondaryCta = null, // { text, link }
}) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-headline">{headline}</h1>
            <p className="hero-subheadline">{subheadline}</p>

            {showEmailSignup ? (
              <div className="hero-email-signup">
                <EmailSignup
                  buttonText="Send My Free Guide"
                  source={emailSignupSource}
                  showBenefits={true}
                />
                {secondaryCta && (
                  <p className="hero-secondary-cta">
                    Or <Link to={secondaryCta.link}>{secondaryCta.text}</Link>
                  </p>
                )}
              </div>
            ) : (
              <>
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
              </>
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
