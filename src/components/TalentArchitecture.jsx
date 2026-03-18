import React from 'react';
import './TalentArchitecture.css';

export default function TalentArchitecture() {
  const teams = [
    "Design Studio", "Engineering", "AI & Automation", 
    "Growth Lab", "Marketing Studio", "Delivery & Strategy"
  ];

  return (
    <section className="talent-section section-padding gsap-reveal">
      <div className="container">
        <div className="talent-header text-center">
          <div className="pill">The Team</div>
          <h2 className="title-gradient">The Talent Powering Ai24</h2>
          <p className="talent-sub">Ai24 operates through specialized capability teams across design, engineering, AI automation, marketing, and strategy.</p>
        </div>

        <div className="talent-grid grid-3">
          {teams.map((t, i) => (
            <div key={i} className="talent-card glass-card">
              <h3>{t}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
