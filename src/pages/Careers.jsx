import React from 'react';
import TalentArchitecture from '../components/TalentArchitecture';

export default function Careers() {
  const benefits = [
    { title: "Innovation First", desc: "Work with the latest in AI, automation, and growth tech." },
    { title: "Global Impact", desc: "Build systems for clients in Dubai, USA, Canada, and UK." },
    { title: "High Growth", desc: "Join a fast-scaling team with clear talent architecture." }
  ];

  return (
    <div className="page-container">
      <section className="careers-hero section-padding">
        <div className="container text-center">
          <div className="pill">Join the Crew</div>
          <h1 className="title-gradient" style={{fontSize: '4rem'}}>Build the Systems that<br/>Scale the Future</h1>
          <p className="mt-4" style={{maxWidth: '800px', margin: '2rem auto', color: 'var(--text-secondary)', fontSize: '1.2rem'}}>
            Ai24 is looking for engineers, designers, and growth scientists who want to 
            redefine how modern businesses operate.
          </p>
        </div>
      </section>

      <TalentArchitecture />

      <section className="benefits section-padding">
        <div className="container">
          <div className="grid-3">
            {benefits.map((b, i) => (
              <div key={i} className="glass-card text-center">
                <h3 className="title-gold" style={{marginBottom: '1rem'}}>{b.title}</h3>
                <p style={{color: 'var(--text-secondary)'}}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="open-positions section-padding">
        <div className="container text-center">
          <h2 className="title-gradient">Open Positions</h2>
          <p className="mt-4" style={{color: 'var(--text-secondary)'}}>
            We are always looking for exceptional talent. Reach out to us at <span style={{color: 'var(--accent-gold)'}}>careers@ai24.digital</span>
          </p>
        </div>
      </section>
    </div>
  );
}
