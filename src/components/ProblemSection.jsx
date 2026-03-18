import React, { useEffect, useRef } from 'react';
import { Network, Database, Layers, Target } from 'lucide-react';
import './ProblemSection.css';

export default function ProblemSection() {
  const problems = [
    { 
      icon: <Network size={28} strokeWidth={1.5} />, 
      title: "Fragmented Systems", 
      desc: "Marketing, CRM, and automation operate in completely isolated silos." 
    },
    { 
      icon: <Layers size={28} strokeWidth={1.5} />, 
      title: "Disconnected Data", 
      desc: "Data points are tracked but not unified to drive revenue decisions." 
    },
    { 
      icon: <Target size={28} strokeWidth={1.5} />, 
      title: "Unpredictable Acquisition", 
      desc: "Customer acquisition relies on hope rather than engineered algorithms." 
    },
    { 
      icon: <Database size={28} strokeWidth={1.5} />, 
      title: "Tool Fatigue", 
      desc: "Adding more software layers instead of simplifying the growth engine." 
    }
  ];

  return (
    <section className="problem-section gsap-reveal">
      {/* Ambient background glows */}
      <div className="ps-ambient">
        <div className="ps-orb ps-orb-1"></div>
        <div className="ps-orb ps-orb-2"></div>
      </div>

      <div className="container ps-container">
        
        {/* Header */}
        <div className="ps-header">
          <div className="ps-badge">
            <span className="ps-badge-dot"></span>
            The Market Reality
          </div>
          <h2 className="ps-title">
            Why Most Businesses<br/>
            <span>Struggle to Scale</span>
          </h2>
        </div>

        {/* Premium Frameless Grid */}
        <div className="ps-grid">
          {problems.map((p, i) => (
            <div key={i} className="ps-card">
              <div className="ps-card-ambient"></div>
              <div className="psc-icon-wrap">
                <div className="psc-icon">{p.icon}</div>
                <div className="psc-glow"></div>
              </div>
              <h3 className="psc-title">{p.title}</h3>
              <p className="psc-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Conclusion / Bridge */}
        <div className="ps-conclusion">
          <div className="ps-conc-bg"></div>
          <p className="ps-conc-text">Most companies don't need more tools.</p>
          <h3 className="ps-conc-highlight">They need a unified growth system.</h3>
        </div>

      </div>
    </section>
  );
}
