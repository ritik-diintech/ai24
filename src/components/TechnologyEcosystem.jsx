import React, { useEffect, useRef } from 'react';
import { 
  Database, 
  Zap, 
  BarChart3, 
  Bot, 
  Cpu,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TechnologyEcosystem.css';

gsap.registerPlugin(ScrollTrigger);

export default function TechnologyEcosystem() {
  const sectionRef = useRef(null);

  const categories = [
    { 
      category: "CRM Platforms", 
      icon: <Database size={24} />,
      description: "Centralized intelligence for customer relationships and data management.",
      tools: ["HubSpot", "Salesforce", "Zoho", "Pipedrive"] 
    },
    { 
      category: "Automation", 
      icon: <Zap size={24} />,
      description: "Seamless workflow orchestration and zero-latency operations.",
      tools: ["Zapier", "Make", "n8n", "ActiveCampaign"] 
    },
    { 
      category: "Performance Ads", 
      icon: <Layers size={24} />,
      description: "High-yield acquisition systems across global ad networks.",
      tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "YouTube Ads"] 
    },
    { 
      category: "Revenue Analytics", 
      icon: <BarChart3 size={24} />,
      description: "Advanced attribution and multi-channel performance tracking.",
      tools: ["GA4", "Mixpanel", "Looker Studio", "Power BI"] 
    },
    { 
      category: "AI Integration", 
      icon: <Bot size={24} />,
      description: "Custom AI agents and large language model architectures.",
      tools: ["OpenAI", "Custom Models", "AI Agents", "Claude"] 
    },
    { 
      category: "Core Stack", 
      icon: <Cpu size={24} />,
      description: "Scalable infrastructure and modern development frameworks.",
      tools: ["Vite", "Next.js", "Node.js", "AWS"] 
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // 1. Header Animation Sequence
      tl.fromTo('.eco-badge',
        { y: -30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      )
      .fromTo('.eco-main-title',
        { y: 50, opacity: 0, rotationX: 30, transformPerspective: 800 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out" },
        "-=0.7"
      )
      .fromTo('.eco-description',
        { x: 30, opacity: 0, filter: "blur(5px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
        "-=0.9"
      )
      // Background ambiances swell up
      .fromTo('.eco-bg-elements div',
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, stagger: 0.3, ease: "power2.out" },
        "-=1.5"
      );

      // 2. High-Tech Cards Reveal Matrix
      // We stagger the cards coming in with a 3D tilt
      tl.fromTo('.eco-premium-card',
        { 
          y: 60, 
          opacity: 0, 
          rotationY: -15, 
          scale: 0.9, 
          transformPerspective: 1000 
        },
        { 
          y: 0, 
          opacity: 1, 
          rotationY: 0, 
          scale: 1, 
          duration: 1, 
          stagger: 0.1, 
          ease: "expo.out" 
        },
        "-=1.2"
      );

      // 3. Inner Card Elements Load-in (Staggered per card)
      const cards = gsap.utils.toArray('.eco-premium-card');
      cards.forEach((card, i) => {
        // Icon pop
        tl.fromTo(card.querySelector('.eco-icon-box'),
          { scale: 0, rotation: 45 },
          { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(2)" },
          `<${i * 0.1}`
        )
        // Text slide
        .fromTo(card.querySelectorAll('.eco-card-title, .eco-card-desc'),
          { x: -15, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "<0.2"
        )
        // Tags pop sequentially like a loading system
        .fromTo(card.querySelectorAll('.eco-tag'),
          { scale: 0, opacity: 0, y: 10 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "back.out(2)" },
          "<0.2"
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ecosystem-section" ref={sectionRef}>
      <div className="eco-bg-elements">
        <div className="eco-glow-1"></div>
        <div className="eco-glow-2"></div>
      </div>

      <div className="container relative z-10">
        <div className="eco-header-top">
          <div className="eco-badge">
            <span className="eco-badge-dot"></span>
            Integrations
          </div>
          <div className="eco-header-flex">
            <h2 className="eco-main-title">Technology<br /><span>Ecosystem</span></h2>
            <p className="eco-description">
              We architect unified stacks by integrating world-class technologies 
              into a single, high-performance growth engine.
            </p>
          </div>
        </div>

        <div className="eco-modern-grid">
          {categories.map((cat, i) => (
            <div key={i} className="eco-premium-card">
              <div className="eco-card-inner">
                <div className="eco-card-top">
                  <div className="eco-icon-box">
                    {cat.icon}
                  </div>
                  <div className="eco-card-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                
                <h3 className="eco-card-title">{cat.category}</h3>
                <p className="eco-card-desc">{cat.description}</p>
                
                <div className="eco-card-tags">
                  {cat.tools.map((tool, idx) => (
                    <span key={idx} className="eco-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="eco-card-bg-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
