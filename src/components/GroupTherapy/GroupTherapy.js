import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaUsers, FaHeart } from 'react-icons/fa';
import './GroupTherapy.css';

const GroupTherapy = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [card1Ref, card1Visible] = useScrollAnimation();
  const [card2Ref, card2Visible] = useScrollAnimation();

  return (
    <section className="group-therapy section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          👥 Group Therapy
        </h2>

        <div className="group-therapy-grid">
          <div 
            ref={card1Ref}
            className={`therapy-card fade-in-left ${card1Visible ? 'visible' : ''}`}
          >
            <div className="therapy-icon-wrapper">
              <FaUsers className="therapy-icon" />
            </div>
            <h3>Relational Group Work</h3>
            <p className="therapy-subtitle">Therapeutic group work</p>
            <div className="therapy-duration">90 minutes</div>
            <p>
              Relational group work offers a supportive space where individuals explore their interpersonal 
              patterns, deepen self-awareness, and build healthier connections with others. Through guided 
              group interactions, participants learn to communicate authentically, develop empathy, and foster 
              meaningful relationships.
            </p>
            <div className="therapy-highlight">
              <p>
                In this way, the group becomes a <strong>representation of the outer world</strong>, reflecting 
                the dynamics of relationships beyond the therapy room and offering a safe environment to practice 
                new ways of relating.
              </p>
            </div>
            <a 
              href="https://wa.me/917845974033" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary therapy-btn"
            >
              Book Session
            </a>
          </div>

          <div 
            ref={card2Ref}
            className={`therapy-card fade-in-right ${card2Visible ? 'visible' : ''}`}
          >
            <div className="therapy-icon-wrapper">
              <FaHeart className="therapy-icon" />
            </div>
            <h3>Couples Therapy</h3>
            <p className="therapy-subtitle">Relationship counseling</p>
            <div className="therapy-duration">90 minutes</div>
            <p>
              Couples therapy provides a safe and confidential environment for partners to address relationship 
              challenges, improve communication, and strengthen emotional bonds. Using evidence-based approaches, 
              we help couples navigate conflicts, deepen mutual understanding, and cultivate lasting intimacy.
            </p>
            <div className="therapy-highlight">
              <p>
                We help uncover and heal <strong>inner wounds</strong> that often replay within the relationship, 
                creating space for genuine connection and growth.
              </p>
            </div>
            <a 
              href="https://wa.me/917845974033" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary therapy-btn"
            >
              Book Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupTherapy;

