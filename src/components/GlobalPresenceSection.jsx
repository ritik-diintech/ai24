import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './GlobalPresenceSection.css';

import worldMap from '../assets/images/world_map_premium.png';

import imgDubai      from '../assets/images/about_city/dubai.png';
import imgGurugram   from '../assets/images/about_city/gurugram.png';
import imgNoida      from '../assets/images/about_city/noida.png';
import imgBangalore  from '../assets/images/about_city/banglore.jpg';
import imgBirmingham from '../assets/images/about_city/birmingham.png';
import imgChicago    from '../assets/images/about_city/chicago.png';
import imgToronto    from '../assets/images/about_city/torronto.jpg';
import imgUAE        from '../assets/country_image/uae_country.jpg';

/* ─────────────────────────────────────────────────────────
   STORY STEPS
   focusX / focusY  → 0–1 coordinates on the map image
                       where camera should centre
   scale            → how much to zoom in
   side             → which side the panel appears
───────────────────────────────────────────────────────── */
const STEPS = [
  {
    id: 'intro',
    flag: '🌐',
    country: 'Global Network',
    badge: 'OUR PRESENCE',
    title: 'Headquartered in Dubai.\nExecuting Globally.',
    body: 'Ai24 operates through strategic hubs across the UAE, India, North America and the UK — connecting growth, technology and execution across markets.',
    img: imgDubai,
    focusX: 0.54, focusY: 0.48, scale: 1.1,
    side: 'left',
  },
  {
    id: 'dubai',
    flag: '🇦🇪',
    country: 'United Arab Emirates',
    badge: 'HEADQUARTERS',
    title: 'Dubai — Global HQ',
    body: 'Our HQ at Business Bay, Dubai drives global partnerships, high-value clients and growth architecture.',
    img: imgDubai,
    address: 'Office 1204, The Prism Tower,\nBusiness Bay, Dubai, UAE',
    focusX: 0.55, focusY: 0.52, scale: 2.8,
    side: 'left',
  },
  {
    id: 'india',
    flag: '🇮🇳',
    country: 'India',
    badge: 'EXECUTION ENGINE',
    title: 'India — The Delivery Core',
    body: 'Three specialised hubs across India deliver world‑class execution — talent, technical depth and speed at scale.',
    img: imgGurugram,
    hubs: [
      { name: 'Gurugram',  role: 'Revenue Operations', img: imgGurugram },
      { name: 'Noida',     role: 'Delivery Hub',        img: imgNoida },
      { name: 'Bangalore', role: 'Technology Hub',      img: imgBangalore },
    ],
    focusX: 0.715, focusY: 0.50, scale: 3.0,
    side: 'left',
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    country: 'United Kingdom',
    badge: 'UK PRESENCE',
    title: 'Birmingham, UK',
    body: 'Our Birmingham office anchors Ai24\'s European footprint — premium growth systems for UK and European clients.',
    img: imgBirmingham,
    address: 'Suite 402, 55 Colmore Row,\nBirmingham B3 2AA, England',
    focusX: 0.465, focusY: 0.265, scale: 3.5,
    side: 'right',
  },
  {
    id: 'na',
    flag: '🌎',
    country: 'North America',
    badge: 'NORTH AMERICA',
    title: 'Chicago & Toronto',
    body: 'North American offices in Chicago and Toronto bring unified growth systems to ambitious businesses across the USA and Canada.',
    img: imgChicago,
    hubs: [
      { name: 'Chicago', role: 'USA — Suite 2100, 155 N Wacker Dr', img: imgChicago },
      { name: 'Toronto', role: 'Canada — Suite 300, 1 King St W',   img: imgToronto },
    ],
    focusX: 0.225, focusY: 0.325, scale: 2.6,
    side: 'right',
  },
  {
    id: 'final',
    flag: '🔗',
    country: 'One Network',
    badge: 'ONE SYSTEM',
    title: 'A Unified Global System',
    body: 'From Dubai to Bangalore, Birmingham to Toronto — Ai24 is one integrated growth engine operating across continents.',
    img: imgUAE,
    cta: true,
    focusX: 0.50, focusY: 0.45, scale: 1.05,
    side: 'center',
  },
];

/* ── Camera helper: centres (focusX,focusY) in viewport after scaling ── */
function getCamTransform(fx, fy, scale) {
  return {
    scale,
    xPercent: (0.5 - fx) * scale * 100,
    yPercent: (0.5 - fy) * scale * 100,
  };
}

