import React from 'react';
import { Rocket, Layers, BarChart2, PieChart, Maximize } from 'lucide-react';
import './GrowthArchitecture.css';

export default function GrowthArchitecture() {
  const pillars = [
    { title: "Growth Engine", desc: "Customer acquisition architecture.", icon: <Rocket size={24} strokeWidth={1.5} /> },
    { title: "Automation Layer", desc: "CRM and AI workflow engineering.", icon: <Layers size={24} strokeWidth={1.5} /> },
    { title: "Conversion Lab", desc: "Performance optimization and conversion systems.", icon: <BarChart2 size={24} strokeWidth={1.5} /> },
    { title: "Revenue Intelligence", desc: "Dashboards, attribution, and forecasting.", icon: <PieChart size={24} strokeWidth={1.5} /> },
    { title: "Scale Architecture", desc: "Market expansion and growth blueprint.", icon: <Maximize size={24} strokeWidth={1.5} /> }
  ];

  return (
    <section className="architecture-section section-padding gsap-reveal">
      <div className="arch-ambient"></div>
      
      <div className="container relative z-10">
        
        {/* Header matching premium aesthetics */}
        <div className="arch-header text-center">
          <div className="arch-badge">
            <span className="arch-badge-dot"></span>
            The System
          </div>
          <h2 className="arch-title">
            Ai24 Growth<br />
            <span>Architecture</span>
          </h2>
          <p className="arch-sub">
            The core pillars of the Ai24 system, engineered to drive predictable revenue and sustainable scale.
          </p>
        </div>

        {/* Premium Luxury Grid */}
        <div className="arch-cards-grid">
          {pillars.map((p, i) => (
            <div key={i} className={`arch-card-premium card-num-${i+1}`} style={{animationDelay: `${i * 0.1}s`}}>
              <div className="arch-card-glow"></div>
              <div className="arch-card-inner">
                
                {/* Visual Decorative Overlay */}
                <div className="arch-watermark">
                  {React.cloneElement(p.icon, { size: 100, strokeWidth: 1 })}
                </div>

                <div className="arch-icon-wrapper">
                  {p.icon}
                </div>
                
                <h3 className="arch-card-title">{p.title}</h3>
                <p className="arch-card-desc">{p.desc}</p>
                
                <div className="arch-line-bottom"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
