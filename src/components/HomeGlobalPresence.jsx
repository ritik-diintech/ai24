import React from 'react';
import { MapPin, Globe } from 'lucide-react';
import './HomeGlobalPresence.css';

import imgDubai      from '../assets/images/about_city/dubai.png';
import imgGurugram   from '../assets/images/about_city/gurugram.png';
import imgNoida      from '../assets/images/about_city/noida.png';
import imgBangalore  from '../assets/images/about_city/banglore.jpg';
import imgBirmingham from '../assets/images/about_city/birmingham.png';
import imgChicago    from '../assets/images/about_city/chicago.png';
import imgToronto    from '../assets/images/about_city/torronto.jpg';

const REGIONS = [
  { label: 'India', countries: ['🇮🇳'] },
  { label: 'UAE',   countries: ['🇦🇪'] },
  { label: 'Canada',countries: ['🇨🇦'] },
  { label: 'USA',   countries: ['🇺🇸'] },
  { label: 'UK',    countries: ['🇬🇧'] },
];

const OFFICES = [
  { city: 'Dubai',     role: 'Global HQ',         img: imgDubai,     flag: '🇦🇪' },
  { city: 'Gurugram',  role: 'Revenue Operations', img: imgGurugram,  flag: '🇮🇳' },
  { city: 'Noida',     role: 'Delivery Hub',       img: imgNoida,     flag: '🇮🇳' },
  { city: 'Bangalore', role: 'Technology Hub',     img: imgBangalore, flag: '🇮🇳' },
  { city: 'Birmingham',role: 'UK Office',          img: imgBirmingham,flag: '🇬🇧' },
  { city: 'Chicago',   role: 'USA Office',         img: imgChicago,   flag: '🇺🇸' },
  { city: 'Toronto',   role: 'Canada Office',      img: imgToronto,   flag: '🇨🇦' },
];

export default function HomeGlobalPresence() {
  return (
    <section className="hgp-section gsap-reveal">
      <div className="hgp-container">

        {/* Header */}
        <div className="hgp-header">
          <span className="hgp-pill"><Globe size={14} /> GLOBAL PRESENCE</span>
          <h2 className="hgp-title">Headquartered in Dubai</h2>
          <p className="hgp-subtitle">
            Global Presence across&nbsp;
            {REGIONS.map((r, i) => (
              <span key={r.label}>
                <strong>{r.countries[0]} {r.label}</strong>
                {i < REGIONS.length - 1 ? ' | ' : ''}
              </span>
            ))}
          </p>
        </div>

        {/* Office Grid */}
        <div className="hgp-grid">
          {OFFICES.map((o) => (
            <div key={o.city} className={`hgp-card${o.city === 'Dubai' ? ' hgp-card--hq' : ''}`}>
              <div className="hgp-card-img-wrap">
                <img src={o.img} alt={o.city} className="hgp-card-img" />
                <div className="hgp-card-img-fade" />
                {o.city === 'Dubai' && <span className="hgp-hq-tag">HQ</span>}
              </div>
              <div className="hgp-card-info">
                <div className="hgp-card-top">
                  <span className="hgp-card-flag">{o.flag}</span>
                  <h3 className="hgp-card-city">{o.city}</h3>
                </div>
                <span className="hgp-card-role">{o.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
