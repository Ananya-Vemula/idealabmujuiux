import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import AboutUsPage from './AboutUsPage';
import StudentsAndFacultiesPage from './StudentsAndFacultiesPage';
import FacilitiesPage from './FacilitiesPage';
import AboutSidebar from './Sidebars/AboutSidebar';

const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
];


const App = () => {
  const location = useLocation();

    const renderSidebar = () => {
    if (location.pathname.startsWith('/about')) {
      return <AboutSidebar />;
    // } else if (location.pathname.startsWith('/facilities')) {
    //   return <FacilitiesSidebar />;
    } else {
      return null; // or a default sidebar
    }

  };

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="page-container">
      {/* Sidebar is fixed */}
      {renderSidebar()}

      {/* Top Navbar is fixed */}
      <div className="top-nav">
        <nav>
          <Link to="/about">About Us</Link>
          <Link to="/facilities">Facilities</Link>
          <a href="#projects">Projects & Research</a>
          <a href="#involved">Get Involved</a>
          <Link to="/students">Student & Faculties</Link>
        </nav>
      </div>

      {/* Main scrollable content */}
      <div className="main-content">
        <div className="carousel">
          <button onClick={prev}>&lt;</button>
          <img src={images[index]} alt="Carousel" />
          <button onClick={next}>&gt;</button>
        </div>

        <Routes>
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/students" element={<StudentsAndFacultiesPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route
            path="/"
            element={
              <>
                <h1>Vision for the IDEA Lab</h1>
                <p>
                  The IDEA Lab will serve as a hub for enhancing science and engineering
                  education, benefiting students, faculty, industry professionals, and the
                  workforce by aligning with the latest industry trends and practices...
                </p>
                <h1>Benefits to Students and Staff</h1>
                <h2>Students: UG/PG/Projects/Internships</h2>
                <p>
                  The End-to-End Facilities for Skill Development offer students access to
                  a well-equipped lab...
                </p>
              </>
            }
          />
        </Routes>
      </div>
    </div>
    
  );
};

export default App;
