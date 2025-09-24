
import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa'; 
import './Navbar.css';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">My Portfolio</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      {}
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;