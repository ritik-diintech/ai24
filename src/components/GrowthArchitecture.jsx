import React, { useEffect, useRef } from 'react';
import { Rocket, Layers, BarChart2, PieChart, Maximize } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './GrowthArchitecture.css';

gsap.registerPlugin(ScrollTrigger);

export default function GrowthArchitecture() {
  const sectionRef = useRef(null);
  const pillars = [
    { title: "Growth Engine", desc: "Customer acquisition architecture.", icon: <Rocket size={24} strokeWidth={1.5} /> },
    { title: "Automation Layer", desc: "CRM and AI workflow engineering.", icon: <Layers size={24} strokeWidth={1.5} /> },
    { title: "Conversion Lab", desc: "Performance optimization and conversion systems.", icon: <BarChart2 size={24} strokeWidth={1.5} /> },
    { title: "Revenue Intelligence", desc: "Dashboards, attribution, and forecasting.", icon: <PieChart size={24} strokeWidth={1.5} /> },
    { title: "Scale Architecture", desc: "Market expansion and growth blueprint.", icon: <Maximize size={24} strokeWidth={1.5} /> }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // 1. Premium Header Reveal
      tl.fromTo('.arch-badge',
        { y: -30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      )
      .fromTo('.arch-title',
        { y: 50, opacity: 0, rotationX: 45, transformPerspective: 1000 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out" },
        "-=0.7"
      )
      .fromTo('.arch-sub',
        { y: 30, opacity: 0, filter: "blur(5px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo('.arch-ambient',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power2.out" },
        "-=1.5"
      );

      // 2. High-End Card Deal Stagger (Grid)
      // They flip down dynamically resembling an advanced system loading up grids
      tl.fromTo('.arch-card-premium',
        { 
          y: 80, 
          opacity: 0, 
          rotationX: -20, 
          rotationY: 10,
          scale: 0.9,
          transformPerspective: 1200 
        },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0, 
          rotationY: 0,
          scale: 1, 
          duration: 1.2, 
          stagger: 0.12, 
          ease: "back.out(1.2)" 
        },
        "-=1.2"
      )
      // Icon wrapping boxes scale in
      .fromTo('.arch-icon-wrapper',
        { scale: 0, rotation: 45 },
        { scale: 1, rotation: 0, duration: 0.8, stagger: 0.12, ease: "back.out(2)" },
        "-=1.4"
      )
      // Huge watermark icons fade in behind
      .fromTo('.arch-watermark',
        { opacity: 0, scale: 0.5, x: 20 },
        { opacity: 1, scale: 1, x: 0, duration: 1, stagger: 0.12, ease: "power2.out" },
        "-=1.4"
      )
      // Text slides up smoothly inside cards
      .fromTo('.arch-card-title, .arch-card-desc',
        { y: 20, opacity: 0, filter: "blur(5px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, stagger: 0.08, ease: "power3.out" },
        "-=1.2"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="growth-architecture" className="architecture-section" ref={sectionRef}>
      <div className="arch-ambient"></div>
      
      <div className="container relative z-10">
        
        {/* Header matching premium aesthetics */}
        <div className="arch-header text-center">
          <div className="arch-badge">
            <span className="arch-badge-dot"></span>
            The System
          </div>
          <h2 className="arch-title">
            Ai24 Growth<br />
            <span>Architecture</span>
          </h2>
          <p className="arch-sub">
            The core pillars of the Ai24 system, engineered to drive predictable revenue and sustainable scale.
          </p>
        </div>

        {/* Premium Luxury Grid */}
        <div className="arch-cards-grid">
          {pillars.map((p, i) => (
            <div key={i} className={`arch-card-premium card-num-${i+1}`}>
              <div className="arch-card-glow"></div>
              <div className="arch-card-inner">
                
                {/* Visual Decorative Overlay */}
                <div className="arch-watermark">
                  {React.cloneElement(p.icon, { size: 100, strokeWidth: 1 })}
                </div>

                <div className="arch-icon-wrapper">
                  {p.icon}
                </div>
                
                <h3 className="arch-card-title">{p.title}</h3>
                <p className="arch-card-desc">{p.desc}</p>
                
                <div className="arch-line-bottom"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
