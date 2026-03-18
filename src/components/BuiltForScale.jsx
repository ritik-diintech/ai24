import React from 'react';
import './BuiltForScale.css';

export default function BuiltForScale() {
  const points = [
    { title: "Dubai HQ", desc: "Strategic global presence and partnerships." },
    { title: "India Hubs", desc: "Unmatched engineering and execution strength." },
    { title: "Process-driven", desc: "Predictable, transparent, and structured delivery." },
    { title: "Scalable Systems", desc: "Infrastructure designed to grow with your revenue." },
  ];

  return (
    <section className="scale-section section-padding gsap-reveal">
      <div className="container">
        <div className="scale-content text-center">
          <div className="pill">Expansion Ready</div>
          <h2 className="title-gradient">Built for Scale</h2>
          <p className="scale-desc">
            Ai24 supports businesses at multiple growth stages. Whether launching, restructuring, or expanding globally, 
             we build the infrastructure for predictable, scalable growth.
          </p>
          
          <div className="scale-grid">
            {points.map((p, i) => (
              <div key={i} className="scale-card glass-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
