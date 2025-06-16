import './AboutSidebar.css';

const StudentsSidebar = () => (
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
  </div>
);

export default StudentsSidebar;
