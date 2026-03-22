import React from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function MetricsSection() {
  return (
    <section className="section metrics-section" id="metrics">
      <ScrollAnimation animation="fade-in-up">
        <h2 className="section-title">Impact & Expertise</h2>
        <p className="section-sub">Proven track record of building production-grade systems</p>
      </ScrollAnimation>

      <div className="metrics-grid">
        <ScrollAnimation animation="fade-in-up" delay={100}>
          <div className="metric-card">
            <div className="metric-icon">⚡</div>
            <h3>10K+</h3>
            <p>Daily Requests Handled</p>
            <span className="metric-detail">Production-grade infrastructure</span>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-in-up" delay={200}>
          <div className="metric-card">
            <div className="metric-icon">🔌</div>
            <h3>35+</h3>
            <p>REST APIs Developed</p>
            <span className="metric-detail">Enterprise-level scalability</span>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-in-up" delay={300}>
          <div className="metric-card">
            <div className="metric-icon">⚙️</div>
            <h3>40%</h3>
            <p>Performance Improvement</p>
            <span className="metric-detail">Optimization expertise</span>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-in-up" delay={400}>
          <div className="metric-card">
            <div className="metric-icon">📅</div>
            <h3>3.6+</h3>
            <p>Years Experience</p>
            <span className="metric-detail">Production systems</span>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}