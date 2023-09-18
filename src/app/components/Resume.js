'use client';
import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCss3,
  SiCplusplus,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiJupyter,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiGnubash,
  SiNumpy,
  SiPandas,
} from 'react-icons/si'; // Import the icons
import {BiLogoJquery, BiLogoJava} from "react-icons/bi";
import {FaNodeJs} from "react-icons/fa";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;

const Resume = () => {
  const techStack = [
    { name: 'Next.js 13', icon: <SiNextdotjs /> },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-400'  },
    { name: 'Mongodb', icon: <SiMongodb />, color: 'text-green-400'},
    { name: 'React', icon: <SiReact /> , color: 'text-cyan-400'},
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> , color: 'text-emerald-400'},
    { name: 'BootStrap', icon: <SiBootstrap /> , color: 'text-purple-400'},
    { name: 'C++', icon: <SiCplusplus /> , color: 'text-blue-600'},
    { name: 'C', icon: <SiC /> , color: 'text-gray-400'},
    { name: 'CSS', icon: <SiCss3 /> , color: 'text-cyan-400'},
    { name: 'HTML', icon: <SiHtml5 /> , color: 'text-orange-500'},
    { name: 'Python', icon: <SiPython /> , color: 'text-blue-300'},
    { name: 'Jupyter', icon: <SiJupyter /> , color: 'text-orange-500'},
    { name: 'JQuery', icon: <BiLogoJquery /> , color: 'text-gray-500'},
    { name: 'Express', icon: <SiExpress /> , color: 'text-yellow-500'},
    { name: 'Node.js', icon: <FaNodeJs /> , color: 'text-yellow-500'},
    { name: 'Java', icon: <BiLogoJava /> , color: 'text-orange-500'},
    { name: 'Bash', icon: <SiGnubash /> , color: 'text-gray-500'},
    { name: 'Numpy', icon: <SiNumpy /> , color: 'text-blue-500'},
    { name: 'Pandas', icon: <SiPandas /> , color: 'text-blue-500'},
    
    // Add more tech stack items with icons as needed
  ];
  const skills = [
    'Web Development',
    'Front-End Development',
    'Back-End Development',
    'Problem Solving',
    'Team Collaboration',
    'UI/UX Design',
    'Version Control',
  ];

  useEffect(() => {
    AOS.init({
      delay: 100,
      offset: 10,
      duration: 800,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <main id="resume">
      <div
        style={{ fontFamily: 'Ambit, sans-serif' }}
        data-aos="fade-in font-ambit"
      >
        <div className="py-4 md:py-10 px-8 lg:px-36">
          <h2
            className="md:text-4xl text-white text-3xl font-semibold my-4 text-center md:text-left"
            data-aos="flip-up"
          >
            Resume
          </h2>
          <div className="py-4 md:py-10 px-8 lg:px-36">
          <h2 className="md:text-4xl text-white text-3xl font-semibold my-4 text-center md:text-left"
          data-aos="flip-up">
            Resume
          </h2>
          <div className="md:grid md:grid-cols-2 gap-8">
            <section className="my-8" data-aos="fade-right">
              <h3 className="md:text-3xl text-2xl font-semibold mb-4 text-green-500">
                Education
              </h3>
              <div className="text-white">
                <p className="md:text-xl text-lg ">Class 1 - 3</p>
                <p className="flex items-center mb-8">
                  Air Force School, IAF, West Bengal
                </p>
                <p className="md:text-2xl text-xl mt-8">Class 4 - 12</p>
                <a
                  href="https://kvsangathan.nic.in/"
                  target="_blank"
                  className="flex items-center"
                >
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
                    className="ml-2 w-4 h-4"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <p className="md:text-2xl text-xl mt-8">
                  BTech in Computer Science
                </p>
                <a
                  href="https://www.gitam.edu"
                  target="_blank"
                  className="flex items-center"
                >
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
                    className="ml-2 w-4 h-4"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </section>

            <section className="my-8" data-aos="fade-right">
              <h3 className="md:text-3xl  text-2xl font-semibold mb-4 text-green-500">
                Experience
              </h3>
              <div className="text-white">
                <p>Software Engineer</p>
                <p>Summer 2026</p>
              </div>
            </section>
          </div>

          <div>
            <div className="md:grid grid-cols-2 gap-8">
              <section className="my-8 " data-aos="fade-right">
                <a
                  href="https:www.github.com/psidh/"
                  target="_blank"
                  className="md:text-4xl text-2xl flex items-center font-semibold mt-4 mb-4 "
                >
                  <span className="md:text-left lg:ml-3 text-green-500 hover:text-green-200">
                    Tech Stack
                  </span>{' '}
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
                    className="ml-2 w-4 h-4"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <div className="grid grid-cols-2 md:grid md:grid-cols-3 gap-6">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="md:text-xl text-white md:p-4 p-2
        flex justify-center items-center border-0 rounded-lg"
                    >
                      <div className='flex flex-col items-center justify-center'>
                      <span style={{ fontSize: '36px' }} 
                      className={tech.color}>
                        {tech.icon} {/* Display the icon */}
                      </span>
                      <span className='m-2'>{tech.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="my-8" data-aos="fade-left">
                <h3 className="md:text-4xl text-2xl font-semibold mt-4 mb-4 md:text-left">
                  <span className="md:text-left lg:ml-3 text-green-500">
                    Skills ⚒️
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="md:text-xl md:p-4 p-2  
            flex justify-start items-center border-0 text-white rounded-lg"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Resume;
