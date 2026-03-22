import React from 'react';

export default function MetricsSection() {
  return (
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
  );
}