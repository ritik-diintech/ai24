import React, { useState } from 'react';
import { Target, Cpu, LayoutTemplate, ActivitySquare, TrendingUp, Plus, Minus } from 'lucide-react';
import './Capabilities.css';

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const caps = [
    {
      title: "Customer Acquisition",
      subtitle: "Omnichannel Growth Architecture",
      icon: <Target size={24} strokeWidth={1} />,
      list: ["Lead generation systems", "Paid media architecture", "Funnel psychology & design", "Landing page engineering"]
    },
    {
      title: "CRM & Automation",
      subtitle: "Intelligent Workflow Stacks",
      icon: <Cpu size={24} strokeWidth={1} />,
      list: ["Pipeline architecture", "Lead routing systems", "AI automation workflows", "Custom nurturing systems"]
    },
    {
      title: "Digital Platforms",
      subtitle: "Conversion-First Experiences",
      icon: <LayoutTemplate size={24} strokeWidth={1} />,
      list: ["Luxury web platforms", "Mobile applications", "High-performance UI/UX"]
    },
    {
      title: "Performance Optimization",
      subtitle: "Data-Backed Scaling",
      icon: <ActivitySquare size={24} strokeWidth={1} />,
      list: ["A/B testing protocols", "CRO strategies", "Advanced funnel analytics"]
    },
    {
      title: "Revenue Intelligence",
      subtitle: "Metric-Driven Forecasting",
      icon: <TrendingUp size={24} strokeWidth={1} />,
      list: ["Custom data dashboards", "Attribution modelling", "Forecasting systems"]
    }
  ];

  return (
    <section className="capabilities-section section-padding">
      <div className="cap-bg-elements">
        <div className="cap-dynamic-glow" style={{ top: `${(activeIndex * 20) + 10}%` }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="cap-header-side">
          <div className="cap-badge">
            <span className="cap-badge-dot"></span>
            Expertise
          </div>
          <h2 className="cap-main-title">What We<br /><span>Build</span></h2>
        </div>

        <div className="cap-slat-container">
          {caps.map((c, i) => (
            <div 
              key={i} 
              className={`cap-slat ${activeIndex === i ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div className="slat-main">
                <div className="slat-left">
                  <span className="slat-num">0{i + 1}</span>
                  <div className="slat-titles">
                    <h3>{c.title}</h3>
                    <p>{c.subtitle}</p>
                  </div>
                </div>
                
                <div className="slat-right">
                  <div className="slat-icon-circle">
                    {c.icon}
                  </div>
                  <div className="slat-toggle">
                    {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
              </div>

              <div className="slat-content">
                <div className="slat-content-inner">
                  <ul className="slat-list">
                    {c.list.map((item, idx) => (
                      <li key={idx}>
                        <div className="list-marker"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="slat-visual-hint">
                    {React.cloneElement(c.icon, { size: 120, opacity: 0.03 })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
