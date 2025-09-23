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
         I’m Nimali Nimesha, a 2nd-year undergraduate student at the University of Sri Jayewardenepura, currently studying in the ICT Department. I'm deeply passionate about frontend development, graphic design, and especially UI/UX design.

From early on, I was fascinated by how design and functionality come together to create seamless digital experiences. This passion led me to explore web technologies and design principles that make interfaces both beautiful and user-friendly.

I’ve gained hands-on experience with tools and technologies like React, Node.js, MongoDB, MySQL, and C#, and I enjoy combining development with creative design thinking.

My ultimate goal is to become a professional UI/UX Designer, crafting digital experiences that are not only visually appealing but also intuitive and meaningful for users.

        </p>
      </section>

      <section className="about-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Science in Information and Communication Technology (BSc in ICT) </h3>
          <p>University of Sri Jayewardenepura | 2024 – Present </p>
          <p>
            Currently pursuing my undergraduate degree in ICT. Focused on key subjects such as Web Development, Programming, Database Management, and Human-Computer Interaction. Engaged in several academic projects related to frontend technologies and UI/UX design.

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
              <li>JavaScript, React.js, Node.js,c#,python</li>
              <li>HTML, Modern CSS (Flexbox, Grid)</li>
              <li>Version Control (Git, GitHub)</li>
              <li>Graphic Design</li>
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