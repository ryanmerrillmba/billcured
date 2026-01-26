import { Link } from 'react-router-dom'
import EmailSignup from './EmailSignup'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/logo_inverted.png" alt="BillCured" className="footer-logo-img" />
            <p className="footer-tagline">
              Helping you fight back against unfair medical bills.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/product">Get the Blueprint</Link>
            </nav>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <nav>
              <Link to="/blog">Blog</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/resources">Resources</Link>
            </nav>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <nav>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </nav>
          </div>

          <div className="footer-newsletter">
            <h4>Free Guide</h4>
            <p className="footer-newsletter-text">
              Get &quot;The Billing Blind Spot&quot; - our free guide to finding errors in your medical bills.
            </p>
            <EmailSignup
              variant="compact"
              buttonText="Get It Free"
              source="footer"
              showBenefits={false}
            />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} BillCured. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
