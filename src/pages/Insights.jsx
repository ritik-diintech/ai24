import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BookOpen, Zap, Sparkles, Activity } from 'lucide-react';
import InsightsSection from '../components/Insights';
import Diagnostic from '../components/Diagnostic';

export default function Insights() {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Background gradient animation
      gsap.to('.ins-bg-pulse', {
        scale: 1.2,
        opacity: 0.8,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      // Text reveal
      gsap.fromTo('.ins-reveal-text', 
        { y: 50, opacity: 0, filter: 'blur(5px)' }, 
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
      );
      
      // Floating cards reveal (Simplified 2D)
      gsap.fromTo('.ins-floating-card',
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, stagger: 0.2, ease: 'back.out(1.2)', delay: 0.5 }
      );
      
      // Premium subtle hover loop for cards
      gsap.to('.ins-floating-card', {
        y: -5,
        duration: 4,
        stagger: {
          each: 0.8,
          yoyo: true,
          repeat: -1
        },
        ease: 'sine.inOut',
        delay: 2
      });

    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container" style={{ background: 'transparent' }}>
      
      {/* ── ULTRA-PREMIUM INSIGHTS HERO ── */}
      <section ref={heroRef} className="insights-hero" style={{ 
        position: 'relative', 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '8rem',
        overflow: 'hidden'
      }}>
        
        {/* Abstract Background Pulses */}
        <div className="ins-bg-pulse" style={{ position: 'absolute', top: '20%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(195,163,101,0.05) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }}></div>
        <div className="ins-bg-pulse" style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(195,163,101,0.03) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
           
           <div className="ins-hero-grid" style={{ 
             display: 'grid', 
             gridTemplateColumns: '1.2fr 0.8fr', 
             gap: '6rem', 
             alignItems: 'center'
           }}>
             
             {/* Left Column: Editorial Typography */}
             <div>
                <div className="ins-reveal-text" style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  marginBottom: '3rem',
                  padding: '0.6rem 1.2rem',
                  border: '1px solid rgba(195,163,101,0.3)',
                  borderRadius: '100px',
                  background: 'rgba(195,163,101,0.03)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c3a365', boxShadow: '0 0 10px #c3a365' }}></div>
                  <span style={{ color: '#c3a365', fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Thought Leadership</span>
                  <div style={{ width: '30px', height: '1px', background: 'linear-gradient(90deg, #c3a365, transparent)' }}></div>
                </div>

                <h1 className="ins-reveal-text" style={{ 
                  fontFamily: "'Clash Display', sans-serif", 
                  fontSize: 'clamp(3rem, 5vw, 6rem)', 
                  fontWeight: 300, 
                  color: '#ffffff', 
                  lineHeight: 1.05,
                  margin: '0 0 2rem 0',
                  letterSpacing: '-0.01em'
                }}>
                  Growth Intelligence <br />
                  <span style={{ 
                    fontStyle: 'italic', 
                    color: 'transparent', 
                    WebkitTextStroke: '1px rgba(195,163,101,0.8)' 
                  }}>& Automation Science</span>
                </h1>

                <div className="ins-reveal-text" style={{ 
                  width: '60px', 
                  height: '2px', 
                  background: '#c3a365', 
                  marginBottom: '2rem' 
                }}></div>

                <p className="ins-reveal-text" style={{ 
                  fontSize: '1.3rem', 
                  lineHeight: 1.7, 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  fontWeight: 300,
                  margin: '0 0 4rem 0',
                  maxWidth: '550px'
                }}>
                  Deep dives into growth engineering, CRM architecture, conversion science, and the precise future of AI-powered revenue ecosystems.
                </p>

                <div className="ins-reveal-text" style={{ display: 'flex', gap: '4rem' }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ color: '#ffffff', fontSize: '2rem', fontFamily: "'Clash Display', sans-serif", fontWeight: 300 }}>100+</div>
                    <div style={{ color: 'rgba(195,163,101,0.8)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '0.5rem', fontWeight: 600 }}>Published Frameworks</div>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-2rem', top: '10%', bottom: '10%', width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                    <div style={{ color: '#ffffff', fontSize: '2rem', fontFamily: "'Clash Display', sans-serif", fontWeight: 300 }}>5,000+</div>
                    <div style={{ color: 'rgba(195,163,101,0.8)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '0.5rem', fontWeight: 600 }}>Global Subscribers</div>
                  </div>
                </div>
             </div>

             {/* Right Column: Clean Premium Cards Hub */}
             <div className="ins-hero-cards" style={{ 
               position: 'relative', 
               height: '100%', 
               display: 'flex', 
               flexDirection: 'column', 
               justifyContent: 'center'
             }}>
                
                {/* Floating Card 1 */}
                <div className="ins-floating-card" style={{
                   position: 'relative',
                   background: 'linear-gradient(135deg, rgba(15, 17, 22, 0.8) 0%, rgba(10, 12, 16, 0.9) 100%)',
                   backdropFilter: 'blur(30px)',
                   border: '1px solid rgba(255, 255, 255, 0.08)',
                   borderLeft: '3px solid #c3a365',
                   padding: '3rem',
                   transform: 'translateX(2rem)',
                   boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(195,163,101,0.1)',
                   marginBottom: '2rem',
                   borderRadius: '4px'
                }}>
                   {/* Top Right Detail */}
                   <div style={{ position: 'absolute', top: '1rem', right: '1rem', opacity: 0.3 }}><Activity size={16} color="#c3a365" /></div>
                   
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'rgba(195,163,101,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(195,163,101,0.2)' }}>
                         <Zap size={14} color="#c3a365" />
                      </div>
                      <span style={{ color: '#c3a365', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Trending Insight</span>
                   </div>
                   <h3 style={{ fontSize: '1.6rem', color: '#fff', fontFamily: "'Clash Display', sans-serif", fontWeight: 300, marginBottom: '1rem', lineHeight: 1.3 }}>
                      The Architecture of 8-Figure Conversion Systems
                   </h3>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                      <span style={{ color: '#fff' }}>MAR 2024</span>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></div>
                      <span>06 MIN READ</span>
                   </div>
                </div>

                {/* Floating Card 2 */}
                <div className="ins-floating-card" style={{
                   position: 'relative',
                   background: 'linear-gradient(135deg, rgba(15, 17, 22, 0.5) 0%, rgba(10, 12, 16, 0.7) 100%)',
                   backdropFilter: 'blur(20px)',
                   border: '1px solid rgba(255, 255, 255, 0.05)',
                   padding: '2.5rem 3rem',
                   transform: 'translateX(-1rem)',
                   borderRadius: '4px'
                }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                         <Sparkles size={14} color="rgba(255,255,255,0.6)" />
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Editor's Pick</span>
                   </div>
                   <h3 style={{ fontSize: '1.4rem', color: '#fff', fontFamily: "'Clash Display', sans-serif", fontWeight: 300, marginBottom: '1rem', lineHeight: 1.3 }}>
                      Neural Targeting: Moving Beyond Demographics
                   </h3>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                      <span style={{ color: '#fff' }}>FEB 2024</span>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></div>
                      <span>08 MIN READ</span>
                   </div>
                </div>

             </div>

           </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .ins-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 4rem !important;
            }
            .ins-floating-card {
              transform: translateX(0) !important;
            }
          }
        `}</style>

      </section>

      <InsightsSection />
      <Diagnostic />

      <section className="newsletter section-padding" style={{ position: 'relative', overflow: 'hidden', padding: '10rem 0' }}>
        {/* Ambient Glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(195,163,101,0.03) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(15, 17, 22, 0.4) 0%, rgba(10, 12, 16, 0.8) 100%)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderTop: '1px solid rgba(195, 163, 101, 0.2)',
            padding: '6rem 4rem',
            textAlign: 'center',
            maxWidth: '1000px',
            margin: '0 auto',
            overflow: 'hidden'
          }}>
            {/* Corner Accents */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '30px', height: '30px', borderTop: '1px solid rgba(195,163,101,0.5)', borderLeft: '1px solid rgba(195,163,101,0.5)' }}></div>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '30px', height: '30px', borderTop: '1px solid rgba(195,163,101,0.5)', borderRight: '1px solid rgba(195,163,101,0.5)' }}></div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '30px', borderBottom: '1px solid rgba(195,163,101,0.5)', borderLeft: '1px solid rgba(195,163,101,0.5)' }}></div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px', borderBottom: '1px solid rgba(195,163,101,0.5)', borderRight: '1px solid rgba(195,163,101,0.5)' }}></div>

            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '1rem', 
              marginBottom: '2rem'
            }}>
              <div style={{ width: '30px', height: '1px', background: 'linear-gradient(90deg, transparent, #c3a365)' }}></div>
              <span style={{ color: '#c3a365', fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 300 }}>The Insider Journal</span>
              <div style={{ width: '30px', height: '1px', background: 'linear-gradient(270deg, transparent, #c3a365)' }}></div>
            </div>

            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
              fontFamily: "'Clash Display', sans-serif", 
              fontWeight: 200, 
              color: '#ffffff', 
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em'
            }}>
              Stay Ahead of the <br />
              <span style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1px rgba(195,163,101,0.8)' }}>Curve.</span>
            </h2>

            <p style={{ 
              color: 'rgba(255, 255, 255, 0.6)', 
              fontSize: '1.25rem', 
              fontWeight: 300, 
              maxWidth: '500px', 
              margin: '0 auto 3.5rem auto',
              lineHeight: 1.6
            }}>
              Join 5,000+ elite technical leaders receiving unreleased growth engineering data & frameworks weekly.
            </p>

            <form style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              maxWidth: '600px',
              margin: '0 auto',
              alignItems: 'stretch'
            }} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your corporate address" 
                style={{
                  flex: 1,
                  padding: '1.2rem 2rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 300,
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.05em'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.05)';
                  e.target.style.borderColor = 'rgba(195,163,101,0.5)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.03)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              />
              <button style={{
                background: '#c3a365',
                color: '#000',
                border: 'none',
                padding: '0 2.5rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#d4b476';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#c3a365';
              }}
              >
                Access
              </button>
            </form>

            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginTop: '2rem', letterSpacing: '0.05em', fontWeight: 300 }}>
              Zero spam. Unsubscribe anytime.
            </div>
            
          </div>
        </div>

        {/* CSS for responsiveness */}
        <style>{`
          @media (max-width: 768px) {
            .newsletter form {
              flex-direction: column !important;
            }
            .newsletter button {
              padding: 1.2rem !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
