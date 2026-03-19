import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Palette, 
  Code2, 
  BrainCircuit, 
  BarChart3, 
  Megaphone,
  Network,
  Users2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './TalentArchitecture.css';

gsap.registerPlugin(ScrollTrigger);

export default function TalentArchitecture() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const studios = [
    {
      title: "Design Studio",
      desc: "Crafting high-fidelity visual architectures and premium user experiences that define market leaders.",
      icon: <Palette size={24} />,
      specialties: ["Visual Design", "UX Architecture", "Brand Systems"],
      color: "rgba(195, 163, 101, 0.4)"
    },
    {
      title: "Engineering",
      desc: "High-velocity technical execution centers delivering robust, scalable infrastructure and custom software solutions.",
      icon: <Code2 size={24} />,
      specialties: ["System Architecture", "Custom Dev", "Data Infrastructure"],
      color: "rgba(100, 200, 255, 0.4)"
    },
    {
      title: "AI & Automation",
      desc: "Architecting proprietary AI protocols and autonomous workflows that scale performance beyond human limits.",
      icon: <BrainCircuit size={24} />,
      specialties: ["AI Agents", "Automated Ops", "Neural Logic"],
      color: "rgba(200, 100, 255, 0.4)"
    },
    {
      title: "Growth Lab",
      desc: "Data-driven revenue engineering focused on predictable scaling and high-intent customer acquisition.",
      icon: <BarChart3 size={24} />,
      specialties: ["Revenue Ops", "Performance Data", "Predictive Analytics"],
      color: "rgba(100, 255, 150, 0.4)"
    },
    {
      title: "Marketing Studio",
      desc: "Strategic creative deployment and performance marketing systems engineered for global market penetration.",
      icon: <Megaphone size={24} />,
      specialties: ["Campaign Dev", "Creative Ops", "Performance Hub"],
      color: "rgba(255, 100, 100, 0.4)"
    },
    {
      title: "Delivery & Strategy",
      desc: "Institutional-grade project governance and strategic orchestration across our global execution hubs.",
      icon: <Network size={24} />,
      specialties: ["Governance", "Global Logistics", "Elite Orchestration"],
      color: "rgba(255, 200, 100, 0.4)"
    }
  ];

  /* ── GSAP Scroll Reveal Setup ── */
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });

      // Header Sequence
      tl.fromTo('.talent-badge',
        { y: -30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      )
      .fromTo('.talent-main-title',
        { y: 50, opacity: 0, rotationX: 45, transformPerspective: 1000 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out" },
        "-=0.7"
      )
      .fromTo('.talent-header-meta',
        { x: 30, opacity: 0, filter: "blur(5px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      // Background ambiances swell up
      .fromTo('.talent-bg-layer div',
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, stagger: 0.3, ease: "power2.out" },
        "-=1.5"
      );

      // Studio Grid Stagger Release
      const cards = gsap.utils.toArray('.studio-card-lux');
      tl.fromTo(cards,
        { 
          y: 60, 
          opacity: 0, 
          rotationY: -10, 
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

      // Internal structure slide
      cards.forEach((card, i) => {
        tl.fromTo(card.querySelector('.studio-icon-wrap'),
          { scale: 0, rotation: 45 },
          { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(2)" },
          `<${i * 0.1}`
        )
        .fromTo(card.querySelectorAll('.studio-title, .studio-desc'),
          { x: -15, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "<0.2"
        )
        .fromTo(card.querySelectorAll('.spec-tag'),
          { scale: 0, opacity: 0, y: 10 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "back.out(2)" },
          "<0.2"
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="talent-arch-section" ref={sectionRef}>
      <div className="talent-bg-layer">
        <div className="talent-radial-glow"></div>
        <div className="talent-grid-pattern"></div>
      </div>

      <div className="container relative z-10">
        <div className="talent-header-lux">
          <div className="talent-badge">
            <Users2 size={14} /> Team Architecture
          </div>
          
          <div className="talent-headline-row">
            <h2 className="talent-main-title">
              The Talent Powering <span>Ai24</span>
            </h2>
            
            <div className="talent-header-meta">
              <p>Specialized Studio Ecosystems</p>
              <div className="meta-line"></div>
              <p className="meta-sub">A globally distributed network of elite growth engineers, designers, and AI architects.</p>
              <button 
                className="talent-join-btn mt-4"
                onClick={() => { navigate('/careers'); }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  marginTop: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}
              >
                Join Our Hub <Users2 size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="talent-studios-grid">
          {studios.map((studio, i) => (
            <div 
              key={i} 
              className="studio-card-lux"
            >
              <div className="studio-card-inner">
                {/* Visual Accent */}
                <div className="studio-accent" style={{ background: studio.color }}></div>
                
                <div className="studio-card-content">
                  <div className="studio-top">
                    <div className="studio-icon-wrap">
                      {studio.icon}
                    </div>
                  </div>
                  
                  <h3 className="studio-title">{studio.title}</h3>
                  <p className="studio-desc">{studio.desc}</p>
                  
                  <div className="studio-specialties">
                    {studio.specialties.map((spec, si) => (
                      <span key={si} className="spec-tag">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="studio-border"></div>
                <div className="studio-corner corner-tl"></div>
                <div className="studio-corner corner-br"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
