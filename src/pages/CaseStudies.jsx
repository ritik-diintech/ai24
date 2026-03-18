import React from 'react';
import CaseStudiesSection from '../components/CaseStudies';
import FinalCTA from '../components/FinalCTA';

export default function CaseStudies() {
  return (
    <div className="page-container">
      <section className="cases-hero section-padding">
        <div className="container text-center">
          <div className="pill">Proof of Results</div>
          <h1 className="title-gradient" style={{fontSize: '4rem'}}>Engineered Outcomes</h1>
          <p className="mt-4" style={{maxWidth: '800px', margin: '2rem auto', color: 'var(--text-secondary)', fontSize: '1.2rem'}}>
            We don't just share stories; we document the transformation of fragmented businesses 
            into automated, high-growth revenue engines.
          </p>
        </div>
      </section>

      <CaseStudiesSection />

      <section className="process-proof section-padding">
        <div className="container">
          <div className="glass-card" style={{textAlign: 'center', padding: '5rem'}}>
            <h2 className="title-gold">How We Measure Success</h2>
            <div className="grid-3 mt-5">
              <div>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Unit Economics</h4>
                <p style={{color: 'var(--text-secondary)'}}>Improving LTV to CAC ratios through intelligent automation.</p>
              </div>
              <div>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>System Velocity</h4>
                <p style={{color: 'var(--text-secondary)'}}>Reducing lead response times and funnel friction.</p>
              </div>
              <div>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Predictability</h4>
                <p style={{color: 'var(--text-secondary)'}}>Creating stable revenue forecasts using data intelligence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
