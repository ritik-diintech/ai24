import React, { useEffect, useRef } from 'react';
import { Network, Database, Layers, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProblemSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection() {
  const sectionRef = useRef(null);
  const problems = [
    { 
      icon: <Network size={28} strokeWidth={1.5} />, 
      title: "Fragmented Systems", 
      desc: "Marketing, CRM, and automation operate in completely isolated silos." 
    },
    { 
      icon: <Layers size={28} strokeWidth={1.5} />, 
      title: "Disconnected Data", 
      desc: "Data points are tracked but not unified to drive revenue decisions." 
    },
    { 
      icon: <Target size={28} strokeWidth={1.5} />, 
      title: "Unpredictable Acquisition", 
      desc: "Customer acquisition relies on hope rather than engineered algorithms." 
    },
    { 
      icon: <Database size={28} strokeWidth={1.5} />, 
      title: "Tool Fatigue", 
      desc: "Adding more software layers instead of simplifying the growth engine." 
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Header Animation Cinematic Pop
      const tlHeader = gsap.timeline({
        scrollTrigger: {
          trigger: '.ps-header',
          start: 'top 85%'
        }
      });
      tlHeader.fromTo('.ps-badge', 
        { y: -30, opacity: 0, scale: 0.8 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      )
      .fromTo('.ps-title',
        { y: 50, opacity: 0, rotateX: 45, transformPerspective: 800 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: "power4.out" },
        "-=0.7"
      );

      // 2. Grid Cards Staggered Reveal with 3D Twist Effect
      const tlGrid = gsap.timeline({
        scrollTrigger: {
          trigger: '.ps-grid',
          start: 'top 80%',
        }
      });
      
      tlGrid.fromTo('.ps-card', 
        { 
          y: 100, 
          opacity: 0, 
          rotationY: 35, 
          rotationX: 25,
          scale: 0.8,
          transformPerspective: 1200 
        }, 
        { 
          y: 0, 
          opacity: 1, 
          rotationY: 0, 
          rotationX: 0,
          scale: 1,
          duration: 1.4, 
          stagger: 0.15, 
          ease: "expo.out" 
        }
      )
      .fromTo('.psc-icon-wrap',
        { scale: 0, rotation: -90 },
        { scale: 1, rotation: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)" },
        "-=1.2"
      )
      .fromTo('.psc-title, .psc-desc',
        { x: -30, opacity: 0, filter: "blur(4px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, stagger: 0.05, ease: "power3.out" },
        "-=1.2"
      );

      // 3. Conclusion Box Cinematic Expansion
      const tlConc = gsap.timeline({
        scrollTrigger: {
          trigger: '.ps-conclusion',
          start: 'top 85%'
        }
      });

      tlConc.fromTo('.ps-conclusion',
        { scale: 0.85, opacity: 0, clipPath: "circle(0% at 50% 50%)" },
        { scale: 1, opacity: 1, clipPath: "circle(150% at 50% 50%)", duration: 1.8, ease: "power4.inOut" }
      )
      .fromTo('.ps-conc-bg',
        { scale: 1.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out" },
        "<0.2"
      )
      .fromTo('.ps-conc-text, .ps-conc-highlight',
        { y: 40, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, stagger: 0.2, ease: "power3.out" },
        "-=1.2"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="challenge" className="problem-section" ref={sectionRef}>
      {/* Ambient background glows */}
      <div className="ps-ambient">
        <div className="ps-orb ps-orb-1"></div>
        <div className="ps-orb ps-orb-2"></div>
      </div>

      <div className="container ps-container">
        
        {/* Header */}
        <div className="ps-header">
          <div className="ps-badge">
            <span className="ps-badge-dot"></span>
            The Market Reality
          </div>
          <h2 className="ps-title">
            Why Most Businesses<br/>
            <span>Struggle to Scale</span>
          </h2>
        </div>

        {/* Premium Frameless Grid */}
        <div className="ps-grid">
          {problems.map((p, i) => (
            <div key={i} className="ps-card">
              <div className="ps-card-ambient"></div>
              <div className="psc-icon-wrap">
                <div className="psc-icon">{p.icon}</div>
                <div className="psc-glow"></div>
              </div>
              <h3 className="psc-title">{p.title}</h3>
              <p className="psc-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Conclusion / Bridge */}
        <div className="ps-conclusion">
          <div className="ps-conc-bg"></div>
          <p className="ps-conc-text">Most companies don't need more tools.</p>
          <h3 className="ps-conc-highlight">They need a unified growth system.</h3>
        </div>

      </div>
    </section>
  );
}
