import React from 'react';
import StudentsSidebar from './Sidebars/StudentsSidebar';
import Footer from './Footer'; 


const StudentsAndFacultiesPage = () => {
  return (
    <div className="about-page">
      <StudentsSidebar />{}

      <div className="faculty-container">
        <h2 id='faculty'>Faculty Members</h2>
        <div className="faculty-grid">
          {[
            { name: "Prof. (Dr.) Amit Soni", image: "/images/AmitSoniProfile.jpg" },
            { name: "Prof. (Dr.) Ashima Bagaria", image: "/images/AshimaBagariaProfile.jpg" },
            { name: "Dr. Preeti Narooka", image: "/images/PreetiNarookaProfile.jpg" },
            { name: "Dr. Manoj K. Saini", image: "/images/ManojKSainiProfile.jpg" },
            { name: "Dr. Saurabh Dewangan", image: "/images/SaurabhDewanganProfile.jpg" },
            { name: "Dr. Anurag Joshi", image: "/images/AnurajJoshiProfile.jpg" },
            { name: "Dr. Himanshu Chaudhary", image: "/images/HimanshuChaudharyProfile.jpg" },
            { name: "Mr. Ashish Vijay", image: "/images/AshishVijayProfile.jpg" },
            { name: "Dr. Vinay Gupta", image: "/images/VijayaGuptaProfile.jpg" },
            { name: "Dr. Himanshu Priyadarshi", image: "/images/HimanshuPriyadarshiniProfile.jpg" },
          ].map((faculty, index) => (
            <div className="faculty-member-card" key={index}>
              <div className="circular-image">
                <img src={faculty.image} alt={faculty.name} />
              </div>
              <p className="faculty-name">{faculty.name}</p>
            </div>
          ))}
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

      <h2 id='student'>Student Contributors</h2>
      <br />
      <table style={{ width: '80%', margin: 'auto', borderCollapse: 'collapse' }} border="1">
        <thead>
          <tr><th>Name</th><th>Department</th><th>Contribution</th></tr>
        </thead>
        <tbody>
          <tr><td>Prisha</td><td>Computer Science</td><td>UI Development, Core Team Member</td></tr>
          <tr><td>Vemula</td><td>Mechanical Engineering</td><td>Fabrication & Hardware Integration</td></tr>
        </tbody>
      </table>
      <br />

      <h2 id='mentorship'>Mentorship Network</h2>
      <br />
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
      <br />

      <h2 id='achievements'>Achievements</h2>
      <ul>
        <li>Successfully established a cross-disciplinary IDEA Lab team.</li>
        <li>Student involvement in lab setup, development, and prototyping.</li>
        <li>Workshops and technical trainings conducted for 100+ students.</li>
        <li>Recognized by AICTE under the national IDEA Lab initiative.</li>
      </ul>
      <br />

      <h2 id='testimonials'>Testimonials</h2>
      <blockquote>
        “The IDEA Lab gave me the confidence and hands-on experience I never got in a traditional classroom.
        It’s not just a lab—it’s an innovation playground.”  
        <br /><strong>— Prisha, Student Member</strong>
      </blockquote>

      <blockquote>
        “It’s inspiring to see students take charge of their own projects. We are proud to mentor them
        on this journey of innovation.”  
        <br /><strong>— Dr. Ashima Bagaria, Faculty Coordinator</strong>
      </blockquote>

      <blockquote>
        “This lab has bridged the gap between academic learning and real-world application.
        We’re not just preparing students for exams—we’re preparing them for impact.”  
        <br /><strong>— Prof. (Dr.) Amit Soni, Chief Mentor</strong>
      </blockquote>
      <Footer />
    </div>
  );
};

export default StudentsAndFacultiesPage;
