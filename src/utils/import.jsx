import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGnubash,
  SiFirebase,
  SiSupabase,
} from 'react-icons/si'; 
import { BiLogoJava } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa';

const frameworks = [
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'React.js', icon: <SiReact />,},
  { name: 'Tailwind', icon: <SiTailwindcss />,},
  { name: 'Express', icon: <SiExpress />,  },
  { name: 'Node.js', icon: <FaNodeJs />, },
  { name: 'Mongodb', icon: <SiMongodb />, },
  { name: 'FireBase', icon: <SiFirebase />,  },
  { name: 'SupaBase', icon: <SiSupabase />, },
  
];

const lang = [
  { name: 'Bash', icon: <SiGnubash />,  },
  { name: 'JavaScript', icon: <SiJavascript />,  },
  { name: 'TypeScript', icon: <SiTypescript />, },
  { name: 'Java', icon: <BiLogoJava />,  },
  { name: 'Python', icon: <SiPython />,  },
  { name: 'C', icon: <SiC />,  },
  { name: 'CSS', icon: <SiCss3 />,},
  { name: 'HTML', icon: <SiHtml5 />,  },
];


const imports = [frameworks, lang];

export default imports;
