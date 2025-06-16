import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>
        <strong>Contact Us</strong> | College: Manipal University Jaipur | Phone: 0141 399 9100
      </p>
      <div className="social-icons">
        <a href="https://www.facebook.com/ManipalUniversityJaipur" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/manipaluniversityjaipur/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/school/manipal-university-jaipur/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com/jaipurmanipal" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
