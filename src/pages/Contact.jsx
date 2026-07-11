import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import GlobalPresenceSection from '../components/GlobalPresenceSection';

export default function Contact() {
  return (
    <div className="contact-page" style={{ backgroundColor: '#000000', minHeight: '100vh', position: 'relative', zIndex: 1, paddingBottom: '4rem' }}>
      <section className="contact-hero section-padding">
        <div className="container">
          <div className="grid-2" style={{alignItems: 'center'}}>
            <div>
              <div className="pill">Get in Touch</div>
              <h1 className="title-gradient" style={{fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', lineHeight: '1.1', marginBottom: '1rem'}}>Let's Engineer Your<br/>Revenue System</h1>
              <p className="mt-4" style={{color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.8'}}>
                Schedule a consultation to audit your current growth gaps and design a 
                scalable automation and acquisition architecture.
              </p>

              <div className="contact-info-list mt-5" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
                  <div className="cap-icon"><Mail size={24} /></div>
                  <div>
                    <strong style={{display: 'block'}}>Email Us</strong>
                    <span style={{color: 'var(--text-secondary)'}}>hello@ai24.digital</span>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
                  <div className="cap-icon"><Phone size={24} /></div>
                  <div>
                    <strong style={{display: 'block'}}>Call Us</strong>
                    <span style={{color: 'var(--text-secondary)'}}>+91 87-500-500-49</span>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
                  <div className="cap-icon"><MapPin size={24} /></div>
                  <div>
                    <strong style={{display: 'block'}}>Global HQ</strong>
                    <span style={{color: 'var(--text-secondary)'}}>The Prism Tower, Business Bay, Dubai</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{padding: 'clamp(1.5rem, 6vw, 3rem)'}}>
              <h3 className="title-gold" style={{marginBottom: '2rem'}}>Book a Strategy Call</h3>
              <form style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem'}}>
                  <input type="text" placeholder="First Name" style={{width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#fff'}} />
                  <input type="text" placeholder="Last Name" style={{width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#fff'}} />
                </div>
                <input type="email" placeholder="Business Email" style={{width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#fff'}} />
                <select style={{width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#fff', appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em'}}>
                  <option value="" disabled selected>Select Industry</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="SaaS & Tech">SaaS & Tech</option>
                  <option value="D2C">D2C</option>
                </select>
                <textarea placeholder="Tell us about your growth goals" rows="4" style={{width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#fff', fontFamily: 'inherit'}}></textarea>
                <button type="button" className="btn-primary" style={{width: '100%', padding: '1.2rem', justifyContent: 'center'}}><Calendar size={18}/> Schedule Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Scroll Animation */}
      <GlobalPresenceSection />
    </div>
  );
}

