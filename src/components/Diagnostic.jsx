import React, { useState } from 'react';
import { Settings2, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import './Diagnostic.css';

export default function Diagnostic() {
  const [step, setStep] = useState(0); // 0: Start, 1-4: Questions, 5: Result
  const [answers, setAnswers] = useState([]);

  const questions = [
    { text: "Do you have a structured CRM pipeline?", key: "crm" },
    { text: "Can you track lead sources back to revenue?", key: "tracking" },
    { text: "Do you use AI automation for continuous nurturing?", key: "automation" },
    { text: "Do you accurately measure CAC and LTV?", key: "metrics" }
  ];

  const handleAnswer = (val) => {
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);
    if (step < questions.length) {
      setStep(step + 1);
    }
  };

  const getResult = () => {
    const score = answers.filter(a => a === true).length;
    if (score <= 1) return { title: "Starter System", desc: "Your growth infrastructure is fragmented. You need a unified system to scale predictably." };
    if (score <= 3) return { title: "Growth System", desc: "You have some pillars in place, but silos are holding you back from full efficiency." };
    return { title: "Advanced Revenue Engine", desc: "Excellent. Your system is robust, but there's always room for conversion intelligence optimization." };
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <section className="diagnostic-section section-padding gsap-reveal" id="diagnostic">
      <div className="container">
        <div className="diag-box glass-card">
          <div className="diag-content">
            <div className="pill"><Settings2 size={14} /> Interactive</div>
            <h2 className="title-gradient">Test Your Growth Infrastructure</h2>
            
            {step === 0 && (
              <div className="diag-start">
                <p className="large-text" style={{ marginBottom: '2rem' }}>
                  Take a 30-second audit to determine the maturity of your revenue systems.
                </p>
                <button className="btn-primary" onClick={() => setStep(1)}>
                  Start Diagnostic <ArrowRight size={18} />
                </button>
              </div>
            )}

            {step > 0 && step <= questions.length && (
              <div className="diag-question-container">
                <div className="diag-progress">
                  <div className="progress-bar" style={{ width: `${(step / questions.length) * 100}%` }}></div>
                </div>
                <h3 className="question-text">{questions[step - 1].text}</h3>
                <div className="diag-btns">
                  <button className="btn-primary" onClick={() => handleAnswer(true)}>Yes, Absolutely</button>
                  <button className="btn-secondary" onClick={() => handleAnswer(false)}>Not Yet / Partially</button>
                </div>
              </div>
            )}

            {step > questions.length && (
              <div className="diag-result-container">
                <div className="result-badge">Your Result</div>
                <h3 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{getResult().title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>{getResult().desc}</p>
                <div className="diag-btns">
                  <button className="btn-primary">Discuss Results <ArrowRight size={18} /></button>
                  <button className="btn-secondary" onClick={reset}><RotateCcw size={18} /> Re-take</button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
