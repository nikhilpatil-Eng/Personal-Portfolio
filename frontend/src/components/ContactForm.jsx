import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        throw new Error('Please enter a valid email address');
      }

      // Simulate API call (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <h3>📧 Get In Touch</h3>
        <p>Fill out the form below and I'll get back to you as soon as possible.</p>
      </div>

      {status.success && (
        <div className="alert alert-success">
          ✅ Thank you for your message! I'll respond within 24 hours.
        </div>
      )}

      {status.error && (
        <div className="alert alert-error">
          ❌ {status.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Your Name"
            required
            disabled={status.loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="your.email@example.com"
            required
            disabled={status.loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            placeholder="Project Inquiry / Job Opportunity / General"
            disabled={status.loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows={5}
            placeholder="Tell me about your project, what you're looking for, or just say hello!"
            required
            disabled={status.loading}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-full"
          disabled={status.loading}
        >
          {status.loading ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            '📤 Send Message'
          )}
        </button>
      </form>

      <div className="contact-info">
        <p className="response-time">
          ⏱️ Typical response time: 24-48 hours
        </p>
        <div className="alternative-contacts">
          <p>Or reach out directly:</p>
          <div className="contact-links">
            <a href="mailto:contact@nikhilpatil.dev" className="contact-link">
              📧 contact@nikhilpatil.dev
            </a>
            <a href="https://linkedin.com/in/nikhil-patil-b47a56217" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="contact-link">
              💼 LinkedIn
            </a>
            <a href="https://github.com/nikhilpatil-Eng" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="contact-link">
              🔗 GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
