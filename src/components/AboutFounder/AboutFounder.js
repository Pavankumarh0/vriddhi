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
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          About the Founder
        </h2>

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
              <div className="slider-dots">
                {founderImages.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
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
                <li>Transactional Analysis</li>
                <li>Expressive Arts Therapy</li>
                <li>Somatic Experiencing</li>
                <li>Neuro-Linguistic Programming (NLP)</li>
                <li>Other integrative mind-body approaches</li>
              </ul>
            </div>

            <div className="founder-quote">
              <blockquote>
                "Her work is rooted in the belief that healing the self heals generations — past, present, and future."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;

