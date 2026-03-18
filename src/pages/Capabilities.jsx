import React from 'react';
import CapabilitiesSection from '../components/Capabilities';
import TechnologyEcosystem from '../components/TechnologyEcosystem';

export default function Capabilities() {
  return (
    <div className="page-container">
      <section className="cap-hero section-padding">
        <div className="container text-center">
          <div className="pill">Our Capabilities</div>
          <h1 className="title-gradient" style={{fontSize: '4rem'}}>Scalable Infrastructure for<br/>Modern Revenue</h1>
          <p className="mt-4" style={{maxWidth: '800px', margin: '2rem auto', color: 'var(--text-secondary)', fontSize: '1.2rem'}}>
            We don't just provide services; we build high-performance growth stacks that integrate acquisition, 
            automation, and intelligence into a single operating architecture.
          </p>
        </div>
      </section>

      <CapabilitiesSection />
      <TechnologyEcosystem />

      <section className="tech-stack-detail section-padding">
        <div className="container">
          <div className="glass-card">
            <h2 className="title-gold">Technical Credibility</h2>
            <p className="mt-4" style={{color: 'var(--text-secondary)'}}>
              Our architecture is built on the most robust technology ecosystems in the world. 
              Whether it's custom AI agents, HubSpot/Salesforce integration, or GA4 attribution models, 
              we ensure every piece of your growth system communicates perfectly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
