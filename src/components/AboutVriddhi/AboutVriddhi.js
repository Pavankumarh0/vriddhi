import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './AboutVriddhi.css';

const AboutVriddhi = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [content1Ref, content1Visible] = useScrollAnimation();
  const [content2Ref, content2Visible] = useScrollAnimation();
  const [content3Ref, content3Visible] = useScrollAnimation();

  return (
    <section id="about" className="about-vriddhi section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          🌿 About Vriddhi
        </h2>

        <div className="about-content">
          <div 
            ref={content1Ref}
            className={`about-card fade-in-left ${content1Visible ? 'visible' : ''}`}
          >
            <div className="card-icon">🌱</div>
            <p>
              <strong>Vriddhi</strong> is derived from the Sanskrit word meaning <em>growth and transformation</em>.
              Inspired by the symbolism of the <strong>Tree of Life</strong> — "as above, so below" — we honour 
              the interconnectedness of all beings.
            </p>
          </div>

          <div 
            ref={content2Ref}
            className={`about-card fade-in-right ${content2Visible ? 'visible' : ''}`}
          >
            <div className="card-icon">✍️</div>
            <p>
              Just as every human fingerprint is distinct, we believe every individual carries a unique life story — 
              one that can be <strong>rewritten and transformed</strong> at any time. Through healing, we move beyond 
              personal limitations, systemic patterns, and transgenerational beliefs, creating room for deep change 
              and liberation.
            </p>
          </div>

          <div 
            ref={content3Ref}
            className={`about-card fade-in-left ${content3Visible ? 'visible' : ''}`}
          >
            <div className="card-icon">🕊️</div>
            <p>
              At Vriddhi, we believe true freedom lies in <strong>self-work, awareness, and inner growth</strong>. 
              Our purpose is to hold a space where healing becomes a conscious, compassionate, and empowering journey. 
              Human liberation majorly lies in healing and growth through self-work and knowledge.
            </p>
          </div>
        </div>

        <div className="about-quote">
          <p>"As above, so below — the interconnectedness of all beings"</p>
        </div>
      </div>
    </section>
  );
};

export default AboutVriddhi;

