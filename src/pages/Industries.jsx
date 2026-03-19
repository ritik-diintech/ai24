import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IndustriesSection from '../components/Industries';
import CaseStudies from '../components/CaseStudies';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Industries() {
  const pageRef = useRef(null);
  
  const industryDetails = [
    {
      id: "01",
      name: "Real Estate",
      subtitle: "High-Ticket Conversion",
      problem: "Low quality leads and severe attribution gaps across long buyer journeys.",
      solution: "Intelligent lead enrichment and AI-driven CRM automation.",
      outcome: "3.5x boost in qualified pipelines.",
      highlightStat: "350%",
      highlightLabel: "Pipeline Volume"
    },
    {
      id: "02",
      name: "Financial Services",
      subtitle: "Compliant Scale",
      problem: "Strict compliance limitations creating crippling data silos.",
      solution: "Unified data layers and automated, secure nurturing sequences.",
      outcome: "40% reduction in Customer Acquisition Cost (CAC).",
      highlightStat: "-40%",
      highlightLabel: "Acquisition Cost"
    },
    {
      id: "03",
      name: "B2B SaaS",
      subtitle: "Enterprise Velocity",
      problem: "Declining LTV, high churn, and slow enterprise sales cycles.",
      solution: "Account-based marketing intelligence and proactive retention modeling.",
      outcome: "2x faster enterprise deal closures.",
      highlightStat: "2x",
      highlightLabel: "Sales Velocity"
    },
    {
      id: "04",
      name: "E-Commerce",
      subtitle: "Predictable ROAS",
      problem: "Unpredictable ad performance and low repeat purchase rates.",
      solution: "Dynamic predictive targeting and automated personalization flows.",
      outcome: "65% increase in Customer Lifetime Value.",
      highlightStat: "+65%",
      highlightLabel: "LTV Expansion"
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Bespoke Hero Animation
      const tl = gsap.timeline();
      
      tl.fromTo('.ind-hero-eyebrow', 
        { width: 0, opacity: 0 },
        { width: '100%', opacity: 1, duration: 1, ease: 'expo.inOut' }
      )
      .fromTo('.ind-hero-text',
        { y: 50, opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { y: 0, opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.2, stagger: 0.1, ease: 'power4.out' },
        "-=0.5"
      )
      .fromTo('.ind-hero-desc',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
        "-=0.8"
      )
      .fromTo('.ind-bg-shape',
        { scale: 0.8, opacity: 0, rotation: -15 },
        { scale: 1, opacity: 1, rotation: 0, duration: 2, ease: 'expo.out' },
        "-=1.2"
      );

      // Scroll Reveal for Editorial Rows
      const rows = gsap.utils.toArray('.editorial-row');
      rows.forEach((row) => {
        gsap.fromTo(row,
          { opacity: 0, y: 150 },
          { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%'
            }
          }
        );
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container" ref={pageRef} style={{ background: 'transparent' }}>
      
      {/* ── UNIQUE HERO SECTION ── */}
      <section className="ind-hero" style={{ 
        position: 'relative', 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '6rem',
        overflow: 'hidden'
      }}>
        
        {/* Abstract Architectural Background Elements */}
        <div className="ind-bg-shape" style={{
          position: 'absolute',
          top: '15%',
          right: '-5%',
          width: '50vw',
          height: '50vw',
          border: '1px solid rgba(195, 163, 101, 0.1)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(195, 163, 101, 0.03) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>
        <div className="ind-bg-shape" style={{
          position: 'absolute',
          top: '25%',
          right: '5%',
          width: '30vw',
          height: '30vw',
          border: '1px solid rgba(195, 163, 101, 0.15)',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="ind-hero-grid">
            
            {/* Left Content */}
            <div className="ind-hero-left">
              <div className="ind-hero-eyebrow" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '3rem',
                borderBottom: '1px solid rgba(195, 163, 101, 0.3)',
                paddingBottom: '1rem'
              }}>
                <span style={{ color: '#c3a365', fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Sector Context</span>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(195, 163, 101, 0.1))' }}></div>
              </div>

              <h1 style={{ 
                fontFamily: "'Clash Display', sans-serif", 
                fontSize: 'clamp(3rem, 5vw, 5.5rem)', 
                lineHeight: 1.1, 
                fontWeight: 500,
                color: '#ffffff',
                margin: 0
              }}>
                <div className="ind-hero-text" style={{ overflow: 'hidden' }}>Architected</div>
                <div className="ind-hero-text" style={{ overflow: 'hidden' }}>
                   For Your <span style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1px #c3a365' }}>Domain.</span>
                </div>
              </h1>
            </div>

            {/* Right Content */}
            <div className="ind-hero-desc">
              <p style={{ 
                fontSize: 'clamp(1rem, 3vw, 1.4rem)', 
                lineHeight: 1.7, 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontWeight: 300,
                marginBottom: '2rem'
              }}>
                Generic growth tactics fail at scale. We engineer bespoke intelligence engines mapped precisely to your sector's unit economics and complex buyer journeys.
              </p>
              
              <div className="ind-hero-stats" style={{ display: 'flex', gap: '2rem' }}>
                <div>
                  <div style={{ color: '#c3a365', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontFamily: "'Clash Display', sans-serif", fontWeight: 500 }}>Tailored</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Infrastructure</div>
                </div>
                <div>
                  <div style={{ color: '#c3a365', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontFamily: "'Clash Display', sans-serif", fontWeight: 500 }}>Predictable</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Outcomes</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* ── EDITORIAL SHOWCASE SECTION ── */}
      <section className="editorial-showcase section-padding" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          
          <div className="ind-header-top" style={{ marginBottom: '8rem' }}>
            <div className="ind-badge">
              <span className="ind-badge-dot"></span>
              Dynamics
            </div>
            <div className="ind-header-flex">
              <h2 className="ind-main-title">Industry<br /><span>Dynamics</span></h2>
              <p className="ind-description">
                Select a sector to view our approach.
              </p>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Center Line connecting all items */}
            <div className="hide-mobile" style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', background: 'linear-gradient(to bottom, rgba(195,163,101,0.0), rgba(195,163,101,0.2) 10%, rgba(195,163,101,0.2) 90%, rgba(195,163,101,0.0))', transform: 'translateX(-50%)', zIndex: 0 }}></div>

            {industryDetails.map((ind, i) => {
              const isEven = i % 2 !== 0; 
              const alignLeft = !isEven;

              const ContentBlock = ({ align }) => (
                <div className="editorial-content" style={{ textAlign: align }}>
                  <div style={{ display: 'inline-flex', borderBottom: '1px solid rgba(195,163,101,0.3)', paddingBottom: '0.5rem', marginBottom: '2rem', justifyContent: align === 'right' ? 'flex-end' : 'flex-start', width: '100%' }}>
                    <span style={{ color: '#c3a365', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 300 }}>{ind.subtitle}</span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(3rem, 4vw, 4.5rem)', fontFamily: "'Clash Display', sans-serif", fontWeight: 300, color: '#fff', margin: '0 0 3rem 0', lineHeight: 1.1 }}>
                    {ind.name}
                  </h3>
                  
                  <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: align === 'right' ? 'flex-end' : 'flex-start' }}>
                     <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 1.5rem 0', fontWeight: 300 }}>
                       {align === 'right' ? <><div style={{width: '20px', height: '1px', background: 'rgba(255,255,255,0.2)'}}></div>The Void</> : <>The Void<div style={{width: '20px', height: '1px', background: 'rgba(255,255,255,0.2)'}}></div></>}
                     </h4>
                     <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>{ind.problem}</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: align === 'right' ? 'flex-end' : 'flex-start' }}>
                     <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#c3a365', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 1.5rem 0', fontWeight: 300 }}>
                       {align === 'right' ? <><div style={{width: '20px', height: '1px', background: 'rgba(195,163,101,0.5)'}}></div>The Architecture</> : <>The Architecture<div style={{width: '20px', height: '1px', background: 'rgba(195,163,101,0.5)'}}></div></>}
                     </h4>
                     <p style={{ color: '#ffffff', fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>{ind.solution}</p>
                  </div>
                </div>
              );

              const StatBlock = ({ align }) => (
                <div className="editorial-stat" style={{ display: 'flex', flexDirection: 'column', alignItems: align === 'right' ? 'flex-end' : 'flex-start', textAlign: align }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ fontSize: 'clamp(5rem, 8vw, 8.5rem)', fontFamily: "'Clash Display', sans-serif", fontWeight: 300, color: '#c3a365', lineHeight: 0.9 }}>
                      {ind.highlightStat}
                    </div>
                    <div style={{ 
                       display: 'flex', 
                       alignItems: 'center', 
                       gap: '1rem',
                       marginTop: '1.5rem',
                       width: '100%',
                       justifyContent: align === 'right' ? 'flex-end' : 'flex-start'
                    }}>
                       {align === 'right' && <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.3)' }}></div>}
                       <span style={{ fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>{ind.highlightLabel}</span>
                       {align === 'left' && <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.3)' }}></div>}
                    </div>
                  </div>

                  <div style={{ 
                    marginTop: '5rem', 
                    padding: '2.5rem', 
                    background: 'rgba(255,255,255,0.01)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    maxWidth: '400px',
                    position: 'relative'
                  }}>
                    {/* Decorative corner accents */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '15px', height: '1px', background: '#c3a365' }}></div>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '15px', background: '#c3a365' }}></div>
                    
                    <div style={{ color: 'rgba(195,163,101,0.8)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 300 }}>Ultimate Yield</div>
                    <div style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 300, lineHeight: 1.6 }}>{ind.outcome}</div>
                  </div>
                </div>
              );

              return (
                <div key={i} className="editorial-row" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative', marginBottom: '8rem' }}>
                   
                   {/* Giant stroked number background */}
                   <div style={{ 
                      position: 'absolute', 
                      top: '50%', 
                      [alignLeft ? 'right' : 'left']: '5%',
                      transform: 'translateY(-50%)',
                      fontSize: '35vw',
                      lineHeight: 0.8,
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 300,
                      color: 'transparent',
                      WebkitTextStroke: '1px rgba(255,255,255,0.03)',
                      zIndex: 0,
                      pointerEvents: 'none'
                   }}>{ind.id}</div>

                   {/* Content Grid */}
                   <div className="editorial-grid" style={{ 
                     display: 'grid', 
                     gridTemplateColumns: '1fr 1fr', 
                     gap: '12rem', 
                     width: '100%',
                     alignItems: 'center',
                     position: 'relative',
                     zIndex: 2
                   }}>
                     {alignLeft ? (
                       <>
                         <div style={{ paddingRight: '2rem' }}><ContentBlock align="left" /></div>
                         <div style={{ paddingLeft: '2rem' }}><StatBlock align="left" /></div>
                       </>
                     ) : (
                       <>
                         <div style={{ paddingRight: '2rem' }}><StatBlock align="right" /></div>
                         <div style={{ paddingLeft: '2rem' }}><ContentBlock align="right" /></div>
                       </>
                     )}
                   </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CaseStudies />

      <style>{`
        .ind-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .ind-hero-left {
          padding-right: 2rem;
        }
        .ind-hero-desc {
          padding-left: 2rem;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 1024px) {
          .ind-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: left !important;
          }
          .ind-hero-left {
            padding-right: 0 !important;
          }
          .ind-hero-desc {
            padding-left: 0 !important;
            border-left: none !important;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 2rem;
          }
          .ind-hero-stats {
            flex-direction: column;
            gap: 1.5rem !important;
          }

          .editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
            text-align: left !important;
          }
          .hide-mobile {
            display: none !important;
          }
          .editorial-content, .editorial-stat {
            text-align: left !important;
            align-items: flex-start !important;
          }
          .editorial-content > div, .editorial-stat > div {
            justify-content: flex-start !important;
          }
        }

        @media (max-width: 576px) {
           .ind-hero {
             padding-top: 4rem !important;
           }
        }
      `}</style>

    </div>
  );
}
