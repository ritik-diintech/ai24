import React, { useEffect, useRef } from 'react';
import { Search, PenTool, Rocket, TrendingUp, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HowItWorks.css';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const steps = [
    { num: "01", title: "Discover", desc: "Audit business model, funnel architecture, and growth gaps.", icon: <Search size={22} strokeWidth={1.5} /> },
    { num: "02", title: "Design", desc: "Build acquisition, automation, and conversion architecture.", icon: <PenTool size={22} strokeWidth={1.5} /> },
    { num: "03", title: "Deploy", desc: "Execute marketing, CRM infrastructure, and technology systems.", icon: <Rocket size={22} strokeWidth={1.5} /> },
    { num: "04", title: "Scale", desc: "Optimize performance and expand revenue systems predictably.", icon: <TrendingUp size={22} strokeWidth={1.5} /> }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      // Header Animation
      tl.fromTo('.works-badge',
        { y: -30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      )
      .fromTo('.works-title',
        { y: 50, opacity: 0, rotationX: 45, transformPerspective: 1000 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out" },
        "-=0.7"
      )
      .fromTo('.works-sub',
        { y: 30, opacity: 0, filter: "blur(5px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo('.works-ambient',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power2.out" },
        "-=1.5"
      );

      // Flow Path Line Drawing
      tl.fromTo('.flow-path',
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.5, ease: "power2.inOut" },
        "-=0.5"
      );

      // Steps Staggering
      const items = gsap.utils.toArray('.flow-step-item');
      items.forEach((item, i) => {
        // Drop in the anchor
        const anchor = item.querySelector('.step-anchor');
        tl.fromTo(anchor,
          { scale: 0, rotation: -45, y: -20, opacity: 0 },
          { scale: 1, rotation: 0, y: 0, opacity: 1, duration: 0.8, ease: "back.out(2)" },
          i === 0 ? "-=1" : "-=0.6"
        );

        // Slide the content up
        const content = item.querySelector('.step-content');
        tl.fromTo(content,
          { y: 30, opacity: 0, filter: "blur(4px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );

        // Pop in the arrow if exists
        const arrow = item.querySelector('.step-arrow');
        if (arrow) {
          tl.fromTo(arrow,
            { x: -10, opacity: 0, scale: 0.5 },
            { x: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(2)" },
            "-=0.4"
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="methodology" className="works-section" ref={sectionRef}>
      <div className="works-ambient"></div>
      
      <div className="container relative z-10">
        <div className="works-header text-center">
          <div className="works-badge">
            <span className="works-badge-dot"></span>
            Methodology
          </div>
          <h2 className="works-title">
            How Ai24<br />
            <span>Works</span>
          </h2>
          <p className="works-sub">
            A systematic, data-driven approach to engineering predictable growth and revenue infrastructure.
          </p>
        </div>

        <div className="methodology-flow">
          {/* Central Path */}
          <div className="flow-path">
            <div className="flow-path-progress"></div>
          </div>
          
          <div className="flow-steps-container">
            {steps.map((s, i) => (
              <div key={i} className={`flow-step-item item-${i+1}`}>
                
                {/* Visual Anchor */}
                <div className="step-anchor">
                  <div className="anchor-outer">
                    <div className="anchor-inner">
                      {s.icon}
                    </div>
                  </div>
                  <div className="anchor-glow"></div>
                </div>

                {/* Content Area (Frameless) */}
                <div className="step-content">
                  <div className="step-meta">
                    <span className="step-number">{s.num}</span>
                    <div className="step-tag">Phase {i+1}</div>
                  </div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>

                {/* Connector Arrow (Desktop Only) */}
                {i < steps.length - 1 && (
                  <div className="step-arrow">
                    <ChevronRight size={20} strokeWidth={1} />
                  </div>
                )}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
