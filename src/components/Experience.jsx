import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const experienceData = [
  {
    title: "PoolMoney",
    subtitle: "Full Stack Developer",
    period: "Jan - Mar 2025",
    description:
      "Internal tooling in dashboard using Redux, Firebase, TypeScript, MUI",
    details:
      "Worked closely with the core team to build performance-focused dashboards using Redux for state management and Firebase for backend. Built multiple reusable components using Material UI.",
    image: "/projects/pool.png",
  },
  {
    title: "Spotmies",
    subtitle: "Cloud & React Intern",
    period: "Jun - Jul 2024",
    description:
      "Built features with AWS Cognito, Rekognition, and React UI tooling",
    details:
      "Developed user authentication flows with AWS Cognito and implemented image recognition features with Rekognition. Also enhanced the internal UI framework using React and CSS.",
    image: "/projects/spot.png",
  },
  {
    title: "TheAnanta",
    subtitle: "Full Stack Developer",
    period: "Jun - Jul 2024",
    description:
      "Built Shramasa & freelance projects using Next.js, Express, PostgreSQL",
    details:
      "Created and shipped client projects from scratch including frontend (Next.js), backend (Express), and database integration (PostgreSQL). Worked in agile sprints delivering full features every week.",
    image: "/projects/anan.png",
  },
];

const ExperienceCard = ({ exp, onClick, onHover, onLeave }) => (
  <div
    onClick={() => onClick(exp)}
    onMouseEnter={(e) => onHover(exp, e)}
    onMouseLeave={onLeave}
    className="cursor-pointer"
  >
    <h3 className="text-xl font-semibold">{exp.title}</h3>
    <div className="w-full h-[0.1px] mt-3 bg-neutral-600" />
    <div className="flex items-center justify-between text-lg font-normal">
      <h4 className="my-4 text-sm text-neutral-300 font-medium">
        {exp.subtitle}
      </h4>
      <p className="text-neutral-400 text-sm">{exp.period}</p>
    </div>
    <p className="text-neutral-300 font-medium">{exp.description}</p>
  </div>
);

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);
  const [hovered, setHovered] = useState({ exp: null, x: 0, y: 0 });

  let hoverTimeout;

  const handleHover = (exp, e) => {
    clearTimeout(hoverTimeout);
    const rect = e.currentTarget.getBoundingClientRect();
    hoverTimeout = setTimeout(() => {
      setHovered({
        exp,
        x: rect.right - 200,
        y: rect.top - 100,
      });
    }, 150);
  };

  const handleLeave = () => {
    clearTimeout(hoverTimeout);
    setHovered({ exp: null, x: 0, y: 0 });
  };

  return (
    <>
      <div className="dynamic-glow-blue lg:mx-4 mt-4  flex flex-col gap-6 pr-2 w-full lg:w-1/3 border border-blue-900 bg-gradient-to-br from-blue-950 to-black p-4 rounded-xl overflow-y-auto h-[60vh] mb-6">
        <h3 className="text-blue-300 text-3xl lg:mt-0 lg:text-2xl font-semibold w-full lg:text-left text-center">
          Experience
        </h3>
        <div className="w-full border border-blue-900 h-[1px] mb-4"></div>
        {experienceData.map((e) => (
          <ExperienceCard
            key={e.title}
            exp={e}
            onClick={setSelectedExp}
            onHover={handleHover}
            onLeave={handleLeave}
          />
        ))}
      </div>

      {/* Hover Preview */}
      <AnimatePresence>
        {hovered.exp && (
          <motion.div
            key={hovered.exp.title}
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
            <img src={hovered.exp?.image} alt="" className="rounded-xl mb-2" />
            <h4 className="font-semibold text-white mb-1">
              {hovered.exp.title}
            </h4>
            <p>Click for more info</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[500px] backdrop-blur-2xl bg-black bg-opacity-30 z-50 transform transition-transform duration-300 ease-in-out ${
          selectedExp ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-700">
          <h2 className="text-xl text-white font-semibold">
            {selectedExp?.title}
          </h2>
          <button
            className="text-neutral-400 hover:text-white transition"
            onClick={() => setSelectedExp(null)}
          >
            <X />
          </button>
        </div>
        <div className="p-6 text-neutral-300 space-y-3">
          {selectedExp?.image ? (
            <img
              src={selectedExp?.image}
              alt=""
              className="w-full h-[50vh] mb-2 object-cover object-center rounded-xl"
            />
          ) : (
            <p className="text-4xl flex flex-col items-center justify-center h-[30vh] text">
              Loading
            </p>
          )}
          <h4 className="text-sm text-neutral-400">
            {selectedExp?.subtitle} • {selectedExp?.period}
          </h4>
          <p>{selectedExp?.details}</p>
        </div>
      </div>

      {selectedExp && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
          onClick={() => setSelectedExp(null)}
        />
      )}
    </>
  );
}
