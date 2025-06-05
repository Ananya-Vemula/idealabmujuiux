import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

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

        {/* Auto-Scrolling Text */}
        <div className="scroll-text">
          <p>vis</p>
          <p>This text scrolls...</p>
          <p>More content line 1</p>
          <p>More content line 2</p>
        </div>
      </div>
    </div>
  );
};

export default App;
