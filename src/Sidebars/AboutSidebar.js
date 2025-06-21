import React, { useState } from 'react';
import './AboutSidebar.css';

const AboutSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    
  };

  return (
    <>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className={`side-nav ${isOpen ? 'open' : 'collapsed'}`}>
        {isOpen && (
          <>
            

            <h2>Navigation</h2>
            <hr />
            <ul>
              <li><a href="#aboutus">About Us</a></li>
              <li><a href="#vision">Vision</a></li>
              <li><a href="#mission">Mission</a></li>
              <li><a href="#objectives">Objectives</a></li>
              <li><a href="#highlights">Key Highlights</a></li>
              <li><a href="#leadership-message">Leadership Message</a></li>
              <li><a href="#vision-idea-lab">Vision for the IDEA Lab</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#team">AICTE IDEA Lab Team</a></li>
              <li><a href="#students">Student Team</a></li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default AboutSidebar;
