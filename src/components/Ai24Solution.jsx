import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Ai24Solution.css';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Ai24Solution() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Create main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // 1. Text Content Animations
      tl.fromTo('.solution-badge',
        { y: -20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(2)" }
      )
      .fromTo('.solution-title',
        { y: 40, opacity: 0, rotationX: -30, transformPerspective: 800 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1, ease: "power4.out" },
        "-=0.4"
      )
      .fromTo('.solution-desc',
        { y: 30, opacity: 0, filter: "blur(5px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo('.solution-btn',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)" },
        "-=0.7"
      );

      // 2. Orbit System Animations
      // Ambient glow scales up
      tl.fromTo('.sv-ambient',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out" },
        "-=1.5"
      )
      // Center Core bursts in
      .fromTo('.center-core',
        { scale: 0, rotation: -90 },
        { scale: 1, rotation: 0, duration: 1.2, ease: "elastic.out(1, 0.4)" },
        "-=1.5"
      )
      // Orbits ring expand outward sequentially
      .fromTo('.orbit',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, stagger: 0.2, ease: "back.out(1.2)" },
        "-=1.2"
      )
      // Orbit items pop into view
      .fromTo('.orbit-item',
        { scale: 0, rotation: 45 },
        { scale: 1, rotation: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.5)" },
        "-=1.4"
      )
      // Orbit dots
      .fromTo('.orbit-dot',
        { scale: 0 },
        { scale: 1, duration: 0.4, stagger: 0.2, ease: "back.out(2)" },
        "<"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="solution" className="solution-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="solution-content">
          
          <div className="solution-text">
            <div className="solution-badge">
              <span className="solution-badge-dot"></span>
              The Paradigm Shift
            </div>
            
            <h2 className="solution-title">
              Ai24 — A Unified<br />
              <span>Growth System</span>
            </h2>
            
            <p className="solution-desc">
              Instead of hiring separate vendors for marketing, technology, automation, and analytics,
              Ai24 integrates them into a single scalable growth infrastructure.
            </p>
            
            <button 
              className="solution-btn mt-4"
              onClick={() => {
                navigate('/capabilities');
              }}
            >
              Discover the system <ArrowRight size={18} />
            </button>
          </div>

          <div className="solution-visual">
            
            {/* Floating particles */}
            <div className="solution-particles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`sol-particle sp-${i + 1}`}></div>
              ))}
            </div>

            <div className="sv-ambient"></div>
            
            <div className="orbit-system">
              
              <div className="center-core">
                <div className="core-pulse"></div>
                <span>Ai24</span>
              </div>
              
              <div className="orbit orbit-1">
                <div className="orbit-dot"></div>
                <div className="orbit-label-container">
                  <div className="orbit-item">Marketing</div>
                </div>
              </div>
              
              <div className="orbit orbit-2">
                <div className="orbit-dot"></div>
                <div className="orbit-label-container">
                  <div className="orbit-item">Technology</div>
                </div>
              </div>
              
              <div className="orbit orbit-3">
                <div className="orbit-dot"></div>
                <div className="orbit-label-container">
                  <div className="orbit-item">Analytics</div>
                </div>
              </div>
              
              <div className="orbit orbit-4">
                <div className="orbit-dot"></div>
                <div className="orbit-label-container">
                  <div className="orbit-item">Automation</div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
