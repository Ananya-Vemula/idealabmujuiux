import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import AboutUsPage from './AboutUsPage';
import StudentsAndFacultiesPage from './StudentsAndFacultiesPage';
import FacilitiesPage from './FacilitiesPage';


const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
];

const App = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="page-container">
      <div className="container">
        {/* Static Sidebar */}
        <div className="side-nav">
          <ul>
            <li>Section 1</li>
            <li>Section 2</li>
            <li>Section 3</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Static Top Navbar */}
          <div className="top-nav">
            <nav>
              <Link to="/about">About Us</Link>
              <Link to="/facilities">Facilities</Link>   
              <a href="#projects">Projects & Research</a>
              <a href="#involved">Get Involved</a>
              <Link to="/students">Student & Faculties</Link>
            </nav>
          </div>

          {/* Static Carousel */}
          <div className="carousel">
            <button onClick={prev}>&lt;</button>
            <img src={images[index]} alt="Carousel" />
            <button onClick={next}>&gt;</button>
          </div>

          {/* Dynamic Page Content only */}
          <div className="text-block">
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
      </div>

      {/* Static Footer */}
      <footer className="footer">
        <p>Contact Us | College: Manipal University Jaipur | Phone: 0141 399 9100</p>
      </footer>
    </div>
  );
};

export default App;
