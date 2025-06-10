import React from 'react';

const StudentsAndFacultiesPage = () => {
  return (
    <>
      <h2>Faculty Members</h2>
      <table style={{ width: '95%', margin: 'auto', borderCollapse: 'collapse' }} border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Area of Expertise</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Prof. (Dr.) Amit Soni</td><td>Chief Mentor</td><td>Academic Leadership, Innovation</td><td>[email/contact]</td></tr>
          <tr><td>Prof. (Dr.) Ashima Bagaria</td><td>Faculty Coordinator</td><td>Engineering Design, Prototyping</td><td>[email/contact]</td></tr>
          <tr><td>Dr. Preeti Narooka</td><td>Co-Coordinator</td><td>Electronics & Communication</td><td>[email/contact]</td></tr>
          <tr><td>Dr. Manoj K. Saini</td><td>Team Member</td><td>IoT, Embedded Systems</td><td>[email/contact]</td></tr>
          <tr><td>Dr. Saurabh Dewangan</td><td>Team Member</td><td>Mechanical Engineering</td><td>[email/contact]</td></tr>
          <tr><td>Dr. Anurag Joshi</td><td>Team Member</td><td>Civil Engineering</td><td>[email/contact]</td></tr>
          <tr><td>Dr. Himanshu Chaudhary</td><td>Team Member</td><td>Electrical Engineering</td><td>[email/contact]</td></tr>
          <tr><td>Mr. Ashish Vijay</td><td>Team Member</td><td>Design Thinking</td><td>[email/contact]</td></tr>
          <tr><td>Dr. Vinay Gupta</td><td>Team Member</td><td>Robotics & Automation</td><td>[email/contact]</td></tr>
          <tr><td>Dr. Himanshu Priyadarshi</td><td>Team Member</td><td>Computer Science</td><td>[email/contact]</td></tr>
        </tbody>
      </table>

      <h2>Student Contributors</h2>
      <table style={{ width: '80%', margin: 'auto', borderCollapse: 'collapse' }} border="1">
        <thead>
          <tr><th>Name</th><th>Department</th><th>Contribution</th></tr>
        </thead>
        <tbody>
          <tr><td>Prisha</td><td>Computer Science</td><td>UI Development, Core Team Member</td></tr>
          <tr><td>Vemula</td><td>Mechanical Engineering</td><td>Fabrication & Hardware Integration</td></tr>
        </tbody>
      </table>

      <h2>Mentorship Network</h2>
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

      <h2>Achievements</h2>
      <ul>
        <li>Successfully established a cross-disciplinary IDEA Lab team.</li>
        <li>Student involvement in lab setup, development, and prototyping.</li>
        <li>Workshops and technical trainings conducted for 100+ students.</li>
        <li>Recognized by AICTE under the national IDEA Lab initiative.</li>
      </ul>

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
