import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './BookingPage.css';

const BookingPage = () => {
  const [contentRef, contentVisible] = useScrollAnimation();
  const [bookingUrl] = useState('https://bookyourslotatvriddhi.setmore.com/');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleBooking = () => {
    // Redirect to external booking website
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="booking-page">
      <div className="booking-background">
        <div className="booking-overlay"></div>
      </div>

      <div className="container">
        <div 
          ref={contentRef}
          className={`booking-content scale-in ${contentVisible ? 'visible' : ''}`}
        >
          <div className="booking-header">
            <h1>Book Your Session</h1>
            <p>Take the first step towards healing and growth</p>
          </div>

          <div className="booking-info">
            <div className="info-card">
              <div className="info-icon">📅</div>
              <h3>Flexible Scheduling</h3>
              <p>Choose a time that works best for you</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🔒</div>
              <h3>Confidential & Safe</h3>
              <p>Your privacy is our priority</p>
            </div>

            <div className="info-card">
              <div className="info-icon">💚</div>
              <h3>Compassionate Care</h3>
              <p>A supportive space for your journey</p>
            </div>
          </div>

          <div className="booking-types">
            <h2>Available Services</h2>
            <div className="service-types">
              <div className="service-type">
                <h4>Individual Therapy</h4>
                <p>One-on-one sessions</p>
                <span className="duration">60 minutes</span>
              </div>
              <div className="service-type">
                <h4>Couples Therapy</h4>
                <p>Relationship counseling</p>
                <span className="duration">75 minutes</span>
              </div>
              <div className="service-type">
                <h4>Group Sessions</h4>
                <p>Therapeutic group work</p>
                <span className="duration">90 minutes</span>
              </div>
              <div className="service-type">
                <h4>Workshops & Training</h4>
                <p>Professional development</p>
                <span className="duration">Custom duration</span>
              </div>
            </div>
          </div>

          <div className="booking-action">
            <button 
              onClick={handleBooking}
              className="btn btn-primary booking-btn"
            >
              Book Your Slot
            </button>
            <p className="booking-note">
              You will be redirected to our secure booking platform
            </p>
          </div>

          <div className="booking-contact">
            <p>Need help or have questions?</p>
            <div className="contact-options">
              <a href="mailto:vriddhi.psychologists@gmail.com" className="contact-link">
                📧 Email Us
              </a>
              <a href="tel:+919791199259" className="contact-link">
                📞 Contact via Phone
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;

