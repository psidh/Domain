import projectsData from 'src/app/data/projectsData.js';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Projects = () => {
  const majorProject = projectsData[0]; // The first project will be the major one.

  return (
    <main>
      <div className="container mx-auto pt-4 pb-4 px-4 md:px-8 md:py-6">
        <h2 className="text-white md:text-4xl text-3xl font-semibold my-4 text-center md:text-left mb-4">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:gap-4 lg:gap-6">
          {/* Major Project on the Left */}
          <div
            key={0}
            className="bg-gray-900 shadow-lg hover:shadow-blue-400 
            rounded-lg p-4 transform transition duration-200
            block md:col-span-2 md:row-span-2"
            style={{ minHeight: '400px' }}
          >
            <Image
              src={majorProject.image}
              alt={majorProject.title}
              className="mx-auto my-2 rounded-lg"
              width={500}
              height={400}
            />
            <div className="flex items-center justify-center">
              <a
                href={majorProject.projectLink}
                target="_blank"
                className="text-xl text-white justify-center font-semibold my-4 flex items-center"
              >
                {majorProject.title}
              </a>
            </div>
            <p className="text-gray-400 my-2">{majorProject.description}</p>
            <div className="flex justify-center items-center my-2 space-x-2">
              {majorProject.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="flex items-center">
                  {tech.img}
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center justify-center">
              <a
                href={majorProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 mt-2 transform hover:underline hover:underline-offset-2"
              >
                View on GitHub
              </a>
            </div>
          </div>
          {/* Smaller Projects on the Right */}
          {projectsData.slice(1).map((project, index) => (
            <div
              key={index + 1}
              className="bg-gray-900 shadow-lg hover:shadow-blue-400 
              rounded-lg p-4 transform transition duration-200
              block md:col-span-1 md:row-span-1"
              style={{ minHeight: '400px' }}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="mx-auto my-2 rounded-lg"
                width={100}
                height={100}
              />
              <div className="flex items-center justify-center">
                <a
                  href={project.projectLink}
                  target="_blank"
                  className="text-xl text-white justify-center font-semibold my-4 flex items-center"
                >
                  {project.title}
                </a>
              </div>
              <p className="text-gray-400 my-2">{project.description}</p>
              <div className="flex justify-center items-center my-2 space-x-2">
                {project.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center">
                    {tech.img}
                  </div>
                ))}
              </div>
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
    </main>
  );
};

export default Projects;
