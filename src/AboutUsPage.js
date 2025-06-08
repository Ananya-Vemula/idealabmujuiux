import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-page">
      <div className="sidebar">
        <ul>
          <li>Section 1</li>
          <li>Section 2</li>
          <li>Section 3</li>
        </ul>
      </div>

      <div className="main-content">
        <nav className="top-nav">
          <ul>
            <li>About Us</li>
            <li>Facilities</li>
            <li>Projects & Research</li>
            <li>Get Involved</li>
            <li>Student & Faculties</li>
          </ul>
        </nav>

        <div className="carousel-placeholder">
          <p>Carousel</p>
          <div className="arrows">
            <span>&lt;</span>
            <span>&gt;</span>
          </div>
        </div>

        <section className="section-content">
          <h2>Vision for the IDEA Lab</h2>
          <p>
            The IDEA Lab will serve as a hub for enhancing science and engineering education,
            benefiting students, faculty, industry professionals, and the workforce by aligning
            with the latest industry trends and practices...
          </p>

          <h2>Benefits to Students and Staff</h2>
          <h3>Students: UG/PG/Projects/Internships</h3>
          <p>
            The End-to-End Facilities for Skill Development offer students access to a well-equipped
            lab filled with extensive resources for prototype creation and refinement...
          </p>

          <h3>Staff:</h3>
          <p>
            Extending classroom learning with practical applications bridges the gap between theory
            and practice by integrating hands-on experiences and real-world problem-solving...
          </p>

          <h2>Leadership</h2>
          <ul>
            <li>Head of Institute/Chief Mentor: Prof. (Dr.) Amit Soni</li>
            <li>Faculty Coordinator: Prof. (Dr.) Ashima Bagaria</li>
            <li>Faculty Co-Coordinator: Dr. Preeti Narooka</li>
          </ul>

          <h3>AICTE IDEA Lab Team</h3>
          <ul>
            <li>Dr. Ashima Bagaria</li>
            <li>Dr. Preeti Narooka</li>
            <li>Dr. Manoj K. Saini</li>
            <li>Dr. Saurabh Dewangan</li>
            <li>Dr. Anurag Joshi</li>
            <li>Dr. Himanshu Chaudhary</li>
            <li>Mr. Ashish Vijay</li>
            <li>Dr. Vinay Gupta</li>
            <li>Dr. Himanshu Priyadarshi</li>
          </ul>

          <h3>Student Team Members</h3>
          <ul>
            <li>Prisha</li>
            <li>Vemula</li>
            <li>Dominque</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
