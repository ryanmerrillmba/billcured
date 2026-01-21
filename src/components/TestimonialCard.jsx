import './TestimonialCard.css'

function TestimonialCard({ quote, name, savings, image }) {
  return (
    <div className="testimonial-card">
      <blockquote className="testimonial-quote">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="testimonial-author">
        {image && (
          <img
            src={image}
            alt={name}
            className="testimonial-image"
          />
        )}
        <div className="testimonial-info">
          <cite className="testimonial-name">{name}</cite>
          {savings && (
            <span className="testimonial-savings">Saved {savings}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
