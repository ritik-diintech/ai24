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
    img: imgDubai,
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
          {/* ── HERO IMAGE ── */}
          <div className="gps-card-img-wrap">
            <img src={s.img} alt={s.country} className="gps-card-img" />
            <div className="gps-card-img-overlay" />

            <div className="gps-card-country">
              <span className="gps-card-flag">{s.flag}</span>
              <span className="gps-card-cname">{s.country}</span>
            </div>

            <span className="gps-card-badge">{s.badge}</span>
          </div>

          {/* ── BODY ── */}
          <div className="gps-card-body">
            <h2 className="gps-heading">{s.title}</h2>
            <p  className="gps-body-text">{s.body}</p>

            {s.address && (
              <div className="gps-address">
                <span className="gps-address-pin">📍</span>
                <span>{s.address}</span>
              </div>
            )}

            {s.hubs && (
              <div className="gps-hubs">
                {s.hubs.map(h => (
                  <div key={h.name} className="gps-hub-chip">
                    <img src={h.img} alt={h.name} className="gps-hub-img" />
                    <div className="gps-hub-text">
                      <strong>{h.name}</strong>
                      <span>{h.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {s.cta && (
              <div className="gps-cta-row">
                <button className="gps-btn-gold">Book a Strategy Call</button>
                <button className="gps-btn-ghost">Explore Capabilities</button>
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
            <div className="gps-mouse"><div className="gps-mouse-dot" /></div>
            <span>Scroll to explore</span>
          </div>
        )}
      </div>
    </div>
  );
}
