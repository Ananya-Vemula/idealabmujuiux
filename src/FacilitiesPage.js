import React from 'react';
import FacilitiesSidebar from './Sidebars/FacilitiesSidebar';
import Footer from './Footer'; 


const FacilitiesPage = () => {
  return (
    <div className="page-container">
      <FacilitiesSidebar /> {}

      <div className="content-body">
        <section id="facilities">
          <h2>Facilities at the IDEA Lab</h2>
          <p>
            Our IDEA Lab at Manipal University Jaipur is designed to empower students and faculty with
            state-of-the-art tools, creative spaces, and technical support to turn innovative ideas into reality.
          </p>
        </section>

        <section id="labs-equipment">
          <h3>Labs & Equipment</h3>
          <p>
            The IDEA Lab is equipped with cutting-edge infrastructure to support rapid prototyping and hands-on experimentation.
          </p>
          <ul>
            <li><strong>Prototyping Lab:</strong> Equipped with 3D printers, laser cutters, CNC milling machines.</li>
            <li><strong>Electronics & IoT Lab:</strong> Includes Arduino, Raspberry Pi, sensors, breadboards, soldering kits.</li>
            <li><strong>Mechanical Fabrication Lab:</strong> Sheet metal tools, basic machining equipment.</li>
            <li><strong>Design Studio:</strong> Workstations with CAD/CAM software and brainstorming whiteboards.</li>
          </ul>
        </section>

        <section id="tools-software">
          <h3>Technological Tools & Software</h3>
          <p>To support innovation across disciplines, we provide licensed and open-source tools including:</p>
          <ul>
            <li><strong>CAD Tools:</strong> AutoCAD, SolidWorks, Fusion 360</li>
            <li><strong>Embedded Development:</strong> Arduino IDE, ESP-IDF, STM32Cube</li>
            <li><strong>Simulation Software:</strong> MATLAB, Simulink, ANSYS</li>
            <li><strong>3D Modeling & Rendering:</strong> Blender, Tinkercad, Cura</li>
          </ul>
        </section>

        <section id="innovation-spaces">
          <h3>Collaborative Innovation Spaces</h3>
          <ul>
            <li><strong>Mini Makerspace:</strong> An open-access area for rapid idea iteration and small builds.</li>
            <li><strong>Seminar & Demo Hall:</strong> For guest lectures, project demonstrations, and workshops.</li>
            <li><strong>Project Pods:</strong> Small group seating for team collaboration with power, whiteboards, and high-speed internet.</li>
          </ul>
        </section>

        <section id="access-guidelines">
          <h3>Access & Usage Guidelines</h3>
          <ul>
            <li>Lab access is open to all registered students and faculty.</li>
            <li>Prior booking is required for specialized equipment.</li>
            <li>A lab assistant or faculty must supervise the use of advanced tools.</li>
            <li>Induction sessions are mandatory before starting any project work.</li>
            <li>Use your institutional login to access the lab scheduling system.</li>
          </ul>
          <p><strong>Lab timings:</strong> Monday to Saturday – 9:00 AM to 6:00 PM</p>
        </section>

        <section id="gallery">
          <h3>Gallery</h3>
          <p>
            Showcase innovation in action! The IDEA Lab gallery includes:
          </p>
          <ul>
            <li>Project builds in progress</li>
            <li>Workshop snapshots</li>
            <li>Competition participation</li>
            <li>Equipment in use</li>
          </ul>
          <p><em>[Insert a carousel or grid of high-quality images here]</em></p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FacilitiesPage;
