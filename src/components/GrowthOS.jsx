import React, { useEffect, useRef } from 'react';
import { ChevronDown, MousePointer2, Target, Cpu, BarChart3, Layout, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './GrowthOS.css';

gsap.registerPlugin(ScrollTrigger);

export default function GrowthOS() {
  const sectionRef = useRef(null);
  const flowSteps = [
    { title: "Traffic Sources", icon: <MousePointer2 size={22} strokeWidth={1.5} /> },
    { title: "Customer Acquisition Engine", icon: <Target size={22} strokeWidth={1.5} /> },
    { title: "CRM & Automation Layer", icon: <Cpu size={22} strokeWidth={1.5} /> },
    { title: "Conversion Intelligence", icon: <BarChart3 size={22} strokeWidth={1.5} /> },
    { title: "Revenue Dashboard", icon: <Layout size={22} strokeWidth={1.5} /> },
    { title: "Scale Architecture", icon: <TrendingUp size={22} strokeWidth={1.5} /> }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Header Reveal timeline
      const tlHeader = gsap.timeline({
        scrollTrigger: {
          trigger: '.os-header',
          start: 'top 85%'
        }
      });

      tlHeader.fromTo('.os-badge',
        { y: -30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      )
      .fromTo('.os-title',
        { y: 50, opacity: 0, rotationX: -40, transformPerspective: 800 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out" },
        "-=0.7"
      )
      .fromTo('.os-sub',
        { y: 30, opacity: 0, filter: "blur(5px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo('.os-global-glow',
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" },
        "-=1.5"
      );

      // 2. Vertical Pipeline System (Iterative/Staggered Build)
      const tlSystem = gsap.timeline({
        scrollTrigger: {
          trigger: '.os-vertical-flow',
          start: 'top 75%'
        }
      });

      // To make it look like a cascading data flow, we animate each step group (node + connector)
      const nodes = gsap.utils.toArray('.flow-node');
      const connectors = gsap.utils.toArray('.flow-connector');

      nodes.forEach((node, index) => {
        // Drop the node in with 3D unhinge effect
        tlSystem.fromTo(node,
          { 
            y: -50, 
            opacity: 0, 
            rotationX: 45, 
            scale: 0.9, 
            transformPerspective: 1000 
          },
          { 
            y: 0, 
            opacity: 1, 
            rotationX: 0, 
            scale: 1, 
            duration: 0.8, 
            ease: "back.out(1.5)" 
          },
          // Connectors start slightly before the node finishes dropping
          index === 0 ? "+=0" : "-=0.3" 
        );

        // Icon Pop inside the node
        const icon = node.querySelector('.node-icon');
        tlSystem.fromTo(icon,
          { scale: 0, rotation: -90 },
          { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(2)" },
          "-=0.5"
        );

        // Text slide inside the node
        const text = node.querySelector('h3');
        tlSystem.fromTo(text,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );

        // If a connector follows this node, animate it expanding downwards
        if (index < connectors.length) {
          const connector = connectors[index];
          tlSystem.fromTo(connector.querySelector('.connector-line'),
            { scaleY: 0, transformOrigin: "top center" },
            { scaleY: 1, duration: 0.5, ease: "power2.inOut" },
            "-=0.2"
          )
          .fromTo(connector.querySelector('.connector-arrow'),
            { y: -20, opacity: 0, scale: 0.5 },
            { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)" },
            "-=0.1"
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="growth-os" className="growth-os-section" ref={sectionRef}>
      <div className="os-global-glow"></div>
      
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="os-header text-center">
          <div className="os-badge">
            <span className="os-badge-dot"></span>
            The OS
          </div>
          <h2 className="os-title">
            The Ai24 Growth<br />
            <span>Operating System</span>
          </h2>
          <p className="os-sub">
            Ai24 designs connected revenue infrastructure where acquisition, automation, conversion, and intelligence operate as one system.
          </p>
        </div>

        {/* Visual Flow Pipeline */}
        <div className="os-vertical-flow">
          {flowSteps.map((step, index) => (
            <React.Fragment key={index}>
              
              {/* Flow Node */}
              <div className="flow-node">
                <div className="node-glass-panel">
                  <div className="node-glow-ring"></div>
                  <div className="node-content">
                    <div className="node-icon">{step.icon}</div>
                    <h3>{step.title}</h3>
                  </div>
                </div>
              </div>

              {/* Downward Arrow Connectors (except last item) */}
              {index < flowSteps.length - 1 && (
                <div className="flow-connector">
                  <div className="connector-line"></div>
                  <ChevronDown className="connector-arrow" size={24} />
                </div>
              )}
              
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </section>
  );
}
