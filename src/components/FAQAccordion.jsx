import { useState } from 'react'
import './FAQAccordion.css'

function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? 'faq-open' : ''}`}
        >
          <button
            className="faq-question"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-content">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion
