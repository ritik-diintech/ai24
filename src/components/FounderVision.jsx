import React from 'react';
import { Quote } from 'lucide-react';
import './FounderVision.css';

export default function FounderVision() {
  return (
    <section className="vision-section section-padding gsap-reveal">
      <div className="container">
        <div className="vision-content">
          <Quote size={60} className="quote-icon" />
          <h2 className="vision-text">
            Modern businesses don’t fail because they lack ambition. 
            <span className="highlight-text"> They fail because their growth systems are fragmented.</span>
          </h2>
          <p className="vision-sub">
            Marketing operates separately from technology. Sales lacks automation. Data exists without intelligence. 
            Ai24 was created to unify these elements into one scalable system.
          </p>
          <div className="vision-author">
            <strong>Sushant Raj</strong>
            <span>Founder, Ai24</span>
          </div>
        </div>
      </div>
    </section>
  );
}
