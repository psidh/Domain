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
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Mongodb', icon: <SiMongodb /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'BootStrap', icon: <SiBootstrap /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'C', icon: <SiC /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Jupyter', icon: <SiJupyter /> },
    { name: 'JQuery', icon: <BiLogoJquery /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Java', icon: <BiLogoJava /> },
    { name: 'Bash', icon: <SiGnubash /> },
    { name: 'Numpy', icon: <SiNumpy /> },
    { name: 'Pandas', icon: <SiPandas /> },
    
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
      once: true,
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
          <div className="md:grid md:grid-cols-2 gap-8">
            {/* Education and Experience sections here */}
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
                      <span style={{ fontSize: '36px' }}>
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
    </main>
  );
};

export default Resume;
