import React from 'react';
import { ChevronDown, MousePointer2, Target, Cpu, BarChart3, Layout, TrendingUp } from 'lucide-react';
import './GrowthOS.css';

export default function GrowthOS() {
  const flowSteps = [
    { title: "Traffic Sources", icon: <MousePointer2 size={22} strokeWidth={1.5} /> },
    { title: "Customer Acquisition Engine", icon: <Target size={22} strokeWidth={1.5} /> },
    { title: "CRM & Automation Layer", icon: <Cpu size={22} strokeWidth={1.5} /> },
    { title: "Conversion Intelligence", icon: <BarChart3 size={22} strokeWidth={1.5} /> },
    { title: "Revenue Dashboard", icon: <Layout size={22} strokeWidth={1.5} /> },
    { title: "Scale Architecture", icon: <TrendingUp size={22} strokeWidth={1.5} /> }
  ];

  return (
    <section className="growth-os-section section-padding gsap-reveal">
      <div className="os-global-glow"></div>
      
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="os-header text-center">
          <div className="os-badge">
            <span className="os-badge-dot"></span>
            The OS
          </div>
          <h2 className="os-title">
            The Ai24 Growth<br />
            <span>Operating System</span>
          </h2>
          <p className="os-sub">
            Ai24 designs connected revenue infrastructure where acquisition, automation, conversion, and intelligence operate as one system.
          </p>
        </div>

        {/* Visual Flow Pipeline */}
        <div className="os-vertical-flow">
          {flowSteps.map((step, index) => (
            <React.Fragment key={index}>
              
              {/* Flow Node */}
              <div className="flow-node">
                <div className="node-glass-panel">
                  <div className="node-glow-ring"></div>
                  <div className="node-content">
                    <div className="node-icon">{step.icon}</div>
                    <h3>{step.title}</h3>
                  </div>
                </div>
              </div>

              {/* Downward Arrow Connectors (except last item) */}
              {index < flowSteps.length - 1 && (
                <div className="flow-connector">
                  <div className="connector-line"></div>
                  <ChevronDown className="connector-arrow" size={24} />
                </div>
              )}
              
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </section>
  );
}
