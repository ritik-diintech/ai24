import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, BarChart2, Target, Activity, Compass } from 'lucide-react';
import CaseStudiesSection from '../components/CaseStudies';
import FinalCTA from '../components/FinalCTA';

export default function CaseStudies() {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Cinematic multi-stage reveal
      gsap.fromTo('.cs-watermark', 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 0.08, duration: 1.5, ease: 'power3.out' }
      );
      
      gsap.fromTo('.cs-line-v',
        { scaleY: 0 },
        { scaleY: 1, duration: 1.5, ease: 'expo.inOut', stagger: 0.2 }
      );

      gsap.fromTo('.cs-line-h',
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'expo.inOut', delay: 0.5 }
      );

      gsap.fromTo('.cs-content > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.8 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container" style={{ background: 'transparent' }}>
      
      {/* ── BESPOKE CASE STUDIES HERO ── */}
      <section ref={heroRef} className="cs-hero" style={{ 
        position: 'relative', 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '8rem',
        overflow: 'hidden'
      }}>
        
        {/* Giant Watermark Typography */}
        <div className="cs-watermark" style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(8rem, 15vw, 25rem)',
          fontFamily: "'Clash Display', sans-serif",
          fontWeight: 600,
          color: 'transparent',
          WebkitTextStroke: '2px rgba(255,255,255,1)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 0,
          letterSpacing: '-0.02em',
          opacity: 0 // Handled by GSAP
        }}>
          OUTCOMES
        </div>

        {/* Architectural Lines */}
        <div className="cs-line-v hide-mobile" style={{ position: 'absolute', top: 0, bottom: 0, left: '10%', width: '1px', background: 'rgba(255,255,255,0.05)', transformOrigin: 'top' }}></div>
        <div className="cs-line-v hide-mobile" style={{ position: 'absolute', top: 0, bottom: 0, right: '10%', width: '1px', background: 'rgba(255,255,255,0.05)', transformOrigin: 'bottom' }}></div>
        <div className="cs-line-h" style={{ position: 'absolute', top: '25%', left: 0, right: 0, height: '1px', background: 'rgba(255,255,255,0.05)', transformOrigin: 'left' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
           <div className="cs-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: '6rem', alignItems: 'center' }}>
              
              {/* Left Column: Premium Placard */}
              <div className="cs-content" style={{
                 padding: '4.5rem',
                 background: 'rgba(10, 12, 16, 0.4)',
                 backdropFilter: 'blur(30px)',
                 border: '1px solid rgba(195, 163, 101, 0.15)',
                 borderLeft: '4px solid #c3a365',
                 position: 'relative',
                 boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
              }}>
                {/* Decorative corner */}
                <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '30px', height: '30px', borderTop: '2px solid #c3a365', borderRight: '2px solid #c3a365' }}></div>
                <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '30px', height: '30px', borderBottom: '2px solid rgba(255,255,255,0.2)', borderRight: '2px solid rgba(255,255,255,0.2)' }}></div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                  <div style={{ width: '40px', height: '1px', background: '#c3a365' }}></div>
                  <span style={{ color: '#c3a365', fontSize: '0.85rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Proof of Results</span>
                </div>

                <h1 style={{ 
                  fontFamily: "'Clash Display', sans-serif", 
                  fontSize: 'clamp(3rem, 5vw, 5rem)', 
                  fontWeight: 300, 
                  color: '#ffffff', 
                  lineHeight: 1.1,
                  margin: '0 0 2rem 0'
                }}>
                  Engineered <br />
                  <span style={{ 
                    fontStyle: 'italic', 
                    color: 'transparent', 
                    WebkitTextStroke: '1px rgba(195,163,101,0.8)' 
                  }}>Outcomes</span>
                </h1>

                <p style={{ 
                  fontSize: '1.25rem', 
                  lineHeight: 1.7, 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  fontWeight: 300,
                  margin: 0,
                  maxWidth: '450px'
                }}>
                  We don't just share stories; we document the transformation of fragmented businesses into automated, high-growth revenue engines.
                </p>
              </div>

              {/* Right Column: Key Metrics */}
              <div className="cs-content cs-metrics" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingLeft: '2rem' }}>
                  
                  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ 
                      width: '70px', height: '70px', borderRadius: '50%', border: '1px solid rgba(195,163,101,0.3)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c3a365', background: 'rgba(195,163,101,0.05)'
                    }}>
                       <BarChart2 size={28} strokeWidth={1} />
                    </div>
                    <div>
                      <div style={{ fontSize: '3.5rem', fontFamily: "'Clash Display', sans-serif", color: '#ffffff', fontWeight: 300, lineHeight: 1 }}>$2.4B+</div>
                      <div style={{ color: 'rgba(195, 163, 101, 0.8)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '0.8rem', fontWeight: 600 }}>Revenue Generated</div>
                    </div>
                  </div>

                  <div style={{ height: '1px', width: '120px', background: 'linear-gradient(90deg, rgba(255,255,255,0.2), transparent)' }}></div>

                  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ 
                      width: '70px', height: '70px', borderRadius: '50%', border: '1px solid rgba(195,163,101,0.3)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c3a365', background: 'rgba(195,163,101,0.05)'
                    }}>
                       <ArrowUpRight size={28} strokeWidth={1} />
                    </div>
                    <div>
                      <div style={{ fontSize: '3.5rem', fontFamily: "'Clash Display', sans-serif", color: '#ffffff', fontWeight: 300, lineHeight: 1 }}>350%</div>
                      <div style={{ color: 'rgba(195, 163, 101, 0.8)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '0.8rem', fontWeight: 600 }}>Average ROI Increase</div>
                    </div>
                  </div>

              </div>

           </div>
        </div>
        
        <style>{`
          @media (max-width: 1024px) {
            .cs-grid {
              grid-template-columns: 1fr !important;
              gap: 4rem !important;
            }
            .cs-metrics {
              padding-left: 0 !important;
            }
            .cs-content {
              padding: 2.5rem !important;
            }
          }
        `}</style>

      </section>

      <CaseStudiesSection />

      <section className="process-proof section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background Gradients */}
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(195,163,101,0.03) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(195,163,101,0.03) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '1rem', 
              marginBottom: '2rem'
            }}>
              <div style={{ width: '30px', height: '1px', background: '#c3a365' }}></div>
              <span style={{ color: '#c3a365', fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 300 }}>Scientific Growth</span>
              <div style={{ width: '30px', height: '1px', background: '#c3a365' }}></div>
            </div>
            
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', 
              fontFamily: "'Clash Display', sans-serif", 
              fontWeight: 200, 
              color: '#ffffff', 
              lineHeight: 1.1,
              margin: 0
            }}>
              How We Measure <br />
              <span style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1px rgba(195,163,101,0.8)', fontWeight: 200 }}>Success</span>
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3rem' 
          }}>
            {[
              {
                id: "01",
                icon: <Target size={32} strokeWidth={1} />,
                title: "Unit Economics",
                desc: "Improving LTV to CAC ratios through intelligent automation and refined data acquisition models."
              },
              {
                id: "02",
                icon: <Activity size={32} strokeWidth={1} />,
                title: "System Velocity",
                desc: "Reducing lead response times and eliminating structural funnel friction for hyper-fast conversions."
              },
              {
                id: "03",
                icon: <Compass size={32} strokeWidth={1} />,
                title: "Predictability",
                desc: "Creating stable, board-ready revenue forecasts using advanced algorithmic data intelligence."
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                position: 'relative',
                background: 'rgba(10, 12, 16, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderTop: '1px solid rgba(195, 163, 101, 0.2)',
                padding: '4rem 3rem',
                transition: 'all 0.5s ease',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.background = 'rgba(10, 12, 16, 0.8)';
                e.currentTarget.style.borderColor = 'rgba(195, 163, 101, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(10, 12, 16, 0.4)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              }}
              >
                {/* Background ID */}
                <div style={{
                  position: 'absolute',
                  top: '-15%',
                  right: '-10%',
                  fontSize: '12rem',
                  fontFamily: "'Clash Display', sans-serif",
                  fontWeight: 600,
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255,255,255,0.03)',
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}>
                  {item.id}
                </div>

                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  borderRadius: '50%', 
                  background: 'rgba(195, 163, 101, 0.05)', 
                  border: '1px solid rgba(195, 163, 101, 0.2)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#c3a365',
                  marginBottom: '2.5rem'
                }}>
                  {item.icon}
                </div>

                <h4 style={{ 
                  fontSize: '2rem', 
                  fontFamily: "'Clash Display', sans-serif", 
                  color: '#ffffff', 
                  fontWeight: 300, 
                  marginBottom: '1.5rem' 
                }}>
                  {item.title}
                </h4>
                
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  fontSize: '1.15rem', 
                  lineHeight: 1.7, 
                  fontWeight: 300, 
                  margin: 0 
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
