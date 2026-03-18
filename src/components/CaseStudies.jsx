import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './CaseStudies.css';

export default function CaseStudies() {
  const cases = [
    {
      client: "Real Estate Developer",
      industry: "Real Estate",
      challenge: "Low lead quality and poor CRM tracking.",
      solution: "Growth engine + CRM automation.",
      metric: "3.5x",
      metricLabel: "qualified leads",
      subMetric: "28% higher conversion"
    },
    {
      client: "Fintech Startup",
      industry: "Financial Services",
      challenge: "High CAC and fragmented data silos.",
      solution: "Unified pipeline architecture.",
      metric: "40%",
      metricLabel: "CAC reduction",
      subMetric: "2.1x revenue growth"
    },
    {
      client: "D2C Luxury Brand",
      industry: "E-Commerce",
      challenge: "Scaling ad spend without losing ROAS.",
      solution: "AI-driven conversion optimization.",
      metric: "4.2x",
      metricLabel: "ROAS achieved",
      subMetric: "55% retention boost"
    }
  ];

  return (
    <section className="case-studies section-padding gsap-reveal">
      <div className="container">
        <div className="case-header text-center">
          <div className="pill">Proven Results</div>
          <h2 className="title-gradient">Case Studies</h2>
        </div>

        <div className="case-grid">
          {cases.map((c, i) => (
            <div key={i} className="case-card glass-card">
              <div className="case-card-top">
                <span className="case-industry">{c.industry}</span>
                <ArrowUpRight size={20} className="case-arrow" />
              </div>
              <h3>{c.client}</h3>
              
              <div className="case-details">
                <div className="case-detail-row">
                  <span className="detail-label">Challenge</span>
                  <span className="detail-text">{c.challenge}</span>
                </div>
                <div className="case-detail-row">
                  <span className="detail-label">Solution</span>
                  <span className="detail-text">{c.solution}</span>
                </div>
              </div>

              <div className="case-metrics">
                <div className="metric-box">
                  <div className="metric-number">{c.metric}</div>
                  <div className="metric-label">{c.metricLabel}</div>
                </div>
                <div className="metric-sub">{c.subMetric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
