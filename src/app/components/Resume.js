import React, 
{useEffect} from "react";
import styled, { createGlobalStyle } from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;

const Resume = () => {
  const techStack = [
    "Python",
    "JavaScript",
    "C",
    "C++",
    "Java",
    "NextJs",
    "React",
    "Node.js",
    "HTML5",
    "CSS/SCSS",
    "Tailwind CSS",
    "SQL",
    "Git",
    "Bootstrap",
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

  useEffect(() => {
    AOS.init({ delay: 50,    // Delay between animations (ms)
    offset: 100,   // Offset (in px) from the element's position when animation starts
    duration: 500, // Duration of animations (ms)}); // Initialize AOS
    once: false, // Whether animations should be repeated
    mirror: true,
    easing: "ease-in-out",
  });
}, []);

  return (
  <main id="resume">
  <div>
    <div className="py-4 md:py-10 px-8 lg:px-36">
    <h2 className="md:text-4xl text-3xl font-semibold my-4 text-center md:text-left" data-aos="fade-up">Resume</h2>
      <div className="md:grid md:grid-cols-2 gap-8">
      <section className="my-8" data-aos="fade-up">
        <h3 className="md:text-3xl text-2xl font-semibold mb-4 dark:text-green-500 text-green-600">Education</h3>
        <p className="md:text-xl text-lg ">Class 1 - 3</p>
        <p className="flex items-center mb-8">
          Air Force School, IAF, West Bengal 
        </p>
        <p className="md:text-2xl text-xl mt-8">Class 4 - 12</p>
        <a href="https://kvsangathan.nic.in/" className="flex items-center">
          Kendriya Vidyalaya Sangathan [Kerala | AP]
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 w-4 h-4">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
        <p className="md:text-2xl text-xl mt-8">BTech in Computer Science</p>
        <a href="https://www.gitam.edu" className="flex items-center">
          GITAM University, Graduated in 2026
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 w-4 h-4">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </section>

      <section className="my-8" data-aos="fade-up">
        <h3 className="md:text-3xl text-2xl font-semibold mb-4 dark:text-green-500 text-green-600">Experience</h3>
        <p>Software Engineer</p>
        <p>Summer 2026</p>
      </section>
    </div>

    <div className="md:grid grid-cols-2 gap-8">
      <section className="my-8 " data-aos="fade-up">
      <a href="https:www.github.com/psidh/" className="md:text-4xl text-2xl flex items-center font-semibold mt-4 mb-4 "> 
        <span className="md:text-left lg:ml-3 
        text-transparent bg-clip-text 
        bg-gradient-to-b from-black to-gray-500 
        hover:bg-gradient-to-t hover:from-gray-300  hover:to-gray-500
        dark:bg-gradient-to-t 
        dark:from-gray-500 
        dark:to-gray-300
        
        ">
        Tech Stack</span> <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 w-4 h-4"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg></a>
        <div className="grid grid-cols-2 gap-4">
          {techStack.map((tech, index) => (
            <div key={index} className="md:text-xl md:p-4 p-2  
            flex justify-start items-center border-0 rounded-lg">
              {tech}
            </div>
          ))}
        </div>
      </section>

      <section className="my-8" data-aos="fade-up">
        <h3 className="md:text-4xl text-2xl font-semibold mt-4 mb-4 md:text-left">
        <span className="md:text-left lg:ml-3 
          text-transparent bg-clip-text 
          bg-gradient-to-b from-black to-gray-500 
          hover:bg-gradient-to-t hover:from-gray-300  hover:to-gray-500
          dark:bg-gradient-to-t 
          dark:from-gray-500 
          dark:to-gray-300">Skills ⚒️</span>
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="md:text-xl md:p-4 p-2  
            flex justify-start items-center border-0 rounded-lg">
              {skill}
            </div>
          ))}
        </div>
      </section>

    </div>
    </div>
   </div>
  </main>
  );
};

export default Resume;


// styles for the tech stack -->
// hover:bg-black 
// hover:text-white  
// dark:bg-black 
// dark:text-white 
// dark:hover:text-black 
// dark:hover:bg-white  
// transition duration-100




// styles for skills -->
// hover:bg-black 
// hover:text-white  
// dark:bg-black 
// dark:text-white 
// dark:hover:text-black 
// dark:hover:bg-white  
// transition duration-100