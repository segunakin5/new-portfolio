import React from 'react'

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client <span className="gradient-text">Testimonials</span></h2>
          <p className="section-subtitle">Don't just take my word for it. Here's what clients say about working with me.</p>
        </div>

        <div className="testimonial-card">
          <div className="stars"><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span></div>
          <blockquote>
            "Ayomide's portfolio work speaks for itself, but working with him personally was even better. Professional, creative, and delivers on time - highly recommended!"
          </blockquote>
          <div className="testimonial-author">
            <div className="author-avatar">👨</div>
            <div className="author-info">
              <div className="author-name">ADESOJI OLAITAN</div>
              <div className="author-title">Founder of Vanguard Partners</div>
              <div className="author-link">Vanguard partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
