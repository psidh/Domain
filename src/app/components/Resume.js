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
   <div className="bg-white dark:bg-black">
    <div className="pt-4 px-8 lg:px-36">
    <h2 className="md:text-4xl text-2xl font-semibold mt-4 mb-4 text-center md:text-left">Resume</h2>
      <section className="mb-8">
        <h3 className="md:text-2xl text-xl font-semibold mb-4 dark:text-green-500 text-green-600">Education</h3>
        <div className="md:text-justify text-center">
        <p>BTech in Computer Science</p>
        <p>GITAM University, Graduated in 2026</p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="md:text-2xl text-xl font-semibold mb-4 dark:text-green-500 text-green-600">Experience</h3>
        <div className="md:text-justify text-center">
        <p>Software Engineer</p>
        <p>ABC Tech, Summer 2026</p>
        </div>
      </section>

    <div className="md:grid grid-cols-2 gap-8">
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mt-4 mb-4 "> 
        <span className="md:text-left lg:ml-3 
        dark:text-blue-500
        text-blue-600">
          Tech Stack</span></h3>
        <div className="grid grid-cols-2 gap-4">
          {techStack.map((tech, index) => (
            <div key={index} className="md:text-lg md:p-4 p-2  
            flex justify-start items-center border-0 rounded-lg 
            hover:bg-black 
            hover:text-white  
            dark:bg-black 
            dark:text-white 
            dark:hover:text-black 
            dark:hover:bg-white  
            transition duration-100">
              {tech}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mt-4 mb-4 md:text-left">
          <span className="md:text-left lg:ml-3 
          dark:text-blue-500
        text-blue-600">Skills</span>
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="md:text-lg md:p-4 p-2  
            flex justify-start items-center border-0 rounded-lg 
            hover:bg-black 
            hover:text-white  
            dark:bg-black 
            dark:text-white 
            dark:hover:text-black 
            dark:hover:bg-white  
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
