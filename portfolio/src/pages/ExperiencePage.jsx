
import React from 'react';



const ExperiencePage = () => {
  return (
    <div className="experience-page">
      <header className="experience-header">
        <h1>My Professional Experience</h1>
        <p>A detailed look at my career journey and responsibilities.</p>
      </header>

      <section className="experience-section">
        <div className="experience-item">
          <h3>Web Developer</h3>
          <h4>ABC Solutions | 2023 - Present</h4>
          <ul>
            <li>Developed and maintained a company website using React and Node.js.</li>
            <li>Collaborated with a team of developers to implement new features and improve performance.</li>
            <li>Utilized Git for version control and followed agile development methodologies.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Junior Front-End Intern</h3>
          <h4>XYZ Agency | 2022 - 2023</h4>
          <ul>
            <li>Assisted in building responsive user interfaces with HTML, CSS, and JavaScript.</li>
            <li>Gained hands-on experience with component-based architecture in React.</li>
            <li>Participated in code reviews and learned best practices for writing clean code.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;