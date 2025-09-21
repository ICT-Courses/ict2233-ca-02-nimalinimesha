import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Me</h1>
        <p className="subtitle">Here’s a little more about my journey and skills.</p>
      </header>

      <section className="about-section">
        <h2>My Background</h2>
        <p>
          I am a passionate web application developer with a strong foundation in modern web technologies. I started my journey in web development... (Replace this with your personal story. Talk about what inspired you to get into this field.)
        </p>
      </section>

      <section className="about-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Your Degree Name</h3>
          <p>University/College Name | 2020 - 2023</p>
          <p>
            (Optional: Add a brief description of your studies, such as key courses or special projects.)
          </p>
        </div>
        {/* You can add more education items here if needed */}
      </section>

      <section className="about-section skills-section">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skills-list">
            <h3>Technical Skills</h3>
            <ul>
              <li>JavaScript, React.js, Node.js</li>
              <li>HTML5, Modern CSS (Flexbox, Grid)</li>
              <li>Version Control (Git, GitHub)</li>
              <li>API Integration (REST, GraphQL)</li>
              <li>Databases (MongoDB, SQL)</li>
            </ul>
          </div>
          <div className="skills-list">
            <h3>Soft Skills</h3>
            <ul>
              <li>Problem-Solving</li>
              <li>Team Collaboration</li>
              <li>Effective Communication</li>
              <li>Time Management</li>
              <li>Adaptability</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;