import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe2, Building2, Zap, Eye, Target } from 'lucide-react';
import FounderVision from '../components/FounderVision';
import TalentArchitecture from '../components/TalentArchitecture';
import Ai24Labs from '../components/Ai24Labs';

gsap.registerPlugin(ScrollTrigger);

const Sections = ({ title, content }) => (
  <section className="about-sub-section section-padding gsap-reveal">
    <div className="container">
      <h2 className="title-gold">{title}</h2>
      <div className="mt-4" style={{color: 'var(--text-secondary)', fontSize: '1.2rem'}}>{content}</div>
    </div>
  </section>
);

export default function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Animations
      gsap.fromTo('.hero-pill', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
      
      gsap.fromTo('.hero-title-main',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: 'power3.out' }
      );
      
      gsap.fromTo('.hero-title-highlight',
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, delay: 0.4, ease: 'power3.out' }
      );

      gsap.fromTo('.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: 'power3.out' }
      );

      gsap.fromTo('.hero-scroll-indicator',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: 'power3.out' }
      );

      // 2. Manifesto / Global Delivery Sections Scroll Reveal
      const manifestoSections = gsap.utils.toArray('.vision-manifesto-section');
      manifestoSections.forEach((sec) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            start: 'top 75%'
          }
        });

        // Header Cascade
        tl.fromTo(sec.querySelector('.vision-badge'),
          { y: -30, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
        )
        .fromTo(sec.querySelector('h2'),
          { y: 50, opacity: 0, rotationX: 45, transformPerspective: 1000 },
          { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out" },
          "-=0.7"
        );

        // Cards Stagger Drop
        const cards = sec.querySelectorAll('.vision-manifesto-card');
        if (cards.length > 0) {
          tl.fromTo(cards,
            { y: 60, opacity: 0, rotationY: -10, transformPerspective: 1000 },
            { y: 0, opacity: 1, rotationY: 0, duration: 1, stagger: 0.2, ease: "back.out(1.2)" },
            "-=0.8"
          );
          
          // Internal Card Sequencing
          cards.forEach((card, i) => {
            tl.fromTo(card.querySelector('.vision-icon-wrapper'),
              { scale: 0, rotation: 45 },
              { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(2)" },
              `<${i * 0.2}`
            )
            .fromTo(card.querySelectorAll('h3, .vision-manifesto-content, div > div'),
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
              "<0.2"
            );
          });
        }
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container" ref={pageRef}>
      <section className="about-hero" style={{ 
        padding: '12rem 0 10rem', 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        background: 'transparent'
      }}>
        
        {/* Subtle Ambient Light Orbs - strictly keeping to color theme and no extra bg images */}
        <div style={{ position: 'absolute', top: '10%', left: '0%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(216, 181, 106, 0.04) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '0%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(122, 230, 255, 0.03) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div className="hero-pill pill" style={{ 
              borderColor: 'rgba(216, 181, 106, 0.4)', 
              background: 'linear-gradient(90deg, rgba(216, 181, 106, 0.1) 0%, rgba(216, 181, 106, 0.02) 100%)', 
              color: 'var(--gold)',
              backdropFilter: 'blur(10px)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 24px',
              borderRadius: '100px',
              boxShadow: '0 4px 20px rgba(216, 181, 106, 0.1)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontSize: '0.8rem',
              marginBottom: '0'
            }}>
              <span style={{ width: 8, height: 8, background: 'var(--gold)', borderRadius: '50%', boxShadow: '0 0 12px var(--gold)' }}></span>
              About Ai24
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(3.5rem, 6vw, 6.5rem)', 
              lineHeight: 1.05, 
              letterSpacing: '-0.02em', 
              marginTop: '2.5rem',
              marginBottom: '2.5rem', 
              fontWeight: 600, 
              fontFamily: "'Clash Display', sans-serif",
              textAlign: 'left'
            }}>
              <span className="hero-title-main" style={{ display: 'block', color: 'var(--text)', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>Building the Future of</span>
              <span className="hero-title-highlight goldText" style={{ display: 'inline-block', paddingBottom: '0.1em', filter: 'drop-shadow(0 4px 20px rgba(216, 181, 106, 0.2))' }}>Growth Engineering</span>
            </h1>
            
            <p className="hero-subtitle" style={{ 
              maxWidth: '680px', 
              margin: '0 0 4rem 0', 
              fontSize: '1.35rem', 
              color: 'rgba(233, 238, 247, 0.8)', 
              lineHeight: 1.8,
              fontWeight: 300,
              textAlign: 'left'
            }}>
              Pioneering a new era where business scaling is not left to chance, but systematically architected with precision, data intelligence, and autonomous technology.
            </p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator" style={{ 
          position: 'absolute', 
          bottom: '2rem', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '1.2rem', 
          opacity: 0.8,
          zIndex: 2
        }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'rgba(233, 238, 247, 0.5)', fontWeight: 600 }}>Discover Excellence</span>
          <div style={{ 
            width: '1px', 
            height: '80px', 
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '5px',
              height: '5px',
              background: 'var(--gold)',
              borderRadius: '50%',
              boxShadow: '0 0 15px var(--gold), 0 0 30px var(--gold)',
              animation: 'scrollPulse 2s infinite'
            }}></div>
          </div>
        </div>

        <style>
          {`
            @keyframes scrollPulse {
              0% { top: 0; opacity: 1; transform: translateX(-50%) scale(1); }
              50% { opacity: 0.5; transform: translateX(-50%) scale(0.8); }
              100% { top: 100%; opacity: 0; transform: translateX(-50%) scale(0.5); }
            }

            .vision-badge {
              display: inline-flex;
              align-items: center;
              gap: 0.6rem;
              padding: 0.5rem 1.2rem;
              background: rgba(195, 163, 101, 0.05);
              border: 1px solid rgba(195, 163, 101, 0.2);
              border-radius: 100px;
              margin-bottom: 2rem;
              font-size: 0.72rem;
              font-weight: 700;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              color: #c3a365;
            }

            .vision-badge-dot {
              width: 6px;
              height: 6px;
              background: #c3a365;
              border-radius: 50%;
              box-shadow: 0 0 10px rgba(195, 163, 101, 0.8);
            }

            .vision-manifesto-card {
              background: rgba(18, 20, 25, 0.4);
              border: 1px solid rgba(195, 163, 101, 0.15);
              border-radius: 24px;
              padding: 4rem 3rem;
              position: relative;
              overflow: hidden;
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
              transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
              cursor: default;
              height: 100%;
              z-index: 1;
            }

            .vision-manifesto-card:hover {
              transform: translateY(-8px);
              background: rgba(25, 27, 32, 0.6);
              border-color: rgba(195, 163, 101, 0.4);
              box-shadow: 
                0 20px 40px rgba(0, 0, 0, 0.6),
                0 0 40px rgba(195, 163, 101, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
            }

            .vision-manifesto-card::before {
               content: '';
               position: absolute;
               top: 0; left: 0; right: 0;
               height: 100%;
               background: radial-gradient(circle at 50% 0%, rgba(195, 163, 101, 0.08) 0%, transparent 70%);
               opacity: 0.5;
               transition: opacity 0.5s ease;
               pointer-events: none;
            }

            .vision-manifesto-card:hover::before {
               opacity: 1;
            }

            .vision-icon-wrapper {
              width: 64px;
              height: 64px;
              border-radius: 16px;
              background: rgba(195, 163, 101, 0.08);
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid rgba(195, 163, 101, 0.2);
              transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
              position: relative;
            }
            
            .vision-icon-glow {
              position: absolute;
              inset: -15px;
              background: radial-gradient(circle, rgba(195, 163, 101, 0.4), transparent 60%);
              opacity: 0.3;
              transform: scale(0.8);
              transition: all 0.4s ease;
              pointer-events: none;
              border-radius: 50%;
            }

            .vision-manifesto-card:hover .vision-icon-wrapper {
              background: linear-gradient(135deg, rgba(195, 163, 101, 0.2), transparent);
              border-color: rgba(195, 163, 101, 0.5);
              transform: scale(1.05);
              box-shadow: 0 0 20px rgba(195, 163, 101, 0.2);
            }
            
            .vision-manifesto-card:hover .vision-icon-glow {
              opacity: 1;
              transform: scale(1.2);
            }
            
            .vision-manifesto-content {
               font-size: 1.15rem;
               line-height: 1.7;
               color: rgba(255, 255, 255, 0.65);
               font-weight: 300;
               margin: 0;
               transition: color 0.4s ease;
            }
            
            .vision-manifesto-card:hover .vision-manifesto-content {
               color: rgba(255, 255, 255, 0.85);
            }

            .vision-manifesto-content strong {
               color: #ffffff;
               font-weight: 400;
               background: linear-gradient(135deg, #c3a365, #e8d5a3, #ffffff);
               -webkit-background-clip: text;
               background-clip: text;
               -webkit-text-fill-color: transparent;
            }
          `}
        </style>
      </section>

      <section id="principles" className="vision-manifesto-section gsap-reveal" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden', background: 'transparent' }}>
        <div style={{ position: 'absolute', top: '50%', left: '0', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(195, 163, 101, 0.05) 0%, transparent 60%)', filter: 'blur(80px)', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: '50%', right: '0', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(195, 163, 101, 0.05) 0%, transparent 60%)', filter: 'blur(80px)', transform: 'translate(50%, -50%)', pointerEvents: 'none' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 4%' }}>
          
          {/* Global Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="vision-badge">
              <span className="vision-badge-dot"></span>
              Core Principles
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.01em', fontFamily: 'var(--font-heading, sans-serif)', margin: 0 }}>
              The Foundation of <br />
              <span style={{ background: 'linear-gradient(135deg, #c3a365 0%, #e8d5a3 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontWeight: 300 }}>Our Growth System</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
            
            <div className="vision-manifesto-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', position: 'relative', zIndex: 2 }}>
                <div className="vision-icon-wrapper">
                  <Eye size={28} color="#c3a365" style={{ zIndex: 1 }} />
                  <div className="vision-icon-glow"></div>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 300, margin: 0, fontFamily: 'var(--font-heading, sans-serif)', color: '#ffffff' }}>Our <span style={{ background: 'linear-gradient(135deg, #c3a365, #e8d5a3)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontWeight: 400 }}>Vision</span></h3>
              </div>
              <p className="vision-manifesto-content" style={{ position: 'relative', zIndex: 2 }}>
                To empower modern businesses with intelligent, autonomous growth systems that transform fragmented operations into <strong>predictable revenue engines.</strong> We aim to lead the shift from guesswork to data-driven certainty.
              </p>
            </div>

            <div className="vision-manifesto-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', position: 'relative', zIndex: 2 }}>
                <div className="vision-icon-wrapper">
                  <Target size={28} color="#c3a365" style={{ zIndex: 1 }} />
                  <div className="vision-icon-glow"></div>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 300, margin: 0, fontFamily: 'var(--font-heading, sans-serif)', color: '#ffffff' }}>The <span style={{ background: 'linear-gradient(135deg, #c3a365, #e8d5a3)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontWeight: 400 }}>Manifesto</span></h3>
              </div>
              <p className="vision-manifesto-content" style={{ position: 'relative', zIndex: 2 }}>
                We believe that growth is not a series of lucky breaks, but an <strong>engineered outcome</strong> of connected technology, strategic automation, and revenue intelligence operating as a unified ecosystem.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Ai24Labs />
      
      <section id="global-delivery" className="vision-manifesto-section gsap-reveal" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden', background: 'transparent' }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(195, 163, 101, 0.06) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', left: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(195, 163, 101, 0.04) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 4%' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="vision-badge">
              <span className="vision-badge-dot"></span>
              Global Presence
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.01em', fontFamily: 'var(--font-heading, sans-serif)', margin: 0 }}>
              Our Global <br />
              <span style={{ background: 'linear-gradient(135deg, #c3a365 0%, #e8d5a3 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontWeight: 300 }}>Delivery Model</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
            
            <div className="vision-manifesto-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', position: 'relative', zIndex: 2 }}>
                <div className="vision-icon-wrapper">
                  <Building2 size={28} color="#c3a365" style={{ zIndex: 1 }} />
                  <div className="vision-icon-glow"></div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>Global HQ</div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 300, margin: 0, fontFamily: 'var(--font-heading, sans-serif)', color: '#ffffff' }}>Dubai, <span style={{ background: 'linear-gradient(135deg, #c3a365, #e8d5a3)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontWeight: 400 }}>UAE</span></h3>
                </div>
              </div>
              <p className="vision-manifesto-content" style={{ position: 'relative', zIndex: 2 }}>
                The epicenter of our operations. <strong>Strategy & Partnerships</strong> are orchestrated from our Dubai headquarters, ensuring global standards, elite client relationships, and business architecture.
              </p>
            </div>

            <div className="vision-manifesto-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', position: 'relative', zIndex: 2 }}>
                <div className="vision-icon-wrapper">
                  <Globe2 size={28} color="#c3a365" style={{ zIndex: 1 }} />
                  <div className="vision-icon-glow"></div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>Execution Hub</div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 300, margin: 0, fontFamily: 'var(--font-heading, sans-serif)', color: '#ffffff' }}>India, <span style={{ background: 'linear-gradient(135deg, #c3a365, #e8d5a3)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontWeight: 400 }}>Tech Hub</span></h3>
                </div>
              </div>
              <p className="vision-manifesto-content" style={{ position: 'relative', zIndex: 2 }}>
                The engine room of Ai24. World-class <strong>Engineering & Execution</strong> operated by our top-tier technology teams in India, delivering rapid development and algorithmic precision.
              </p>
            </div>

          </div>
        </div>
      </section>

      <FounderVision />
      <TalentArchitecture />
    </div>
  );
}
