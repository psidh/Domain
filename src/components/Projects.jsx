import React, { useState } from "react";
import { X } from "lucide-react"; // Optional: for close icon
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    title: "Prithvi",
    subtitle: "Key Val Database built from scratch",
    period: "Jul 2025",
    description:
      "Prithvi is an open-source, in-memory key-value database written in Java — built from scratch for performance, transparency, and developer control. It supports multiple data types, expiration, LRU caching, disk persistence, and a multi-threaded architecture.",
    details: [
      "Built from scratch in Java with support for multiple data types and advanced features.",
      "Implemented core data structures including Strings, Lists, and Sets, with over 20 commands supported and performance benchmarked at 138K+ ops/sec on commodity hardware. Added TTL and LRU cache policies for efficient memory usage.",
      "Designed a thread-safe architecture using synchronized blocks and multithreaded client handling, tested to handle 100+ , (10,000,000 reqs) concurrent connections with no race conditions or data corruption.",
      "Built a robust JWT-style authentication system from scratch, including AUTH and TOKEN commands for per-session security.",
      "Added Write-Ahead Logging (WAL) for crash recovery and disk persistence, with startup log replay ensuring durability of data.",
      "Developed a JavaScript SDK and CLI client for seamless interaction, and documented all commands and features in a comprehensive README.",
      "Delivered a production-grade MVP running on port 1902, built in under 45 days with a focus on performance, reliability, and extensibility.",
    ],

    image: "https://prithvi.psidharth.dev/prithvi.png",
    deployedLink: "https://prithvi.psidharth.dev",
    githubLink: "https://github/psidh/Prithvi",
  },
  {
    title: "Ganges",
    subtitle: "Dynamically Typed - Interpreted Language",
    period: "Jul 2024",
    description:
      "A Sanskrit based programming language in GoLang. Features : Loops, Functions, Arrays, HashMaps, HashSets.",
    details: [
      "Created Ganges, a custom programming language with Sanskrit-inspired syntax, designed for clarity and educational use in systems programming.",
      "Built a complete recursive descent parser and tree-walking interpreter from scratch in Go, supporting variables, conditionals, loops, functions, and HashSet, Arrays, HashMap data structures.",
      "Designed and implemented a real-time browser-based playground for the language, enabling instant feedback and code visualization.",
      " Delivered a complete MVP in under 30 days, including support for control flow, expression evaluation, and extensible architecture for future compilation to WebAssembly.",
    ],
    image: "https://ganges.psidharth.dev/assets/meta-header.png",
    deployedLink: "https://ganges.psidharth.dev",
    githubLink: "https://github/psidh/Ganges",
  },
  {
    title: "Sahayata",
    subtitle: "Smart India Hackathon 2023",
    period: "Jul - Nov 2023",
    description:
      "Web app for shovel operators to monitor real-time dumper truck locations and statuses.",
    details: [
      "Developed an IoT-driven coal optimization platform, integrating real-time sensor data to enhance supply chain efficiency.",
      "Engineered a low-latency, cost-effective sensor network, reducing coal transportation inefficiencies by 10%.",
      "Optimized resource allocation, resulting in a 21% increase in operational savings and increased logistics throughput.",
      "Achieved a Google Lighthouse score of 90, ensuring a high-performance, SEO-optimized platform.",
    ],
    image: "/icons/spruce.jpeg",
    deployedLink: "https://sahayata.vercel.app/",
    githubLink: "https://github.com/psidh/Sahayata",
  },

  {
    title: "Chess Web app",
    subtitle: "Online Multiplayer Chess game",
    period: "Jan 2025",
    description:
      "Online Multiplayer Chess game implemented through WebSockets. Play 1v1, random people on the server.",
    details: [
      "Real-time multiplayer chess via WebSockets",
      "Supports 1v1 matches with random matchmaking.",
      "Move validation and game rules implemented through chess.js",
      "Client-side board rendering with interactive UI",
      "Random matchmaking for 1v1 games using simple queues",
      "User accounts likely managed via Prisma/PostgreSQL. Database sync for game history, stats, or profile data",
    ],
    image: "/projects/chess.png",
    deployedLink: "-",
    githubLink: "https://github.com/psidh/chess",
    demoVideo: "",
  },
  {
    title: "DevFest RSVP",
    subtitle: "Google Developer Groups | Vizag",
    period: "Dec 2023",
    description:
      "Central RSVP site for GDG DevFest Vizag 2023. Manages live check-ins, confirmations, and analytics.",
    details: [
      "Real-time attendee tracking QR code , ",
      "Check-in systems for more than 10 sessions in the event.",
      "Exportable analytics dashboard",
      "Built with Next.js + Firebase. Integrated React-QR-Code for the check-ins.",
    ],
    image: "/projects/project13.png",
    deployedLink: "-",
    githubLink: "https://github.com/psidh/devFest23",
  },
];

