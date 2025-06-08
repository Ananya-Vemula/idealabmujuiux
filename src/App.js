import React, { useState, useEffect } from 'react';
import './App.css';

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
    const interval = setInterval(next, 3000); // auto next every 3s
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="page-container">
      <div className="container">
        {/* Side Navigation */}
        <div className="side-nav">
          <ul>
            <li>Section 1</li>
            <li>Section 2</li>
            <li>Section 3</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Top Navigation */}
          <div className="top-nav">
            <nav>
              <a href="#about">About Us</a>
              <a href="#facilities">Facilities</a>
              <a href="#projects">Projects & Research</a>
              <a href="#involved">Get Involved</a>
              <a href="#people">Student & Faculties</a>
            </nav>
          </div>

          {/* Image Carousel */}
          <div className="carousel">
            <button onClick={prev}>&lt;</button>
            <img src={images[index]} alt="Carousel" />
            <button onClick={next}>&gt;</button>
          </div>

          <h1>Vision for the IDEA Lab</h1>
          <p>The IDEA Lab will serve as a hub for enhancing science and engineering education, benefiting students, faculty, industry professionals, and the workforce by aligning with the latest industry trends and practices. It will focus on addressing the needs of rural communities and advancing skill-based learning for faculty, students, and schools in these critical areas. Create a self-sustaining innovation platform to empower the next generation students to transform ideas into impactful solutions. Leverage cutting-edge technologies and interdisciplinary scientific knowledge to evolve into a leading innovation hub.</p>
        
          <h1>Benefits to Students and Staff</h1>
          <h2>Students: UG/PG/Projects/Internships</h2>
          <p>The End-to-End Facilities for Skill Development offer students access to a well-equipped lab filled with extensive resources for prototype creation and refinement. This hands-on environment enhances critical thinking, problem-solving, and teamwork skills, essential for tackling modern challenges. By applying theoretical knowledge to real-world projects, students bridge the gap between academic learning and practical experience, gaining skills directly applicable to their future careers.</p>
          <p>The lab encourages cross-disciplinary collaboration and supports diverse teaching and research activities, broadening students' learning experiences and fostering both interpersonal and professional skills. This approach prepares them for successful careers in STEM fields and beyond.</p>
          <p>Students can progress from concept to completion effectively. Additionally, financial assistance for travel and event participation helps students compete, collaborate, and engage with a broader community, gaining diverse experiences and showcasing their skills on a larger stage.</p>
          
          {/* Text Section 1 */}
          <div className="text-block">
            <p>Trial Text box</p>
          </div>

        </div>
      </div>

      {/* Contact Us Footer */}
      <footer className="footer">
        <p>Contact Us | College: Manipal University Jaipur | Phone: 0141 399 9100</p>
      </footer>
    </div>
  );
};

export default App;
