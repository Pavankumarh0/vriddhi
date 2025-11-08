import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* About Section */}
            <div className="footer-section">
              <h3 className="footer-logo">VRIDDHI</h3>
              <p className="footer-tagline">Psychological Services</p>
              <p className="footer-description">
                Growth • Transformation • Healing
              </p>
              <p className="footer-about">
                Empowering individuals through compassionate therapy, training, and holistic healing approaches.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Home
                  </Link>
                </li>
                <li>
                  <a onClick={() => scrollToSection('about')}>About Vriddhi</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('founder')}>About Founder</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('services')}>Services</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('training')}>Training</a>
                </li>
                <li>
                  <a href="https://bookyourslotatvriddhi.setmore.com/" target="_blank" rel="noopener noreferrer">Book Your Slot</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Our Services</h4>
              <ul className="footer-links">
                <li>Individual Psychotherapy</li>
                <li>Somatic Therapy</li>
                <li>Expressive Arts Therapy</li>
                <li>Group Therapy</li>
                <li>Couples Therapy</li>
                <li>Corporate Training</li>
                <li>Workshops</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4>Get In Touch</h4>
              <div className="footer-contact">
                <a href="mailto:vriddhi.psychologists@gmail.com" className="contact-item">
                  <FaEnvelope />
                  <span>vriddhi.psychologists@gmail.com</span>
                </a>
                <a href="tel:+919791199259" className="contact-item">
                  <FaPhone />
                  <span>+91 97911 99259</span>
                </a>
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <span>Parsn Paradise, T. Nagar, Chennai - 600017</span>
                </div>
              </div>
              <div className="footer-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Vriddhi Psychological Services. All rights reserved.</p>
            <p className="footer-quote">"As above, so below — interconnected in healing"</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

