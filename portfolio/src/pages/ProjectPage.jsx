
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';


const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/nimalinimesha/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch projects.');
        }
        const data = await response.json();
        
        const formattedProjects = data.slice(0, 3).map(repo => ({
          id: repo.id,
          name: repo.name.replace(/-/g, ' '), 
          description: repo.description || 'No description provided.',
          github: repo.html_url,
          demo: repo.homepage,
          
          image: `https://via.placeholder.com/400x250.png?text=${repo.name}`
        }));

        setProjects(formattedProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div className="loading">Loading projects...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <p>A showcase of my work and personal projects.</p>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;