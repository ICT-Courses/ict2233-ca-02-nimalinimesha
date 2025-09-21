// src/components/ProjectCard.jsx

import React from 'react';


const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} className="project-image" />
      <div className="project-details">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-github">
              GitHub Repo
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-demo">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;