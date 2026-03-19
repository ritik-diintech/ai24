import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Lightbulb, Users, Globe, Bot, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleMoreMenu = (e) => {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      setMoreMenuOpen(!moreMenuOpen);
    }
  };

  // Desktop mega menu with delay to prevent instant disappear
  const handleDropdownEnter = useCallback(() => {
    if (window.innerWidth > 991) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setMoreMenuOpen(true);
    }
  }, []);

  const handleDropdownLeave = useCallback(() => {
    if (window.innerWidth > 991) {
      closeTimerRef.current = setTimeout(() => {
        setMoreMenuOpen(false);
      }, 300); // 300ms delay before closing
    }
  }, []);

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const moreLinks = [
    { to: '/insights', label: 'Insights', desc: 'Industry trends & articles', icon: Lightbulb },
    { to: '/careers', label: 'Careers', desc: 'Join our growing team', icon: Users },
    { to: '/global-presence', label: 'Global Presence', desc: 'Our worldwide network', icon: Globe },
    { to: '/automation-solutions', label: 'AI & Automation', desc: 'Smart business solutions', icon: Bot },
  ];

  const isMoreActive = moreLinks.some(link => isActive(link.to));

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-glow-bar" />
        <div className="container header-container">
          {/* Main Logo — hidden on mobile when menu opens via CSS */}
          <Link to="/" className="logo header-logo" onClick={() => setMobileMenuOpen(false)}>
            Ai<span>24</span>
          </Link>

          <nav className={`desktop-nav ${mobileMenuOpen ? 'open' : ''}`}>
            {/* Mobile panel header */}
            <div className="mobile-nav-header">
              <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
                Ai<span>24</span>
              </Link>
              <button className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            <div className="mobile-nav-scroll">
              <ul>
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About' },
                  { to: '/capabilities', label: 'Capabilities' },
                  { to: '/industries', label: 'Industries' },
                  { to: '/case-studies', label: 'Case Studies' },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={isActive(link.to) ? 'nav-active' : ''}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="nav-link-label">{link.label}</span>
                      {isActive(link.to) && <span className="active-dot" />}
                    </Link>
                  </li>
                ))}

                {/* More dropdown with delay on leave */}
                <li
                  className="nav-dropdown"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                  onClick={toggleMoreMenu}
                >
                  <div className={`dropdown-trigger ${isMoreActive ? 'nav-active' : ''}`}>
                    <span className="nav-link-label">More</span>
                    <ChevronDown size={14} className={`chevron-icon ${moreMenuOpen ? 'rotate' : ''}`} />
                    {isMoreActive && <span className="active-dot" />}
                  </div>

                  {/* ─── Mega Menu ─── */}
                  <div className={`mega-menu ${moreMenuOpen ? 'show' : ''}`}>
                    <div className="mega-menu-bridge" />
                    <div className="mega-menu-inner">
                      <div className="mega-menu-header">
                        <span className="mega-menu-label">Explore More</span>
                      </div>
                      <div className="mega-menu-grid">
                        {moreLinks.map((link) => {
                          const IconComp = link.icon;
                          return (
                            <Link
                              key={link.to}
                              to={link.to}
                              className={`mega-menu-item ${isActive(link.to) ? 'mega-item-active' : ''}`}
                              onClick={() => { setMobileMenuOpen(false); setMoreMenuOpen(false); }}
                            >
                              <div className="mega-item-icon">
                                <IconComp size={18} />
                              </div>
                              <div className="mega-item-content">
                                <span className="mega-item-title">{link.label}</span>
                                <span className="mega-item-desc">{link.desc}</span>
                              </div>
                              <ArrowUpRight size={14} className="mega-item-arrow" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className={isActive('/contact') ? 'nav-active' : ''}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="nav-link-label">Contact</span>
                    {isActive('/contact') && <span className="active-dot" />}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile bottom CTA */}
            <div className="mobile-nav-footer">
              <button 
                className="mobile-nav-cta" 
                onClick={() => {
                  navigate('/contact');
                  setMobileMenuOpen(false);
                }}
              >
                Book Strategy Call
                <ArrowUpRight size={16} />
              </button>
              <p className="mobile-nav-tagline">Scale your business with AI-powered growth</p>
            </div>
          </nav>

          <div className="header-right">
            <button 
              className="header-cta" 
              onClick={() => {
                navigate('/contact');
                setMobileMenuOpen(false);
              }}
            >
              Book Strategy Call
            </button>
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`nav-overlay ${mobileMenuOpen ? 'nav-overlay-visible' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
