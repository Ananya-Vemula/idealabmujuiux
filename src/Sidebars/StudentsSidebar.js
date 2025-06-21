import React, { useState } from 'react';
import './AboutSidebar.css';

const StudentsSidebar = () => {
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
              <li><a href="#faculty">Faculty Members</a></li>
              <li><a href="#student">Student Contributors</a></li>
              <li><a href="#student-benefits">For Students</a></li>
              <li><a href="#faculty-benefits">For Faculty</a></li>
              <li><a href="#joint-efforts">Joint Efforts</a></li>
              <li><a href="#highlighted-teams">Highlighted Teams</a></li>
              <li><a href="#mentorship">Mentorship Network</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default StudentsSidebar;
