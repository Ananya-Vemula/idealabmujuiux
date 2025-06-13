import React from 'react';

const StudentsAndFacultiesPage = () => {
  return (
    <>
      <div className="faculty-container">
      <h2>Faculty Members</h2>
      <div className="faculty-grid">
      <div className="faculty-member-card">
        <div className="circular-image">
          <img src="/images/AmitSoniProfile.jpg" alt="Prof. (Dr.) Amit Soni" />
        </div>
        <p className="faculty-name">Prof. (Dr.) Amit Soni</p>
      </div>

      <div className="faculty-member-card">
        <div className="circular-image">
          <img src="/images/AshimaBagariaProfile.jpg" alt="Prof. (Dr.) Ashima Bagaria" />
        </div>
        <p className="faculty-name">Prof. (Dr.) Ashima Bagaria</p>
      </div>

      <div className="faculty-member-card">
        <div className="circular-image">
          <img src="/images/PreetiNarookaProfile.jpg" alt="Dr. Preeti Narooka" />
        </div>
        <p className="faculty-name">Dr. Preeti Narooka</p>
      </div>

      <div className="faculty-member-card">
        <div className="circular-image">
          <img src="/images/ManojKSainiProfile.jpg" alt="Dr. Manoj K. Saini" />
        </div>
        <p className="faculty-name">Dr. Manoj K. Saini</p>
      </div>

      <div className="faculty-member-card">
        <div className="circular-image">
          <img src="/images/SaurabhDewanganProfile.jpg" alt="Dr. Saurabh Dewangan" />
        </div>
        <p className="faculty-name">Dr. Saurabh Dewangan</p>
      </div>

      <div className="faculty-member-card">
        <div className="circular-image">
          <img src="/images/AnurajJoshiProfile.jpg" alt="Dr. Anurag Joshi" />
        </div>
        <p className="faculty-name">Dr. Anurag Joshi</p>
      </div>

      <div className="faculty-member-card">
        <div className="circular-image">
          <img src="/images/HimanshuChaudharyProfile.jpg" alt="Dr. Himanshu Chaudhary" />
        </div>
        <p className="faculty-name">Dr. Himanshu Chaudhary</p>
      </div>

      <div className="faculty-member-card">
        <div className="circular-image">
          <img src="/images/AshishVijayProfile.jpg" alt="Mr. Ashish Vijay" />
        </div>
        <p className="faculty-name">Mr. Ashish Vijay</p>
      </div>

      <div className="faculty-member-card">
        <div className="circular-image">
          <img src="/images/VijayaGuptaProfile.jpg" alt="Dr. Vinay Gupta" />
        </div>
        <p className="faculty-name">Dr. Vinay Gupta</p>
      </div>

      <div className="faculty-member-card">
        <div className="circular-image">
          <img src="/images/HimanshuPriyadarshiniProfile.jpg" alt="Dr. Himanshu Priyadarshi" />
        </div>
        <p className="faculty-name">Dr. Himanshu Priyadarshi</p>
      </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Area of Expertise</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Prof. (Dr.) Amit Soni</td><td>Chief Mentor</td><td>Academic Leadership, Innovation</td><td><a href="https://jaipur.manipal.edu/fosta/faculty-details.php?url=273/" className="contact-link">Info</a></td></tr>
          <tr><td>Prof. (Dr.) Ashima Bagaria</td><td>Faculty Coordinator</td><td>Engineering Design, Prototyping</td><td><a href="https://jaipur.manipal.edu/fosta/associate-dean-ashima.php" className="contact-link">Info</a></td></tr>
          <tr><td>Dr. Preeti Narooka</td><td>Co-Coordinator</td><td>Electronics & Communication</td><td><a href="https://jaipur.manipal.edu/fosta/faculty-details.php?url=89/" className="contact-link">Info</a></td></tr>
          <tr><td>Dr. Manoj K. Saini</td><td>Team Member</td><td>IoT, Embedded Systems</td><td><a href="https://jaipur.manipal.edu/fosta/faculty-details.php?url=594/" className="contact-link">Info</a></td></tr>
          <tr><td>Dr. Saurabh Dewangan</td><td>Team Member</td><td>Mechanical Engineering</td><td><a href="mailto:saurabh.dewangan@jaipur.manipal.edu" className="contact-link">Contact</a></td></tr>
          <tr><td>Dr. Anurag Joshi</td><td>Team Member</td><td>Civil Engineering</td><td><a href="mailto:anurag.joshi@example.com" className="contact-link">Contact</a></td></tr>
          <tr><td>Dr. Himanshu Chaudhary</td><td>Team Member</td><td>Electrical Engineering</td><td><a href="mailto:himanshu.chaudhary@example.com" className="contact-link">Contact</a></td></tr>
          <tr><td>Mr. Ashish Vijay</td><td>Team Member</td><td>Design Thinking</td><td><a href="mailto:ashish.vijay@example.com" className="contact-link">Contact</a></td></tr>
          <tr><td>Dr. Vinay Gupta</td><td>Team Member</td><td>Robotics & Automation</td><td><a href="mailto:vinay.gupta@example.com" className="contact-link">Contact</a></td></tr>
          <tr><td>Dr. Himanshu Priyadarshi</td><td>Team Member</td><td>Computer Science</td><td><a href="mailto:himanshu.priyadarshi@example.com" className="contact-link">Contact</a></td></tr>
        </tbody>
      </table>
    </div>

      <h2>Student Contributors</h2>
      <br></br>
      <table style={{ width: '80%', margin: 'auto', borderCollapse: 'collapse' }} border="1">
        <thead>
          <tr><th>Name</th><th>Department</th><th>Contribution</th></tr>
        </thead>
        <tbody>
          <tr><td>Prisha</td><td>Computer Science</td><td>UI Development, Core Team Member</td></tr>
          <tr><td>Vemula</td><td>Mechanical Engineering</td><td>Fabrication & Hardware Integration</td></tr>
        </tbody>
      </table>
      <br></br>

      <h2>Mentorship Network</h2>
      <br></br>
      <table style={{ width: '80%', margin: 'auto', borderCollapse: 'collapse' }} border="1">
        <thead>
          <tr><th>Faculty Mentor</th><th>Students Guided</th><th>Project/Area</th></tr>
        </thead>
        <tbody>
          <tr><td>Dr. Ashima Bagaria</td><td>Prisha, Vemula</td><td>IDEA Lab Web Portal, 3D Design Workflow</td></tr>
          <tr><td>Dr. Manoj K. Saini</td><td>Vemula</td><td>IoT Device Prototyping</td></tr>
          <tr><td>Dr. Himanshu Chaudhary</td><td>All Student Members</td><td>Electronics Lab Operations</td></tr>
        </tbody>
      </table>
      <br></br>

      <h2>Achievements</h2>
      <ul>
        <li>Successfully established a cross-disciplinary IDEA Lab team.</li>
        <li>Student involvement in lab setup, development, and prototyping.</li>
        <li>Workshops and technical trainings conducted for 100+ students.</li>
        <li>Recognized by AICTE under the national IDEA Lab initiative.</li>
      </ul>
      <br></br>

      <h2>Testimonials</h2>
      <blockquote>
        “The IDEA Lab gave me the confidence and hands-on experience I never got in a traditional classroom.
        It’s not just a lab—it’s an innovation playground.”  
        <br />— <strong>Prisha</strong>, Student Member
      </blockquote>

      <blockquote>
        “It’s inspiring to see students take charge of their own projects. We are proud to mentor them
        on this journey of innovation.”  
        <br />— <strong>Dr. Ashima Bagaria</strong>, Faculty Coordinator
      </blockquote>

      <blockquote>
        “This lab has bridged the gap between academic learning and real-world application.
        We’re not just preparing students for exams—we’re preparing them for impact.”  
        <br />— <strong>Prof. (Dr.) Amit Soni</strong>, Chief Mentor
      </blockquote>
    </>
  );
};

export default StudentsAndFacultiesPage;
