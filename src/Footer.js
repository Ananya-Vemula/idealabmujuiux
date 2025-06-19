import React, { useState } from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleBack = () => {
    setSelectedOption(null);
  };

  const closeModal = () => {
    setSelectedOption(null);
    setShowModal(false);
  };

  return (
    <>
      {/* ✅ Main Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            {!selectedOption ? (
              <>
                <h3>Submit a Request</h3>
                <p>Select an option:</p>
                <div className="option-buttons">
                  <button onClick={() => setSelectedOption('upload')}>Upload a Picture</button>
                  <button onClick={() => setSelectedOption('login')}>Login to Make Changes</button>
                  <button onClick={() => setSelectedOption('paragraph')}>Changes in Paragraph</button>
                  <button onClick={() => setSelectedOption('query')}>Ask a Query</button>
                </div>
                <div className="modal-buttons">
                  <button onClick={closeModal}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <h3>{{
                  upload: 'Upload a Picture',
                  login: 'Login to Make Changes',
                  paragraph: 'Changes in Paragraph',
                  query: 'Ask a Query'
                }[selectedOption]}</h3>

                <form>
                  {selectedOption === 'upload' && (
                    <>
                      <label>
                        Upload Image:
                        <input type="file" accept="image/*" />
                      </label>
                    </>
                  )}

                  {selectedOption === 'login' && (
                    <>
                      <label>
                        MUJ Email:
                        <input type="email" placeholder="you@jaipur.manipal.edu" />
                      </label>
                    </>
                  )}

                  {selectedOption === 'paragraph' && (
                    <>
                      <label>
                        Paragraph Change Description:
                        <textarea placeholder="What would you like to change?" />
                      </label>
                    </>
                  )}

                  {selectedOption === 'query' && (
                    <>
                      <label>
                        Your Query:
                        <textarea placeholder="Ask us anything..." />
                      </label>
                    </>
                  )}

                  <div className="modal-buttons">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleBack}>Back</button>
                    <button type="button" onClick={closeModal}>Cancel</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* ✅ Footer */}
      <footer className="footer-container">
        <div className="footer-left">
          <p><strong>Contact Us</strong></p>
          <br />
          <p>Manipal University Jaipur</p>
          <p>Phone: 0141 399 9100</p>
          <p>Jaipur-Ajmer Express Highway, Dehmi Kalan, </p>
          <p>Near GVK Toll Plaza, Jaipur, Rajasthan 303007</p>
          <p>Email: info@jaipur.manipal.edu</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/ManipalUniversityJaipur" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/manipaluniversityjaipur/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/school/manipal-university-jaipur/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://twitter.com/jaipurmanipal" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-right">
          <p><strong>Quick Links</strong></p>
          <br />
          <Link to="/about">About Us</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/students">Students & Faculties</Link>
          <a href="#projects">Projects & Research</a>
          <a href="#involved">Get Involved</a>
          <button className="request-button" onClick={() => setShowModal(true)}>
            Submit a Request
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
