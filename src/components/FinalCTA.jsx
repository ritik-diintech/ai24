import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="cta-section section-padding gsap-reveal">
      <div className="container">
        <div className="cta-content glass-card text-center">
          <h2 className="title-gradient">Let’s Build Your<br/>Revenue System</h2>
          <p className="cta-sub">
            From acquisition to automation to conversion, Ai24 helps ambitious companies scale with clarity.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Schedule a Consultation <ArrowRight size={18} /></button>
            <button className="btn-secondary">Discuss Your Growth Architecture</button>
          </div>
        </div>
      </div>
    </section>
  );
}
