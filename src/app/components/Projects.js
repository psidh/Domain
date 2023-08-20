import React from "react";
import projectsData from "src/app/data/projectsData.js";

const Projects = () => {
  return (
    <section className="dark:bg-black bg-gray-100 py-4 md:py-12">
      <div className="container mx-auto md:text-center">
        <h2 className="md:text-4xl text-2xl px-16 text-left font-semibold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="dark:bg-gray-900 bg-white shadow-md rounded-lg p-6 ml-14 transform hover:scale-100 transition duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.title} className="mx-auto mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-center space-x-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-200 text-gray-600 px-2 py-1 rounded"> {tech} </span> ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-500 hover:underline">
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
