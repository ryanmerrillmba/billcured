import { CTASection, SEO } from '../components'
import './About.css'

function About() {
  return (
    <>
      <SEO
        title="About BillCured"
        description="After 10 years as a healthcare billing executive, I'm revealing the system that helped my family reduce their medical bills by 80%."
        canonical="https://www.billcured.com/about"
      />
      <section className="section about-hero">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <h1>I Used to Set the Prices. Now I&apos;m Helping You Fight Them.</h1>
              <p className="about-byline">Ryan Merrill, Healthcare Billing Expert</p>
              <p className="about-lead">
                After 10 years on the inside of healthcare billing, I know exactly why 80% of medical bills contain errors&mdash;and how to use that knowledge to reduce them.
              </p>
            </div>
            <div className="about-hero-image">
              <img src="/images/ryan-merrill.jpg" alt="Ryan Merrill - Healthcare Billing Expert" />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-insider">
        <div className="container">
          <div className="insider-content">
            <h2>The Insider Perspective</h2>
            <p>
              My career in healthcare started on the insurance side&mdash;I enrolled hundreds
              of people into private insurance plans. That&apos;s where I first saw how
              confusing the system was for everyday people.
            </p>
            <p>
              Then I switched to a large billing office in the Mountain West. I rose to
              an executive position and watched billions of dollars in transactions move
              through the system. I saw exactly how prices were set, how claims were
              processed, and where the errors came from.
            </p>
            <p>
              After more than a decade as an insider, I understand how to navigate
              healthcare and insurance in ways most people never will. I&apos;ve seen it all
              from the inside.
            </p>
            <p>
              I know exactly why 80% of medical bills contain errors. And I know those errors
              are systematically biased against patients and toward doctors, hospitals, and
              the businesses that support the system.
            </p>
            <div className="insider-credentials">
              <div className="credential">
                <span className="credential-number">10+</span>
                <span className="credential-label">Years in Healthcare Billing</span>
              </div>
              <div className="credential">
                <span className="credential-number">$1B+</span>
                <span className="credential-label">Annual Billings Processed</span>
              </div>
              <div className="credential">
                <span className="credential-number">80%</span>
                <span className="credential-label">Family Member&apos;s Bill Reduction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-book">
        <div className="container">
          <div className="book-content">
            <h2>Authored</h2>
            <div className="book-info">
              <div className="book-details">
                <h3>
                  <a href="https://www.amazon.com/Delay-Deny-Depose-Killing-America-ebook/dp/B0G33N5JXW" target="_blank" rel="noopener noreferrer">
                    Delay Deny Depose
                  </a>
                </h3>
                <p>
                  In December 2024, the CEO of America&apos;s largest health insurer was assassinated
                  on a Manhattan sidewalk. The shell casings left at the scene were etched with
                  &ldquo;Delay,&rdquo; &ldquo;Deny,&rdquo; and &ldquo;Depose&rdquo;&mdash;words that
                  millions of Americans understood immediately.
                </p>
                <p>
                  My book argues this tragedy was a symptom of a system that has failed. Through
                  80 years of policy accidents and corporate capture, American healthcare has
                  been deliberately designed to prioritize finance over healing. I trace how
                  WWII wage freezes, Medicare&apos;s &ldquo;Faustian bargain,&rdquo; HMO acts, and
                  Wall Street&apos;s private equity gold rush created the crisis we face today.
                </p>
                <p>
                  <a href="https://www.amazon.com/Delay-Deny-Depose-Killing-America-ebook/dp/B0G33N5JXW" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Get the Book on Amazon
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-mission">
        <div className="container">
          <div className="mission-content">
            <h2>Why I Created BillCured</h2>
            <p className="mission-statement">
              The healthcare billing system is very confusing. I spent years helping
              build it. Now I&apos;m showing you how to use the system to protect yourself from
              run away medical bills.
            </p>
            <div className="mission-values">
              <div className="value">
                <h3>Insider Knowledge</h3>
                <p>I&apos;m not guessing about how billing works. I lived it for over a decade.</p>
              </div>
              <div className="value">
                <h3>Real Results</h3>
                <p>These strategies worked for my own family when we needed them most.</p>
              </div>
              <div className="value">
                <h3>Accessible to Everyone</h3>
                <p>The guides are written in plain language with step-by-step instructions anyone can follow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Get the Insider Advantage"
        subheadline="The same knowledge that helped my family reduce their bills by 80%."
        ctaText="Get the Blueprint - $49.99"
      />
    </>
  )
}

export default About
