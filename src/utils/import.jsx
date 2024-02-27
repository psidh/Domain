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
  SiPandas,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiGithub,
  SiDart,
  SiFigma,
  SiMui,
  SiVercel,
  SiOpenai,
  SiVisualstudiocode,
  SiPycharm,
  SiIntellijidea,
  SiWebstorm,
  SiPostman,
  SiFlutter,
} from 'react-icons/si'; // Import the icons
import { GrMysql } from 'react-icons/gr';
import { FaVuejs } from 'react-icons/fa6';
import { BiLogoJava, BiLogoFlask } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa';

const frameworks = [
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'React.js', icon: <SiReact />,},
  { name: 'Vue.js', icon: <FaVuejs />,},
  { name: 'Tailwind', icon: <SiTailwindcss />,},
  { name: 'Express', icon: <SiExpress />,  },
  { name: 'Node.js', icon: <FaNodeJs />, },
  { name: 'Mongodb', icon: <SiMongodb />, },
  { name: 'Flask', icon: <BiLogoFlask />,  },
  { name: 'Flutter', icon: <SiFlutter />,  },
  { name: 'BootStrap', icon: <SiBootstrap />,  },
  { name: 'Jupyter', icon: <SiJupyter />,  },
  { name: 'Pandas', icon: <SiPandas />,  },
  { name: 'FireBase', icon: <SiFirebase />,  },
  { name: 'SupaBase', icon: <SiSupabase />, },
  { name: 'MySQL', icon: <GrMysql />,  },
];

const lang = [
  { name: 'Bash', icon: <SiGnubash />,  },
  { name: 'JavaScript', icon: <SiJavascript />,  },
  { name: 'TypeScript', icon: <SiTypescript />, },
  { name: 'Java', icon: <BiLogoJava />,  },
  { name: 'Python', icon: <SiPython />,  },
  { name: 'Dart', icon: <SiDart />,  },
  { name: 'C', icon: <SiC />,  },
  { name: 'CSS', icon: <SiCss3 />,},
  { name: 'HTML', icon: <SiHtml5 />,  },
];

const tools = [
  { name: 'Git', icon: <SiGit />,  },
  { name: 'GitHub', icon: <SiGithub />, },
  { name: 'Vercel', icon: <SiVercel />,  },
  { name: 'Figma', icon: <SiFigma />,  },
  { name: 'Material UI', icon: <SiMui />,  },
  { name: 'ChatGPT', icon: <SiOpenai /> },
  {
    name: 'Visual Studio Code',
    icon: <SiVisualstudiocode />,
    color: 'text-sky-400',
  },
  { name: 'PyCharm', icon: <SiPycharm />, },
  { name: 'WebStorm', icon: <SiWebstorm />, },
  { name: 'IntelliJ', icon: <SiIntellijidea />,  },
  { name: 'PostMan', icon: <SiPostman />,  },
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

const imports = [frameworks, lang, tools, skills];

export default imports;
