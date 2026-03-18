import React from 'react';
import { Search, PenTool, Rocket, TrendingUp, ChevronRight } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Discover", desc: "Audit business model, funnel architecture, and growth gaps.", icon: <Search size={22} strokeWidth={1.5} /> },
    { num: "02", title: "Design", desc: "Build acquisition, automation, and conversion architecture.", icon: <PenTool size={22} strokeWidth={1.5} /> },
    { num: "03", title: "Deploy", desc: "Execute marketing, CRM infrastructure, and technology systems.", icon: <Rocket size={22} strokeWidth={1.5} /> },
    { num: "04", title: "Scale", desc: "Optimize performance and expand revenue systems predictably.", icon: <TrendingUp size={22} strokeWidth={1.5} /> }
  ];

  return (
    <section className="works-section section-padding gsap-reveal">
      <div className="works-ambient"></div>
      
      <div className="container relative z-10">
        <div className="works-header text-center">
          <div className="works-badge">
            <span className="works-badge-dot"></span>
            Methodology
          </div>
          <h2 className="works-title">
            How Ai24<br />
            <span>Works</span>
          </h2>
          <p className="works-sub">
            A systematic, data-driven approach to engineering predictable growth and revenue infrastructure.
          </p>
        </div>

        <div className="methodology-flow">
          {/* Central Path */}
          <div className="flow-path">
            <div className="flow-path-progress"></div>
          </div>
          
          <div className="flow-steps-container">
            {steps.map((s, i) => (
              <div key={i} className={`flow-step-item item-${i+1}`}>
                
                {/* Visual Anchor */}
                <div className="step-anchor">
                  <div className="anchor-outer">
                    <div className="anchor-inner">
                      {s.icon}
                    </div>
                  </div>
                  <div className="anchor-glow"></div>
                </div>

                {/* Content Area (Frameless) */}
                <div className="step-content">
                  <div className="step-meta">
                    <span className="step-number">{s.num}</span>
                    <div className="step-tag">Phase {i+1}</div>
                  </div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>

                {/* Connector Arrow (Desktop Only) */}
                {i < steps.length - 1 && (
                  <div className="step-arrow">
                    <ChevronRight size={20} strokeWidth={1} />
                  </div>
                )}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
