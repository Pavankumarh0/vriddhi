import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Closing.css';

const Closing = () => {
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section className="closing section">
      <div className="container">
        <div 
          ref={contentRef}
          className={`closing-content scale-in ${contentVisible ? 'visible' : ''}`}
        >
          <div className="closing-icon">🕊️</div>
          <h2>Thank you for considering Vriddhi</h2>
          <p className="closing-text">
            Thank you for considering us as a companion on your healing journey. If something resonates 
            with you, or if you feel called to begin, deepen, or return to your healing work, we invite 
            you to reach out.
          </p>
          <div className="closing-quote">
            <p>Healing takes many forms.</p>
            <p>Together, we will find the one meant for you.</p>
          </div>
          <a 
            href="https://bookyourslotatvriddhi.setmore.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary closing-btn"
          >
            Book Your Slot
          </a>
        </div>
      </div>
    </section>
  );
};

export default Closing;

