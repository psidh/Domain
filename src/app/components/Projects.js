"use client";
"use client";
import React from "react";
import projectsData from "src/app/data/projectsData.js";

const Projects = () => {
  return (
    <section className="dark:bg-black bg-gray-100 py-4 md:py-12 font-ambit">
      <div className="container mx-auto md:text-center">
        <h2 className="md:text-4xl text-2xl px-16 text-left font-semibold mb-8">Projects</h2>
        <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-6">
        {projectsData.map((project, index) => (
          <div key={index} className="dark:bg-gray-900 bg-white shadow-md rounded-lg p-6 mx-auto transform hover:scale-105 transition duration-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt={project.title} className="mx-auto mb-4 rounded-lg" />
            <a href={project.link} className="text-xl justify-center font-semibold my-2 flex items-center">{project.title}
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
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-500 text-center hover:underline hover:underline-offset-2 ">
              View on GitHub
            </a>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


{/* <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded ml-2">{tech.name}</span> */}