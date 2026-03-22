import React, { useState } from 'react';
import ContactForm from './ContactForm';

export default function FooterSection() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-content">
        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="contact-modal">
            <div className="contact-modal-overlay" onClick={() => setShowContactForm(false)}></div>
            <div className="contact-modal-content">
              <button 
                className="modal-close" 
                onClick={() => setShowContactForm(false)}
                aria-label="Close contact form"
              >
                ✕
              </button>
              <ContactForm />
            </div>
          </div>
        )}

        <div className="footer-grid">
          <div className="footer-section">
            <h4>💼 Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#expertise">Skills & Tech</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>🔗 Social Links</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/nikhilpatil-Eng" target="_blank" rel="noopener noreferrer">GitHub →</a></li>
              <li><a href="https://linkedin.com/in/nikhil-patil-b47a56217" target="_blank" rel="noopener noreferrer">LinkedIn →</a></li>
              <li><a href="https://x.com/patil_nikhil__?s=21" target="_blank" rel="noopener noreferrer">Twitter →</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>📞 Get In Touch</h4>
            <ul className="footer-links">
              <li>
                <button 
                  className="contact-form-trigger"
                  onClick={() => setShowContactForm(true)}
                >
                  📧 Contact Form
                </button>
              </li>
              <li><a href="mailto:contact@nikhilpatil.dev">� Professional Email</a></li>
              <li><a href="https://calendly.com/nikhilpatil" target="_blank" rel="noopener noreferrer">📅 Schedule Call</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>📍 Location</h4>
            <p className="location-text">Pune, Maharashtra, India</p>
            <p className="availability">🟢 Available for Full-Time Roles</p>
            <div className="remote-work">
              <p>🌐 Open to Remote Opportunities</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Nikhil Patil. All Rights Reserved. Built with ⚛️ React & 🟢 Node.js</p>
          <p className="tech-stack">Deployed with Docker & AWS | Secured with Best Practices</p>
        </div>
      </div>
    </footer>
  );
}