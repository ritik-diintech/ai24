import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Building2,
  Landmark,
  HeartPulse,
  BookOpen,
  Sparkles,
  ShoppingBag,
  Plane,
  UserRoundCheck,
  Rocket,
  Gem,
  ArrowRight
} from 'lucide-react';
import './Industries.css';

gsap.registerPlugin(ScrollTrigger);

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const panelRef = useRef(null);
  const layoutRef = useRef(null);

  const industries = [
    {
      name: "Real Estate",
      icon: <Building2 />,
      desc: "Architecting lead-to-close systems for developers and top-tier agencies.",
      stats: "3.5x ROI"
    },
    {
      name: "Financial Services",
      icon: <Landmark />,
      desc: "High-security acquisition funnels for FinTech and investment firms.",
      stats: "-40% CAC"
    },
    {
      name: "Healthcare & Wellness",
      icon: <HeartPulse />,
      desc: "Patient acquisition and automated nurturing systems for clinics and health giants.",
      stats: "92% Efficiency"
    },
    {
      name: "Education & EdTech",
      icon: <BookOpen />,
      desc: "Scaling enrollment through intelligent data models and cross-channel funnels.",
      stats: "4.2x LTV"
    },
    {
      name: "Spiritual & Consciousness",
      icon: <Sparkles />,
      desc: "Elevating heart-centered brands with high-performance digital ecosystems.",
      stats: "Global Reach"
    },
    {
      name: "D2C & E-commerce",
      icon: <ShoppingBag />,
      desc: "Hyper-personalized retention and conversion engines for global brands.",
      stats: "65% Retention"
    },
    {
      name: "Hospitality & Travel",
      icon: <Plane />,
      desc: "Direct booking architectures and guest intelligence platforms.",
      stats: "High Booking"
    },
    {
      name: "Professional Services",
      icon: <UserRoundCheck />,
      desc: "Premium authority systems for consultancies and luxury service providers.",
      stats: "Elite Lead Gen"
    },
    {
      name: "Startups & SaaS",
      icon: <Rocket />,
      desc: "Growth engineering for scale-ups looking to dominate their market niche.",
      stats: "Scale Ready"
    },
    {
      name: "Luxury Brands",
      icon: <Gem />,
      desc: "Digital experiences that reflect the prestige and exclusivity of premium marques.",
      stats: "Premium Only"
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Use matchMedia to only apply ScrollTrigger on Desktop
      // On mobile, click handles accordion expansion, avoiding scroll-jitter.
      let mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        ScrollTrigger.create({
          trigger: listRef.current,
          start: "top center",
          end: "bottom center",
          onUpdate: (self) => {
            const progress = self.progress;
            const targetIndex = Math.min(
              Math.floor(progress * industries.length),
              industries.length - 1
            );

            setActiveIndex(targetIndex);
          }
        });
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [industries.length]);

  return (
    <section ref={sectionRef} className="industries-section section-padding gsap-reveal">
      <div className="container relative z-10">
        <div className="ind-header-top">
          <div className="ind-badge">
            <span className="ind-badge-dot"></span>
            Sectors
          </div>
          <div className="ind-header-flex">
            <h2 className="ind-main-title">Industries We<br /><span>Transform</span></h2>
            <p className="ind-description">
              We deploy industry-specific growth architecture across diverse global markets,
              turning business potential into predictable revenue.
            </p>
          </div>
        </div>

        <div ref={layoutRef} className="ind-interactive-layout">
          <div ref={listRef} className="ind-list-panel">
            {industries.map((ind, i) => (
              <div
                key={i}
                className={`ind-list-item ${activeIndex === i ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
              >
                <div className="ind-item-header">
                  <div className="ind-item-main">
                    <span className="ind-num">{i < 9 ? `0${i + 1}` : i + 1}</span>
                    <div className="ind-name-wrap">
                      <h3>{ind.name}</h3>
                      <div className="ind-hover-line"></div>
                    </div>
                  </div>
                  <div className="ind-item-icon">
                    {ind.icon}
                  </div>
                </div>

                {/* Mobile Inline Preview */}
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="ind-mobile-preview"
                    >
                      <div className="ind-mobile-preview-content">
                        <p>{ind.desc}</p>
                        <div className="ind-stat-pill">
                          <span className="ind-stat-label">Metric:</span>
                          <span className="ind-stat-value">{ind.stats}</span>
                        </div>
                        <button className="ind-explore-btn">
                          Explore Solution <ArrowRight size={14} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div ref={panelRef} className="ind-preview-panel-container">
            <div className="ind-preview-panel">
              <AnimatePresence>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)', position: 'absolute' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="ind-preview-content"
                >
                  <div className="ind-preview-icon-box">
                    {industries[activeIndex].icon}
                  </div>
                  <div className="ind-preview-text">
                    <span className="ind-preview-tag">Strategic Impact</span>
                    <h4>{industries[activeIndex].name}</h4>
                    <p>{industries[activeIndex].desc}</p>
                  </div>

                  <div className="ind-preview-footer">
                    <div className="ind-stat-pill">
                      <span className="ind-stat-label">Performance Metric:</span>
                      <span className="ind-stat-value">{industries[activeIndex].stats}</span>
                    </div>
                    <button className="ind-explore-btn">
                      Explore Solution <ArrowRight size={16} />
                    </button>
                  </div>

                  {/* Decorative background visual */}
                  <div className="ind-preview-bg-visual">
                    <div className="ind-bg-circle-1"></div>
                    <div className="ind-bg-circle-2"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="ind-bg-elements">
        <div className="ind-glow-1"></div>
        <div className="ind-glow-2"></div>
      </div>
    </section>
  );
}
