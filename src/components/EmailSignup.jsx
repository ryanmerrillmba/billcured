import { useState } from 'react'
import './EmailSignup.css'

function EmailSignup({
  headline,
  subheadline,
  buttonText = 'Send My Free Guide',
  source = 'website',
  variant = 'default', // 'default', 'dark', 'compact'
  showBenefits = true,
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle', 'loading', 'success', 'error'
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message || 'Check your email for your free guide!')
        setEmail('')

        // Track conversion with gtag if available
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'generate_lead', {
            event_category: 'engagement',
            event_label: source,
          })
        }
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`email-signup email-signup--${variant} email-signup--success`}>
        <div className="email-signup__success">
          <span className="email-signup__success-icon">&#10003;</span>
          <p>{message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`email-signup email-signup--${variant}`}>
      {headline && <h3 className="email-signup__headline">{headline}</h3>}
      {subheadline && <p className="email-signup__subheadline">{subheadline}</p>}

      <form onSubmit={handleSubmit} className="email-signup__form">
        <div className="email-signup__input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="email-signup__input"
            disabled={status === 'loading'}
            aria-label="Email address"
          />
          <button
            type="submit"
            className="btn btn-primary email-signup__button"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : buttonText}
          </button>
        </div>

        {status === 'error' && (
          <p className="email-signup__error">{message}</p>
        )}
      </form>

      {showBenefits && variant !== 'compact' && (
        <ul className="email-signup__benefits">
          <li>
            <span className="email-signup__check">&#10003;</span>
            Instant PDF download
          </li>
          <li>
            <span className="email-signup__check">&#10003;</span>
            Unsubscribe anytime
          </li>
        </ul>
      )}
    </div>
  )
}

export default EmailSignup
