import React from 'react';
import './Ai24Solution.css';
import { ArrowRight } from 'lucide-react';

export default function Ai24Solution() {
  return (
    <section className="solution-section section-padding gsap-reveal">
      <div className="container">
        <div className="solution-content">
          
          <div className="solution-text">
            <div className="solution-badge">
              <span className="solution-badge-dot"></span>
              The Paradigm Shift
            </div>
            
            <h2 className="solution-title">
              Ai24 — A Unified<br />
              <span>Growth System</span>
            </h2>
            
            <p className="solution-desc">
              Instead of hiring separate vendors for marketing, technology, automation, and analytics,
              Ai24 integrates them into a single scalable growth infrastructure.
            </p>
            
            <button className="solution-btn mt-4">
              Discover the system <ArrowRight size={18} />
            </button>
          </div>

          <div className="solution-visual">
            
            {/* Floating particles */}
            <div className="solution-particles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`sol-particle sp-${i + 1}`}></div>
              ))}
            </div>

            <div className="sv-ambient"></div>
            
            <div className="orbit-system">
              
              <div className="center-core">
                <div className="core-pulse"></div>
                <span>Ai24</span>
              </div>
              
              <div className="orbit orbit-1">
                <div className="orbit-dot"></div>
                <div className="orbit-label-container">
                  <div className="orbit-item">Marketing</div>
                </div>
              </div>
              
              <div className="orbit orbit-2">
                <div className="orbit-dot"></div>
                <div className="orbit-label-container">
                  <div className="orbit-item">Technology</div>
                </div>
              </div>
              
              <div className="orbit orbit-3">
                <div className="orbit-dot"></div>
                <div className="orbit-label-container">
                  <div className="orbit-item">Analytics</div>
                </div>
              </div>
              
              <div className="orbit orbit-4">
                <div className="orbit-dot"></div>
                <div className="orbit-label-container">
                  <div className="orbit-item">Automation</div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
