import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './FounderVision.css';

export default function FounderVision() {
  const words = "Modern businesses don’t fail because they lack ambition. They fail because their growth systems are fragmented.".split(" ");

  return (
    <section className="vision-horizon-section">
      {/* Cinematic Background */}
      <div className="horizon-bg">
        <div className="horizon-line"></div>
        <div className="horizon-glow-top"></div>
        <div className="horizon-glow-bottom"></div>
        <div className="horizon-particles"></div>
      </div>

      <div className="container relative z-10">
        <div className="vision-horizon-wrap">
          {/* Quote Icon */}
          <motion.div 
            className="vision-quote-box"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Quote size={48} className="vision-quote-mark" />
          </motion.div>

          {/* Main Manifesto */}
          <div className="vision-manifesto-container">
            <h2 className="vision-main-text">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="manifesto-word"
                  initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.05, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </h2>
            
            <motion.div 
              className="vision-description-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="vision-vertical-divider"></div>
              <p>
                Fragmented systems lead to leaking revenue. We unify marketing, sales, and technology 
                into a single, high-performance architecture built for institutional scale.
              </p>
            </motion.div>
          </div>

          {/* Luxury Signature Area */}
          <motion.div 
            className="vision-author-luxury"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="author-details-wrap">
              <span className="author-label">Visionary / Architect</span>
              <h4 className="author-display-name">Sushant Raj</h4>
              <p className="author-display-role">Founder — Ai24 Global Network</p>
            </div>
            
            <div className="luxury-decorative-elements">
              <div className="dec-circle"></div>
              <div className="dec-line"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
