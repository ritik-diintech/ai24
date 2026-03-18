import React from 'react';
import FounderVision from '../components/FounderVision';
import TalentArchitecture from '../components/TalentArchitecture';
import Ai24Labs from '../components/Ai24Labs';

const Sections = ({ title, content }) => (
  <section className="about-sub-section section-padding gsap-reveal">
    <div className="container">
      <h2 className="title-gold">{title}</h2>
      <div className="mt-4" style={{color: 'var(--text-secondary)', fontSize: '1.2rem'}}>{content}</div>
    </div>
  </section>
);

export default function About() {
  return (
    <div className="page-container">
      <section className="about-hero section-padding">
        <div className="container text-center">
          <div className="pill">About Ai24</div>
          <h1 className="title-gradient" style={{fontSize: '4rem'}}>Building the Future of<br/>Growth Engineering</h1>
        </div>
      </section>

      <Sections 
        title="Our Vision" 
        content="To empower modern businesses with intelligent, autonomous growth systems that transform fragmented operations into predictable revenue engines." 
      />

      <Sections 
        title="The Ai24 Manifesto" 
        content="We believe that growth is not a series of lucky breaks, but an engineered outcome of connected technology, data intelligence, and strategic automation." 
      />

      <Ai24Labs />
      
      <Sections 
        title="Global Delivery Model" 
        content="Strategy & Partnerships driven from our Dubai HQ, with world-class Engineering & Execution powered by our India technology hubs." 
      />

      <FounderVision />
      <TalentArchitecture />
    </div>
  );
}
