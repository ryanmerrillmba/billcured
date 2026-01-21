import { Link } from 'react-router-dom'
import './Success.css'

function Success() {
  return (
    <div className="success-page">
      <div className="container">
        <div className="success-content">
          <div className="success-icon">&#10003;</div>
          <h1>Thank You for Your Purchase!</h1>
          <p className="success-message">
            Your order has been confirmed. You should receive an email shortly
            with your download link for the Bill Cured Blueprint.
          </p>

          <div className="success-next-steps">
            <h2>What&apos;s Next?</h2>
            <ol>
              <li>Check your email for the download link (including spam folder)</li>
              <li>Download your PDF guide</li>
              <li>Start negotiating your medical bills using the scripts and templates</li>
              <li>Reach out to support@billcured.com if you have any questions</li>
            </ol>
          </div>

          <div className="success-support">
            <p>
              Didn&apos;t receive your email? Check your spam folder or contact us at{' '}
              <a href="mailto:support@billcured.com">support@billcured.com</a>
            </p>
          </div>

          <div className="success-actions">
            <Link to="/" className="btn btn-primary">
              Return to Home
            </Link>
            <Link to="/blog" className="btn btn-secondary">
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success
