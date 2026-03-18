import React from 'react';
import InsightsSection from '../components/Insights';
import Diagnostic from '../components/Diagnostic';

export default function Insights() {
  return (
    <div className="page-container">
      <section className="insights-hero section-padding">
        <div className="container text-center">
          <div className="pill">Thought Leadership</div>
          <h1 className="title-gradient" style={{fontSize: '4rem'}}>Growth intelligence &<br/>Automation Science</h1>
          <p className="mt-4" style={{maxWidth: '800px', margin: '2rem auto', color: 'var(--text-secondary)', fontSize: '1.2rem'}}>
            Deep dives into growth engineering, CRM architecture, conversion science, 
            and the future of AI-powered revenue systems.
          </p>
        </div>
      </section>

      <InsightsSection />
      <Diagnostic />

      <section className="newsletter section-padding">
        <div className="container">
          <div className="glass-card text-center" style={{background: 'linear-gradient(135deg, rgba(195,163,101,0.05), rgba(10,10,11,0.8))'}}>
            <h2 className="title-gold">Stay Ahead of the Curve</h2>
            <p className="mt-2" style={{color: 'var(--text-secondary)'}}>Join 5,000+ businesses receiving growth engineering insights weekly.</p>
            <div className="mt-4" style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
              <input type="email" placeholder="Enter your email" style={{padding: '1rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', background: 'var(--bg-dark)', color: '#fff', width: '300px'}} />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
