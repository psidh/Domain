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
  SiTurborepo,
  SiPrisma,
  SiRecoil,
  SiPrometheus,
  SiGrafana,
} from 'react-icons/si'; 
import { BiLogoJava, BiLogoPostgresql } from 'react-icons/bi';
import { FaNodeJs, FaAws } from 'react-icons/fa';
import { FaDocker } from "react-icons/fa";
import { DiRedis } from "react-icons/di";

const frameworks = [
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'TurboRepo', icon: <SiTurborepo /> },
  { name: 'Prisma', icon: <SiPrisma /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'PostgreSQL', icon: <BiLogoPostgresql /> },
  { name: 'React.js', icon: <SiReact />,},
  { name: 'Docker', icon: <FaDocker />},
  { name: 'Recoil', icon: <SiRecoil />},
  { name: 'Express', icon: <SiExpress />,  },
  { name: 'Node.js', icon: <FaNodeJs />, },
  { name: 'Mongodb', icon: <SiMongodb />, },
  { name: 'FireBase', icon: <SiFirebase />,  },
  { name: 'SupaBase', icon: <SiSupabase />, },
  { name: 'Prometheus', icon: <SiPrometheus />},
  { name: 'Grafana', icon: <SiGrafana />},
  { name: 'Redis', icon: <DiRedis />},
  { name: 'Tailwind', icon: <SiTailwindcss />,},
  
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
