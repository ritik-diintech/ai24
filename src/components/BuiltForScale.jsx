import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Building2, 
  Settings, 
  Map, 
  LineChart,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './BuiltForScale.css';

gsap.registerPlugin(ScrollTrigger);

export default function BuiltForScale() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  
  const pillars = [
    { 
      title: "Dubai Strategic HQ", 
      desc: "Our strategic presence in Dubai provides unrivaled access to global financial ecosystems and high-tier institutional partnerships.",
      icon: <Building2 size={24} />,
      tag: "Global"
    },
    { 
      title: "High-Velocity Hubs", 
      desc: "India-based execution centers providing the technical horsepower needed to build, deploy, and manage complex revenue systems at speed.",
      icon: <Settings size={24} />,
      tag: "Technical"
    },
    { 
      title: "Unified Protocols", 
      desc: "Every growth node operates on standardized delivery protocols, ensuring consistent, predictable quality across all international markets.",
      icon: <Map size={24} />,
      tag: "Strategic"
    },
    { 
      title: "Elastic Infrastructure", 
      desc: "Our growth architecture is modular by design, allowing your revenue engine to expand without structural friction as you scale.",
      icon: <LineChart size={24} />,
      tag: "Scale"
    },
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

      // Header Unveil
      tl.fromTo('.scale-badge',
        { y: -30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
        "-=1.2"
      )
      .fromTo('.scale-main-title',
        { y: 50, opacity: 0, rotationX: 45, transformPerspective: 1000 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out" },
        "-=0.7"
      )
      .fromTo('.scale-header-desc',
        { x: 30, opacity: 0, filter: "blur(5px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      // Background ambiances
      .fromTo('.scale-gradient-glow',
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power2.out" },
        "-=1.5"
      );

      // Pillars Stagger Reveal
      const cards = gsap.utils.toArray('.scale-pillar-card');
      tl.fromTo(cards,
        { y: 60, opacity: 0, rotationY: -15, scale: 0.9, transformPerspective: 1000 },
        { y: 0, opacity: 1, rotationY: 0, scale: 1, duration: 1, stagger: 0.15, ease: "back.out(1.2)" },
        "-=1.2"
      );

      // Inner card animations
      cards.forEach((card, i) => {
        tl.fromTo(card.querySelector('.pillar-icon-box'),
          { scale: 0, rotation: 45 },
          { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(2)" },
          `<${i * 0.1}`
        )
        .fromTo(card.querySelectorAll('.pillar-title, .pillar-desc, .pillar-footer'),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          "<0.1"
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="built-scale-section section-padding" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>

      <div className="scale-bg-layer">
        <div className="scale-blueprint-grid"></div>
        <div className="scale-gradient-glow"></div>
      </div>

      <div className="container relative z-10">
        <div className="scale-header-wrap">
          <div className="scale-badge">
            <span className="badge-dot"></span>
            Expansion Ready
          </div>
          
          <div className="scale-title-row">
            <h2 className="scale-main-title">
              Built for <span>Scale</span>
            </h2>
            
            <p className="scale-header-desc">
              We collapse the friction of growth. From local launches to global market dominance, 
              Ai24 engineers the infrastructure that makes expansion a predictable science.
            </p>
          </div>
        </div>

        <div className="scale-pillars-grid">
          {pillars.map((pillar, i) => (
            <div key={i} className="scale-pillar-card">
              <div className="pillar-inner glass-pane">
                <div className="pillar-top">
                  <div className="pillar-icon-box">
                    {pillar.icon}
                  </div>
                  <span className="pillar-tag">{pillar.tag}</span>
                </div>
                
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
                
                <div className="pillar-footer">
                  <span 
                    className="pillar-link"
                    style={{ cursor: 'pointer' }}
                    onClick={() => { navigate('/global-presence'); }}
                  >
                    Explore Infrastructure <ChevronRight size={14} />
                  </span>
                  <div className="pillar-blueprint-lines">
                    <span className="b-line h-line"></span>
                    <span className="b-line v-line"></span>
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
