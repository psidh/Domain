import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const experienceData = [
  {
    title: "PoolMoney",
    subtitle: "Full Stack Developer",
    period: "Jan - Mar 2025",
    description:
      "Worked on Website FrontEnd and Internal tooling in admin dashboard using Redux, Firebase, TypeScript, MUI",
    details: [
      "Independently Designed and Developed the PoolMoney Website to build a responsive landing page with extensive animations using GSAP, improving user engagement",
      "Solely Designed the BeesiDiary Website front-end with React and Firebase Firestore for real-time data, delivering fine-tuned user experience.",
      "Enhanced the PoolMoney Admin Panel using React, Redux and Firebase Storage, implementing pre-filled dropdowns, a custom component built using recursive tree structure, and pagination for 2,200+ row tables to optimize admin functionality.",
    ],
    image: "/projects/pool.png",
    link: "https://poolmoney.in/",
  },
  {
    title: "Spotmies",
    subtitle: "Cloud & React Intern",
    period: "Jun - Jul 2024",
    description:
      "Built features with AWS Cognito, Rekognition, and React UI tooling",
    details: [
      "Expanded a highly intuitive and responsive web application integrated with a Web3 wallet system to enhance security and user experience.",
      "Optimized authentication processes by implementing AWS Rekognition, improving identity verification efficiency.",
      "Reduced website load time by 5% through lazy loading and performance optimizations.",
    ],
    image: "/projects/spot.png",
  },
  {
    title: "GirlScript Summer of Code",
    subtitle: "Full Stack Developer",
    period: "May 2024",
    description:
      "Built core features for MyStory, an open-source anonymous content-sharing platform.",
    details: [
      "Built core features for MyStory, an open-source anonymous content-sharing platform.",
      "Implemented authentication, role-based access control (RBAC), and lazy loading to improve efficiency.",
    ],
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
    <h3 className="text-xl font-semibold text-blue-300">{exp.title}</h3>
    <div className="flex items-center justify-between text-lg font-normal">
      <h4 className="my-4 text-sm text-neutral-500 font-medium">
        {exp.subtitle}
      </h4>
      <p className="text-neutral-500 text-sm">{exp.period}</p>
    </div>
    <p className="text-neutral-400 font-medium mb-4">
      {exp.description.length > 100 ? exp.description.slice(0, 100) + "…" : exp.description}
    </p>

    <div className="w-full h-[0.1px] bg-neutral-500"></div>
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
      <div className="lg:ml-4 mt-4  flex flex-col gap-6 pr-2 w-full lg:w-1/3 border border-blue-900 bg-gradient-to-br from-blue-950/50 to-black p-4 rounded-xl overflow-y-auto h-[65vh] mb-6">
        <h3 className="text-blue-300 text-3xl lg:mt-0 font-semibold w-full lg:text-left text-center">
          Experience
        </h3>
        <div className="w-full border border-blue-900 h-[1px] "></div>
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
            transition={{ duration: 0.3, ease: "easeOut" }}
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
        className={`fixed top-0 right-0 h-full w-full sm:w-[900px] backdrop-blur-2xl bg-black bg-opacity-30 z-50 transform transition-transform duration-300 ease-in-out ${
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
              className="w-full h-full mb-2 object-cover object-center rounded-xl"
            />
          ) : (
            <p className="text-4xl flex flex-col items-center justify-center h-[30vh] text">
              Loading
            </p>
          )}
          <h4 className="text-sm text-neutral-400">
            {selectedExp?.subtitle} • {selectedExp?.period}
          </h4>
          {Array.isArray(selectedExp?.details) ? (
            selectedExp.details.map((detail, idx) => (
              <li key={idx} className="list-disc list-inside">
                {detail}
              </li>
            ))
          ) : (
            <p>{selectedExp?.details}</p>
          )}
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
