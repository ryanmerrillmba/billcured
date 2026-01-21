import './Legal.css'

function Privacy() {
  return (
    <div className="legal-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: January 2024</p>

        <section className="legal-section">
          <h2>Introduction</h2>
          <p>
            BillCured (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed
            to protecting your personal data. This privacy policy explains how we collect, use, and safeguard
            your information when you visit our website or purchase our products.
          </p>
        </section>

        <section className="legal-section">
          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <ul>
            <li>Name and email address when you make a purchase</li>
            <li>Payment information (processed securely by Stripe)</li>
            <li>Any information you provide when contacting support</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li>Device and browser information</li>
            <li>IP address and general location</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website or source</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Send you purchase confirmations and product updates</li>
            <li>Respond to your questions and support requests</li>
            <li>Improve our website and products</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Payment Processing</h2>
          <p>
            All payment processing is handled by Stripe, a PCI-compliant payment processor.
            We do not store your credit card information on our servers. Please review
            Stripe&apos;s privacy policy for information about how they handle your payment data.
          </p>
        </section>

        <section className="legal-section">
          <h2>Data Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li>Payment processors (Stripe) to complete transactions</li>
            <li>Email service providers to send you order confirmations</li>
            <li>Analytics providers to help us understand website usage</li>
            <li>Law enforcement if required by law</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Cookies</h2>
          <p>
            We use cookies and similar technologies to improve your experience, analyze site traffic,
            and understand where our visitors come from. You can control cookies through your browser settings.
          </p>
        </section>

        <section className="legal-section">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p>To exercise these rights, contact us at privacy@billcured.com.</p>
        </section>

        <section className="legal-section">
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            data against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="legal-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any material
            changes by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy or our privacy practices,
            please contact us at:
          </p>
          <p>
            Email: privacy@billcured.com
          </p>
        </section>
      </div>
    </div>
  )
}

export default Privacy
