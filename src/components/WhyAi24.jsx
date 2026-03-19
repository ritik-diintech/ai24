import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Target, 
  Cpu, 
  Database, 
  PieChart, 
  Globe,
  ArrowRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import './WhyAi24.css';

gsap.registerPlugin(ScrollTrigger);

export default function WhyAi24() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeNode, setActiveNode] = useState(0);

  const advantages = [
    {
      title: "Strategy-First Execution",
      desc: "Every campaign is pre-architected within a comprehensive growth blueprint designed for your specific vertical. We don't just guess; we engineer.",
      icon: <Target size={28} />,
      id: "strat",
      coords: { x: -140, y: -140 }
    },
    {
      title: "AI-Enabled Workflows",
      desc: "Deploying high-touch AI agents that automate customer-facing logic without losing brand personality, scaling your output by 10x.",
      icon: <Cpu size={28} />,
      id: "ai",
      coords: { x: 140, y: -140 }
    },
    {
      title: "Integrated Architecture",
      desc: "Unifying CRM, automation, and acquisition into a single scalable growth infrastructure that eliminates data silos forever.",
      icon: <Database size={28} />,
      id: "struct",
      coords: { x: 200, y: 0 }
    },
    {
      title: "Conversion Intelligence",
      desc: "Leveraging predictive models to identify and capture high-intent users before they even search for your competitors.",
      icon: <Zap size={28} />,
      id: "conv",
      coords: { x: 140, y: 140 }
    },
    {
      title: "Revenue Intelligence",
      desc: "Real-time dashboards and attribution models that turn raw data into predictable growth forecasts and clear ROI metrics.",
      icon: <PieChart size={28} />,
      id: "data",
      coords: { x: -140, y: 140 }
    },
    {
      title: "Global Delivery",
      desc: "Combining Dubai-based strategic management with high-velocity engineering teams across the world's leading tech hubs.",
      icon: <Globe size={28} />,
      id: "global",
      coords: { x: -200, y: 0 }
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. PIN THE ENTIRE EXPERIENCE
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: stickyRef.current,
        pinSpacing: false,
        scrub: 1
      });

      // 2. TRACK NODES
      const triggers = gsap.utils.toArray(".why-node-trigger");
      triggers.forEach((trigger, i) => {
        ScrollTrigger.create({
          trigger: trigger,
          start: "top 45%",
          end: "bottom 55%",
          onEnter: () => setActiveNode(i),
          onEnterBack: () => setActiveNode(i),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-ai24" ref={containerRef} className="why-neural-section">
      {/* Scroll Trigger Area */}
      <div className="why-scroll-stagger">
        {advantages.map((_, i) => (
          <div key={i} className="why-node-trigger"></div>
        ))}
      </div>

      {/* Sticky Viewport */}
      <div ref={stickyRef} className="why-sticky-viewport">
        <div className="why-neural-bg">
          <div className="neural-stars"></div>
          <div className="neural-grid"></div>
        </div>

        <div className="container relative z-10 h-full flex flex-col justify-center">
          {/* Section Header */}
          <div className="why-header-lux">
            <div className="why-badge">
              <span className="why-badge-dot"></span>
              The Advantage
            </div>
            <div className="why-header-main">
              <h2 className="why-title">Why Companies<br /><span>Choose Ai24</span></h2>
              <div className="why-header-info">
                 <p>Engineering Predictable Revenue Engines</p>
                 <div className="divider-line"></div>
              </div>
            </div>
          </div>

          <div className="why-neural-workspace">
            {/* Central Neural Hub */}
            <div className="neural-hub-area">
              <div className="hub-core">
                <div className="hub-glow"></div>
                <div className="hub-icon-wrap">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeNode}
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 1.5, rotate: 45 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {advantages[activeNode].icon}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Connection Nodes */}
                <div className="neural-network-nodes">
                  {advantages.map((adv, i) => (
                    <div 
                      key={i} 
                      className={`neural-node ${activeNode === i ? 'active' : ''}`}
                      style={{ '--tx': `${adv.coords.x}px`, '--ty': `${adv.coords.y}px` }}
                    >
                      <div className="node-point"></div>
                      <div className="node-beam"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dynamic Content Panel */}
            <div className="why-info-panel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="info-card-lux"
                >
                  <div className="info-meta">
                    <span className="info-num">0{activeNode + 1}</span>
                    <span className="info-slug">Protocol.Sync</span>
                  </div>
                  <h3 className="info-title">{advantages[activeNode].title}</h3>
                  <p className="info-desc">{advantages[activeNode].desc}</p>
                  
                  <div className="info-footer">
                     <button 
                       className="info-cta"
                       onClick={() => {
                         navigate('/capabilities');
                       }}
                     >
                       View Methodology <ArrowRight size={16} />
                     </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Global Footer Stats Bar */}
        <div className="why-neural-bar">
          <div className="bar-stat">
            <span className="label">Syncing Architecture</span>
            <div className="bar-progress">
              <motion.div 
                className="bar-fill"
                animate={{ width: `${((activeNode + 1) / advantages.length) * 100}%` }}
              ></motion.div>
            </div>
          </div>
          <div className="bar-mode">
            Mode: <span>Growth Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
