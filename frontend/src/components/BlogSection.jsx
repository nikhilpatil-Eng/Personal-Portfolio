import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const blogPosts = [
  {
    id: '1',
    title: 'Building Scalable Microservices with Node.js',
    excerpt: 'Learn how to design and implement microservices architecture using Node.js, Docker, and Kubernetes for production-grade applications.',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Backend Development',
    tags: ['Node.js', 'Microservices', 'Docker', 'Kubernetes'],
    featured: true
  },
  {
    id: '2',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Discover advanced strategies to optimize React applications including code splitting, memoization, and virtual scrolling for better user experience.',
    date: '2024-03-01',
    readTime: '6 min read',
    category: 'Frontend Development',
    tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
    featured: true
  },
  {
    id: '3',
    title: 'Implementing JWT Authentication in Modern Web Apps',
    excerpt: 'A comprehensive guide to implementing secure JWT-based authentication with refresh tokens, role-based access control, and best practices.',
    date: '2024-02-20',
    readTime: '10 min read',
    category: 'Security',
    tags: ['JWT', 'Authentication', 'Security', 'Node.js'],
    featured: false
  },
  {
    id: '4',
    title: 'AWS Deployment Strategies for React Applications',
    excerpt: 'Explore different deployment strategies for React applications on AWS including S3, CloudFront, ECS, and serverless approaches.',
    date: '2024-02-10',
    readTime: '7 min read',
    category: 'DevOps',
    tags: ['AWS', 'Deployment', 'Cloud', 'React'],
    featured: false
  }
];

export default function BlogSection() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'Frontend Development', 'Backend Development', 'DevOps', 'Security'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = filter === 'all' || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section className="section blog-section" id="blog">
      <ScrollAnimation animation="fade-in-up">
        <div className="section-header">
          <h2 className="section-title">Technical Blog</h2>
          <p className="section-sub">
            Sharing insights on modern web development, architecture patterns, and best practices
          </p>
        </div>
      </ScrollAnimation>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <ScrollAnimation animation="fade-in-up" delay={200}>
          <div className="featured-posts">
            <h3 className="subsection-title">Featured Articles</h3>
            <div className="featured-grid">
              {featuredPosts.map((post, index) => (
                <article key={post.id} className="blog-card featured">
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-category">{post.category}</span>
                      <span className="blog-date">{post.date}</span>
                    </div>
                    <h4 className="blog-title">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </h4>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-footer">
                      <span className="read-time">{post.readTime}</span>
                      <a href={`/blog/${post.id}`} className="read-more">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      )}

      {/* Filters and Search */}
      <ScrollAnimation animation="fade-in-up" delay={300}>
        <div className="blog-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-container">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Regular Posts */}
      <ScrollAnimation animation="fade-in-up" delay={400}>
        <div className="regular-posts">
          {regularPosts.length > 0 ? (
            <div className="blog-grid">
              {regularPosts.map((post, index) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-category">{post.category}</span>
                      <span className="blog-date">{post.date}</span>
                    </div>
                    <h4 className="blog-title">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </h4>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="blog-footer">
                      <span className="read-time">{post.readTime}</span>
                      <a href={`/blog/${post.id}`} className="read-more">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-posts">
              <p>No articles found matching your criteria.</p>
              <button 
                onClick={() => {
                  setFilter('all');
                  setSearchTerm('');
                }}
                className="btn btn-ghost"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </ScrollAnimation>

      {/* Newsletter Signup */}
      <ScrollAnimation animation="fade-in-up" delay={500}>
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>
              Get the latest articles on web development, architecture patterns, and tech insights delivered to your inbox.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
