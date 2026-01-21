import { Link } from 'react-router-dom'
import './BlogCard.css'

function BlogCard({ slug, title, excerpt, date, category }) {
  return (
    <article className="blog-card">
      <Link to={`/blog/${slug}`} className="blog-card-link">
        {category && <span className="blog-card-category">{category}</span>}
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <div className="blog-card-meta">
          <span className="blog-card-date">{date}</span>
          <span className="blog-card-read">Read more &rarr;</span>
        </div>
      </Link>
    </article>
  )
}

export default BlogCard
