import React from 'react';

export default function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-sub">Production-ready systems with measurable impact</p>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-media">
            <div className="project-placeholder">Healthcare CTMS Platform</div>
          </div>
          <h3>Healthcare CTMS Web Application</h3>
          <p>Enterprise healthcare platform for clinical trial management with secure medical record handling, role-based access control, audit logs, and HIPAA-aligned compliance.</p>
          <div className="tech-badges">
            <span className="badge">React.js</span>
            <span className="badge">Node.js</span>
            <span className="badge">MongoDB</span>
            <span className="badge">AWS</span>
          </div>
          <p className="achievement">✨ Key Achievements:</p>
          <ul className="project-details">
            <li>📡 Designed 35+ RESTful APIs handling 10K+ daily requests</li>
            <li>⚡ Optimized MongoDB/MySQL queries, reducing latency by 35%</li>
            <li>🏗️ Re-architected monolithic system into microservices, improving API performance</li>
            <li>🔐 Implemented JWT & RBAC authentication across distributed services</li>
            <li>📊 Built data-intensive dashboards with optimized rendering efficiency gain</li>
          </ul>
          <div className="project-actions">
            <a href="#" className="btn btn-small">GitHub →</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-media">
            <div className="project-placeholder">AI Virtual Assistant</div>
          </div>
          <h3>AI Virtual Assistant - Internal Product</h3>
          <p>Voice-enabled AI assistant for task automation, reminders, and notifications. Integrated speech-to-text and intent processing services with REST APIs and cloud deployment.</p>
          <div className="tech-badges">
            <span className="badge">Node.js</span>
            <span className="badge">WebSocket</span>
            <span className="badge">AWS</span>
            <span className="badge">AI Integration</span>
          </div>
          <p className="achievement">✨ Key Achievements:</p>
          <ul className="project-details">
            <li>🎤 Integrated speech-to-text and voice processing services</li>
            <li>🤖 Designed intelligent intent recognition and task automation</li>
            <li>📡 Built REST APIs for seamless user interactions</li>
            <li>☁️ Managed cloud deployment on AWS infrastructure</li>
          </ul>
          <div className="project-actions">
            <a href="https://github.com/nikhilpatil-Eng/Virtual-Assistant" className="btn btn-small">GitHub →</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-media">
            <div className="project-placeholder">Performance Optimization</div>
          </div>
          <h3>Frontend Performance Optimization</h3>
          <p>Migrated legacy React code to modern functional components with hooks and optimized rendering strategies, improving overall system maintainability and user experience.</p>
          <div className="tech-badges">
            <span className="badge">React Hooks</span>
            <span className="badge">Code Splitting</span>
            <span className="badge">Performance</span>
            <span className="badge">Optimization</span>
          </div>
          <p className="achievement">✨ Key Achievements:</p>
          <ul className="project-details">
            <li>🔄 Refactored legacy code, improving maintainability by 45%</li>
            <li>⚡ Implemented lazy loading & code splitting, reducing load time by 35%</li>
            <li>🎨 Reduced UI defects by 30% with optimized component architecture</li>
            <li>📱 Delivered responsive, pixel-perfect UI aligned with modern UX standards</li>
          </ul>
          <div className="project-actions">
            <a href="https://github.com/nikhilpatil-Eng" className="btn btn-small">GitHub →</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-media">
            <div className="project-placeholder">Real-time Chat Application</div>
          </div>
          <h3>Real-time Chat Application (WhatsApp-like)</h3>
          <p>Multi-directional chat application built with Socket.io for real-time messaging, Node.js backend for server management, and React.js frontend for seamless user interface. Features include instant messaging, user presence indicators, and scalable architecture.</p>
          <div className="tech-badges">
            <span className="badge">Socket.io</span>
            <span className="badge">Node.js</span>
            <span className="badge">React.js</span>
            <span className="badge">Real-time</span>
          </div>
          <p className="achievement">✨ Key Achievements:</p>
          <ul className="project-details">
            <li>💬 Implemented real-time bidirectional messaging with Socket.io</li>
            <li>👥 Built multi-user chat rooms with presence indicators</li>
            <li>⚡ Optimized WebSocket connections for low-latency communication</li>
            <li>🔧 Developed scalable Node.js backend handling concurrent users</li>
            <li>🎨 Created responsive React interface with modern chat UI patterns</li>
          </ul>
          <div className="project-actions">
            <a href="https://github.com/nikhilpatil-Eng/Chat-application-Socket.io" className="btn btn-small">GitHub →</a>
          </div>
        </div>
      </div>
    </section>
  );
}