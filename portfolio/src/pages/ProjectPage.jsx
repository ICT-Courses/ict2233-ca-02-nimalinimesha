import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Project1 from "../assets/image.png";
import Project2 from "../assets/ferti.jpg";
import Project3 from "../assets/furnitur.png";
import './ProjectPage.css'; 

const projects = [
  {
    id: 1,
    title: "Book library",
    description: "Weather forecasting Desktop app using OpenWeather API and C#.",
    image: Project1,
    github: "https://github.com/ICT-Courses/ict2233-ca-01-nimalinimesha",
    demo: "",
  },
  {
    id: 2,
    title: "fertilizer magagement system",
    description: "A simple and stylish coffee shop menu website built with React+js",
    image: Project2,
    github: "https://github.com/ICT-Courses/application-development-ca1-nimalinimesha",
    demo: "",
  },
  {
    id: 3,
    title: "Furniture Hub Website",
    description: "An e-commerce style furniture website showcasing modern designs.",
    image: Project3,
    github: "https://github.com/HasiniPrabodika/Furniture-Hub",
    demo: "",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section className="projects-section">
      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>

      <motion.div
        className="projects-grid-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              github={project.github}
              demo={project.demo}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};


export default Projects;