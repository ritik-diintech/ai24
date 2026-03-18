import React from 'react';
import { Beaker, ArrowRight } from 'lucide-react';
import './Ai24Labs.css';

export default function Ai24Labs() {
  const focusAreas = [
    "AI automation workflows",
    "AI agents",
    "Predictive analytics",
    "Automation-first growth systems",
    "Customer intelligence models"
  ];

  return (
    <section className="labs-section section-padding gsap-reveal">
      <div className="container">
        <div className="labs-content glass-card">
          <div className="labs-text">
            <div className="pill"><Beaker size={14}/> Innovation</div>
            <h2 className="title-gradient">Ai24 Labs</h2>
            <p className="labs-desc">
              Ai24 Labs is our innovation environment where we experiment with emerging technologies and growth intelligence models.
            </p>
            <div className="labs-focus">
              <strong>Focus Areas:</strong>
              <div className="focus-tags">
                {focusAreas.map((f, i) => (
                  <span key={i} className="focus-tag">{f}</span>
                ))}
              </div>
            </div>
            <button className="btn-secondary mt-5">Explore our research <ArrowRight size={18} /></button>
          </div>
          <div className="labs-visual">
            <div className="glow-sphere"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
