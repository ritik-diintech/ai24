import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <div className="logo footer-logo">Ai<span>24</span></div>
            <p className="brand-tagline">Enabling Intelligence</p>
            <div className="hq-info">
              <span>Headquartered in Dubai</span>
              <span className="india-offices">India Offices: Gurgaon &bull; Noida &bull; Bangalore</span>
            </div>
            <div className="contact-info">
              hello@ai24.digital<br/>
              +91 87-500-500-49
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/global-presence">Global Presence</Link></li>
              </ul>
            </div>
            
            <div className="link-col">
              <h4>Solutions</h4>
              <ul>
                <li><Link to="/capabilities">Capabilities</Link></li>
                <li><Link to="/industries">Industries</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
              </ul>
            </div>
            
            <div className="link-col">
              <h4>Resources & Legal</h4>
              <ul>
                <li><Link to="/insights">Insights</Link></li>
                <li><Link to="/diagnostic">Diagnostic Tool</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ai24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
