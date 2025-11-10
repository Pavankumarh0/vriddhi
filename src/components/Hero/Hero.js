import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Hero.css';

const Hero = () => {
  const [ctaRef, ctaVisible] = useScrollAnimation();

  return (
    <section className="hero">
      <div className="hero-background-slider">
        <div className="hero-background-track">
          <div className="hero-bg-image" style={{ backgroundImage: 'url(/images/1723083120473.jpg)' }}></div>
          <div className="hero-bg-image" style={{ backgroundImage: 'url(/images/1750875326591.jpg)' }}></div>
          <div className="hero-bg-image" style={{ backgroundImage: 'url(/images/1753951644153.jpg)' }}></div>
          <div className="hero-bg-image" style={{ backgroundImage: 'url(/images/1753951644202.jpg)' }}></div>
          <div className="hero-bg-image" style={{ backgroundImage: 'url(/images/1753951644237.jpg)' }}></div>
          <div className="hero-bg-image" style={{ backgroundImage: 'url(/images/1753951644328.jpg)' }}></div>
          {/* Duplicate for seamless loop */}
          <div className="hero-bg-image" style={{ backgroundImage: 'url(/images/1723083120473.jpg)' }}></div>
          <div className="hero-bg-image" style={{ backgroundImage: 'url(/images/1750875326591.jpg)' }}></div>
          <div className="hero-bg-image" style={{ backgroundImage: 'url(/images/1753951644153.jpg)' }}></div>
          <div className="hero-bg-image" style={{ backgroundImage: 'url(/images/1753951644202.jpg)' }}></div>
          <div className="hero-bg-image" style={{ backgroundImage: 'url(/images/1753951644237.jpg)' }}></div>
          <div className="hero-bg-image" style={{ backgroundImage: 'url(/images/1753951644328.jpg)' }}></div>
        </div>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <div 
          className="hero-text-logo"
          style={{ opacity: 0, animation: 'fadeInDown 1s ease-out forwards' }}
        >
          <img src="/images/text-logo.png" alt="Vriddhi Psychological Services" />
        </div>

        <div 
          ref={ctaRef}
          className={`hero-welcome scale-in ${ctaVisible ? 'visible' : ''}`}
        >
          <h2>Welcome</h2>
          <p>
            We are glad you are here. Healing is a personal journey, and we are committed 
            to walking beside you with compassion, respect, and safety.
          </p>
          <p>
            Whether you are seeking individual therapy, group work, or professional training, 
            we will co-create a space where you can explore, heal, and grow at your own pace.
          </p>
          <a 
            href="https://bookyourslotatvriddhi.setmore.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary hero-btn"
          >
            Book Your Slot
          </a>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;

