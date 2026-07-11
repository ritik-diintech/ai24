import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Globe2, Crosshair } from 'lucide-react';
import TalentArchitecture from '../components/TalentArchitecture';

export default function Careers() {
  const heroRef = useRef(null);

  const benefits = [
    { title: "Innovation First", desc: "Work with the latest in AI, automation, and growth tech." },
    { title: "Global Impact", desc: "Build systems for clients in Dubai, USA, Canada, and UK." },
    { title: "High Growth", desc: "Join a fast-scaling team with clear talent architecture." }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Grid animation (moving down slowly)
      gsap.to('.car-grid-bg', {
        backgroundPosition: '0px 40px',
        duration: 3,
        repeat: -1,
        ease: 'linear',
      });

      // Rotating badge
      gsap.to('.car-rotate-badge', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'linear',
      });

      // Custom split text reveal
      gsap.fromTo('.car-title-line', 
        { y: '100%', opacity: 0 }, 
        { y: '0%', opacity: 1, duration: 1.5, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
      );

      gsap.fromTo('.car-fade-element',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.5, stagger: 0.2, ease: 'power2.out', delay: 0.8 }
      );
      
      // Horizontal sweeping line
      gsap.fromTo('.car-sweep-line',
        { scaleX: 0, transformOrigin: 'center' },
        { scaleX: 1, duration: 2, ease: 'power3.inOut', delay: 0.5 }
      );

    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container" style={{ background: 'transparent' }}>
      
      {/* ── UNIQUE KINETIC ARCHITECTURE HERO ── */}
      <section ref={heroRef} className="careers-hero" style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '6rem',
        overflow: 'hidden'
      }}>
        
        {/* Animated Blueprint Grid */}
        <div className="car-grid-bg" style={{
          position: 'absolute',
          inset: '-20%',
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(rgba(195,163,101,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(195,163,101,0.03) 1px, transparent 1px)',
          pointerEvents: 'none',
          zIndex: 0,
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, transparent 70%)'
        }}></div>

        {/* Top Meta Bar */}
        <div className="container car-fade-element" style={{ position: 'absolute', top: '15%', left: 0, right: 0, zIndex: 3 }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '2rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                 <span>04—Talent</span>
                 <span>Global Crew</span>
              </div>
              <div style={{ color: '#c3a365', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                 Hiring Worldwide
              </div>
           </div>
        </div>

        {/* Central Core */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
           
           <div style={{ textAlign: 'center', position: 'relative', padding: '4rem 0' }}>
              
              {/* Rotating Badge - Absolute Center Behind Text */}
              <div className="car-rotate-badge car-fade-element" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-150px',
                marginLeft: '-150px',
                width: '300px',
                height: '300px',
                border: '1px dashed rgba(195,163,101,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: -1
              }}>
                 <div style={{ width: '260px', height: '260px', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '50%' }}></div>
                 {/* Crosshair accents */}
                 <div style={{ position: 'absolute', top: '-10px', width: '1px', height: '20px', background: '#c3a365' }}></div>
                 <div style={{ position: 'absolute', bottom: '-10px', width: '1px', height: '20px', background: '#c3a365' }}></div>
                 <div style={{ position: 'absolute', left: '-10px', width: '20px', height: '1px', background: '#c3a365' }}></div>
                 <div style={{ position: 'absolute', right: '-10px', width: '20px', height: '1px', background: '#c3a365' }}></div>
              </div>

              {/* Massive Title */}
              <div style={{ overflow: 'hidden', padding: '0.5rem 0' }}>
                 <h1 className="car-title-line" style={{ 
                    fontFamily: "'Clash Display', sans-serif", 
                    fontSize: 'clamp(3rem, 7vw, 7.5rem)', 
                    fontWeight: 200, 
                    color: '#ffffff', 
                    lineHeight: 1,
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                 }}>
                    Architect
                 </h1>
              </div>
              <div style={{ overflow: 'hidden', padding: '0.5rem 0' }}>
                 <h1 className="car-title-line" style={{ 
                    fontFamily: "'Clash Display', sans-serif", 
                    fontSize: 'clamp(3rem, 7vw, 7.5rem)', 
                    fontWeight: 300, 
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(195,163,101,0.8)',
                    lineHeight: 1,
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontStyle: 'italic'
                 }}>
                    The Impossible.
                 </h1>
              </div>

           </div>

           {/* Elegant sweep line */}
           <div className="car-sweep-line" style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(195,163,101,0.6), transparent)', margin: '2rem 0' }}></div>

           {/* Bottom Details Grid */}
           <div className="car-fade-element" style={{ 
             display: 'grid', 
             gridTemplateColumns: 'repeat(3, 1fr)', 
             gap: '3rem',
             marginTop: '4rem'
           }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
                 <div style={{ width: '40px', height: '40px', border: '1px solid rgba(195,163,101,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(195,163,101,0.05)' }}>
                    <Globe2 size={16} color="#c3a365" />
                 </div>
                 <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 300, fontFamily: "'Clash Display', sans-serif", letterSpacing: '0.05em' }}>Location Independence</h4>
                 <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '250px' }}>We operate globally. Build systems from anywhere with asynchronous autonomy.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
                 <div style={{ width: '40px', height: '40px', border: '1px solid rgba(195,163,101,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(195,163,101,0.05)' }}>
                    <Crosshair size={16} color="#c3a365" />
                 </div>
                 <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 300, fontFamily: "'Clash Display', sans-serif", letterSpacing: '0.05em' }}>High-Performance Culture</h4>
                 <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '250px' }}>Expect to work alongside tier-1 technical talent in a zero-bureaucracy environment.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
                 <div style={{ width: '40px', height: '40px', border: '1px solid rgba(195,163,101,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(195,163,101,0.05)' }}>
                    <ArrowUpRight size={16} color="#c3a365" />
                 </div>
                 <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 300, fontFamily: "'Clash Display', sans-serif", letterSpacing: '0.05em' }}>Scale Velocity</h4>
                 <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '250px' }}>Deploy architectures for multimillion-dollar revenue machines. Deep impact only.</p>
              </div>
           </div>

        </div>

        <style>{`
          @media (max-width: 900px) {
            .car-fade-element {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
        `}</style>
      </section>

      <TalentArchitecture />

      <section className="benefits section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 200, fontFamily: "'Clash Display', sans-serif" }}>The Ai24 Standard</h2>
            <div style={{ width: '40px', height: '1px', background: '#c3a365', margin: '2rem auto' }}></div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}>
            {benefits.map((b, i) => (
              <div key={i} style={{
                background: 'linear-gradient(180deg, rgba(20, 22, 28, 0.4) 0%, rgba(10, 12, 16, 0.6) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderTop: '1px solid rgba(195,163,101,0.15)',
                padding: '3.5rem 2.5rem',
                borderRadius: '8px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'rgba(195,163,101,0.3)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderTopColor = 'rgba(195,163,101,0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-10px', 
                  right: '20px', 
                  fontSize: '6rem', 
                  fontWeight: 800, 
                  color: 'rgba(255,255,255,0.02)', 
                  fontFamily: "'Clash Display', sans-serif",
                  lineHeight: 1
                }}>
                  0{i + 1}
                </div>
                <h3 style={{ 
                  color: '#fff', 
                  fontSize: '1.5rem', 
                  fontWeight: 300, 
                  fontFamily: "'Clash Display', sans-serif",
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 2
                }}>{b.title}</h3>
                <p style={{ 
                  color: 'rgba(255,255,255,0.4)', 
                  fontSize: '1rem', 
                  lineHeight: 1.7,
                  position: 'relative',
                  zIndex: 2
                }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="open-positions section-padding" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }}></div>
        
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            <div style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '8px', height: '8px', background: '#c3a365', borderRadius: '50%' }}></div>
                <span style={{ color: '#c3a365', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', fontWeight: 600 }}>Active Roles</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#fff', fontFamily: "'Clash Display', sans-serif", fontWeight: 200, lineHeight: 1.1 }}>
                Join the <br /><span style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1px rgba(195,163,101,0.8)' }}>Vanguard.</span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              {/* Job Row 1 */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '2rem', 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.paddingLeft = '3rem';
                e.currentTarget.style.borderColor = 'rgba(195,163,101,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.paddingLeft = '2rem';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              }}>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 400, fontFamily: "'Clash Display', sans-serif" }}>Senior Automation Architect</h3>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginTop: '0.5rem', letterSpacing: '0.05em' }}>Remote • Engineering</div>
                </div>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(195,163,101,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={16} color="#c3a365" />
                </div>
              </div>

              {/* Job Row 2 */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '2rem', 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.paddingLeft = '3rem';
                e.currentTarget.style.borderColor = 'rgba(195,163,101,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.paddingLeft = '2rem';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              }}>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 400, fontFamily: "'Clash Display', sans-serif" }}>Growth Operations Manager</h3>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginTop: '0.5rem', letterSpacing: '0.05em' }}>Remote • Operations</div>
                </div>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(195,163,101,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={16} color="#c3a365" />
                </div>
              </div>

            </div>

            {/* General Application */}
            <div style={{ 
              marginTop: '4rem', 
              padding: '3rem', 
              background: 'linear-gradient(135deg, rgba(195,163,101,0.05) 0%, transparent 100%)', 
              border: '1px dashed rgba(195,163,101,0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', fontWeight: 300, marginBottom: '0.5rem' }}>
                Don't see a role that fits? We are always looking for exceptional talent.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                Reach out to us directly at <span style={{ color: '#c3a365', fontWeight: 400 }}>careers@ai24.digital</span>
              </p>
              <a href="mailto:careers@ai24.digital" style={{ 
                display: 'inline-block',
                padding: '1rem 3rem', 
                background: '#c3a365', 
                color: '#000', 
                fontWeight: 600, 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                fontSize: '0.85rem',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#e6d3a8'}
              onMouseLeave={(e) => e.target.style.background = '#c3a365'}
              >
                Send Portfolio
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
