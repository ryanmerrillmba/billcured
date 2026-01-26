import { useParams, Link, Navigate } from 'react-router-dom'
import { CTASection, EmailSignup } from '../components'
import blogPosts from '../data/blog-posts.json'
import './BlogPost.css'

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2)

  return (
    <>
      <article className="blog-post">
        <header className="post-header">
          <div className="container">
            <div className="post-meta">
              <Link to="/blog" className="back-link">&larr; Back to Blog</Link>
              <span className="post-category">{post.category}</span>
            </div>
            <h1>{post.title}</h1>
            <p className="post-date">{post.date}</p>
          </div>
        </header>

        {post.image && (
          <div className="post-featured-image">
            <div className="container">
              <img src={post.image} alt={post.title} />
            </div>
          </div>
        )}

        <div className="post-content">
          <div className="container">
            <div className="content-wrapper">
              {post.content.map((block, index) => {
                if (block.type === 'heading') {
                  return <h2 key={index}>{block.text}</h2>
                }
                if (block.type === 'paragraph') {
                  return <p key={index}>{block.text}</p>
                }
                return null
              })}

              {/* Email Signup CTA */}
              <div className="post-email-signup">
                <EmailSignup
                  headline="Get the Free Guide"
                  subheadline="Discover the 'Billing Blind Spot' that could save you thousands on your next medical bill."
                  buttonText="Send My Free Guide"
                  source={`blog-${post.slug}`}
                />
              </div>

              {/* CTA Box */}
              <div className="post-cta-box">
                <h3>Want the Complete System?</h3>
                <p>
                  This article covers the basics, but the Bill Cured Blueprint gives you
                  everything: word-for-word scripts, ready-to-use templates, and step-by-step
                  action plans.
                </p>
                <Link to="/product" className="btn btn-primary">
                  Get the Blueprint - $49.99
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section related-posts">
          <div className="container">
            <h2>Related Articles</h2>
            <div className="related-grid">
              {relatedPosts.map(related => (
                <Link key={related.slug} to={`/blog/${related.slug}`} className="related-card">
                  <span className="related-category">{related.category}</span>
                  <h3>{related.title}</h3>
                  <span className="related-date">{related.date}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        variant="dark"
        headline="Stop Struggling with Medical Bills"
        subheadline="Get the proven system to negotiate your bills down by 30-70%."
        ctaText="Get the Blueprint - $49.99"
      />
    </>
  )
}

export default BlogPost
