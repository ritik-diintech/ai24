import React from 'react';
import './TechnologyEcosystem.css';

export default function TechnologyEcosystem() {
  const ecosystem = [
    { category: "CRM Platforms", tools: ["HubSpot", "Salesforce", "Zoho", "Pipedrive"] },
    { category: "Automation", tools: ["Zapier", "Make", "n8n", "ActiveCampaign"] },
    { category: "Advertising", tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "YouTube Ads"] },
    { category: "Analytics", tools: ["GA4", "Mixpanel", "Looker Studio", "Power BI"] },
    { category: "AI Integrations", tools: ["OpenAI", "Custom Models", "AI Agents", "Claude"] }
  ];

  return (
    <section className="ecosystem-section section-padding gsap-reveal">
      <div className="container">
        <div className="eco-header text-center">
          <div className="pill">Integrations</div>
          <h2 className="title-gradient">Technology Ecosystem</h2>
          <p className="eco-sub">We build on top of industry-leading platforms to ensure seamless data flow and scale.</p>
        </div>

        <div className="eco-grid">
          {ecosystem.map((cat, i) => (
            <div key={i} className="eco-card glass-card">
              <h3>{cat.category}</h3>
              <div className="eco-tools">
                {cat.tools.map((tool, idx) => (
                  <span key={idx} className="eco-tool-tag">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
