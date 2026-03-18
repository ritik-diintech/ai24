import React from 'react';
import IndustriesSection from '../components/Industries';
import CaseStudies from '../components/CaseStudies';

export default function Industries() {
  const industryDetails = [
    {
      name: "Real Estate",
      problem: "Low quality leads and attribution gaps.",
      solution: "Lead enrichment and AI-driven CRM automation.",
      outcome: "3.5x boost in qualified pipelines."
    },
    {
      name: "Financial Services",
      problem: "Strict compliance and data silos.",
      solution: "Unified data layers and automated nurturing.",
      outcome: "40% reduction in CAC."
    }
  ];

  return (
    <div className="page-container">
      <section className="industry-hero section-padding">
        <div className="container text-center">
          <div className="pill">Sector Specialization</div>
          <h1 className="title-gradient" style={{fontSize: '4rem'}}>Growth Systems Built for<br/>Your Industry</h1>
          <p className="mt-4" style={{maxWidth: '800px', margin: '2rem auto', color: 'var(--text-secondary)', fontSize: '1.2rem'}}>
            Every industry has unique challenges. Ai24 builds growth infrastructure tailored to the 
            specific unit economics and customer journeys of your sector.
          </p>
        </div>
      </section>

      <IndustriesSection />

      <section className="industry-solutions section-padding">
        <div className="container">
          <div className="grid-2">
            {industryDetails.map((ind, i) => (
              <div key={i} className="glass-card">
                <h3 className="title-gold" style={{fontSize: '1.75rem', marginBottom: '1.5rem'}}>{ind.name}</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <p><strong>The Problem:</strong> <span style={{color: 'var(--text-secondary)'}}>{ind.problem}</span></p>
                  <p><strong>The Solution:</strong> <span style={{color: 'var(--text-secondary)'}}>{ind.solution}</span></p>
                  <p><strong>The Outcome:</strong> <span style={{color: 'var(--accent-gold)', fontWeight: '700'}}>{ind.outcome}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies />
    </div>
  );
}
