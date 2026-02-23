import { useState } from 'react';

export default function Navbar({ theme, setTheme }) {
  const [activeLink, setActiveLink] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'expertise', label: 'Skills', icon: '🔧' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'experience', label: 'Experience', icon: '📅' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-brand" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>
          <span className="brand-icon">💻</span>
          <span className="brand-text">
            <span className="brand-name">Portfolio</span>
            <span className="brand-subtitle">Full Stack Dev</span>
          </span>
        </a>

        {/* Hamburger Menu */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Main Navigation */}
        <div className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="nav-links-container">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-label">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="nav-divider"></div>

          {/* Actions */}
          <div className="nav-actions">
            <a href="#contact" className="btn btn-nav-cta" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>
              Get In Touch
            </a>
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
