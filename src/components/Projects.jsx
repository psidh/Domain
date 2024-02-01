import projectsData from 'src/app/data/projectsData.js';
import '../app/styles.css';

const Projects = () => {
  return (
    <main>
      <div className='w-full container mx-auto pt-4 pb-4 px-4 md:px-8 md:py-6'>
        <h2 className='text-white md:text-4xl text-3xl font-semibold my-4 text-center md:text-left mb-4'>
          Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:gap-4 lg:gap-6'>
          {projectsData.map((project, index) => (
            <a href={project.projectLink} key={index}>
              <div
                className='bg-[#1a1a1a] project-card
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
                <div className='flex flex-row items-center justify-center'>
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-green-500 mt-2 transform hover:underline hover:underline-offset-2'
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
