import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, Target, ShieldCheck, Zap, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Diagnostic.css';

gsap.registerPlugin(ScrollTrigger);

export default function Diagnostic() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0); // 0: Start, 1-4: Questions, 5: Result
  const [answers, setAnswers] = useState([]);

  const questions = [
    { 
      text: "Infrastructure Status", 
      question: "Do you have a structured CRM pipeline tracking leads in real-time?", 
      icon: <Target size={32} /> 
    },
    { 
      text: "Revenue Attribution", 
      question: "Can you accurately track 100% of lead sources back to final revenue?", 
      icon: <Activity size={32} /> 
    },
    { 
      text: "Growth Intelligence", 
      question: "Do you use AI/automation for hyper-personalized client nurturing?", 
      icon: <Zap size={32} /> 
    },
    { 
      text: "Performance Metrics", 
      question: "Do you measure LTV and profit margins on a per-channel basis?", 
      icon: <ShieldCheck size={32} /> 
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

      // 1. Header Unveil
      tl.fromTo('.diag-badge',
        { y: -30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      )
      .fromTo('.diag-main-title',
        { y: 50, opacity: 0, rotationX: 45, transformPerspective: 1000 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out" },
        "-=0.7"
      )
      .fromTo('.diag-description',
        { y: 30, opacity: 0, filter: "blur(5px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      // 2. Ambience expansion
      .fromTo('.diag-bg-elements div',
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, stagger: 0.3, ease: "power2.out" },
        "-=1.5"
      )
      // 3. Main Assessment Card Drop-in
      .fromTo('.diag-luxury-container',
        { y: 80, opacity: 0, scale: 0.95, rotationX: -10, transformPerspective: 1000 },
        { y: 0, opacity: 1, scale: 1, rotationX: 0, duration: 1.2, ease: "power3.out" },
        "-=1.5"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleAnswer = (val) => {
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);
    if (step < questions.length) {
      setStep(step + 1);
    }
  };

  const score = answers.filter(a => a === true).length;
  const percentage = (score / questions.length) * 100;

  const getResult = () => {
    if (score <= 1) return { 
      title: "Fragile Growth Architecture", 
      desc: "Your system has critical leakage points. Scaling now would likely result in inefficient spend and lost revenue potential.",
      color: "#ff4d4d"
    };
    if (score <= 3) return { 
      title: "Scaling Revenue Engine", 
      desc: "Solid foundations are visible, but fragmented silos are preventing your business from achieving its true velocity.",
      color: "#c3a365"
    };
    return { 
      title: "Optimized High-Performance Asset", 
      desc: "Your systems are robust. The next step is leveraging predictive intelligence to dominate your market niche.",
      color: "#00f2fe"
    };
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <section className="diagnostic-section" id="diagnostic" ref={sectionRef}>
      <div className="container relative z-10">
        <div className="diag-header-top">
          <div className="diag-badge">
            <span className="diag-badge-dot"></span>
            Intelligence Audit
          </div>
          <div className="diag-header-flex">
            <h2 className="diag-main-title">Test Your Growth<br /><span>Infrastructure</span></h2>
            <p className="diag-description">
              Determine the maturity of your current revenue systems with our proprietary 
              30-second growth audit. Identify bottlenecks before they cost you market share.
            </p>
          </div>
        </div>

        <div className="diag-luxury-container">
          <div className="diag-card-inner glass-panel">
            <div className="diag-card-glow"></div>
            
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div 
                  key="start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="diag-state-content text-center"
                >
                  <div className="diag-icon-wrapper">
                    <Sparkles size={48} className="icon-pulse" />
                  </div>
                  <h3>Growth Readiness Audit</h3>
                  <p>Discover if your current infrastructure is built to scale or bound to fail.</p>
                  <button className="diag-action-btn primary" onClick={() => setStep(1)}>
                    Initialize Diagnostic <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}

              {step > 0 && step <= questions.length && (
                <motion.div 
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="diag-state-content"
                >
                  <div className="diag-step-info">
                    <span className="step-count">Step 0{step} / 0{questions.length}</span>
                    <span className="step-tag">{questions[step - 1].text}</span>
                  </div>
                  
                  <div className="diag-question-wrap">
                    <div className="diag-question-icon">
                      {questions[step - 1].icon}
                    </div>
                    <h3 className="diag-question-text">{questions[step - 1].question}</h3>
                  </div>

                  <div className="diag-progress-track">
                    <div 
                      className="diag-progress-fill" 
                      style={{ width: `${(step / questions.length) * 100}%` }}
                    ></div>
                  </div>

                  <div className="diag-btns-group">
                    <button className="diag-choice-btn positive" onClick={() => handleAnswer(true)}>
                      <CheckCircle2 size={20} /> Yes, Fully Integrated
                    </button>
                    <button className="diag-choice-btn negative" onClick={() => handleAnswer(false)}>
                      Partial / Not Yet
                    </button>
                  </div>
                </motion.div>
              )}

              {step > questions.length && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="diag-state-content text-center"
                >
                  <div className="diag-result-header">
                    <div className="diag-score-ring">
                      <svg viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" className="ring-bg" />
                        <circle 
                          cx="50" cy="50" r="45" 
                          className="ring-fill"
                          style={{ 
                            strokeDasharray: `${2 * Math.PI * 45}`,
                            strokeDashoffset: `${2 * Math.PI * 45 * (1 - percentage/100)}`,
                            stroke: getResult().color
                          }}
                        />
                      </svg>
                      <div className="score-value">
                        {percentage}<span>%</span>
                        <small>Maturity</small>
                      </div>
                    </div>
                    <div className="diag-result-titles">
                      <span className="audit-label">Audit Complete</span>
                      <h3 style={{ color: getResult().color }}>{getResult().title}</h3>
                    </div>
                  </div>

                  <p className="result-description">{getResult().desc}</p>

                  <div className="diag-btns-group central">
                    <button 
                      className="diag-action-btn primary"
                      onClick={() => {
                        navigate('/contact');
                      }}
                    >
                      Scale Your Systems <ArrowRight size={18} />
                    </button>
                    <button className="diag-action-btn secondary" onClick={reset}>
                      <RotateCcw size={18} /> Re-take Audit
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="diag-bg-elements">
        <div className="diag-glow-top"></div>
        <div className="diag-glow-bottom"></div>
      </div>
    </section>
  );
}
