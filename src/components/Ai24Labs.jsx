import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Beaker, 
  ArrowRight, 
  Activity, 
  Binary, 
  Bot, 
  Database, 
  Microscope,
  Cpu
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Ai24Labs.css';

export default function Ai24Labs() {
  const navigate = useNavigate();
  const [activeTrack, setActiveTrack] = useState(0);

  const researchTracks = [
    {
      title: "Autonomous Agent Logic",
      desc: "Architecting self-learning AI agents that manage customer service, sales, and operations without human intervention.",
      icon: <Bot size={20} />,
      id: "agent"
    },
    {
      title: "Neural Growth Models",
      desc: "Developing predictive analytics engines that forecast revenue spikes and market shifts with 90%+ accuracy.",
      icon: <Cpu size={20} />,
      id: "neural"
    },
    {
      title: "Data Alchemy",
      desc: "Transforming raw, disjointed dataset silos into clean, actionable intelligence for institutional decision-making.",
      icon: <Binary size={20} />,
      id: "data"
    },
    {
      title: "Workflow Synthesis",
      desc: "Building integrated automation protocols that eliminate repetitive manual labor and minimize operational friction.",
      icon: <Activity size={20} />,
      id: "synth"
    }
  ];

  return (
    <section className="ai24-labs-section section-padding">
      <div className="labs-bg-elements">
        <div className="labs-data-grid"></div>
        <div className="labs-vignette"></div>
      </div>

      <div className="container relative z-10">
        <div className="labs-header-lux">
          <motion.div 
            className="labs-badge"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Microscope size={14} /> Intelligence R&D
          </motion.div>
          
          <div className="labs-title-row">
            <motion.h2 
              className="labs-main-title"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Ai24 <span>Labs</span>
            </motion.h2>
            <motion.div 
              className="labs-header-meta"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>PROTOCOL: INNOVATION</p>
              <div className="meta-line"></div>
              <p className="meta-sub">Where we engineer the next generation of growth technology, from autonomous agents to neural prediction engines.</p>
            </motion.div>
          </div>
        </div>

        <div className="labs-workspace">
          {/* Left Side: Research Tracks */}
          <div className="labs-tracks-column">
            {researchTracks.map((track, i) => (
              <motion.div
                key={track.id}
                className={`research-track-item ${activeTrack === i ? 'active' : ''}`}
                onClick={() => setActiveTrack(i)}
                onMouseEnter={() => setActiveTrack(i)}
                whileHover={{ x: 10 }}
              >
                <div className="track-number">0{i + 1}</div>
                <div className="track-content">
                  <div className="track-header">
                    <span className="track-icon">{track.icon}</span>
                    <h3>{track.title}</h3>
                  </div>
                  <div className="track-bar">
                    <motion.div 
                      className="track-progress"
                      initial={{ width: 0 }}
                      animate={{ width: activeTrack === i ? "100%" : "0%" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Visual Laboratory */}
          <div className="labs-visual-lab">
            <div className="lab-core-container">
              <div className="lab-core-glow"></div>
              <div className="lab-core-inner">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTrack}
                    className="lab-data-view"
                    initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="data-headline">
                      {researchTracks[activeTrack].icon}
                      <h4>Active Research Protocol</h4>
                    </div>
                    <p className="data-desc">{researchTracks[activeTrack].desc}</p>
                    
                    <div className="data-metrics">
                      <div className="metric">
                        <span className="label">Complexity</span>
                        <div className="m-bar"><div className="m-fill" style={{width: '85%'}}></div></div>
                      </div>
                      <div className="metric">
                        <span className="label">Sync Level</span>
                        <div className="m-bar"><div className="m-fill" style={{width: '92%'}}></div></div>
                      </div>
                    </div>

                    <button 
                      className="labs-explore-btn"
                      onClick={() => {
                        navigate('/capabilities');
                      }}
                    >
                      Research Roadmap <ArrowRight size={16} />
                    </button>
                  </motion.div>
                </AnimatePresence>
                
                {/* Visual Orbs */}
                <div className="lab-orb orb-1"></div>
                <div className="lab-orb orb-2"></div>
              </div>
            </div>
            
            {/* Corner Decorative Lines */}
            <div className="lab-corner-dec tl"></div>
            <div className="lab-corner-dec br"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
