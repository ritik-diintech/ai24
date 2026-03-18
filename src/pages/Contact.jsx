import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import GlobalPresenceSection from '../components/GlobalPresenceSection';

export default function Contact() {
  return (
    <div className="page-container">
      <section className="contact-hero section-padding">
        <div className="container">
          <div className="grid-2" style={{alignItems: 'center'}}>
            <div>
              <div className="pill">Get in Touch</div>
              <h1 className="title-gradient" style={{fontSize: '3.5rem'}}>Let's Engineer Your<br/>Revenue System</h1>
              <p className="mt-4" style={{color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8'}}>
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

            <div className="glass-card" style={{padding: '3rem'}}>
              <h3 className="title-gold" style={{marginBottom: '2rem'}}>Book a Strategy Call</h3>
              <form style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <div style={{display: 'flex', gap: '1rem'}}>
                  <input type="text" placeholder="First Name" style={{flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#fff'}} />
                  <input type="text" placeholder="Last Name" style={{flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#fff'}} />
                </div>
                <input type="email" placeholder="Business Email" style={{padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#fff'}} />
                <select style={{padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#fff'}}>
                  <option>Select Industry</option>
                  <option>Real Estate</option>
                  <option>Financial Services</option>
                  <option>SaaS & Tech</option>
                  <option>D2C</option>
                </select>
                <textarea placeholder="Tell us about your growth goals" rows="4" style={{padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#fff'}}></textarea>
                <button className="btn-primary" style={{width: '100%', padding: '1.2rem'}}><Calendar size={18}/> Schedule Now</button>
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

