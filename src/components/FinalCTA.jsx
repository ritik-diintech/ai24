import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './FinalCTA.css';

export default function FinalCTA() {
  const navigate = useNavigate();
  return (
    <section id="ignition" className="ignition-cta-section">
      {/* Cinematic Background Architecture */}
      <div className="ignition-bg">
        <div className="ignition-core-glow"></div>
        <div className="ignition-grid-pattern"></div>
        <div className="ignition-scan-line"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="ignition-card glass-pane"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {/* Top Indicators */}
          <div className="ignition-indicators">
            <span className="indicator-track">
              <ShieldCheck size={14} /> Institutional Grade
            </span>
            <div className="indicator-dot-wrap">
              <div className="live-dot"></div>
              System Ready
            </div>
          </div>

          <div className="ignition-content-wrap">
            <motion.h2 
              className="ignition-main-title"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Let’s Build Your<br/>
              <span className="ignition-highlight">Revenue System</span>
            </motion.h2>

            <motion.p 
              className="ignition-subtext"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Stop firefighting fragmented gaps. Deploy a unified architecture 
              engineered for predictable, exponential scale.
            </motion.p>

            <motion.div 
              className="ignition-action-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button 
                className="ignition-btn-primary"
                onClick={() => {
                  navigate('/contact');
                }}
              >
                <span className="btn-glow"></span>
                <span className="btn-content">
                  Ignite Your Growth <ArrowRight size={20} />
                </span>
              </button>
              
              <button 
                className="ignition-btn-secondary"
                onClick={() => {
                  navigate('/capabilities');
                }}
              >
                <Zap size={18} /> Architecture Deep-Dive
              </button>
            </motion.div>
          </div>

          {/* Bottom Trust Row */}
          <div className="ignition-trust-footer">
            <div className="trust-item">
              <Sparkles size={16} /> Elite Execution
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              Global Deployment
            </div>
          </div>
          
          {/* Decorative Corner Accents */}
          <div className="ignite-corner tl"></div>
          <div className="ignite-corner br"></div>
        </motion.div>
      </div>
    </section>
  );
}
