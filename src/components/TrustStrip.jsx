import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Building2, Globe2, Target, ShieldCheck, ArrowUpRight } from 'lucide-react';
import './TrustStrip.css';

// City Images
import imgDubai      from '../assets/heroBgImages/about_bg.jpg';
import imgGurugram   from '../assets/images/about_city/gurugram.png';
import imgNoida      from '../assets/images/about_city/noida.png';
import imgBangalore  from '../assets/images/about_city/banglore.jpg';

// Country Images
import imgUSA        from '../assets/images/country_image/usa.png';
import imgUK         from '../assets/images/country_image/uk.jpg';
import imgCanada     from '../assets/images/country_image/canada.png';

gsap.registerPlugin(ScrollTrigger);

export default function TrustStrip() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Background Glow Dynamic Bloom
      gsap.fromTo('.gc-glow-1', 
        { scale: 0.8, opacity: 0 }, 
        { 
          scale: 1.5, opacity: 0.8, duration: 2.5, ease: "power2.out", 
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" }
        }
      );

      // Section Header Cinematic Pop
      const tlHeader = gsap.timeline({
        scrollTrigger: {
          trigger: '.gc-header',
          start: 'top 85%'
        }
      });
      tlHeader.fromTo('.gc-badge', 
        { y: 30, opacity: 0, scale: 0.5 }, 
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(2)" }
      )
      .fromTo('.gc-title', 
        { y: 60, opacity: 0, rotateX: 45, transformPerspective: 800 }, 
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: "power4.out" }, 
        "-=0.5"
      );

      // Command Center (Dubai) Clip-Path Expansion
      const tlDubai = gsap.timeline({
        scrollTrigger: {
          trigger: '.gc-hq-showcase',
          start: 'top 80%',
        }
      });

      tlDubai.fromTo('.gc-hq-showcase', 
        { clipPath: "inset(40% 25% 40% 25% round 60px)", filter: "brightness(0.2) saturate(0.2)", scale: 0.8 },
        { clipPath: "inset(0% 0% 0% 0% round 24px)", filter: "brightness(1) saturate(1)", scale: 1, duration: 2, ease: "power4.inOut" }
      )
      .fromTo('.gc-hq-img', 
        { scale: 2 }, 
        { scale: 1, duration: 2, ease: "power3.out" }, 
        "<"
      )
      .fromTo('.gc-hq-border',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo('.gc-hq-tag, .gc-live-status, .gc-hq-city, .gc-hq-desc', 
        { y: 40, opacity: 0, filter: "blur(10px)" }, 
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, stagger: 0.15, ease: "power3.out" }, 
        "-=1"
      );

      // Ensure clip-path reset on complete to avoid cutting off box-shadows if needed
      tlDubai.to('.gc-hq-showcase', { clipPath: "none", duration: 0.1 });

      // Execution Engine (India) 3D Card Fold Reveal
      const tlIndia = gsap.timeline({
        scrollTrigger: {
          trigger: '.gc-region-wrapper-1',
          start: 'top 75%'
        }
      });

      tlIndia.fromTo('.gc-region-wrapper-1 .gc-region-title, .gc-region-wrapper-1 .gc-region-subtitle',
        { x: -50, opacity: 0, filter: "blur(5px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 1, stagger: 0.2, ease: "power3.out" }
      )
      .fromTo('.gc-region-wrapper-1 .gc-region-line', 
        { scaleX: 0, transformOrigin: "left center" }, 
        { scaleX: 1, duration: 1.2, ease: "power4.inOut" }, 
        "<0.2"
      )
      .fromTo('.gc-cities-grid .gc-city-card', 
        { y: 150, opacity: 0, rotateX: -35, transformPerspective: 1000 }, 
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.2, ease: "back.out(1.4)" }, 
        "-=0.6"
      )
      .fromTo('.gc-city-pin',
        { scale: 0, rotation: -90 },
        { scale: 1, rotation: 0, duration: 0.6, stagger: 0.2, ease: "back.out(2)" },
        "-=0.8"
      );

      // Global Markets Dynamic Slide Cascade
      const tlGlobal = gsap.timeline({
        scrollTrigger: {
          trigger: '.gc-region-wrapper-2',
          start: 'top 75%'
        }
      });

      tlGlobal.fromTo('.gc-region-wrapper-2 .gc-region-subtitle, .gc-region-wrapper-2 .gc-region-title',
        { x: 50, opacity: 0, filter: "blur(5px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 1, stagger: 0.2, ease: "power3.out" }
      )
      .fromTo('.gc-region-wrapper-2 .gc-region-line-end', 
        { scaleX: 0, transformOrigin: "right center" }, 
        { scaleX: 1, duration: 1.2, ease: "power4.inOut" }, 
        "<0.2"
      )
      .fromTo('.gc-countries-grid .gc-country-card', 
        { x: 100, y: 50, opacity: 0, scale: 0.85, rotateY: 25, transformPerspective: 1200 }, 
        { x: 0, y: 0, opacity: 1, scale: 1, rotateY: 0, duration: 1.2, stagger: 0.15, ease: "expo.out" }, 
        "-=0.6"
      )
      .fromTo('.gc-country-arrow', 
        { x: -30, y: 30, opacity: 0, scale: 0 },
        { x: 0, y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(2)" },
        "-=0.8"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="global-credibility-section" ref={sectionRef}>
      <div className="gc-ambient-bg">
        <div className="gc-glow-1"></div>
        <div className="gc-glow-2"></div>
        <div className="gc-grid-pattern"></div>
      </div>
      
      <div className="container relative z-10">
        
        <div className="gc-header">
          <div className="gc-badge">
            <ShieldCheck size={14} className="gc-icon-gold" />
            <span>Credibility</span>
          </div>
          <h2 className="gc-title">
            Global Presence &amp;<br/>
            <span>Credibility</span>
          </h2>
        </div>

        {/* 1. DUBAI - THE COMMAND CENTER */}
        <div className="gc-hq-showcase">
          <img src={imgDubai} alt="Dubai Headquarters" className="gc-hq-img" />
          <div className="gc-hq-overlay"></div>
          
          <div className="gc-hq-content">
            <div className="gc-hq-top">
              <div className="gc-hq-tag">
                <Building2 size={16} /> Global Headquarters
              </div>
              <div className="gc-live-status">
                <div className="pulse-dot"></div> Active
              </div>
            </div>
            
            <div className="gc-hq-bottom">
              <h3 className="gc-hq-city">Dubai, UAE</h3>
              <p className="gc-hq-desc">
                The strategic command center for global growth architecture, 
                AI innovation, and elite institutional partnerships at Business Bay.
              </p>
            </div>
          </div>
          <div className="gc-hq-border"></div>
        </div>

        {/* 2. INDIA - THE EXECUTION ENGINE */}
        <div className="gc-region-wrapper gc-mt-16 gc-region-wrapper-1">
          <div className="gc-region-header">
            <h3 className="gc-region-title"><span>🇮🇳</span> India</h3>
            <div className="gc-region-line"></div>
            <p className="gc-region-subtitle">The Execution Engine</p>
          </div>

          <div className="gc-cities-grid">
            {[
              { img: imgBangalore, name: 'Bangalore', role: 'Technology Hub' },
              { img: imgGurugram, name: 'Gurugram', role: 'Revenue Operations' },
              { img: imgNoida, name: 'Noida', role: 'Delivery Center' }
            ].map((city) => (
              <div key={city.name} className="gc-city-card">
                <img src={city.img} alt={city.name} className="gc-city-img" />
                <div className="gc-city-overlay"></div>
                
                <div className="gc-city-info">
                  <div className="gc-city-pin"><MapPin size={18}/></div>
                  <h4 className="gc-city-name">{city.name}</h4>
                  <span className="gc-city-role">{city.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. GLOBAL MARKETS */}
        <div className="gc-region-wrapper gc-mt-16 gc-pb-16 gc-region-wrapper-2">
          <div className="gc-region-header" style={{ justifyContent: 'flex-end', textAlign: 'right' }}>
            <p className="gc-region-subtitle">International Presence</p>
            <div className="gc-region-line-end"></div>
            <h3 className="gc-region-title"><Globe2 size={24} style={{ color: '#c3a365' }}/> Global Markets</h3>
          </div>

          <div className="gc-countries-grid">
            {[
              { img: imgUSA, country: 'USA', city: 'Chicago Office' },
              { img: imgUK, country: 'United Kingdom', city: 'Birmingham Office' },
              { img: imgCanada, country: 'Canada', city: 'Toronto Office' }
            ].map((nation) => (
              <div key={nation.country} className="gc-country-card">
                <img src={nation.img} alt={nation.country} className="gc-country-img" />
                <div className="gc-country-overlay"></div>
                <div className="gc-country-content">
                  <h4 className="gc-country-name">{nation.country}</h4>
                  <span className="gc-country-city">{nation.city}</span>
                </div>
                <div className="gc-country-arrow"><ArrowUpRight size={20}/></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
