import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, Database, Zap, Activity, BarChart3, TrendingUp, Globe, ChevronRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const SLIDES = [
  { text1: 'We Build Revenue Systems,', text2: 'Not Just Campaigns.' },
  { text1: 'Growth Engineering for', text2: 'Ambitious Companies.' },
  { text1: 'Technology. Automation.', text2: 'Growth. Unified.' },
];

const NODES = [
  { icon: Globe, label: 'Traffic', color: '#c3a365' },
  { icon: Database, label: 'CRM', color: '#c3a365' },
  { icon: Zap, label: 'AI Automation', color: '#c3a365' },
  { icon: Activity, label: 'Sales Pipeline', color: '#c3a365' },
  { icon: BarChart3, label: 'Dashboard', color: '#c3a365' },
  { icon: TrendingUp, label: 'Revenue Growth', color: '#c3a365', highlight: true },
];

export default function Hero() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeNode, setActiveNode] = useState(-1);

  // Headline slide rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // GSAP entrance + node cascade animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge entrance
      gsap.from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Sub-headline entrance
      gsap.from('.hero-subheadline', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.7,
        ease: 'power3.out',
      });

      // CTAs entrance
      gsap.from('.hero-cta-group', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        ease: 'power3.out',
      });

      // Stats entrance
      gsap.from('.hero-stats', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 1.1,
        ease: 'power3.out',
      });

      // Visual entrance
      gsap.from('.hero-visual-inner', {
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: 'power3.out',
      });

      // Node cascade
      gsap.fromTo('.arch-node',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          delay: 0.8,
          ease: 'back.out(1.7)',
        }
      );

      // Connection lines draw-in
      gsap.from('.conn-line', {
        strokeDashoffset: 200,
        duration: 1,
        stagger: 0.15,
        delay: 1.2,
        ease: 'power2.out',
      });

      // Floating particle animations
      gsap.utils.toArray('.hero-float-particle').forEach((p, i) => {
        gsap.to(p, {
          y: `random(-20, 20)`,
          x: `random(-15, 15)`,
          duration: `random(3, 5)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.3,
        });
      });

      // Pulse ring animation
      gsap.to('.pulse-ring', {
        scale: 2.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: 'power1.out',
        stagger: 0.6,
      });

      // Orbiting dot
      gsap.to('.orbit-dot', {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: 'none',
        transformOrigin: '150px 150px',
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Node highlight cascade
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % NODES.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-premium" ref={sectionRef}>
      {/* Background layers */}
      <div className="hero-bg-mesh"></div>
      <div className="hero-bg-aurora"></div>
      <div className="hero-bg-grid"></div>
      <div className="hero-bg-noise"></div>
      <div className="hero-bg-vignette"></div>

      {/* Floating ambient particles */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`hero-float-particle fp-${i + 1}`}></div>
      ))}

      <div className="hero-layout">
        {/* LEFT – TEXT CONTENT */}
        <div className="hero-text-block">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <Sparkles size={14} className="badge-sparkle" />
            <span className="badge-label">Enabling Intelligence</span>
          </div>

          {/* Headline Slider */}
          <div className="hero-headline-area" ref={headlineRef}>
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className={`hero-slide ${i === activeSlide ? 'slide-active' : ''}`}
              >
                <h1 className="hero-h1">
                  <span className="hero-h1-line">{slide.text1}</span>
                  <span className="hero-h1-line hero-h1-accent">{slide.text2}</span>
                </h1>
              </div>
            ))}
            {/* Slide indicators */}
            <div className="slide-indicators">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`slide-dot ${i === activeSlide ? 'dot-active' : ''}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>

          <p className="hero-subheadline">
            Ai24 helps businesses scale through growth architecture, AI-powered
            workflows, conversion systems, and revenue intelligence.
          </p>

          <div className="hero-cta-group">
            <button 
              className="hero-btn-primary" 
              id="hero-cta-primary"
              onClick={() => {
                navigate('/contact');
              }}
            >
              <span>Book Strategy Call</span>
              <ArrowRight size={18} />
            </button>
            <button 
              className="hero-btn-ghost" 
              id="hero-cta-secondary"
              onClick={() => {
                navigate('/capabilities');
              }}
            >
              <span>Explore Capabilities</span>
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">50+</span>
              <span className="hero-stat-label">Clients Worldwide</span>
            </div>
            <div className="hero-stat-sep"></div>
            <div className="hero-stat">
              <span className="hero-stat-value">3.5x</span>
              <span className="hero-stat-label">Avg. Growth Velocity</span>
            </div>
            <div className="hero-stat-sep"></div>
            <div className="hero-stat">
              <span className="hero-stat-value">5+</span>
              <span className="hero-stat-label">Countries</span>
            </div>
          </div>
        </div>

        {/* RIGHT – SYSTEM ARCHITECTURE VISUAL */}
        <div className="hero-visual">
          <div className="hero-visual-inner">
            {/* Orbit ring */}
            <div className="visual-orbit-ring">
              <div className="orbit-dot"></div>
            </div>

            {/* Pulse rings */}
            <div className="pulse-ring pr-1"></div>
            <div className="pulse-ring pr-2"></div>
            <div className="pulse-ring pr-3"></div>

            {/* Central glow */}
            <div className="visual-center-glow"></div>

            {/* Architecture SVG */}
            <svg className="arch-svg" viewBox="0 0 420 480" fill="none" preserveAspectRatio="none">
              {/* Connection lines */}
              <line className="conn-line" x1="210" y1="70" x2="310" y2="150" stroke="rgba(195,163,101,0.35)" strokeWidth="1.5" strokeDasharray="200" />
              <line className="conn-line" x1="310" y1="150" x2="210" y2="230" stroke="rgba(195,163,101,0.35)" strokeWidth="1.5" strokeDasharray="200" />
              <line className="conn-line" x1="210" y1="230" x2="110" y2="310" stroke="rgba(195,163,101,0.35)" strokeWidth="1.5" strokeDasharray="200" />
              <line className="conn-line" x1="110" y1="310" x2="210" y2="390" stroke="rgba(195,163,101,0.35)" strokeWidth="1.5" strokeDasharray="200" />
              <line className="conn-line" x1="210" y1="390" x2="310" y2="450" stroke="rgba(195,163,101,0.35)" strokeWidth="1.5" strokeDasharray="200" />

              {/* Animated data particles on connections */}
              <circle className="data-dot dd-1" r="3" fill="#c3a365">
                <animateMotion dur="3s" repeatCount="indefinite" path="M210,70 L310,150 L210,230 L110,310 L210,390 L310,450" />
              </circle>
              <circle className="data-dot dd-2" r="2.5" fill="#c3a365" opacity="0.6">
                <animateMotion dur="3s" repeatCount="indefinite" path="M210,70 L310,150 L210,230 L110,310 L210,390 L310,450" begin="1s" />
              </circle>
              <circle className="data-dot dd-3" r="2" fill="#c3a365" opacity="0.4">
                <animateMotion dur="3s" repeatCount="indefinite" path="M210,70 L310,150 L210,230 L110,310 L210,390 L310,450" begin="2s" />
              </circle>
            </svg>

            {/* Nodes */}
            {NODES.map((node, i) => {
              const positions = [
                { top: '14.6%', left: '50%' },
                { top: '31.25%', left: '73.8%' },
                { top: '47.9%', left: '50%' },
                { top: '64.6%', left: '26.2%' },
                { top: '81.25%', left: '50%' },
                { top: '93.75%', left: '73.8%' },
              ];
              const NodeIcon = node.icon;
              const isActive = i === activeNode;
              const isHighlight = node.highlight;

              return (
                <div
                  key={i}
                  className={`arch-node ${isActive ? 'node-active' : ''} ${isHighlight ? 'node-final' : ''}`}
                  style={{ ...positions[i] }}
                >
                  <div className="arch-node-glow" style={{ background: `radial-gradient(circle, ${node.color}22, transparent 70%)` }}></div>
                  <div
                    className="arch-node-box"
                    style={{
                      borderColor: isActive ? node.color : undefined,
                      boxShadow: isActive ? `0 0 25px ${node.color}33, 0 0 50px ${node.color}11` : undefined,
                    }}
                  >
                    <NodeIcon size={22} style={{ color: isActive || isHighlight ? node.color : undefined }} />
                  </div>
                  <span className="arch-node-label">{node.label}</span>
                  {isActive && <span className="arch-node-ping" style={{ borderColor: node.color }}></span>}
                </div>
              );
            })}

            {/* "System Flow" glass label */}
            <div className="visual-glass-label">
              <Zap size={12} />
              <span>Live System Flow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
}
