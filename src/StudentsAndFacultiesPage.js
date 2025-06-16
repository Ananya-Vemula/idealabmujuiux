import React from 'react';
import StudentsSidebar from './Sidebars/StudentsSidebar';
import Footer from './Footer'; 

const StudentsAndFacultiesPage = () => {
  return (
    <div className="about-page">
      <StudentsSidebar />

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
            {/* Table rows as before */}
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

      <h2 id='student-benefits'>For Students</h2>
      <ul>
        <li><strong>Skill Enhancement:</strong> Real-world project execution sharpens critical thinking, teamwork, and technical abilities.</li>
        <li><strong>Prototype to Product Journey:</strong> Students can evolve ideas into working models with institutional support.</li>
        <li><strong>Cross-Disciplinary Learning:</strong> Promotes innovation at the intersection of disciplines.</li>
        <li><strong>Exposure & Recognition:</strong> Travel support for competitions and external exhibitions to showcase innovations.</li>
        <li><strong>Career-Readiness:</strong> Training aligns with current industry practices for better employability.</li>
      </ul>

      <h2 id='faculty-benefits'>For Faculty</h2>
      <ul>
        <li><strong>Project-Based Pedagogy:</strong> Encourages innovative, practical teaching methods.</li>
        <li><strong>Industry Collaboration:</strong> Builds bridges between academia and sectors like manufacturing, agriculture, health, and renewable energy.</li>
        <li><strong>Research Empowerment:</strong> Faculty can conduct applied research and publish/patent their work via IDEA Lab.</li>
        <li><strong>Professional Development:</strong> Continuous learning via workshops, courses, and inter-institutional collaborations.</li>
        <li><strong>Leadership Opportunities:</strong> Faculty take lead roles in mentoring, research proposals, and lab strategy planning.</li>
      </ul>

      <h2 id='joint-efforts'>Joint Efforts</h2>
      <ul>
        <li><strong>Faculty & Student Teams:</strong> Collaborate to build impactful, socially beneficial tech products.</li>
        <li><strong>Mentorship Programs:</strong> Alumni and industry experts engage with students through talks and reviews.</li>
      </ul>

      <h2 id='highlighted-teams'>Highlighted Teams</h2>
      <ul>
        <li><strong>Faculty Leads:</strong> Dr. Amit Soni (Chief Mentor), Dr. Ashima Bagaria (Coordinator), Dr. Preeti Narooka (Co-Coordinator)</li>
        <li><strong>Core Faculty Team:</strong> 10+ experts from electronics, physics, CS, mechanical, etc.</li>
        <li><strong>Student Innovators:</strong> Prisha, Vemula, Dominique, and others actively leading innovation efforts.</li>
      </ul>

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
