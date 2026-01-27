import { SEO } from '../components'
import './Legal.css'

function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="BillCured's terms of service govern your use of our website and digital products. Read our terms, refund policy, and intellectual property guidelines."
        canonical="https://www.billcured.com/terms"
        noindex={true}
      />
      <div className="legal-page">
      <div className="container">
        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated: January 2024</p>

        <section className="legal-section">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using BillCured.com and purchasing our products, you agree to be bound
            by these Terms of Service. If you do not agree to these terms, please do not use our
            website or purchase our products.
          </p>
        </section>

        <section className="legal-section">
          <h2>Products and Services</h2>
          <p>
            BillCured offers digital products, including the Bill Cured Blueprint and related
            materials, designed to help consumers negotiate their medical bills. Our products
            provide educational information and strategies based on publicly available information
            and common negotiation practices.
          </p>
        </section>

        <section className="legal-section">
          <h2>No Legal or Financial Advice</h2>
          <p>
            <strong>Important:</strong> The information provided in our products is for educational
            purposes only and does not constitute legal, financial, or medical advice. We are not
            attorneys, financial advisors, or healthcare professionals.
          </p>
          <p>
            Results may vary based on your individual circumstances, including but not limited to
            the healthcare provider, insurance coverage, and specific charges involved. We do not
            guarantee any specific outcomes or savings amounts.
          </p>
        </section>

        <section className="legal-section">
          <h2>Purchases and Payment</h2>
          <p>
            All purchases are processed securely through Stripe. Prices are listed in US dollars.
            By making a purchase, you represent that you have the legal right to use the payment
            method provided.
          </p>
        </section>

        <section className="legal-section">
          <h2>Refund Policy</h2>
          <p>
            We offer a 60-day money-back guarantee on all purchases. If you are not satisfied with
            your purchase for any reason, contact us at support@billcured.com within 60 days of
            purchase for a full refund.
          </p>
        </section>

        <section className="legal-section">
          <h2>Intellectual Property</h2>
          <p>
            All content, including but not limited to text, graphics, logos, and digital products,
            is the property of BillCured and is protected by copyright and other intellectual
            property laws.
          </p>
          <p>
            Upon purchase, you are granted a personal, non-transferable license to use the
            purchased materials for your own personal use. You may not:
          </p>
          <ul>
            <li>Redistribute, sell, or share the materials with others</li>
            <li>Modify or create derivative works</li>
            <li>Use the materials for commercial purposes</li>
            <li>Remove any copyright or proprietary notices</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate information when making purchases</li>
            <li>Use our products only for lawful purposes</li>
            <li>Not attempt to gain unauthorized access to our systems</li>
            <li>Not use our products to harass or threaten others</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, BillCured shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages resulting from
            your use of our products or services.
          </p>
          <p>
            Our total liability for any claims arising from your use of our products shall not
            exceed the amount you paid for the product.
          </p>
        </section>

        <section className="legal-section">
          <h2>Disclaimer of Warranties</h2>
          <p>
            Our products are provided &ldquo;as is&rdquo; without warranties of any kind, either express or
            implied, including but not limited to implied warranties of merchantability, fitness
            for a particular purpose, or non-infringement.
          </p>
        </section>

        <section className="legal-section">
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective
            immediately upon posting to our website. Your continued use of our website or products
            after changes are posted constitutes your acceptance of the modified terms.
          </p>
        </section>

        <section className="legal-section">
          <h2>Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the
            United States, without regard to conflict of law principles.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact us at:
          </p>
          <p>
            Email: support@billcured.com
          </p>
        </section>
      </div>
      </div>
    </>
  )
}

export default Terms
