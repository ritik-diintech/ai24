import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Insights.css';

gsap.registerPlugin(ScrollTrigger);

export default function Insights() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const articles = [
    { 
      title: "The Growth Engineering Framework", 
      desc: "A deep dive into how institutional businesses align technology and sales for predictable revenue.",
      category: "Framework", 
      readTime: "05 MIN READ",
      date: "MAR 2024"
    },
    { 
      title: "Why CRM Automation Is Critical for Scaling", 
      desc: "Building the digital nervous system that allows companies to scale without human bottlenecking.",
      category: "Automation", 
      readTime: "08 MIN READ",
      date: "FEB 2024"
    },
    { 
      title: "How Conversion Science Improves Revenue", 
      desc: "Using neural data logic to understand and optimize high-intent customer journeys at scale.",
      category: "CRO", 
      readTime: "06 MIN READ",
      date: "JAN 2024"
    }
  ];

  /* ── GSAP Scroll Reveal Setup ── */
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });

      // Background Ambient Lettering & Glow
      tl.fromTo('.scale-watermark', 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 0.08, duration: 1.5, ease: 'power3.out' }
      )
      .fromTo('.journal-radial-glow',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 2, ease: "power2.out" },
        "<"
      );

      // Header Elements Reveal
      tl.fromTo('.journal-badge',
        { y: -30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
        "-=1.5"
      )
      .fromTo('.journal-main-title',
        { y: 50, opacity: 0, rotationX: 45, transformPerspective: 1000 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out" },
        "-=0.7"
      )
      .fromTo('.journal-view-all',
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      );

      // Cards Stagger
      const cards = gsap.utils.toArray('.journal-card-lux');
      tl.fromTo(cards,
        { y: 60, opacity: 0, rotationX: -15, scale: 0.95, transformPerspective: 1000 },
        { y: 0, opacity: 1, rotationX: 0, scale: 1, duration: 1, stagger: 0.15, ease: "back.out(1.2)" },
        "-=1.2"
      );

      // Card internals
      cards.forEach((card, i) => {
        tl.fromTo(card.querySelectorAll('.journal-card-meta, .journal-card-title, .journal-card-desc, .journal-card-footer'),
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          `<${i * 0.1 + 0.2}`
        )
        // Card Glow activation
        .fromTo(card.querySelector('.journal-card-glow'),
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power2.out" },
          "<0.2"
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="journal-insights-section" ref={sectionRef}>
      <div className="journal-bg-layer" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <div className="journal-radial-glow"></div>
        {/* Giant Watermark Typography */}
        <div className="scale-watermark" style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(8rem, 15vw, 25rem)',
          fontFamily: "'Clash Display', sans-serif",
          fontWeight: 600,
          color: 'transparent',
          WebkitTextStroke: '2px rgba(255,255,255,1)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 0,
          letterSpacing: '-0.02em',
          opacity: 0 // Handled by GSAP
        }}>
          JOURNAL
        </div>
      </div>

      <div className="container relative z-10">
        <div className="journal-header-lux">
          <div className="journal-badge">
            <BookOpen size={14} /> Strategic Journal
          </div>
          
          <div className="journal-title-row">
            <h2 className="journal-main-title">
              Thought <span>Leadership</span>
            </h2>
            
            <div className="journal-view-all">
              <button 
                className="journal-all-btn"
                onClick={() => { navigate('/insights'); }}
              >
                All Insights <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="journal-grid-lux">
          {articles.map((article, i) => (
            <div 
              key={i} 
              className="journal-card-lux"
            >
              <div className="journal-card-inner">
                <div className="journal-card-meta">
                  <span className="journal-date">{article.date}</span>
                  <div className="journal-category-tag">
                    <Tag size={12} /> {article.category}
                  </div>
                </div>

                <h3 className="journal-card-title">{article.title}</h3>
                <p className="journal-card-desc">{article.desc}</p>

                <div className="journal-card-footer">
                  <div className="journal-read-time">
                    <Clock size={14} /> {article.readTime}
                  </div>
                  <div className="journal-read-link">
                    Read Journal <ArrowRight size={14} />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="journal-card-border"></div>
                <div className="journal-card-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
