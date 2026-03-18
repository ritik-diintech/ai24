import React from 'react';
import { Building2, Globe2, Network, ShieldCheck } from 'lucide-react';
import './TrustStrip.css';

export default function TrustStrip() {
  return (
    <section className="trust-section gsap-reveal">
      {/* Animated Flowing Background Elements */}
      <div className="trust-ambient">
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
      </div>

      <div className="container trust-container">
        
        {/* Section Header */}
        <div className="trust-header">
          <div className="trust-badge">
            <ShieldCheck size={14} className="badge-icon" />
            <span>Credibility</span>
          </div>
          <h2 className="trust-title">Global Presence &amp; Credibility</h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="trust-grid-frameless">
          
          {/* Pillar 1: HQ */}
          <div className="trust-pillar">
            <div className="tp-icon-wrap">
              <Building2 size={32} strokeWidth={1.5} className="tp-icon" />
              <div className="tp-glow"></div>
            </div>
            <div className="tp-content">
              <h3 className="tp-subheading">Headquartered in</h3>
              <div className="tp-value highlight-gold">Dubai</div>
              <p className="tp-desc">
                Strategic global center driving growth and international partnerships.
              </p>
            </div>
          </div>
          
          {/* Divider */}
          <div className="tp-divider"></div>

          {/* Pillar 2: Global Presence */}
          <div className="trust-pillar">
            <div className="tp-icon-wrap">
              <Globe2 size={32} strokeWidth={1.5} className="tp-icon" />
              <div className="tp-glow"></div>
            </div>
            <div className="tp-content">
              <h3 className="tp-subheading">Global Presence</h3>
              <ul className="tp-list">
                <li><span className="tp-dot"></span> India</li>
                <li><span className="tp-dot"></span> UAE</li>
                <li><span className="tp-dot"></span> Canada</li>
                <li><span className="tp-dot"></span> USA</li>
                <li><span className="tp-dot"></span> UK</li>
              </ul>
            </div>
          </div>
          
          {/* Divider */}
          <div className="tp-divider"></div>

          {/* Pillar 3: Execution Offices */}
          <div className="trust-pillar">
            <div className="tp-icon-wrap">
              <Network size={32} strokeWidth={1.5} className="tp-icon" />
              <div className="tp-glow"></div>
            </div>
            <div className="tp-content">
              <h3 className="tp-subheading">Execution Offices</h3>
              <ul className="tp-list-inline">
                <li>Gurgaon</li>
                <li>Noida</li>
                <li>Bangalore</li>
                <li>Dubai</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
