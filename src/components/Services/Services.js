import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaBrain, FaHeart, FaPalette } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [service1Ref, service1Visible] = useScrollAnimation();
  const [service2Ref, service2Visible] = useScrollAnimation();
  const [service3Ref, service3Visible] = useScrollAnimation();
  const [noteRef, noteVisible] = useScrollAnimation();

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Services
        </h2>

        <p className="section-subtitle">
          Healing is not one-size-fits-all. We offer a range of modalities, each designed to meet you where you are.
        </p>

        <div className="services-grid">
          <div 
            ref={service1Ref}
            className={`service-card fade-in ${service1Visible ? 'visible' : ''}`}
          >
            <div className="service-icon">
              <FaBrain />
            </div>
            <div className="service-number">1</div>
            <h3>Individual Psychotherapy</h3>
            <p>
              A safe, compassionate space to explore your inner self. Whether you are facing anxiety, depression, 
              grief, trauma, or life's many transitions, individual therapy offers a steady, supportive partnership 
              to guide your healing and insight.
            </p>
            <p className="service-detail">
              Together, we gently unravel the layers of your experience, both the seen and the unseen, conscious 
              and unconscious, helping you rediscover the resilience and strength that reside within.
            </p>
            <a 
              href="https://bookyourslotatvriddhi.setmore.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary service-btn"
            >
              Book Session
            </a>
          </div>

          <div 
            ref={service2Ref}
            className={`service-card fade-in ${service2Visible ? 'visible' : ''}`}
          >
            <div className="service-icon">
              <FaHeart />
            </div>
            <div className="service-number">2</div>
            <h3>Somatic Therapy</h3>
            <p>
              Sometimes words are not enough. Somatic therapy brings the wisdom of your body into the healing process. 
              By gently tuning into physical sensations, breath, and movement, we can uncover and release stress and 
              trauma stored in the nervous system.
            </p>
            <p className="service-detail">
              This work supports deeper integration, resilience, and a return to feeling more present in your life.
            </p>
            <a 
              href="https://bookyourslotatvriddhi.setmore.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary service-btn"
            >
              Book Session
            </a>
          </div>

          <div 
            ref={service3Ref}
            className={`service-card fade-in ${service3Visible ? 'visible' : ''}`}
          >
            <div className="service-icon">
              <FaPalette />
            </div>
            <div className="service-number">3</div>
            <h3>Expressive Arts Therapy</h3>
            <p>
              Expressive arts therapy invites creativity into your process through movement, visual art, sound, 
              or writing. This approach offers a powerful way to access emotions, gain insight, and reconnect 
              with parts of yourself that may have been silenced or forgotten.
            </p>
            <p className="service-detail">
              <strong>No artistic experience is needed</strong>, just a willingness to explore.
            </p>
            <a 
              href="https://bookyourslotatvriddhi.setmore.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary service-btn"
            >
              Book Session
            </a>
          </div>
        </div>

        <div 
          ref={noteRef}
          className={`services-note fade-in ${noteVisible ? 'visible' : ''}`}
        >
          <p>
            Whether you are looking for talk therapy, body-based support, or creative exploration, 
            we will work together to find the path that feels right for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

