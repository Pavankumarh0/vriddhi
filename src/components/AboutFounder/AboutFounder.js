import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './AboutFounder.css';

const AboutFounder = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [qualRef, qualVisible] = useScrollAnimation();
  const [expertiseRef, expertiseVisible] = useScrollAnimation();
  const [trainingRef, trainingVisible] = useScrollAnimation();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const founderImages = [
    '/images/founder.jpg',
    '/images/859D80D3-617B-4594-AABA-CC0A7E0A6D2D.JPG'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === founderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [founderImages.length]);

  return (
    <section id="founder" className="about-founder section">
      <div className="container">
        <div 
          ref={titleRef}
          className={`founder-title-wrapper fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title founder-title-text">About Founder</h2>
          <div className="founder-title-section">
            <img src="/images/vriddhi-logo.png" alt="Vriddhi Logo" className="founder-title-logo" />
            <img src="/images/text-logo.png" alt="Vriddhi Psychological Services" className="founder-title-text-logo" />
          </div>
        </div>

        <div className="founder-content">
          <div 
            ref={imageRef}
            className={`founder-image-container scale-in ${imageVisible ? 'visible' : ''}`}
          >
            <div className="founder-image-slider">
              {founderImages.map((image, index) => (
                <div
                  key={index}
                  className={`founder-image ${index === currentImageIndex ? 'active' : ''}`}
                >
                  <img src={image} alt={`Sangeetha Dilipkumar ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="founder-name-card">
              <h3>Sangeetha Dilipkumar</h3>
              <p>Psychotherapist • Trainer • Founder</p>
              <p className="location">Vriddhi Psychological Services, Chennai</p>
            </div>
          </div>

          <div className="founder-details">
            <div 
              ref={contentRef}
              className={`founder-intro fade-in-right ${contentVisible ? 'visible' : ''}`}
            >
              <p className="founder-highlight">
                With <strong>10+ years of experience</strong> and <strong>5,000+ hours</strong> of clinical practice, 
                Sangeetha offers an integrative, trauma-informed, and deeply human approach to therapy.
              </p>
            </div>

            <div 
              ref={qualRef}
              className={`founder-section fade-in ${qualVisible ? 'visible' : ''}`}
            >
              <h4>Qualifications & Experience</h4>
              <ul>
                <li>Master's in Counselling Psychology – Madras School of Social Work</li>
                <li>Bachelor's in Psychology – Women's Christian College</li>
                <li>Qualified UGC-NET (Psychology)</li>
                <li>Former Assistant Professor & HOD (UG & PG levels)</li>
              </ul>
            </div>

            <div 
              ref={expertiseRef}
              className={`founder-section fade-in ${expertiseVisible ? 'visible' : ''}`}
            >
              <h4>Areas of Expertise</h4>
              <div className="expertise-grid">
                <span className="expertise-tag">Couples Therapy</span>
                <span className="expertise-tag">Trauma & Inner Child Work</span>
                <span className="expertise-tag">Addictions</span>
                <span className="expertise-tag">Relational Patterns</span>
                <span className="expertise-tag">Systemic Healing</span>
                <span className="expertise-tag">Transgenerational Therapy</span>
                <span className="expertise-tag">Identity-based Healing</span>
              </div>
            </div>

            <div 
              ref={trainingRef}
              className={`founder-section fade-in ${trainingVisible ? 'visible' : ''}`}
            >
              <h4>Therapeutic Training</h4>
              <ul>
                <li>UNESCO certified Expressive arts therapist (Member of International Dance Council - Registration number: 41454)</li>
                <li>Certified Somatic experiencing professional training Intermediate Level 2 from Somatic experiencing International</li>
                <li>Diploma in Transactional Analysis from SAATA (South Asian Association for Transactional Analysts)</li>
                <li>Diploma in Theatre Arts for Holistic Development from Ramana Sunritya Aalaya (RASA) (Affiliated to Ramakrishna Mission Vivekananda University, Coimbatore)</li>
                <li>Certified Neuro linguistic practitioner from International Institute of excellence, Canada</li>
                <li>Certified Trainer in Design the thinking from school of Design thinking, FinTech Design centre, Chennai</li>
              </ul>
            </div>

            <div className="founder-quote">
              <blockquote>
                "Her work is rooted in the belief that healing the self creates a ripple effect within the greater system of being, touching generations past, present, and future."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;

