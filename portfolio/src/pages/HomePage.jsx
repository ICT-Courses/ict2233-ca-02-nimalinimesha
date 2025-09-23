
import React, { useState, useEffect } from 'react';
import './HomePage.css';
import myPhoto from '../assets/my.jpg'; 

const Typewriter = ({ text, onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100); 
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete(); 
    }
  }, [currentIndex, text, onComplete]);

  return <span>{currentText}</span>;
};

const HomePage = () => {
  const [showName, setShowName] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    
    setShowName(true);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Hello, I'm <br />
          {showName && (
            <Typewriter 
              text="Nimali" 
              onComplete={() => setShowTitle(true)}
            />
          )}
        </h1>
        <p className={`hero-tagline ${showTitle ? 'fade-in' : ''}`}>
          Undergraduate
        </p>
        <p className="hero-intro">
          A brief introduction about yourself and what you do. You can mention your passion for web development, your skills, and what kind of projects you enjoy working on.
        </p>
        <div className="hero-buttons">
          <a href="/projects" className="btn btn-primary">View My Work</a>
          <a href="/contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={myPhoto} alt="Your Professional Headshot" className="hero-image" />
      </div>
    </div>
  );
};

export default HomePage;