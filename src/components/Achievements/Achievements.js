import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Achievements.css';

const Achievements = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [countersRef, countersVisible] = useScrollAnimation();
  
  const [livesTouched, setLivesTouched] = useState(0);
  const [counselingHours, setCounselingHours] = useState(0);
  const [workshops, setWorkshops] = useState(0);
  const [trainedProfessionals, setTrainedProfessionals] = useState(0);
  
  const hasAnimatedRef = useRef(false);

  // Animate all counters when they become visible
  useEffect(() => {
    if (!countersVisible || hasAnimatedRef.current) return;
    
    hasAnimatedRef.current = true;

    const animateCounter = (setter, end, duration) => {
      let current = 0;
      const increment = end / (duration / 16); // 60fps
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 16);
      return timer;
    };

    const timer1 = animateCounter(setLivesTouched, 5000, 2500);
    const timer2 = animateCounter(setCounselingHours, 5000, 2500);
    const timer3 = animateCounter(setWorkshops, 100, 2000);
    const timer4 = animateCounter(setTrainedProfessionals, 200, 2000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
    };
  }, [countersVisible]);

  return (
    <section className="achievements section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Our Impact
        </h2>

        <div 
          ref={countersRef}
          className={`achievements-grid fade-in ${countersVisible ? 'visible' : ''}`}
        >
          <div className="achievement-card">
            <div className="achievement-number">{livesTouched.toLocaleString()}+</div>
            <div className="achievement-label">Lives Touched</div>
          </div>

          <div className="achievement-card">
            <div className="achievement-number">{counselingHours.toLocaleString()}+</div>
            <div className="achievement-label">Hours of Counseling</div>
          </div>

          <div className="achievement-card">
            <div className="achievement-number">{workshops.toLocaleString()}+</div>
            <div className="achievement-label">Workshops Conducted</div>
          </div>

          <div className="achievement-card">
            <div className="achievement-number">{trainedProfessionals.toLocaleString()}+</div>
            <div className="achievement-label">Professionals Trained</div>
          </div>
        </div>

        <div className="achievements-quote">
          <p>"Growing together, healing together, transforming together"</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

