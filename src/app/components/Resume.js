import React from "react";

const Resume = () => {
  const techStack = [
    "JavaScript",
    "Nextjs",
    "React",
    "Node.js",
    "Python",
    "HTML5",
    "Tailwind CSS",
    "SQL",
    "Git",
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
   <div className="">
    <div className="py-16 px-8 lg:px-36">
      <h2 className="md:text-4xl text-2xl font-bold mb-4">Resume</h2>

      <section className="mb-8">
        <h3 className="md:text-2xl text-xl font-semibold mb-4">Education</h3>
        <div className="md:text-justify text-center">
        <p>Bachelor of Technology in Computer Science</p>
        <p>GITAM University, Graduated in 2026</p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="md:text-2xl text-xl font-semibold mb-4">Experience</h3>
        <div className="md:text-justify text-center">
        <p>Software Engineer Intern</p>
        <p>ABC Tech, Summer 20XX</p>
        </div>
        <ul className="mt-2 mb-2">
          <li>Contributed to the development of a new feature for the flagship product.</li>
          <li>Collaborated with cross-functional teams to ensure seamless integration of the feature.</li>
        </ul>
      </section>

    <div className="md:grid grid-cols-2 gap-8">
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mt-4 mb-4">Tech Stack</h3>
        <div className="grid grid-cols-2 gap-4">
          {techStack.map((tech, index) => (
            <div key={index} className="md:text-lg p-2 md:p-4 
            flex justify-center items-center rounded 

            bg-gray-200
            hover:bg-gray-300
            

            dark:bg-gray-800
            dark:text-white
            dark:hover:text-white
            dark:hover:bg-gray-900

            shadow-sm hover:shadow-md 
            transition duration-100">
              {tech}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mt-4 mb-4">Skills</h3>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="md:text-lg md:p-4 p-2 
            flex justify-center items-center rounded 
            bg-gray-200
            hover:bg-gray-300

            dark:bg-gray-800
            dark:text-white
            dark:hover:text-white
            dark:hover:bg-gray-900

            shadow-sm hover:shadow-md 
            transition duration-100">
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
