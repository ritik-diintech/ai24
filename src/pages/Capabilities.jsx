import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CapabilitiesSection from '../components/Capabilities';
import TechnologyEcosystem from '../components/TechnologyEcosystem';

gsap.registerPlugin(ScrollTrigger);

export default function Capabilities() {
  const pageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animations
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
      
      // Reveal Animation for Tech Stack Section
      gsap.fromTo('.tech-stack-reveal',
        { y: 60, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tech-stack-detail',
            start: 'top 80%',
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container" ref={pageRef}>
      <section className="cap-hero" style={{ 
        padding: '12rem 0 10rem', 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        background: 'transparent'
      }}>
        
        {/* Subtle Ambient Light Orbs - strictly keeping to color theme and no extra bg images */}
        <div style={{ position: 'absolute', top: '10%', right: '0%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(216, 181, 106, 0.04) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '10%', left: '0%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(122, 230, 255, 0.03) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              Our Capabilities
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(3.5rem, 6vw, 6.5rem)', 
              lineHeight: 1.05, 
              letterSpacing: '-0.02em', 
              marginTop: '2.5rem',
              marginBottom: '2.5rem', 
              fontWeight: 600, 
              fontFamily: "'Clash Display', sans-serif"
            }}>
              <span className="hero-title-main" style={{ display: 'block', color: 'var(--text)', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>Scalable Infrastructure for</span>
              <span className="hero-title-highlight goldText" style={{ display: 'inline-block', paddingBottom: '0.1em', filter: 'drop-shadow(0 4px 20px rgba(216, 181, 106, 0.2))' }}>Modern Revenue</span>
            </h1>
            
            <p className="hero-subtitle" style={{ 
              maxWidth: '800px', 
              margin: '0 auto 4rem auto', 
              fontSize: '1.35rem', 
              color: 'rgba(233, 238, 247, 0.8)', 
              lineHeight: 1.8,
              fontWeight: 300
            }}>
              We don't just provide services; we build high-performance growth stacks that integrate acquisition, 
              automation, and intelligence into a single operating architecture.
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
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'rgba(233, 238, 247, 0.5)', fontWeight: 600 }}>Explore Capabilities</span>
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
          `}
        </style>
      </section>

      <CapabilitiesSection />
      <TechnologyEcosystem />

      <section className="tech-stack-detail section-padding" style={{ position: 'relative', background: 'transparent', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(195, 163, 101, 0.03) 0%, transparent 70%)', filter: 'blur(80px)', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="glass-card tech-stack-reveal" style={{
            background: 'rgba(18, 20, 25, 0.4)',
            border: '1px solid rgba(195, 163, 101, 0.15)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            textAlign: 'center',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '5rem 3rem'
          }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 1.2rem', background: 'rgba(195, 163, 101, 0.05)', border: '1px solid rgba(195, 163, 101, 0.2)', borderRadius: '100px', marginBottom: '2rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c3a365' }}>
              <span style={{ width: '6px', height: '6px', background: '#c3a365', borderRadius: '50%', boxShadow: '0 0 10px rgba(195, 163, 101, 0.8)' }}></span>
              Tech Stack
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.01em', fontFamily: 'var(--font-heading, sans-serif)', margin: '0 0 1.5rem 0' }}>
              Technical <span style={{ background: 'linear-gradient(135deg, #c3a365 0%, #e8d5a3 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontWeight: 300 }}>Credibility</span>
            </h2>
            <p className="mt-4" style={{color: 'rgba(255, 255, 255, 0.65)', fontSize: '1.25rem', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto', fontWeight: 300}}>
              Our architecture is built on the most robust technology ecosystems in the world. 
              Whether it's custom AI agents, HubSpot/Salesforce integration, or GA4 attribution models, 
              we ensure every piece of your growth system communicates perfectly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
