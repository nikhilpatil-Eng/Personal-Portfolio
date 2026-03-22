import React from 'react';

export default function CTASection() {
  return (
    <section className="section cta-section" id="final-cta">
      <div className="cta-container">
        <h2 className="cta-title">Let's Build Scalable Systems Together</h2>
        <p className="cta-subtitle">
          Ready to collaborate on your next project? Let's create something extraordinary.
        </p>
        <div className="cta-actions">
          <a href="#contact" className="btn btn-primary btn-lg">💼 Hire Me</a>
          <a href="#contact" className="btn btn-ghost btn-lg">📞 Schedule Call</a>
          <a href="/resume/Nikhil_Patil_Resume.pdf" download className="btn btn-primary">📄 Download Resume</a>
        </div>
      </div>
    </section>
  );
}