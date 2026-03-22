import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { OptimizedProfileImage } from './LazyImage';

export default function HeroSection() {
  return (
    <section className="section hero-section" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting">
            Hi, I'm <span className="hero-name">Nikhil Patil</span>
          </div>
          <div className="hero-title">
            <span className="title-word">Full</span>
            <span className="title-word">Stack</span>
            <span className="title-word">Developer</span>
          </div>
          <p className="hero-subtitle">
            Building scalable, high-performance web applications for real-world impact
          </p>
          
          <div className="hero-description">
            <p className="hero-experience">
              3.6+ years of experience developing enterprise-grade systems serving 10K+ daily users. 
              Specialized in React, Node.js, microservices architecture, REST APIs, and performance optimization.
            </p>
            <div className="tech-stack">
              <span className="tech-item">React</span>
              <span className="tech-separator">•</span>
              <span className="tech-item">Node.js</span>
              <span className="tech-separator">•</span>
              <span className="tech-item">MongoDB</span>
              <span className="tech-separator">•</span>
              <span className="tech-item">MySQL</span>
              <span className="tech-separator">•</span>
              <span className="tech-item">AWS</span>
              <span className="tech-separator">•</span>
              <span className="tech-item">Microservices</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-large">
              🚀 View My Work
            </a>
            <a href="https://github.com/nikhilpatil-Eng" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-large">
              💻 GitHub
            </a>
            <a href="#contact" className="btn btn-outline btn-large">
              📧 Get In Touch
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <OptimizedProfileImage className="profile-photo" />
        </div>
      </div>
    </section>
  );
}