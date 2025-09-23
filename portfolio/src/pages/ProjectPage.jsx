

import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard'; 
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const username = 'nimalinimesha';
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        
        if (!response.ok) {
          throw new Error('Could not fetch projects. Please check your username.');
        }

        const data = await response.json();
      
        const enrichedProjects = data.map(project => {
          
          let projectImage = null;
          let projectDemo = null;

          if (project.name === 'ICT-Courses-Project-1') {
            projectImage = '/images/project1-image.png';
            projectDemo = 'https://live-demo-1.com'; 
          } else if (project.name === 'application-development-ca1-nimalinimesha') {
            projectImage = '/images/project2-image.jpg';
            projectDemo = 'https://live-demo-2.com';
          }
         
          
          return {
            ...project,
            image: projectImage,
            demo: projectDemo
          };
        });

        // අදාළ projects පමණක් filter කරගනිමු (උදා: ICT-Courses)
        const ictProjects = enrichedProjects.filter(project => 
          project.name.startsWith('ICT-Courses') || project.name.startsWith('Furniture-Hub')
        );
        
        setProjects(ictProjects);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  if (loading) {
    return <div className="loading">Projects are loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="projects-page">
      <h1>My GitHub Projects</h1>
      <div className="projects-container">
        {projects.length > 0 ? (
          projects.map(project => (
           
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>No relevant projects found.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;