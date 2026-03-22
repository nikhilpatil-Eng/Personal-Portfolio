import React from 'react';

export default function ArchitectureSection() {
  return (
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

            <div className="arch-box docker">
              <span className="arch-icon">🐳</span>
              <p>Dockerized Services</p>
            </div>
          </div>

          {/* Cache + DB Layer */}
          <div className="arch-flow second-row">
            <div className="arch-box cache">
              <span className="arch-icon">⚡</span>
              <p>Redis Cache</p>
            </div>

            <div className="arch-arrow">⇄</div>

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
                <h4>Caching Strategy</h4>
                <p>Redis caching to reduce database load and improve response times</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🐳</div>
              <div className="feature-content">
                <h4>Containerized Deployment</h4>
                <p>Dockerized services for consistent environments and CI/CD pipelines</p>
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
  );
}