import React from 'react'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
            <div className="about-description">
              <p>I'm a passionate <span className="accent-text">Frontend Developer</span> and <span className="accent-text">UI/UX Designer</span> with a keen eye for creating exceptional digital experiences that blend functionality with stunning visual design.</p>
              <p>My approach combines technical expertise with creative design thinking to deliver solutions that not only look amazing but also provide seamless user experiences that convert and engage.</p>
            </div>
            <a href="/Ayomide_Akintoye_CV.pdf" download className="download-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
              Download Resume
            </a>
          </div>

          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-avatar">
                <img src={`${import.meta.env.BASE_URL}AYO.jpeg`} alt="Profile" />


              </div>
              <div className="floating-elements">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
            </div>
            <h3>Frontend Development</h3>
            <p>Building responsive, performant web applications using modern frameworks like React, Vue, and Next.js with clean, maintainable code.</p>
            <ul className="skill-list">
              <li>React</li>
              <li>JavaScript</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <h3>UI/UX Design</h3>
            <p>Creating intuitive and visually stunning interfaces that enhance user experience and drive engagement through thoughtful design.</p>
            <ul className="skill-list">
              <li>User Research</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Design Systems</li>
            </ul>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"/><path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"/></svg>
            </div>
            <h3>Performance Optimization</h3>
            <p>Analyzing and optimizing web applications for maximum speed, efficiency, and user satisfaction across all devices.</p>
            <ul className="skill-list">
              <li>Core Web Vitals</li>
              <li>Bundle Optimization</li>
              <li>Lazy Loading</li>
              <li>SEO Best Practices</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
