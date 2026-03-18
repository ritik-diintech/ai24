import React from 'react';
import './Industries.css';

export default function Industries() {
  const industries = [
    "Real Estate", "Financial Services", "Healthcare & Wellness", 
    "Education & EdTech", "Spiritual & Consciousness", "D2C & E-commerce", 
    "Hospitality & Travel", "Professional Services", "Startups & SaaS", "Luxury Brands"
  ];

  return (
    <section className="industries-section section-padding gsap-reveal">
      <div className="container">
        <div className="ind-header text-center">
          <div className="pill">Sectors</div>
          <h2 className="title-gradient">Industries We Transform</h2>
        </div>

        <div className="ind-grid">
          {industries.map((ind, i) => (
            <div key={i} className="ind-card">
              <span className="ind-name">{ind}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
