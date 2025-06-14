import './AboutSidebar.css';
const AboutSidebar = () => (
  <div className="side-nav">
    <div className="logo-container">
      <img
        src="/images/AICTE Idea Lab logo.png"
        alt="AICTE IDEA Lab Logo"
        className="sidebar-logo idea-logo"
      />
      <img
        src="\images\MUJLogo.png"
        alt="MUJ Logo"
        className="sidebar-logo muj-logo"
      />
    </div>

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
  </div>
);

export default AboutSidebar;
