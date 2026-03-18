import React from 'react';
import { Zap, Cpu, Network, Database } from 'lucide-react';

export default function AutomationSolutions() {
  const solutions = [
    { title: "AI Workflows", icon: <Zap />, desc: "Automate repetitive tasks and lead nurturing with custom AI models." },
    { title: "Intelligent Lead Routing", icon: <Network />, desc: "Route leads to the right team instantly based on data intelligence." },
    { title: "CRM Engineering", icon: <Database />, desc: "Custom HubSpot/Salesforce architecture designed for scale." },
    { title: "Scale Infrastructure", icon: <Cpu />, desc: "Technical pipelines that grow as fast as your revenue." }
  ];

  return (
    <div className="page-container">
      <section className="auto-hero section-padding">
        <div className="container text-center">
          <div className="pill"><Cpu size={14}/> Intelligence</div>
          <h1 className="title-gradient" style={{fontSize: '4rem'}}>AI & Automation<br/>Solutions</h1>
          <p className="mt-4" style={{maxWidth: '800px', margin: '2rem auto', color: 'var(--text-secondary)', fontSize: '1.2rem'}}>
            We build the cognitive infrastructure that allows modern businesses to 
            scale without increasing human overhead.
          </p>
        </div>
      </section>

      <section className="solutions-grid section-padding">
        <div className="container">
          <div className="grid-2">
            {solutions.map((s, i) => (
              <div key={i} className="glass-card" style={{display: 'flex', gap: '2rem', padding: '3rem'}}>
                <div className="cap-icon" style={{flexShrink: 0}}>{s.icon}</div>
                <div>
                  <h3 className="title-gold" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>{s.title}</h3>
                  <p style={{color: 'var(--text-secondary)', lineHeight: '1.7'}}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
