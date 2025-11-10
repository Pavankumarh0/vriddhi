import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Achievements.css';

const Achievements = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [countersRef, countersVisible] = useScrollAnimation();
  const hasAnimatedRef = useRef(false);

  // Counter animation hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
      if (countersVisible && !hasAnimatedRef.current) {
        const increment = end / (duration / 16); // 60fps
        const timer = setInterval(() => {
          countRef.current += increment;
          if (countRef.current >= end) {
            setCount(end);
            clearInterval(timer);
            hasAnimatedRef.current = true;
          } else {
            setCount(Math.floor(countRef.current));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [countersVisible, end, duration]);

    return count;
  };

  const livesTouched = useCounter(5000, 2500);
  const counselingHours = useCounter(5000, 2500);
  const workshops = useCounter(100, 2000);
  const trainedProfessionals = useCounter(200, 2000);

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