/* ══════════════════════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════════════════════ */
export default function GlobalPresenceSection() {
  const outerRef  = useRef(null);   // the tall scroll-spacer div
  const stickyRef = useRef(null);   // the sticky viewport-height frame
  const mapRef    = useRef(null);   // the <img> we transform

  const [step, setStep]   = useState(0);
  const stepRef           = useRef(0);  // to avoid stale closure in scroll handler

  /* ── Tween map to the active step's camera position ── */
  const tweenMap = (idx) => {
    const s = STEPS[idx];
    const cam = getCamTransform(s.focusX, s.focusY, s.scale);
    gsap.to(mapRef.current, {
      scale:    cam.scale,
      xPercent: cam.xPercent,
      yPercent: cam.yPercent,
      duration: 1.4,
      ease: 'power2.inOut',
      overwrite: true,
    });
  };

  /* ── Scroll listener ── */
  useEffect(() => {
    const outer  = outerRef.current;
    const sticky = stickyRef.current;
    if (!outer || !sticky || !mapRef.current) return;

    // Initialise map
    gsap.set(mapRef.current, { transformOrigin: '50% 50%', scale: 1.1, xPercent: 0, yPercent: 0 });

    const onScroll = () => {
      const rect         = outer.getBoundingClientRect();
      const totalScroll  = outer.offsetHeight - window.innerHeight;   // scrollable distance
      const scrolled     = Math.max(0, -rect.top);                    // how far we've scrolled in
      const progress     = Math.min(1, scrolled / totalScroll);       // 0 → 1
      const idx          = Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length));

      if (idx !== stepRef.current) {
        stepRef.current = idx;
        setStep(idx);
        tweenMap(idx);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const s = STEPS[step];

  return (
    /* OUTER: very tall — provides the scroll distance */
    <div
      ref={outerRef}
      className="gps-outer"
      style={{ height: `${STEPS.length * 100}vh` }}
    >
      {/* STICKY FRAME — always viewport-height, sticks in place */}
      <div ref={stickyRef} className="gps-sticky">

        {/* MAP BACKGROUND */}
        <div className="gps-map-wrap">
          <img
            ref={mapRef}
            src={worldMap}
            alt="Ai24 Global Network"
            className="gps-map-img"
          />
          {/* cinematic vignettes */}
          <div className="gps-vignette" />
          <div className="gps-side-fade" />
        </div>

        {/* PANEL — React re-renders on step change */}
        <div
          key={s.id}                       /* key forces remount & CSS entry animation */
          className={`gps-panel gps-panel--${s.side}`}
        >
          {/* ── TOP HUD BAR ── */}
          <div style={{ 
            padding: '1.2rem 1.5rem', 
            borderBottom: '1px solid rgba(255,255,255,0.05)', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            background: 'rgba(0,0,0,0.2)'
          }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>{s.flag}</span>
                <span style={{ fontSize: '0.65rem', color: '#c3a365', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>{s.badge}</span>
             </div>
             <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></div>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></div>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></div>
             </div>
          </div>

          <div style={{ padding: s.id === 'final' ? '2.5rem 3rem' : '1.5rem 1.8rem' }}>
             
             {/* ── LARGE HEADLINE ── */}
             <h2 style={{ 
               fontSize: s.id === 'final' ? '2.5rem' : '2rem', 
               fontFamily: "'Clash Display', sans-serif", 
               fontWeight: 300, 
               color: '#fff', 
               lineHeight: 1.1, 
               marginBottom: s.id === 'final' ? '1rem' : '0.8rem',
               letterSpacing: '-0.02em'
             }}>
               {s.title}
             </h2>
             <p style={{ 
               fontSize: s.id === 'final' ? '1rem' : '0.9rem', 
               color: 'rgba(255,255,255,0.5)', 
               lineHeight: 1.6, 
               marginBottom: s.id === 'final' ? '1.5rem' : '1.5rem',
               fontWeight: 300,
               maxWidth: s.id === 'final' ? '600px' : 'none',
               margin: s.id === 'final' ? '0 auto 1.5rem auto' : '0 0 1.5rem 0'
             }}>
               {s.body}
             </p>

             {/* ── SLEEK IMAGE INSET ── */}
             {s.img && (
               <div style={{ 
                 position: 'relative', 
                 width: '100%', 
                 height: s.id === 'final' ? '180px' : '100px', 
                 borderRadius: '4px', 
                 overflow: 'hidden', 
                 border: '1px solid rgba(255,255,255,0.08)', 
                 marginBottom: '1.5rem' 
               }}>
                  <img src={s.img} alt={s.country} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) brightness(0.8)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,12,16,0.9) 0%, transparent 100%)' }}></div>
                  
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                     <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c3a365', boxShadow: '0 0 12px #c3a365' }}></div>
                     <span style={{ color: '#fff', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>
                        {s.id === 'final' ? 'ONE NETWORK' : `${s.country} NETWORK`}
                     </span>
                  </div>
               </div>
             )}

             {/* ── DYNAMIC METADATA (Address / Hubs) ── */}
             {s.address && (
               <div style={{ 
                 display: 'flex', 
                 gap: '0.8rem', 
                 padding: '1rem', 
                 background: 'rgba(255,255,255,0.02)', 
                 border: '1px dashed rgba(255,255,255,0.1)', 
                 borderRadius: '4px' 
               }}>
                 <div style={{ color: '#c3a365', fontSize: '1.2rem' }}>📍</div>
                 <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, whiteSpace: 'pre-line', fontWeight: 300 }}>{s.address}</span>
               </div>
             )}

             {s.hubs && (
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(85px, 1fr))', gap: '0.8rem' }}>
                 {s.hubs.map(h => (
                   <div key={h.name} style={{ 
                     display: 'flex', 
                     flexDirection: 'column',
                     alignItems: 'center', 
                     justifyContent: 'flex-start',
                     textAlign: 'center',
                     padding: '1.2rem 0.5rem', 
                     background: 'rgba(255,255,255,0.02)', 
                     borderTop: '2px solid #c3a365', 
                     borderRadius: '4px',
                     borderRight: '1px solid rgba(255,255,255,0.03)',
                     borderBottom: '1px solid rgba(255,255,255,0.03)',
                     borderLeft: '1px solid rgba(255,255,255,0.03)'
                   }}>
                     <div style={{ width: '32px', height: '32px', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '0.5rem', flexShrink: 0 }}>
                       <img src={h.img} alt={h.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                     </div>
                     <div style={{ paddingBottom: '0.2rem' }}>
                       <strong style={{ display: 'block', color: '#fff', fontSize: '0.8rem', fontFamily: "'Clash Display', sans-serif", fontWeight: 400, marginBottom: '0.4rem', lineHeight: 1.2 }}>{h.name}</strong>
                       <span style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', fontWeight: 300, lineHeight: 1.3 }}>{h.role}</span>
                     </div>
                   </div>
                 ))}
               </div>
             )}

             {/* ── FINAL CTA ── */}
             {s.cta && (
               <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                 <button className="gps-btn-premium-cta" style={{ 
                   width: '100%', 
                   padding: '1.2rem', 
                   background: 'linear-gradient(90deg, #c3a365 0%, #e6d3a8 50%, #c3a365 100%)', 
                   backgroundSize: '200% auto',
                   color: '#000', 
                   border: 'none', 
                   borderRadius: '4px', 
                   fontWeight: 700, 
                   fontSize: '0.85rem', 
                   textTransform: 'uppercase', 
                   letterSpacing: '0.2em', 
                   cursor: 'pointer',
                   boxShadow: '0 10px 30px rgba(195,163,101,0.3)',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'translateY(-2px)';
                   e.currentTarget.style.boxShadow = '0 15px 40px rgba(195,163,101,0.5)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(195,163,101,0.3)';
                 }}>
                   Book a Strategy Call
                 </button>
               </div>
             )}
          </div>
        </div>

        {/* PROGRESS DOTS */}
        <div className="gps-dots">
          {STEPS.map((_, i) => (
            <span key={i} className={`gps-dot${i === step ? ' active' : ''}`} />
          ))}
        </div>

        {/* STEP COUNTER */}
        <div className="gps-counter">
          <span className="gps-counter-cur">{String(step + 1).padStart(2, '0')}</span>
          <span className="gps-counter-sep"> / </span>
          <span className="gps-counter-tot">{String(STEPS.length).padStart(2, '0')}</span>
        </div>

        {/* SCROLL HINT  */}
        {step === 0 && (
          <div className="gps-scroll-hint">
            <span className="gps-scroll-text">SCROLL TO EXPLORE</span>
            <div className="gps-scroll-line">
              <div className="gps-scroll-line-dot" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
