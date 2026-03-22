import React from 'react';

export default function ExpertiseSection() {
  return (
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
  );
}