import React, { useState, useEffect, useRef } from 'react';
import { Target, Cpu, LayoutTemplate, ActivitySquare, TrendingUp, Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Capabilities.css';

gsap.registerPlugin(ScrollTrigger);

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const caps = [
    {
      title: "Customer Acquisition",
      subtitle: "Omnichannel Growth Architecture",
      icon: <Target size={24} strokeWidth={1} />,
      list: ["Lead generation systems", "Paid media architecture", "Funnel psychology & design", "Landing page engineering"]
    },
    {
      title: "CRM & Automation",
      subtitle: "Intelligent Workflow Stacks",
      icon: <Cpu size={24} strokeWidth={1} />,
      list: ["Pipeline architecture", "Lead routing systems", "AI automation workflows", "Custom nurturing systems"]
    },
    {
      title: "Digital Platforms",
      subtitle: "Conversion-First Experiences",
      icon: <LayoutTemplate size={24} strokeWidth={1} />,
      list: ["Luxury web platforms", "Mobile applications", "High-performance UI/UX"]
    },
    {
      title: "Performance Optimization",
      subtitle: "Data-Backed Scaling",
      icon: <ActivitySquare size={24} strokeWidth={1} />,
      list: ["A/B testing protocols", "CRO strategies", "Advanced funnel analytics"]
    },
    {
      title: "Revenue Intelligence",
      subtitle: "Metric-Driven Forecasting",
      icon: <TrendingUp size={24} strokeWidth={1} />,
      list: ["Custom data dashboards", "Attribution modelling", "Forecasting systems"]
    }
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
      tl.fromTo('.cap-badge',
        { y: -30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      )
      .fromTo('.cap-main-title',
        { y: 50, opacity: 0, rotationX: 45, transformPerspective: 1000 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out" },
        "-=0.7"
      );

      // Slats Stagger Reveal
      // We'll stagger each slat swinging up from below
      tl.fromTo('.cap-slat',
        { y: 60, opacity: 0, rotationX: -15, transformPerspective: 800 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1, stagger: 0.15, ease: "back.out(1.2)" },
        "-=1"
      );

      // Slat Content internal slide
      const slats = gsap.utils.toArray('.cap-slat');
      slats.forEach((slat, index) => {
        const num = slat.querySelector('.slat-num');
        const titles = slat.querySelector('.slat-titles');
        const iconCircle = slat.querySelector('.slat-icon-circle');

        tl.fromTo([num, titles],
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.05 },
          `<${index * 0.1}`
        )
        .fromTo(iconCircle,
          { scale: 0, rotation: -45 },
          { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(2)" },
          "<0.1"
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="capabilities" className="capabilities-section" ref={sectionRef}>
      <div className="cap-bg-elements">
        <div className="cap-dynamic-glow" style={{ top: `${(activeIndex * 20) + 10}%` }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="cap-header-side">
          <div className="cap-badge">
            <span className="cap-badge-dot"></span>
            Expertise
          </div>
          <h2 className="cap-main-title">What We<br /><span>Build</span></h2>
        </div>

        <div className="cap-slat-container">
          {caps.map((c, i) => (
            <div 
              key={i} 
              className={`cap-slat ${activeIndex === i ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div className="slat-main">
                <div className="slat-left">
                  <span className="slat-num">0{i + 1}</span>
                  <div className="slat-titles">
                    <h3>{c.title}</h3>
                    <p>{c.subtitle}</p>
                  </div>
                </div>
                
                <div className="slat-right">
                  <div className="slat-icon-circle">
                    {c.icon}
                  </div>
                  <div className="slat-toggle">
                    {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
              </div>

              <div className="slat-content">
                <div className="slat-content-inner">
                  <ul className="slat-list">
                    {c.list.map((item, idx) => (
                      <li key={idx}>
                        <div className="list-marker"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="slat-visual-hint">
                    {React.cloneElement(c.icon, { size: 120, opacity: 0.03 })}
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
