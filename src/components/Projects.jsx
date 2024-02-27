'use client';
import projectsData from 'src/app/data/projectsData.js';
import '../app/styles.css';
import { useRouter } from 'next/navigation';

const Projects = () => {
  const router = useRouter();

  const projectPush = (link) => {
    router.push(link);
  };
  return (
    <main>
      <div className='py-4 px-8 lg:px-24'>
        <h2 className='text-fuchsia-500 md:text-4xl text-3xl font-semibold mt-4 mb-8 text-center md:text-left ml-4'>
          Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:gap-4 lg:gap-8'>
          {projectsData.map((project, index) => (
            <div
              onClick={() => {
                projectPush;
              }}
              key={index}
            >
              <div
                className='bg-[#1a1a1a] project-card hover:
                rounded-lg p-4 transform transition duration-200 flex flex-col justify-between items-center h-full'
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='rounded-md object-left-top object-cover w-64 h-56'
                />
                <p className='text-xl text-white justify-center font-semibold my-4 flex items-center'>
                  {project.title}
                </p>

                <p className='text-gray-400 my-2'>{project.description}</p>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-black hover:bg-white text-white border border-fuchsia-500 px-4 py-2 rounded-md text-center mt-4 w-full transform transition-all duration-150'
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
