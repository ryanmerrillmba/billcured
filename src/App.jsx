import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer, Hero, CTASection, FAQAccordion, TestimonialCard, BlogCard } from './components'

const sampleFAQ = [
  { question: "Can I really negotiate my medical bills?", answer: "Yes! Studies show that 80% of medical bills contain errors, and most hospitals have financial assistance programs." },
  { question: "What if the hospital says no?", answer: "The guide includes escalation scripts and strategies for when initial attempts don't work." },
]

const sampleTestimonial = {
  quote: "I saved over $12,000 using the scripts in this guide. I couldn't believe how easy it was once I knew what to say.",
  name: "Sarah M.",
  savings: "$12,400"
}

const sampleBlog = {
  slug: "how-to-negotiate-er-bills",
  title: "How to Negotiate an ER Bill After an Accident",
  excerpt: "Learn the exact steps to take when you receive a surprise emergency room bill...",
  date: "January 15, 2024",
  category: "Emergency Bills"
}

function TestPage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          headline="Medical Bill Too High? Here's How to Fight Back."
          subheadline="Most bills contain errors. Learn the exact words to say."
          benefits={['Word-for-word scripts', 'Letter templates', '60-day guarantee']}
        />

        <section className="section">
          <div className="container">
            <h2 className="text-center mb-8">Testimonial Test</h2>
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <TestimonialCard {...sampleTestimonial} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-center mb-8">FAQ Test</h2>
            <FAQAccordion items={sampleFAQ} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-center mb-8">Blog Card Test</h2>
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
              <BlogCard {...sampleBlog} />
            </div>
          </div>
        </section>

        <CTASection />
        <CTASection variant="dark" headline="Limited Time Offer" />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
