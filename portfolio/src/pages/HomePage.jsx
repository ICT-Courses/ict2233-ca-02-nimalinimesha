import React from 'react';

const HomePage = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hello, I'm <br />Your Name.</h1>
        <p className="hero-tagline">
          Your creative and compelling tagline here.
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
        <img src={"..\assets\myphoto.jpg"} alt="Your Professional Headshot" className="hero-image" />
      </div>
    </div>
  );
};

export default HomePage;