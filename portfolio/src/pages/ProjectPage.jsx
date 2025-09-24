import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Project1 from "../assets/image.png";
import Project2 from "../assets/ferti.jpg";
import Project3 from "../assets/furnitur.png";
import Project4 from "../assets/port.png";
import './ProjectPage.css'; 

const projects = [
  {
    id: 1,
    title: "Book library",
    description: "This is a  book library management system built with React and Node.js..",
    image: Project1,
    github: "https://github.com/ICT-Courses/ict2233-ca-01-nimalinimesha",
    demo: "",
  },
  {
    id: 2,
    title: "fertilizer magagement system",
    description: "This is a C# application using MySQL Workbench for a fertilizer management system. It efficiently tracks inventory and sales data.",
    image: Project2,
    github: "https://github.com/ICT-Courses/application-development-ca1-nimalinimesha",
    demo: "",
  },
  {
    id: 3,
    title: "Furniture Hub Website",
    description: "This e-commerce website is built with HTML, CSS, and JavaScript, with MongoDB for data storage. It allows users to browse and purchase furniture.",
    image: Project3,
    github: "https://github.com/HasiniPrabodika/Furniture-Hub",
    demo: "",
  },
  {
    id: 4,
    title: "Portfolio website",
    description: "This is a professional portfolio website built with React and Vite for a fast development experience. It features a modern, responsive design styled with plain CSS, showcasing my projects and skills..",
    image: Project4,
    github: "https://github.com/ICT-Courses/ict2233-ca-02-nimalinimesha",
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