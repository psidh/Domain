import {SiPython, SiJavascript, SiTypescript, SiC, SiCss3, SiCplusplus, SiHtml5, SiNextdotjs, SiReact, SiExpress, SiJupyter,
  SiMongodb, SiTailwindcss, SiBootstrap, SiGnubash, SiPandas, SiFirebase, SiSupabase, SiGit, SiGithub, SiDart ,
  SiFigma, SiMui, SiVercel, SiOpenai, SiVisualstudiocode, SiPycharm, SiIntellijidea, SiWebstorm, SiPostman, SiFlutter } from 'react-icons/si'; // Import the icons
import { GrMysql } from 'react-icons/gr';
import { FaVuejs } from "react-icons/fa6";
import { BiLogoJava, BiLogoFlask } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa';


const frameworks = [
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'React.js', icon: <SiReact />, color: 'text-cyan-400' },
  { name: 'Vue.js', icon: <FaVuejs />, color: 'text-cyan-400' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-emerald-300'},
  { name: 'Express', icon: <SiExpress />, color: 'text-yellow-500' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-lime-500' },
  { name: 'Mongodb', icon: <SiMongodb />, color: 'text-green-400' },
  { name: 'Flask', icon: <BiLogoFlask />, color: 'text-red-500' },
  { name: 'Flutter', icon: <SiFlutter />, color: 'text-blue-500' },
  { name: 'BootStrap', icon: <SiBootstrap />, color: 'text-violet-400' },
  { name: 'Jupyter', icon: <SiJupyter />, color: 'text-orange-500' },
  { name: 'Pandas', icon: <SiPandas />, color: 'text-blue-500' },
  { name: 'FireBase', icon: <SiFirebase />, color: 'text-amber-400' },
  { name: 'SupaBase', icon: <SiSupabase />, color: 'text-green-400' },
  { name: 'MySQL', icon: <GrMysql />, color: 'text-blue-200' },
  
];

const lang = [
  { name: 'Bash', icon: <SiGnubash />, color: 'text-gray-500' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400'},
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-400' },
  { name: 'Java', icon: <BiLogoJava />, color: 'text-orange-500' },
  { name: 'Python', icon: <SiPython />, color: 'text-blue-300' },
  { name: 'Dart', icon: <SiDart />, color: 'text-blue-300' },
  { name: 'C', icon: <SiC />, color: 'text-gray-400' },
  { name: 'CSS', icon: <SiCss3 />, color: 'text-cyan-400' },
  { name: 'HTML', icon: <SiHtml5 />, color: 'text-orange-500' },
];

const tools = [
  { name: 'Git', icon: <SiGit />, color: 'text-orange-500' },
  { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-100' },
  { name: 'Vercel', icon: <SiVercel />, color: 'text-white' },
  { name: 'Figma', icon: <SiFigma />, color: 'text-red-500' },
  { name: 'Material UI', icon: <SiMui />, color: 'text-blue-500' },
  { name: 'ChatGPT', icon: <SiOpenai />, color: 'text-teal-200' },
  { name: 'Visual Studio Code', icon: <SiVisualstudiocode />, color: 'text-sky-400'},
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

const imports = [frameworks, lang, tools, skills]

export default imports;