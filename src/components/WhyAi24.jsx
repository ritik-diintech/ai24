import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './WhyAi24.css';

export default function WhyAi24() {
  const reasons = [
    "Strategy-first execution",
    "AI-enabled workflows",
    "Integrated CRM architecture",
    "Conversion-focused growth systems",
    "Data-driven decision making",
    "Global delivery capability"
  ];

  return (
    <section className="why-section section-padding gsap-reveal">
      <div className="container">
        <div className="why-content glass-card">
          <div className="why-text">
            <div className="pill">The Advantage</div>
            <h2 className="title-gradient">Why Companies<br/>Choose Ai24</h2>
            <p className="mt-4">
              Ai24 combines technology, automation, and growth execution into a single operating system. 
              We don't just run campaigns—we engineer predictable revenue.
            </p>
          </div>
          <div className="why-list-container">
            <ul className="why-list">
              {reasons.map((r, i) => (
                <li key={i}>
                  <CheckCircle2 size={24} className="why-icon" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
