import React from 'react';

export default function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience">
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-sub">Journey building scalable systems</p>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-period">Aug 2022 – Jan 2026</div>
            <h3>Software Engineer – Full Stack Developer</h3>
            <p className="timeline-company">Dynamisch IT Ltd, Pune</p>
            <ul className="timeline-achievements">
              <li>🏥 Designed, developed, and optimized 35+ RESTful APIs serving 10K+ daily requests with high availability</li>
              <li>🔄 Migrated legacy React code to modern functional components with Hooks, improving maintainability by 45%</li>
              <li>⚡ Optimized MongoDB and MySQL queries, reducing database response time by 35%</li>
              <li>🔐 Implemented secure authentication and authorization using JWT and RBAC across distributed services</li>
              <li>🏗️ Re-architected monolithic modules into scalable microservices, improving API performance by 40%</li>
              <li>☁️ Managed end-to-end cloud deployment on AWS (EC2, S3, IAM) with production-grade configuration</li>
              <li>📊 Developed data-intensive dashboards and complex workflows, improving user interaction efficiency by 30%</li>
              <li>🔍 Implemented Redux and Context API for structured state management across large-scale frontend modules</li>
              <li>⚙️ Orchestrated scalable, component-driven frontend architecture using React Hooks and reusable design patterns</li>
              <li>🎯 Optimized frontend performance using memoization, lazy loading, and code splitting (35% load time reduction)</li>
              <li>🛡️ Ensured HIPAA-aligned compliance and secure handling of protected health information</li>
              <li>🤝 Collaborated with cross-functional teams including QA, DevOps, and Product for seamless releases</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-period">2023</div>
            <h3>Master of Computer Applications (MCA)</h3>
            <p className="timeline-company">Savitribai Phule Pune University • Grade: A+</p>
            <ul className="timeline-achievements">
              <li>🎓 Advanced studies in full-stack development and cloud architecture</li>
              <li>📚 Focused on microservices, system design, and enterprise applications</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-period">2021</div>
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p className="timeline-company">North Maharashtra University • Grade: A+</p>
            <ul className="timeline-achievements">
              <li>🎓 Comprehensive understanding of programming fundamentals and web technologies</li>
              <li>💻 Foundation in full-stack web development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}