import { useState } from 'react'
import { BlogCard, CTASection, SEO } from '../components'
import blogPosts from '../data/blog-posts.json'
import './Blog.css'

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))]

  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All'
    ? sortedPosts
    : sortedPosts.filter(post => post.category === selectedCategory)

  return (
    <>
      <SEO
        title="Medical Bill Tips & Guides"
        description="Expert guides, negotiation strategies, and tips to help you understand and reduce your medical bills. Learn how to fight back against unfair healthcare costs."
        canonical="https://www.billcured.com/blog"
      />
      <section className="section blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1>Medical Bill Resources</h1>
            <p className="blog-lead">
              Expert guides, strategies, and tips to help you understand and negotiate your medical bills.
            </p>
          </div>
        </div>
      </section>

      <section className="section blog-main">
        <div className="container">
          {/* Category Filter */}
          <div className="blog-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {filteredPosts.map(post => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
              />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="no-posts">No posts found in this category.</p>
          )}
        </div>
      </section>

      <CTASection
        headline="Want the Complete System?"
        subheadline="Get all our scripts, templates, and strategies in one comprehensive guide."
        ctaText="Get the Blueprint - $49.99"
      />
    </>
  )
}

export default Blog
