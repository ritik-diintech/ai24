import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CaseStudies.css';

export default function CaseStudies() {
  const navigate = useNavigate();
  const cases = [
    {
      client: "Luxury Real Estate Group",
      industry: "Real Estate",
      challenge: "Inefficient lead qualification and manual CRM management leading to lost opportunities.",
      solution: "Implemented an AI-driven lead scoring engine integrated with automated high-touch nurturing sequences.",
      metric: "350%",
      metricLabel: "qualified pipeline",
      subMetric: "28% conversion lift",
      icon: <Target size={24} />
    },
    {
      client: "Elite Financial Services",
      industry: "FinTech",
      challenge: "High customer acquisition costs and fragmented data silos preventing personalized marketing.",
      solution: "Deployment of a unified growth architecture that synchronized data across 12 different platforms.",
      metric: "40%",
      metricLabel: "CAC decrease",
      subMetric: "2.1x revenue growth",
      icon: <TrendingUp size={24} />
    },
    {
      client: "Global E-commerce Hub",
      industry: "Luxury Retail",
      challenge: "Plateaued ROAS while trying to scale advertising spend in a competitive global market.",
      solution: "Advanced predictive modeling for dynamic ad allocation and hyper-personalized customer journeys.",
      metric: "4.2x",
      metricLabel: "ROAS benchmark",
      subMetric: "55% retention boost",
      icon: <Zap size={24} />
    }
  ];

  return (
    <section id="case-studies" className="case-studies-section section-padding gsap-reveal">
      <div className="container relative z-10">
        <div className="case-header-top">
          <div className="case-badge">
            <span className="case-badge-dot"></span>
            Performance
          </div>
          <div className="case-header-flex">
            <h2 className="case-main-title">Proven Results &<br /><span>Case Studies</span></h2>
            <p className="case-description">
              Real-world impact delivered through precision growth engineering. 
              We don't just provide services; we build high-performance assets.
            </p>
            <button 
              className="case-all-btn mt-6"
              onClick={() => { navigate('/case-studies'); }}
              style={{
                background: 'transparent',
                border: '1px solid rgba(195, 163, 101, 0.4)',
                color: '#c3a365',
                padding: '0.8rem 2rem',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                cursor: 'pointer',
                marginTop: '2rem'
              }}
            >
              View All Performance Data <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        <div className="case-grid">
          {cases.map((c, i) => (
            <motion.div 
              key={i} 
              className="case-card-luxury"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="case-card-inner">
                <div className="case-card-glow"></div>
                
                <div className="case-card-header">
                  <div className="case-card-icon">
                    {c.icon}
                  </div>
                  <div className="case-card-meta">
                    <span className="case-industry-tag">{c.industry}</span>
                    <ArrowUpRight className="case-card-arrow" size={20} />
                  </div>
                </div>

                <div className="case-card-body">
                  <h3 className="case-card-client">{c.client}</h3>
                  <div className="case-challenge-box">
                    <span className="case-label">The Challenge</span>
                    <p>{c.challenge}</p>
                  </div>
                  <div className="case-solution-box">
                    <span className="case-label">Our Solution</span>
                    <p>{c.solution}</p>
                  </div>
                </div>

                <div className="case-card-footer">
                  <div className="case-metric-wrap">
                    <div className="case-metric-value">{c.metric}</div>
                    <div className="case-metric-label">{c.metricLabel}</div>
                  </div>
                  <div className="case-metric-divider"></div>
                  <div className="case-metric-subtext">{c.subMetric}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="case-bg-elements">
        <div className="case-glow-center"></div>
        <div className="case-grid-lines"></div>
      </div>
    </section>
  );
}
