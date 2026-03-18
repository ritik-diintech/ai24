import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Insights.css';

export default function Insights() {
  const articles = [
    { title: "The Growth Engineering Framework", category: "Framework", readTime: "5 min read" },
    { title: "Why CRM Automation Is Critical for Scaling Businesses", category: "Automation", readTime: "8 min read" },
    { title: "How Conversion Science Improves Revenue", category: "CRO", readTime: "6 min read" }
  ];

  return (
    <section className="insights-section section-padding gsap-reveal">
      <div className="container">
        <div className="insights-header">
          <div className="header-left">
            <div className="pill">Thought Leadership</div>
            <h2 className="title-gradient">Insights</h2>
          </div>
          <button className="btn-secondary">View all articles <ArrowRight size={18} /></button>
        </div>

        <div className="insights-grid">
          {articles.map((a, i) => (
            <div key={i} className="insight-card glass-card">
              <div className="insight-meta">
                <span className="category">{a.category}</span>
                <span className="read-time">{a.readTime}</span>
              </div>
              <h3>{a.title}</h3>
              <div className="card-footer">
                <span>Read Article</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
