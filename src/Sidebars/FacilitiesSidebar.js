import React, { useState } from 'react';
import './AboutSidebar.css'; 

const FacilitiesSidebar = () => {
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
              <li><a href="#facilities">Overview</a></li>
              <li><a href="#infrastructure">IDEA Lab Infrastructure</a></li>
              <li><a href="#resources">Available Resources</a></li>
              <li><a href="#experimental-capabilities">Experimental Capabilities</a></li>
              <li><a href="#spaces">Multi-Purpose Spaces</a></li>
              <li><a href="#labs-equipment">Labs & Equipment</a></li>
              <li><a href="#tools-software">Technological Tools & Software</a></li>
              <li><a href="#innovation-spaces">Collaborative Innovation Spaces</a></li>
              <li><a href="#access-guidelines">Access & Usage Guidelines</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default FacilitiesSidebar;
