import React, { useState } from "react";
import { X } from "lucide-react"; // Optional: for close icon
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    title: "Sahayata",
    subtitle: "Smart India Hackathon 2023",
    period: "Jul - Nov 2023",
    description:
      "Web app for shovel operators to monitor real-time dumper truck locations and statuses.",
    details:
      "Sahayata was built with React, Firebase, and Mapbox. It features real-time updates, live dashboards, and location-based alerts. Used by mining operators to streamline vehicle routing.",
    image: "/icons/spruce.jpeg",
  },
  {
    title: "Rooster",
    subtitle: "One-Click React Deployment",
    period: "Jan - Mar 2025",
    description:
      "Tool that deploys any React app in a click using Node.js and AWS ECS - S3",
    details: "Includes CI/CD pipeline integration, zero-downtime deploys .",
    image: "/projects/rooster.png",
  },
  {
    title: "DevFest RSVP",
    subtitle: "Google Developer Groups | Vizag",
    period: "Dec 2023",
    description:
      "Central RSVP site for GDG DevFest Vizag 2023. Manages live check-ins, confirmations, and analytics.",
    details:
      "Real-time attendee tracking, QR code check-in system, exportable analytics dashboard, built with Next.js + PostgreSQL.",
    image: "/projects/project13.png",
  },
];

const ProjectCard = ({ project, onClick, onHover, onLeave }) => (
  <div
    onClick={() => onClick(project)}
    onMouseEnter={(e) => onHover(project, e)}
    onMouseLeave={onLeave}
    className="p-4 backdrop-blur-3xl bg-opacity-[5%] rounded-lg cursor-pointer hover:bg-opacity-10 transition-all duration-300 ease-in-out "
  >
    <h3 className="text-xl font-semibold">{project.title}</h3>
    <div className="w-full h-[0.1px] mt-3 bg-neutral-600" />
    <div className="flex items-center justify-between text-lg font-normal">
      <h4 className="my-4 text-sm text-neutral-300 font-medium">
        {project.subtitle}
      </h4>
      <p className="text-neutral-400 text-sm">{project.period}</p>
    </div>
    <p className="text-neutral-300 font-medium">{project.description}</p>
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
      <div className="flex flex-col gap-6 pr-2 w-full lg:w-1/3">
        <h3 className="text-3xl mt-6 lg:mt-0 lg:text-lg text-green-300 font-semibold w-full text-center">
          Projects
        </h3>
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
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed z-50 p-4 w-[300px] backdrop-blur bg-black bg-opacity-60 border border-neutral-700 rounded-lg shadow-xl text-sm text-neutral-300 pointer-events-none"
            style={{
              top: `${hovered.y}px`,
              left: `${hovered.x}px`,
            }}
          >
            <img
              src={hovered.project?.image}
              alt=""
              className="rounded-xl mb-2"
            />
            <h4 className="font-semibold text-white mb-1">
              {hovered.project.title}
            </h4>
            <p>{hovered.project.details}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[500px] backdrop-blur-2xl bg-black bg-opacity-30 z-50 transform transition-transform duration-300 ease-in-out ${
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
          <img
            src={selectedProject?.image}
            alt=""
            className="w-full h-[50vh] mb-2 object-cover object-center rounded-xl"
          />
          <h4 className="text-sm text-neutral-400">
            {selectedProject?.subtitle} • {selectedProject?.period}
          </h4>
          <p>{selectedProject?.details}</p>
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
