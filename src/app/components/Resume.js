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
  SiFirebase,
  SiSupabase,
  SiGit,
  SiGithub,
  SiFigma,
  SiMui,
  SiVercel,
  SiOpenai,
  SiVisualstudiocode,
  SiPycharm,
  SiIntellijidea,
  SiWebstorm,
  SiPostman,
} from 'react-icons/si'; // Import the icons
import { GrMysql } from 'react-icons/gr';
import { GiTurtle } from 'react-icons/gi';
import { BiLogoJquery, BiLogoJava, BsGit, BiLogoFlask } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa';

const Resume = () => {
  const Frameworks = [
    { name: 'Next.js 13', icon: <SiNextdotjs /> },
    { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      color: 'text-emerald-300',
    },
    { name: 'Express', icon: <SiExpress />, color: 'text-yellow-500' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-lime-500' },
    { name: 'Mongodb', icon: <SiMongodb />, color: 'text-green-400' },
    { name: 'BootStrap', icon: <SiBootstrap />, color: 'text-violet-400' },
    { name: 'Jupyter', icon: <SiJupyter />, color: 'text-orange-500' },
    { name: 'Pandas', icon: <SiPandas />, color: 'text-blue-500' },
    { name: 'FireBase', icon: <SiFirebase />, color: 'text-amber-400' },
    { name: 'SupaBase', icon: <SiSupabase />, color: 'text-green-400' },
    { name: 'MySQL', icon: <GrMysql />, color: 'text-blue-200' },
    { name: 'Flask', icon: <BiLogoFlask />, color: 'text-red-500' },
    // Add more lang stack items with icons as needed
  ];

  const lang = [
    { name: 'Bash', icon: <SiGnubash />, color: 'text-gray-500' },
    { name: 'C++', icon: <SiCplusplus />, color: 'text-teal-400' },
    { name: 'C', icon: <SiC />, color: 'text-gray-400' },
    { name: 'Java', icon: <BiLogoJava />, color: 'text-orange-500' },
    { name: 'Python', icon: <SiPython />, color: 'text-blue-300' },
    { name: 'CSS', icon: <SiCss3 />, color: 'text-cyan-400' },
    { name: 'HTML', icon: <SiHtml5 />, color: 'text-orange-500' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-400' },
  ];

  const tools = [
    { name: 'Git', icon: <SiGit />, color: 'text-orange-500' },
    { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-100' },
    { name: 'Vercel', icon: <SiVercel />, color: 'text-white' },
    { name: 'Figma', icon: <SiFigma />, color: 'text-red-500' },
    { name: 'Material UI', icon: <SiMui />, color: 'text-blue-500' },
    { name: 'ChatGPT', icon: <SiOpenai />, color: 'text-teal-200' },
    {
      name: 'Visual Studio Code',
      icon: <SiVisualstudiocode />,
      color: 'text-sky-400',
    },
    { name: 'PyCharm', icon: <SiPycharm />, color: 'text-lime-400' },
    { name: 'WebStorm', icon: <SiWebstorm />, color: 'text-blue-400' },
    { name: 'IntelliJ', icon: <SiIntellijidea />, color: 'text-red-500' },
    { name: 'PostMan', icon: <SiPostman />, color: 'text-orange-500' },
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

  return (
    <main id="resume">
      <div>
        <div className="py-4 md:py-10 px-8 lg:px-36">
          <h2 className="md:text-4xl text-white text-3xl font-semibold my-4 text-center md:text-left">
            Resume
          </h2>
          <div className="md:grid md:grid-cols-2 gap-8">
            <section className="my-8">
              <h3 className="md:text-3xl text-2xl font-semibold mb-4 text-green-500">
                Education
              </h3>
              <div className="text-white">
                <p className="md:text-xl text-lg ">Class 1 - 3</p>
                <p className="flex items-center mb-4">
                  Air Force School, IAF, West Bengal
                </p>
                <p className="md:text-2xl text-xl mt-4">Class 4 - 12</p>
                <a
                  href="https://kvsangathan.nic.in/"
                  target="_blank"
                  className="flex items-center"
                >
                  Kendriya Vidyalaya Sangathan [Kerala | AP]
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
                <p className="md:text-2xl text-xl mt-8">
                  BTech in Computer Science
                </p>
                <a
                  href="https://www.gitam.edu"
                  target="_blank"
                  className="flex items-center"
                >
                  GITAM University, Graduated in 2026
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
              </div>
            </section>

            <section className="my-8">
              <h3 className="md:text-3xl  text-2xl font-semibold mb-4 text-green-500">
                Experience
              </h3>
              <div className="text-white">
                <p>Software Engineer</p>
                <p>Summer 2026</p>
              </div>
            </section>
          </div>

          <div>
            <div className="md:grid grid-cols-2 gap-8">
              <section className="my-8 ">
                <a
                  href="https:www.github.com/psidh/"
                  target="_blank"
                  className="md:text-4xl text-2xl flex items-center font-semibold mt-4 mb-4 "
                >
                  <span className="md:text-left lg:ml-3 text-green-500 hover:text-green-200">
                    Frameworks
                  </span>
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
                  {Frameworks.map((Frameworks, index) => (
                    <div
                      key={index}
                      className="md:text-xl text-white md:p-4 p-2
        flex justify-center items-center border-0 rounded-lg"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <span
                          style={{ fontSize: '36px' }}
                          className={Frameworks.color}
                        >
                          {Frameworks.icon} {/* Display the icon */}
                        </span>
                        <span className="m-2">{Frameworks.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="my-8 ">
                <a
                  href="https:www.github.com/psidh/"
                  target="_blank"
                  className="md:text-4xl text-2xl flex items-center font-semibold mt-4 mb-4 "
                >
                  <span className="md:text-left lg:ml-3 text-green-500 hover:text-green-200">
                    Languages
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
                  {lang.map((lang, index) => (
                    <div
                      key={index}
                      className="md:text-xl text-white md:p-4 p-2
        flex justify-center items-center border-0 rounded-lg"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <span
                          style={{ fontSize: '36px' }}
                          className={lang.color}
                        >
                          {lang.icon} {/* Display the icon */}
                        </span>
                        <span className="m-2">{lang.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="my-8 ">
                <a
                  href="https:www.github.com/psidh/"
                  target="_blank"
                  className="md:text-4xl text-2xl flex items-center font-semibold mt-4 mb-4 "
                >
                  <span className="md:text-left lg:ml-3 text-green-500 hover:text-green-200">
                    Tools
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
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="md:text-xl text-white md:p-4 p-2
        flex justify-center items-center border-0 rounded-lg"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <span
                          style={{ fontSize: '36px' }}
                          className={tool.color}
                        >
                          {tool.icon} {/* Display the icon */}
                        </span>
                        <span className="m-2">{tool.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="my-8">
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
