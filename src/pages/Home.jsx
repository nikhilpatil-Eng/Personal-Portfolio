export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-card">
          <div className="hero-wrapper">
            <div className="hero-image-section">
              <div className="hero-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Profile" 
                  className="hero-profile-image"
                />
                <div className="image-badge">Available for Work</div>
              </div>
            </div>
            <div className="hero-content">
              <h1>Full Stack Developer Building Scalable Web Applications</h1>
              <p className="hero-sub">
                Specialized in React, Node.js, Microservices Architecture, and Cloud Deployment.
              </p>
              <p className="hero-desc">
                I design and develop high-performance, production-ready applications serving 10K+ daily users with a focus on scalability and performance optimization.
              </p>
              <div className="hero-cta">
                <a href="#projects" className="btn btn-primary">🔥 View Projects</a>
                <a href="#contact" className="btn btn-ghost">📄 Download Resume</a>
                <a href="#contact" className="btn btn-ghost">📩 Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / METRICS SECTION */}
      <section className="section metrics-section" id="metrics">
        <h2 className="section-title">Impact & Expertise</h2>
        <p className="section-sub">Proven track record of building production-grade systems</p>
        
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon">⚡</div>
            <h3>10K+</h3>
            <p>Daily Requests Handled</p>
            <span className="metric-detail">Production-grade infrastructure</span>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🔌</div>
            <h3>35+</h3>
            <p>REST APIs Developed</p>
            <span className="metric-detail">Enterprise-level scalability</span>
          </div>
          <div className="metric-card">
            <div className="metric-icon">⚙️</div>
            <h3>40%</h3>
            <p>Performance Improvement</p>
            <span className="metric-detail">Optimization expertise</span>
          </div>
          <div className="metric-card">
            <div className="metric-icon">📅</div>
            <h3>3.6+</h3>
            <p>Years Experience</p>
            <span className="metric-detail">Production systems</span>
          </div>
        </div>
      </section>

      {/* 3. TECH EXPERTISE SNAPSHOT */}
      <section className="section expertise-section" id="expertise">
        <h2 className="section-title">Tech Expertise</h2>
        <p className="section-sub">Core competencies across full stack development</p>

        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="expertise-header">
              <h3>🎨 Frontend Engineering</h3>
            </div>
            <ul className="tech-list">
              <li><span className="tech-icon">⚛️</span> React Hooks</li>
              <li><span className="tech-icon">🎯</span> Redux / Context API</li>
              <li><span className="tech-icon">⚡</span> Performance Optimization</li>
              <li><span className="tech-icon">📦</span> Lazy Loading & Code Splitting</li>
              <li><span className="tech-icon">📱</span> Responsive UI Design</li>
            </ul>
          </div>

          <div className="expertise-card">
            <div className="expertise-header">
              <h3>🔧 Backend & APIs</h3>
            </div>
            <ul className="tech-list">
              <li><span className="tech-icon">🟢</span> Node.js</li>
              <li><span className="tech-icon">🚂</span> Express.js</li>
              <li><span className="tech-icon">📡</span> RESTful APIs</li>
              <li><span className="tech-icon">🔐</span> JWT / RBAC</li>
              <li><span className="tech-icon">🔀</span> Microservices Architecture</li>
            </ul>
          </div>

          <div className="expertise-card">
            <div className="expertise-header">
              <h3>☁️ Cloud & DevOps</h3>
            </div>
            <ul className="tech-list">
              <li><span className="tech-icon">☁️</span> AWS EC2 / S3</li>
              <li><span className="tech-icon">🐳</span> Docker & Containerization</li>
              <li><span className="tech-icon">🗄️</span> MongoDB Atlas</li>
              <li><span className="tech-icon">🔄</span> CI/CD Pipelines</li>
              <li><span className="tech-icon">📊</span> System Monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SECTION */}
      <section className="section projects-section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">Production-ready systems with measurable impact</p>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-media">
              <div className="project-placeholder">Healthcare Platform</div>
            </div>
            <h3>Healthcare Management System</h3>
            <p>Multi-role healthcare platform with secure medical record handling, appointment scheduling, and real-time notifications.</p>
            <div className="tech-badges">
              <span className="badge">React</span>
              <span className="badge">Node.js</span>
              <span className="badge">MongoDB</span>
              <span className="badge">AWS</span>
            </div>
            <p className="achievement">📈 Improved system performance by 40% using microservices architecture</p>
            <div className="project-actions">
              <a href="#" className="btn btn-small">Live Demo →</a>
              <a href="#" className="btn btn-small">GitHub →</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-media">
              <div className="project-placeholder">E-commerce Platform</div>
            </div>
            <h3>E-Commerce Platform</h3>
            <p>Full-featured online marketplace with inventory management, payment processing, and admin dashboard for seller operations.</p>
            <div className="tech-badges">
              <span className="badge">React</span>
              <span className="badge">Express</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">Stripe</span>
            </div>
            <p className="achievement">📊 Handles 5K+ daily transactions with 99.8% uptime</p>
            <div className="project-actions">
              <a href="#" className="btn btn-small">Live Demo →</a>
              <a href="#" className="btn btn-small">GitHub →</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-media">
              <div className="project-placeholder">Analytics Dashboard</div>
            </div>
            <h3>Real-Time Analytics Dashboard</h3>
            <p>Interactive dashboard for data visualization, user behavior tracking, and customizable report generation with export capabilities.</p>
            <div className="tech-badges">
              <span className="badge">React</span>
              <span className="badge">Node.js</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">Charts.js</span>
            </div>
            <p className="achievement">⚡ Real-time data processing with sub-second latency</p>
            <div className="project-actions">
              <a href="#" className="btn btn-small">Live Demo →</a>
              <a href="#" className="btn btn-small">GitHub →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SYSTEM ARCHITECTURE / IMPACT SECTION */}
      <section className="section architecture-section" id="architecture">
        <h2 className="section-title">How I Build Scalable Systems</h2>
        <p className="section-sub">Engineering mindset focused on production reliability</p>

        <div className="architecture-container">
          <div className="architecture-diagram">
            <div className="arch-flow">
              <div className="arch-box frontend">
                <span className="arch-icon">⚛️</span>
                <p>React Frontend</p>
              </div>
              <div className="arch-arrow">→</div>
              <div className="arch-box api">
                <span className="arch-icon">📡</span>
                <p>REST API Layer</p>
              </div>
              <div className="arch-arrow">→</div>
              <div className="arch-box backend">
                <span className="arch-icon">🟢</span>
                <p>Node.js Backend</p>
              </div>
              <div className="arch-arrow">→</div>
              <div className="arch-box database">
                <span className="arch-icon">🗄️</span>
                <p>MongoDB</p>
              </div>
              <div className="arch-arrow">→</div>
              <div className="arch-box cloud">
                <span className="arch-icon">☁️</span>
                <p>AWS Deployment</p>
              </div>
            </div>
          </div>

          <div className="architecture-features">
            <h3>Architecture Principles</h3>
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">🏗️</div>
                <div className="feature-content">
                  <h4>Modular Architecture</h4>
                  <p>Clean separation of concerns with reusable components and services</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔐</div>
                <div className="feature-content">
                  <h4>Secure Authentication</h4>
                  <p>JWT tokens, role-based access control, encrypted sensitive data</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-content">
                  <h4>Optimized Queries</h4>
                  <p>Database indexing, caching strategies, query optimization</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">☁️</div>
                <div className="feature-content">
                  <h4>Cloud Hosting</h4>
                  <p>AWS deployment with auto-scaling, CDN, and monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPERIENCE TIMELINE */}
      <section className="section experience-section" id="experience">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-sub">Journey building scalable systems</p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-period">2022 – 2026</div>
              <h3>Software Engineer</h3>
              <p className="timeline-company">Dynamisch IT Ltd</p>
              <ul className="timeline-achievements">
                <li>Built scalable healthcare platform handling 10K+ daily requests</li>
                <li>Optimized database performance, reducing latency by 40%</li>
                <li>Implemented microservices architecture for better scalability</li>
                <li>Developed 35+ REST APIs with comprehensive documentation</li>
                <li>Led code reviews and mentored junior developers</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-period">2020 – 2022</div>
              <h3>Junior Full Stack Developer</h3>
              <p className="timeline-company">Tech Startup</p>
              <ul className="timeline-achievements">
                <li>Developed React-based admin dashboard for 50+ users</li>
                <li>Built RESTful APIs using Node.js and Express</li>
                <li>Implemented authentication and authorization systems</li>
                <li>Collaborated with product team on feature development</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-period">2019 – 2020</div>
              <h3>Frontend Developer</h3>
              <p className="timeline-company">Digital Agency</p>
              <ul className="timeline-achievements">
                <li>Created responsive web applications for diverse clients</li>
                <li>Optimized frontend performance and user experience</li>
                <li>Implemented modern CSS techniques and animations</li>
                <li>Achieved 95+ Lighthouse performance scores</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="section cta-section" id="final-cta">
        <div className="cta-container">
          <h2 className="cta-title">Let's Build Scalable Systems Together</h2>
          <p className="cta-subtitle">
            Ready to collaborate on your next project? Let's create something extraordinary.
          </p>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-primary btn-lg">💼 Hire Me</a>
            <a href="#contact" className="btn btn-ghost btn-lg">📞 Schedule Call</a>
            <a href="#contact" className="btn btn-secondary btn-lg">📄 Download Resume</a>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="site-footer" id="contact">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#expertise">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Social Links</h4>
              <ul className="footer-links">
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub →</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn →</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter →</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Get In Touch</h4>
              <ul className="footer-links">
                <li><a href="mailto:your.email@example.com">Email</a></li>
                <li><a href="tel:+1234567890">Phone</a></li>
                <li><a href="#contact">Contact Form</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Tech Stack</h4>
              <p className="tech-stack">Built with React, Node.js, MongoDB & AWS</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 All Rights Reserved. Built with ⚛️ React & 🟢 Node.js</p>
            <p className="lighthouse-badge">🚀 Lighthouse Score: 95+</p>
          </div>
        </div>
      </footer>
    </>
  );
}
