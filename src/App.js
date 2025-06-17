import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';

import './App.css';

import AboutUsPage from './AboutUsPage';
import StudentsAndFacultiesPage from './StudentsAndFacultiesPage';
import FacilitiesPage from './FacilitiesPage';

import AboutSidebar from './Sidebars/AboutSidebar';
import FacilitiesSidebar from './Sidebars/FacilitiesSidebar';
import StudentsSidebar from './Sidebars/StudentsSidebar';

const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
];

const App = () => {
  const location = useLocation();

  const [index, setIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(true);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderSidebar = () => {
    if (location.pathname.startsWith('/about')) return <AboutSidebar />;
    if (location.pathname.startsWith('/facilities')) return <FacilitiesSidebar />;
    if (location.pathname.startsWith('/students')) return <StudentsSidebar />;
    return null;
  };

  return (
    <div className="page-container">
      {/* Sidebar */}
      {renderSidebar()}

      {/* Top Navbar */}
      <div className="top-nav">
        <nav>
          <NavLink to="/about" className="nav-link">About Us</NavLink>
          <NavLink to="/facilities" className="nav-link">Facilities</NavLink>
          <a href="#projects" className="nav-link">Projects & Research</a>
          <a href="#involved" className="nav-link">Get Involved</a>
          <NavLink to="/students" className="nav-link">Student & Faculties</NavLink>
        </nav>
      </div>

      {/* Alert Banner */}
      {showAlert && (
      <div className="alert-banner">
        <div className="marquee">
          <span>🚨 Scheduled Maintenance at 10 PM tonight. Save your work in advance! 🚨 Scheduled Maintenance at 10 PM tonight. Save your work in advance! 🚨</span>
        </div>
        <button onClick={() => setShowAlert(false)} className="close-btn">&times;</button>
      </div>
    )}


      {/* Main Content */}
      <div className={`main-content ${showAlert ? 'with-alert' : ''}`}>
        
        <div className="carousel">
          <button onClick={prev}>&lt;</button>
          <img src={images[index]} alt="Carousel" />
          <button onClick={next}>&gt;</button>
        </div>

        <Routes>
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/students" element={<StudentsAndFacultiesPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/" element={
            <>
              <h1>Vision for the IDEA Lab</h1>
              <p>
                The IDEA Lab will serve as a hub for enhancing science and engineering
                education, benefiting students, faculty, industry professionals...
              </p>
              <h1>Benefits to Students and Staff</h1>
              <h2>Students: UG/PG/Projects/Internships</h2>
              <p>
                The End-to-End Facilities for Skill Development offer students access to
                a well-equipped lab...
              </p>
            </>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default App;
