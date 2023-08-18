import React from "react";

const Resume = () => {
  const techStack = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "HTML",
    "CSS",
    "SQL",
    "Git",
    "RESTful APIs",
    "Bootstrap",
    "VS Code",
    "MongoDB",
  ];

  const skills = [
    "Web Development",
    "Front-End Development",
    "Back-End Development",
    "Problem Solving",
    "Team Collaboration",
    "UI/UX Design",
    "Version Control",
  ];

  return (
   <div className="bg-white">
    <div className="py-16 px-8 lg:px-36">
      <h2 className="md:text-4xl text-2xl text-gray-800 font-bold mb-4">Resume</h2>

      <section className="mb-8">
        <h3 className="md:text-2xl text-xl text-gray-800 font-semibold mb-4">Education</h3>
        <p>Bachelor of Technology in Computer Science</p>
        <p>XYZ University, Graduated in 20XX</p>
      </section>

      <section className="mb-8">
        <h3 className="md:text-2xl text-xl text-gray-800 font-semibold mb-4">Experience</h3>
        <p>Software Engineer Intern</p>
        <p>ABC Tech, Summer 20XX</p>
        <ul>
          <li>Contributed to the development of a new feature for the  flagship product.</li>
          <li>Collaborated with cross-functional teams to ensure seamless integration of the feature.</li>
        </ul>
      </section>

    <div className="md:grid grid-cols-2 gap-8">
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mt-4 mb-4">Tech Stack</h3>
        <div className="grid grid-cols-2 gap-4">
          {techStack.map((tech, index) => (
            <div key={index} className="md:text-sm p-2 md:p-4 flex justify-center items-center bg-gray-100 rounded shadow-sm hover:shadow-md hover:bg-gray-700 hover:text-white transition duration-100">
              {tech}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mt-4 mb-4">Skills</h3>
        <div className=" grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 flex justify-center items-center bg-gray-100 rounded shadow-sm hover:shadow-md hover:bg-gray-700 hover:text-white transition duration-100">
              {skill}
            </div>
          ))}
        </div>
      </section>

    </div>
    </div>
   </div>
  );
};

export default Resume;
