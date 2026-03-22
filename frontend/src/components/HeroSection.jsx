import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-card">
        <div className="hero-wrapper">

          <div className="hero-image-section">
            <div className="hero-image-container">
              <img
                src="/images/profile_photo.png" 
                alt="Profile"How I Build Scalable Systems
                className="hero-profile-image"
              />
              <div className="image-badge">Available for Work</div>
            </div>
          </div>

          <div className="hero-content">
            <h1>
             <i> Hi, I'm <span className="highlight">Nikhil Patil</span>
           </i> </h1>

            <h2 className="hero-title">
              Full Stack Developer
            </h2>

            <p className="hero-sub">
              Building scalable, high-performance web applications for real-world impact
            </p>

            <p className="hero-desc">
              3.6+ years of experience developing enterprise-grade systems serving 10K+ daily users. 
              Specialized in React, Node.js, microservices architecture, REST APIs, and performance optimization.
            </p>

            <div className="tech-stack">
              React • Node.js • MongoDB • MySQL • AWS • Microservices
            </div>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">🔥 View My Work</a>
              <a href="https://github.com/nikhilpatil-Eng" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">🔗 GitHub</a>
              <a href="mailto:nikhilpatil.ofc@gmail.com" className="btn btn-ghost">📧 Email Me</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}