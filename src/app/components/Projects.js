"use client";
import React, { useEffect } from "react";
import projectsData from "src/app/data/projectsData.js";
import styled, { createGlobalStyle } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;
const Projects = () => {
  useEffect(() => {
    AOS.init({
      delay: 50, // Delay between animations (ms)
      offset: 100, // Offset (in px) from the element's position when animation starts
      duration: 500, // Duration of animations (ms)}); // Initialize AOS
      once: true, // Whether animations should be repeated
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section>
  <div data-aos="fade-in">
    <div className="container mx-auto pt-4 pb-4 px-4 md:px-8 md:py-6">
      <h2 className="text-white md:text-4xl text-3xl font-semibold my-4 text-center md:text-left mb-4">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg  hover:shadow-green-400 rounded-lg p-4 mx-auto transform hover:scale-105 transition duration-200 relative"
            style={{ minHeight: "400px" }} // Adjust the minimum height as needed
          >
            
            <Image
              src={project.image}
              alt={project.title}
              className="mx-auto my-2 rounded-lg"
              width={200}
              height={200}
            />
            <div className=" flex items-center justify-center">
              {/* Fix title below images */}
              <a
                href={project.projectLink}
                target="_blank"
                className="text-xl text-white justify-center font-semibold my-4 flex items-center "
              >
                {project.title}
                <span>
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
                </span>
              </a>
            </div>
            <p className="text-gray-400 my-2">{project.description}</p>
            {/* Fix the project technology and description */}
            <div className="flex justify-center items-center my-2 space-x-2">
              {project.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="flex items-center">
                  {tech.img}
                </div>
              ))}
            </div>
            {/* Fix "View on GitHub" button */}
            <div className="flex flex-row items-center justify-center">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 mt-2 transform hover:underline hover:underline-offset-2"
            >
              View on GitHub
            </a>
          </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default Projects;
