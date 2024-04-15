'use client';
import React, { useState } from 'react';
import projectsData from 'src/app/data/projectsData.js';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Define the number of projects to display initially
  const projectsLimit = 3;

  return (
    <main>
      <div className='py-4 px-8 lg:px-24'>
        <h2 className='text-green-500 md:text-4xl text-3xl font-semibold mt-4 mb-8 text-center md:text-left ml-4'>
          Projects
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:gap-4 lg:gap-8'>
          {projectsData
            .slice(0, showAllProjects ? projectsData.length : projectsLimit)
            .map((project, index) => (
              <div key={index}>
                <div
                  className=' project-card
                rounded-xl transform transition duration-200 flex flex-col justify-start items-center h-full'
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className='rounded-md object-center object-cover w-full h-56'
                  />
                  <p className='text-xl  justify-center font-semibold my-4 flex items-center'>
                    {project.title}
                  </p>
                  <p className='text-gray-400 my-2'>{project.description}</p>
                  <div className='grow' />
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:bg-green-950/50  border border-green-500
                  rounded-full px-4 py-2 text-center mt-4 w-full transform transition-all duration-150'
                  >
                    Source Code
                  </a>
                </div>
              </div>
            ))}
        </div>
        {/* Render the "View All" button if there are more projects to show */}
        {projectsData.length > projectsLimit && !showAllProjects && (
          <div className='my-8 flex flex-col md:flex-row items-center justify-center w-full px-16'>
            <div className='h-[1px] w-full  px-8 bg-gray-600'></div>
            <button
              onClick={() => setShowAllProjects(true)}
              className='mx-8 shrink-0 bg-green-500 border font-semibold text-white px-16 text-center py-3 rounded-full'
            >
              Show All
            </button>
            <div className='h-[1px]  w-full  px-8 bg-gray-600'></div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;
