import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaUserMd, FaChalkboardTeacher, FaBriefcase, FaTheaterMasks } from 'react-icons/fa';
import './Training.css';

const Training = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [card1Ref, card1Visible] = useScrollAnimation();
  const [card2Ref, card2Visible] = useScrollAnimation();
  const [card3Ref, card3Visible] = useScrollAnimation();
  const [card4Ref, card4Visible] = useScrollAnimation();

  return (
    <section id="training" className="training section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          🎓 Training & Workshops
        </h2>

        <p className="section-subtitle">
          Empowering professionals, educators, and communities with evidence-based therapeutic knowledge and practical tools.
        </p>

        <div className="training-grid">
          <div 
            ref={card1Ref}
            className={`training-card scale-in ${card1Visible ? 'visible' : ''}`}
          >
            <div className="training-icon">
              <FaUserMd />
            </div>
            <h3>Mental Health Professionals</h3>
            <p>
              We offer training programs designed specifically for psychotherapists, psychologists, and counselors 
              to help enhance therapeutic skills, introduce contemporary therapeutic approaches, and promote ethical practice.
            </p>
            <ul className="training-benefits">
              <li>Skill-building modules</li>
              <li>Supervision-based learning</li>
              <li>Ethically-rooted training</li>
              <li>Contemporary approaches</li>
            </ul>
            <a 
              href="https://bookyourslotatvriddhi.setmore.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Book Your Slot
            </a>
          </div>

          <div 
            ref={card2Ref}
            className={`training-card scale-in ${card2Visible ? 'visible' : ''}`}
          >
            <div className="training-icon">
              <FaChalkboardTeacher />
            </div>
            <h3>Educators</h3>
            <p>
              Our specialized workshops empower educators and school staff with practical tools to support students' 
              emotional wellbeing, manage classroom dynamics, and foster healthy, inclusive learning environments.
            </p>
            <ul className="training-benefits">
              <li>Developmental awareness</li>
              <li>Mental health in schools</li>
              <li>Classroom management</li>
              <li>Early intervention strategies</li>
            </ul>
            <a 
              href="https://bookyourslotatvriddhi.setmore.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Book Your Slot
            </a>
          </div>

          <div 
            ref={card3Ref}
            className={`training-card scale-in ${card3Visible ? 'visible' : ''}`}
          >
            <div className="training-icon">
              <FaBriefcase />
            </div>
            <h3>Corporate Wellbeing</h3>
            <p>
              Our corporate wellbeing trainings create co-creative spaces where employees and leaders come together 
              to explore stress management, emotional intelligence, resilience, work-life balance, and team communication.
            </p>
            <ul className="training-benefits">
              <li>Stress management</li>
              <li>Emotional intelligence</li>
              <li>Team building & communication</li>
              <li>Work-life balance</li>
            </ul>
            <a 
              href="https://bookyourslotatvriddhi.setmore.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Book Your Slot
            </a>
          </div>

          <div 
            ref={card4Ref}
            className={`training-card scale-in ${card4Visible ? 'visible' : ''}`}
          >
            <div className="training-icon">
              <FaTheaterMasks />
            </div>
            <h3>Mental Health & Wellness Workshops</h3>
            <p>
              Open to parents, teachers, homemakers, and the public. We lead workshops that use creative arts — 
              such as art, music, drama, movement, and storytelling — to encourage self-expression, healing, and 
              personal growth in a warm and conducive environment.
            </p>
            <ul className="training-benefits">
              <li>Expressive arts therapy</li>
              <li>Self-awareness circles</li>
              <li>Healing through creativity</li>
              <li>Community wellbeing</li>
            </ul>
            <a 
              href="https://bookyourslotatvriddhi.setmore.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Book Your Slot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;