const ProjectCard = ({ project, onClick, onHover, onLeave }) => (
  <div
    onClick={() => onClick(project)}
    onMouseEnter={(e) => onHover(project, e)}
    onMouseLeave={onLeave}
    className="rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
  >
    <h3 className="text-xl font-semibold">{project.title}</h3>
    {/* <div className="w-full h-[0.1px] mt-3 bg-neutral-600" /> */}
    <div className="flex items-center justify-between text-lg font-normal">
      <h4 className="my-4 text-sm text-neutral-500 font-medium">
        {project.subtitle}
      </h4>
      <p className="text-neutral-500 text-sm">{project.period}</p>
    </div>
    <p className="text-neutral-300 font-medium mb-4">{project.description}</p>
    <div className="w-full h-[0.1px] bg-neutral-500"></div>
  </div>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hovered, setHovered] = useState({ project: null, x: 0, y: 0 });

  let hoverTimeout;

  const handleHover = (project, e) => {
    clearTimeout(hoverTimeout);
    const rect = e.currentTarget.getBoundingClientRect();
    hoverTimeout = setTimeout(() => {
      setHovered({
        project,
        x: rect.right - 200,
        y: rect.top - 100,
      });
    }, 150); // adjust delay as needed
  };

  const handleLeave = () => {
    clearTimeout(hoverTimeout);
    setHovered({ project: null, x: 0, y: 0 });
  };

  return (
    <>
      <div className="dynamic-glow-red mt-4 flex flex-col gap-6 pr-2 w-full lg:w-1/3 border border-red-900 bg-gradient-to-br from-red-950/50 to-black p-5 rounded-xl overflow-y-auto h-[65vh]">
        <h3 className="text-red-500 text-3xl lg:mt-0 lg:text-left font-semibold w-full text-center">
          Projects
        </h3>
        <div className="w-full border border-red-800 h-[1px] "></div>
        {projectsData.map((p) => (
          <ProjectCard
            key={p.title}
            project={p}
            onClick={setSelectedProject}
            onHover={handleHover}
            onLeave={handleLeave}
          />
        ))}
      </div>

      {/* Hover Preview */}
      <AnimatePresence>
        {hovered.project && (
          <motion.div
            key={hovered.project.title}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed z-50 p-4 w-[300px] backdrop-blur bg-black bg-opacity-60 border border-neutral-700 rounded-lg shadow-xl text-sm text-neutral-300 pointer-events-none"
            style={{
              top: `${hovered.y}px`,
              left: `${hovered.x}px`,
            }}
          >
            <img
              src={hovered.project?.image}
              alt=""
              className="rounded-xl mb-2 w-full h-[20vh] object-cover object-center"
            />
            <h4 className="font-semibold text-white mb-1">
              {hovered.project.title}
            </h4>
            <p>Click for more info</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[900px] backdrop-blur-2xl bg-black bg-opacity-30 z-50 transform transition-transform duration-300 ease-in-out overflow-y-scroll ${
          selectedProject ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-700">
          <h2 className="text-xl text-white font-semibold">
            {selectedProject?.title}
          </h2>
          <button
            className="text-neutral-400 hover:text-white transition"
            onClick={() => setSelectedProject(null)}
          >
            <X />
          </button>
        </div>
        <div className="p-6 text-neutral-300 space-y-3">
          {selectedProject?.image ? (
            <img
              src={selectedProject?.image}
              alt=""
              className="w-full h-[50vh] mb-2 object-cover object-left rounded-xl"
            />
          ) : (
            <p className="text-4xl flex flex-col items-center justify-center h-[30vh] text">
              Loading
            </p>
          )}
          <h4 className="text-base my-4 text-neutral-400">
            {selectedProject?.subtitle} • {selectedProject?.period}
          </h4>
          <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:justify-start">
            {selectedProject?.deployedLink === "-" ? (
              <p className="my-2 text-fuchsia-800 font-semibold">
                Deployed Link
              </p>
            ) : (
              <a
                href={selectedProject?.deployedLink}
                target="_blank"
                className="my-2 text-fuchsia-400 font-semibold"
              >
                Deployed Link
              </a>
            )}
            <a
              href={selectedProject?.githubLink}
              target="_blank"
              className="my-2 text-blue-500 font-semibold"
            >
              GitHub Link
            </a>
          </div>
          <hr className="border border-neutral-700" />
          {Array.isArray(selectedProject?.details) ? (
            selectedProject.details.map((detail, idx) => (
              <li key={idx} className="list-disc list-inside">
                {detail}
              </li>
            ))
          ) : (
            <p>{selectedProject?.details}</p>
          )}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
          onClick={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
