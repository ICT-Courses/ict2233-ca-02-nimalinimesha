import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;