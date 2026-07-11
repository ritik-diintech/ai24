import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ProblemSection from '../components/ProblemSection';
import Ai24Solution from '../components/Ai24Solution';
import GrowthOS from '../components/GrowthOS';
import GrowthArchitecture from '../components/GrowthArchitecture';
import HowItWorks from '../components/HowItWorks';
import Capabilities from '../components/Capabilities';
import TechnologyEcosystem from '../components/TechnologyEcosystem';
import Industries from '../components/Industries';
import CaseStudies from '../components/CaseStudies';
import Diagnostic from '../components/Diagnostic';
import WhyAi24 from '../components/WhyAi24';
import BuiltForScale from '../components/BuiltForScale';
import TalentArchitecture from '../components/TalentArchitecture';
import Ai24Labs from '../components/Ai24Labs';
import FounderVision from '../components/FounderVision';
import Insights from '../components/Insights';
import FinalCTA from '../components/FinalCTA';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Setup GSAP reveal animations for all sections
    const reveals = document.querySelectorAll('.gsap-reveal');
    reveals.forEach((element) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 50 }, 
        {
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
          opacity: 1, 
          y: 0, 
          duration: 1.2,
          ease: "power3.out"
        }
      );
    });
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <Ai24Solution />
      <GrowthOS />
      <GrowthArchitecture />
      <HowItWorks />
      <Capabilities />
      <TechnologyEcosystem />
      <Industries />
      <CaseStudies />
      <Diagnostic />
      <WhyAi24 />
      <BuiltForScale />
      <TalentArchitecture />
      <Ai24Labs />
      <FounderVision />
      <Insights />
      <FinalCTA />
    </div>
  );
}
