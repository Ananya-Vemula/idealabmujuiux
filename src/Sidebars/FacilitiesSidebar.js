import './AboutSidebar.css';

const FacilitiesSidebar = () => (
  <div className="side-nav">
    <div className="logo-container">
      <img
        src="/images/AICTE Idea Lab logo.png"
        alt="AICTE IDEA Lab Logo"
        className="sidebar-logo idea-logo"
      />
      <img
        src="/images/MUJLogo.png"
        alt="MUJ Logo"
        className="sidebar-logo muj-logo"
      />
    </div>

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
  </div>
);

export default FacilitiesSidebar;
