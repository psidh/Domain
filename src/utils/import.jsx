import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiRust,
  SiKubernetes,
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
  SiTerraform,
  SiNeovim,
  SiVim,
} from "react-icons/si";
import { BiLogoJava, BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiRedis } from "react-icons/di";

const frameworks = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TurboRepo", icon: <SiTurborepo /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
  { name: "React", icon: <SiReact /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Mongodb", icon: <SiMongodb /> },
  { name: "K8s", icon: <SiKubernetes /> },
  { name: "Redis", icon: <DiRedis /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
];

const lang = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Java", icon: <BiLogoJava /> },
  { name: "Python", icon: <SiPython /> },
  { name: "C", icon: <SiC /> },
  { name: "Rust", icon: <SiRust /> },
];

const tools = [
  { name: "NeoVim", icon: <SiNeovim /> },
  { name: "Vim", icon: <SiVim /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Grafana", icon: <SiGrafana /> },
  { name: "Prometheus", icon: <SiPrometheus /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Terraform", icon: <SiTerraform /> },
  { name: "FireBase", icon: <SiFirebase /> },
  { name: "Docker", icon: <FaDocker /> },
];

const imports = [frameworks, lang, tools];

export default imports;
