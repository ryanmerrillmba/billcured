import { Link } from 'react-router-dom'
import { CTASection } from '../components'
import './Resources.css'

function Resources() {
  const resources = [
    {
      category: "Government Resources",
      items: [
        {
          title: "Healthcare.gov",
          description: "Official health insurance marketplace and information about coverage options.",
          url: "https://www.healthcare.gov"
        },
        {
          title: "Medicare.gov",
          description: "Information about Medicare coverage, enrollment, and benefits.",
          url: "https://www.medicare.gov"
        },
        {
          title: "Medicaid.gov",
          description: "Learn about Medicaid eligibility and how to apply in your state.",
          url: "https://www.medicaid.gov"
        }
      ]
    },
    {
      category: "Financial Assistance",
      items: [
        {
          title: "NeedyMeds",
          description: "Database of patient assistance programs for medications and healthcare.",
          url: "https://www.needymeds.org"
        },
        {
          title: "Patient Advocate Foundation",
          description: "Free case management services for patients with chronic or life-threatening conditions.",
          url: "https://www.patientadvocate.org"
        },
        {
          title: "RxAssist",
          description: "Database of patient assistance programs for prescription medications.",
          url: "https://www.rxassist.org"
        }
      ]
    },
    {
      category: "Know Your Rights",
      items: [
        {
          title: "No Surprises Act",
          description: "Federal law protecting patients from unexpected out-of-network medical bills.",
          url: "https://www.cms.gov/nosurprises"
        },
        {
          title: "Consumer Financial Protection Bureau",
          description: "Information about medical debt and your rights when dealing with collectors.",
          url: "https://www.consumerfinance.gov/consumer-tools/medical-debt/"
        },
        {
          title: "Fair Debt Collection Practices Act",
          description: "Federal law that limits what debt collectors can do when collecting debts.",
          url: "https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/fair-debt-collection-practices-act-text"
        }
      ]
    },
    {
      category: "Tools & Calculators",
      items: [
        {
          title: "Healthcare Bluebook",
          description: "Compare fair prices for medical procedures in your area.",
          url: "https://www.healthcarebluebook.com"
        },
        {
          title: "FAIR Health Consumer",
          description: "Estimate costs for medical and dental procedures.",
          url: "https://www.fairhealthconsumer.org"
        }
      ]
    }
  ]

  return (
    <>
      <section className="section resources-hero">
        <div className="container">
          <div className="resources-hero-content">
            <h1>Helpful Resources</h1>
            <p className="resources-lead">
              Free tools, organizations, and information to help you navigate medical bills and healthcare costs.
            </p>
          </div>
        </div>
      </section>

      <section className="section resources-main">
        <div className="container">
          <div className="resources-grid">
            {resources.map((category, index) => (
              <div key={index} className="resource-category">
                <h2>{category.category}</h2>
                <div className="resource-list">
                  {category.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-card"
                    >
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <span className="resource-link">Visit site &rarr;</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section resources-cta-box">
        <div className="container">
          <div className="internal-cta">
            <h2>Want a Complete System?</h2>
            <p>
              While these resources are helpful, the Bill Cured Blueprint gives you a
              complete, step-by-step system with scripts, templates, and strategies
              all in one place.
            </p>
            <Link to="/product" className="btn btn-primary btn-large">
              Get the Blueprint - $50
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        variant="dark"
        headline="Need More Than Resources?"
        subheadline="Get the complete system for negotiating your medical bills."
        ctaText="Get the Blueprint - $50"
      />
    </>
  )
}

export default Resources
