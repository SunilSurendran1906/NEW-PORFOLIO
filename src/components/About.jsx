import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About Me</h1>
        <p>
          Hey! I'm Sunil Surendran, a self-driven and passionate programmer with
          a keen interest in software development and competitive programming. I
          thrive on building scalable software and solving real-world problems
          through algorithms. My enthusiasm for these domains has grown through
          comprehensive exposure and hands-on projects.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <ul className="list-disc list-inside ml-5">
          <li>
            BE (Mechanical Engineering), Dhirajlal Gandhi College of Technology,
            CGPA 7.98
          </li>
          <li>HSC, St. Paul's Higher Secondary School, 73%</li>
          <li>SSLC, St. Paul's Higher Secondary School, 73%</li>
          <li>Zen Full Stack Developer Certification, GUVI, IIT Madras</li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <ul className="list-disc list-inside ml-5">
          <li>
            Proficient in JavaScript, HTML, CSS, React.js, Node.js, Express.js,
            MongoDB
          </li>
          <li>Experienced with version control systems like Git and GitHub</li>
          <li>Strong grasp of RESTful API design and implementation</li>
          <li>Excellent problem-solving skills and debugging techniques</li>
          <li>Effective communicator and collaborator in team environments</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
