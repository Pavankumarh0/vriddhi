import React, { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Gallery.css';

const Gallery = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  // Gallery images from Vriddhi workshops and training sessions
  const images = [
    { id: 1, src: '/images/1723083120473.jpg', alt: 'Workshop group photo with certificates' },
    { id: 2, src: '/images/1750875326591.jpg', alt: 'Training participants with learning materials' },
    { id: 3, src: '/images/1753951644153.jpg', alt: 'Sangeetha presenting at workshop' },
    { id: 4, src: '/images/1753951644202.jpg', alt: 'Interactive training session' },
    { id: 5, src: '/images/1753951644237.jpg', alt: 'Cozy therapy consultation room' },
    { id: 6, src: '/images/1753951644269.jpg', alt: 'Expressive arts workshop materials' },
    { id: 7, src: '/images/1753951644328.jpg', alt: 'Group therapy session in progress' },
    { id: 8, src: '/images/1753951644359.jpg', alt: 'Workshop hall setup' },
    { id: 9, src: '/images/1753951644417.jpg', alt: 'Community circle therapy session' },
    { id: 10, src: '/images/Copy of WhatsApp Image 2025-07-31 at 2.36.58 PM (6).jpeg', alt: 'Founder Sangeetha Dilipkumar' },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  // Handle manual scrolling
  const handleScroll = () => {
    setIsUserScrolling(true);
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Resume auto-scroll after user stops scrolling for 3 seconds
    scrollTimeoutRef.current = setTimeout(() => {
      setIsUserScrolling(false);
    }, 3000);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPosition = scrollContainer.scrollLeft;
    const scrollSpeed = 0.8; // Slightly faster for smooth 360° loop

    const scroll = () => {
      if (!isPaused && !isUserScrolling) {
        scrollPosition += scrollSpeed;
        
        // 360-degree continuous loop: Reset when halfway through (since we duplicated images)
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollPosition >= maxScroll) {
          // Seamless loop back to start
          scrollPosition = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = scrollPosition;
        }
      } else if (!isUserScrolling) {
        // Update scroll position when user pauses
        scrollPosition = scrollContainer.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isPaused, isUserScrolling]);

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          📸 Our Journey
        </h2>
        <p className="section-subtitle">
          Moments of healing, growth, and transformation
        </p>
      </div>

      <div 
        className="gallery-scroll-container"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onScroll={handleScroll}
        onTouchStart={() => setIsUserScrolling(true)}
        onTouchEnd={() => {
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          scrollTimeoutRef.current = setTimeout(() => {
            setIsUserScrolling(false);
          }, 3000);
        }}
      >
        <div className="gallery-track">
          {duplicatedImages.map((image, index) => (
            <div key={`${image.id}-${index}`} className="gallery-item">
              <div className="gallery-image-wrapper">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/556B2F/D4AF37?text=Vriddhi+Psychological+Services';
                  }}
                />
                <div className="gallery-overlay">
                  <p>{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-note">
        <p>Hover to pause • Click and drag to scroll • Auto-scrolls after 3 seconds of inactivity</p>
      </div>
    </section>
  );
};

export default Gallery;

