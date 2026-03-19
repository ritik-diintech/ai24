import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Cpu, Network, Database, ArrowRight, Activity, Server, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AutomationSolutions() {
  const pageRef = useRef(null);

  const solutions = [
    { 
      title: "AI Workflows", 
      icon: <Zap size={24} color="#c3a365" />, 
      desc: "Automate repetitive tasks and complex lead nurturing with custom-trained semantic models and logic gateways.",
      stats: "300% efficiency increase" 
    },
    { 
      title: "Intelligent Lead Routing", 
      icon: <Network size={24} color="#c3a365" />, 
      desc: "Instantly score and route high-value leads to the right closer based on cognitive data intelligence and intent signals.",
      stats: "Zero lead leakage" 
    },
    { 
      title: "CRM Engineering", 
      icon: <Database size={24} color="#c3a365" />, 
      desc: "Bespoke HubSpot and Salesforce architecture designed for massive scale, deep reporting, and automated lifecycle management.",
      stats: "Uncompromised data integrity" 
    },
    { 
      title: "Scale Infrastructure", 
      icon: <Server size={24} color="#c3a365" />, 
      desc: "Technical pipelines and custom API middleware that grows synchronously with your expanding revenue operations.",
      stats: "Infinite horizontal scale" 
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animations
      gsap.fromTo('.auto-bg-orb', 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1.2, opacity: 0.6, duration: 4, yoyo: true, repeat: -1, ease: 'sine.inOut' }
      );

      gsap.fromTo('.auto-watermark',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 0.03, duration: 2, ease: 'power3.out' }
      );

      gsap.fromTo('.auto-reveal',
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
      );

      // Scroll Animations for Solution Cards
      gsap.utils.toArray('.auto-card').forEach((card, i) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Data Flow lines animation
      gsap.to('.data-line', {
        strokeDashoffset: 0,
        duration: 3,
        repeat: -1,
        ease: 'linear'
      });

    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container" style={{ background: 'transparent' }} ref={pageRef}>
      
      {/* ── COGNITIVE AI HERO SECTION ── */}
      <section className="auto-hero" style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '8rem',
        overflow: 'hidden'
      }}>
        
        {/* Massive Background Typography */}
        <div className="auto-watermark" style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(6rem, 15vw, 24rem)',
          fontFamily: "'Clash Display', sans-serif",
          fontWeight: 600,
          color: 'transparent',
          WebkitTextStroke: '2px rgba(255,255,255,1)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 0,
          letterSpacing: '-0.02em',
        }}>
          AUTONOMY
        </div>

        {/* Dynamic Abstract Orb */}
        <div className="auto-bg-orb" style={{ 
          position: 'absolute', 
          top: '20%', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '60vw', 
          height: '60vw', 
          background: 'radial-gradient(circle, rgba(195,163,101,0.06) 0%, transparent 70%)', 
          filter: 'blur(80px)', 
          zIndex: 0, 
          pointerEvents: 'none',
          borderRadius: '50%'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
             
             <div className="auto-reveal" style={{ 
               display: 'inline-flex', 
               alignItems: 'center', 
               gap: '1rem', 
               marginBottom: '2.5rem',
               padding: '0.6rem 1.2rem',
               border: '1px solid rgba(195,163,101,0.2)',
               borderRadius: '100px',
               background: 'rgba(195,163,101,0.03)',
               backdropFilter: 'blur(10px)'
             }}>
               <Cpu size={14} color="#c3a365" />
               <span style={{ color: '#c3a365', fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Cognitive Infrastructure</span>
             </div>

             <h1 className="auto-reveal" style={{ 
                fontFamily: "'Clash Display', sans-serif", 
                fontSize: 'clamp(3.5rem, 6vw, 6.5rem)', 
                fontWeight: 200, 
                color: '#ffffff', 
                lineHeight: 1.05,
                margin: '0 0 2rem 0',
                letterSpacing: '-0.01em'
             }}>
                Engineer the <br />
                <span style={{ 
                  fontStyle: 'italic', 
                  color: 'transparent', 
                  WebkitTextStroke: '1px rgba(195,163,101,0.8)' 
                }}>Unfair Advantage.</span>
             </h1>

             <p className="auto-reveal" style={{ 
                fontSize: '1.25rem', 
                lineHeight: 1.7, 
                color: 'rgba(255, 255, 255, 0.5)', 
                fontWeight: 300,
                margin: '0 auto 4rem auto',
                maxWidth: '700px'
             }}>
                We build the intelligent central nervous systems that allow modern hyper-growth businesses to scale limitlessly without increasing human overhead. 
             </p>

             <div className="auto-reveal" style={{
                display: 'inline-flex',
                gap: '2rem',
                padding: '2rem 3rem',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '8px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)',
                backdropFilter: 'blur(10px)'
             }}>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ color: '#fff', fontSize: '2rem', fontFamily: "'Clash Display', sans-serif", fontWeight: 300 }}>10x</div>
                  <div style={{ color: 'rgba(195,163,101,0.8)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '0.5rem', fontWeight: 600 }}>Yield per Headcount</div>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ color: '#fff', fontSize: '2rem', fontFamily: "'Clash Display', sans-serif", fontWeight: 300 }}>24/7</div>
                  <div style={{ color: 'rgba(195,163,101,0.8)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '0.5rem', fontWeight: 600 }}>Autonomous Execution</div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* ── THE ARCHITECTURE CORE SECITON ── */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
             
             {/* Staggered Row Layouts for Solutions */}
             {solutions.map((s, i) => {
               const isEven = i % 2 === 0;
               return (
                 <div key={i} className="auto-card" style={{ 
                   display: 'grid', 
                   gridTemplateColumns: isEven ? '0.8fr 1.2fr' : '1.2fr 0.8fr', 
                   gap: '4rem', 
                   alignItems: 'center' 
                 }}>
                   
                   {/* Abstract Visual Grid/Diagram */}
                   <div style={{ 
                     order: isEven ? 1 : 2, 
                     position: 'relative', 
                     height: '400px', 
                     borderRadius: '8px',
                     border: '1px solid rgba(255,255,255,0.05)',
                     background: 'linear-gradient(135deg, rgba(15, 17, 22, 0.4) 0%, rgba(10, 12, 16, 0.8) 100%)',
                     overflow: 'hidden',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center'
                   }}>
                      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(195,163,101,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(195,163,101,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                      
                      {/* Decorative Tech Elements */}
                      <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '2rem', alignItems: 'center' }}>
                         <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(195,163,101,0.05)', border: '1px solid rgba(195,163,101,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 30px rgba(195,163,101,0.1)' }}>
                           <ShieldCheck size={24} color="rgba(195,163,101,0.6)" />
                         </div>
                         <svg width="100" height="2" style={{ overflow: 'visible' }}>
                           <line x1="0" y1="1" x2="100" y2="1" stroke="rgba(195,163,101,0.2)" strokeWidth="2" strokeDasharray="4 4" />
                           <line className="data-line" x1="0" y1="1" x2="100" y2="1" stroke="#c3a365" strokeWidth="2" strokeDasharray="100" strokeDashoffset="100" />
                         </svg>
                         <div style={{ width: '80px', height: '80px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                            {s.icon}
                         </div>
                      </div>
                   </div>

                   {/* Content */}
                   <div style={{ order: isEven ? 2 : 1 }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <span style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'Clash Display', sans-serif", fontSize: '2rem', fontWeight: 300 }}>0{i + 1}</span>
                        <div style={{ width: '40px', height: '1px', background: 'rgba(195,163,101,0.4)' }}></div>
                      </div>
                      
                      <h2 style={{ 
                        fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                        color: '#fff', 
                        fontFamily: "'Clash Display', sans-serif", 
                        fontWeight: 300, 
                        marginBottom: '1.5rem', 
                        lineHeight: 1.1 
                      }}>
                        {s.title}
                      </h2>
                      
                      <p style={{ 
                        color: 'rgba(255,255,255,0.5)', 
                        fontSize: '1.15rem', 
                        lineHeight: 1.7, 
                        fontWeight: 300,
                        marginBottom: '2.5rem',
                        maxWidth: '500px'
                      }}>
                        {s.desc}
                      </p>

                      <div style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '1rem', 
                        padding: '1rem 2rem', 
                        background: 'rgba(195,163,101,0.05)', 
                        border: '1px dashed rgba(195,163,101,0.3)', 
                        borderRadius: '4px' 
                      }}>
                         <Activity size={18} color="#c3a365" />
                         <span style={{ color: '#fff', fontWeight: 500, letterSpacing: '0.05em', fontSize: '0.9rem' }}>{s.stats}</span>
                      </div>
                   </div>

                 </div>
               );
             })}

          </div>
        </div>
      </section>

      {/* ── FINAL AUDIT CTA ── */}
      <section className="section-padding" style={{ position: 'relative', marginTop: '4rem' }}>
        <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(195,163,101,0.3), transparent)' }}></div>
        
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: "'Clash Display', sans-serif", fontWeight: 200, color: '#fff', lineHeight: 1.1, marginBottom: '2rem' }}>
              Stop Scaling <br /> Headcount. <span style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1px rgba(195,163,101,0.8)' }}>Scale Systems.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.2rem', fontWeight: 300, marginBottom: '3rem' }}>
              Book an architecture audit to see how AI workflows can double your pipeline velocity in 90 days.
            </p>
            
            <a href="/contact" style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.2rem 3rem', 
              background: '#c3a365', 
              color: '#000', 
              fontWeight: 600, 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e6d3a8';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#c3a365';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              Request Automation Audit <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
