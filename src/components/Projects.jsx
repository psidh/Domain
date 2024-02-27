import projectsData from 'src/app/data/projectsData.js';
const Projects = () => {
  return (
    <main>
      <div className='py-4 px-8 lg:px-24'>
        <h2 className='text-fuchsia-500 md:text-4xl text-3xl font-semibold mt-4 mb-8 text-center md:text-left ml-4'>
          Projects
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:gap-4 lg:gap-8'>
          {projectsData.map((project, index) => (
            <div key={index}>
              <div
                className='bg-[#242424] project-card hover:
                rounded-xl p-6 transform transition duration-200 flex flex-col justify-between items-center h-full'
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='rounded-lg object-left-top object-cover w-64 h-56'
                />
                <p className='text-xl  justify-center font-semibold my-4 flex items-center'>
                  {project.title}
                </p>

                <p className='text-gray-400 my-2'>{project.description}</p>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:bg-fuchsia-950/50  border border-fuchsia-500
                  rounded-full px-4 py-2 text-center mt-4 w-full transform transition-all duration-150'
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
