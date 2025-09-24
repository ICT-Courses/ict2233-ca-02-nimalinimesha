// src/components/ProjectCard.jsx

import React from "react";
// import ProjectPage.css or import from a dedicated css file for the card

const ProjectCard = ({ title, description, image, github, demo }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-card-link">
              GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="project-card-link">
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;