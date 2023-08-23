"use client";
import React, {useEffect} from "react";
import projectsData from "src/app/data/projectsData.js";
import styled, { createGlobalStyle } from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;
const Projects = () => {
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
    <section >
      <div data-aos="fade-down">
      <div className="container mx-auto pt-4 pb-8 px-6 md:px-16 md:py-10">
        <h2 className="text-white md:text-4xl text-3xl font-semibold my-4 text-center md:text-left mb-8" 
         >Projects</h2>
        <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-6 ">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-gray-900 shadow-xl shadow-blue-700 hover:shadow-blue-500 
          rounded-lg p-6 mx-auto transform hover:scale-105 transition duration-200" 
           >
              {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt={project.title} className="mx-auto mb-4 rounded-lg" />
            <a href={project.projectLink} className="text-xl text-white justify-center font-semibold my-2 flex items-center">{project.title}
            <span><svg
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
          </svg></span> 
            </a>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex justify-center my-4 space-x-4">
              {project.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="flex items-center"> {tech.img} </div>
              ))}
            </div>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-green-500 text-center hover:underline hover:underline-offset-2 ">
              View on GitHub
            </a>
          </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;


{/* <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded ml-2">{tech.name}</span> */}