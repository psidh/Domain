// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// const experiences = [
//   {
//     company: "Beesi",
//     role: "Full Stack Developer",
//     duration: "Jan - Mar 2025",
//     points: [
//       "Internal tooling in dashboard using Redux, Firebase, TypeScript, MUI",
//     ],
//     links: [
//       { text: "beesidiary.in", href: "https://beesidiary.in" },
//       { text: "poolmoney.in", href: "https://poolmoney.in" },
//     ],
//   },
//   {
//     company: "Spotmies",
//     role: "Cloud & React Intern",
//     duration: "Jun - Jul 2024",
//     points: [
//       "Built features with AWS Cognito, Rekognition, and React UI tooling",
//     ],
//     links: [{ text: "Spotmies", href: "https://spotmies.com" }],
//   },
//   {
//     company: "theAnanta",
//     role: "Full Stack Developer",
//     duration: "May 2024 - Jan 2025",
//     points: [
//       "Built Shramasa & freelance projects using Next.js, Express, PostgreSQL",
//     ],
//     links: [{ text: "TheAnanta", href: "https://theananta.in" }],
//   },
// ];

// const Experience = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start", "end end"],
//   });

//   // Smooth out scroll-based motion using useSpring
//   const smoothScroll = useSpring(scrollYProgress, {
//     stiffness: 60,
//     damping: 20,
//     mass: 0.6,
//   });

//   const x = useTransform(smoothScroll, [0, 1], ["0%", "-60%"]);
//   const particleX = useTransform(smoothScroll, [0, 1], ["0%", "1000%"]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative w-full py-24 px-4 overflow-hidden h-screen mx-24"
//     >
//       <h2 className="text-[#0cc115] text-3xl md:text-4xl font-bold mb-12">
//         Experience
//       </h2>

//       <div className="relative mb-16 h-12 flex items-center border-black">
//         {/* Timeline line */}
//         <div className="absolute top-[70%] left-0 w-full h-[1px] bg-neutral-200 dark:bg-[#00FF0D]/30 z-10 transform -translate-y-[60%]" />

//         {/* Particle dot */}
//         <motion.div
//           className="absolute top-1/2 left-0 w-6 h-6 bg-[#0cc115] rounded-full border-[3px] border-green-200 dark:border-[#121212] z-20 transform -translate-y-1/2 -translate-x-1/2"
//           style={{
//             x: particleX,
//             boxShadow: "0 0 15px 5px rgba(12, 193, 21, 0.3)",
//           }}
//         />
//       </div>

//       <motion.div
//         style={{ x }}
//         className="flex space-x-24 items-center relative px-8 transition-transform duration-100"
//       >
//         {experiences.map((exp, i) => (
//           <div
//             key={i}
//             className="checkpoint flex flex-col items-center min-w-[350px] max-w-[400px] duration-300"
//           >
//             <div className="flex flex-col items-start justify-start text-center space-y-3 p-6 bg-white/5 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-neutral-800">
//               <h3 className="text-3xl font-semibold text-neutral-900 dark:text-white">
//                 {exp.company}
//               </h3>
//               <div className="w-full h-[1px] bg-neutral-200 dark:bg-[#00FF0D]/30 z-10 transform -translate-y-[60%]" />
//               <p className="text-lg text-neutral-600">
//                 {exp.role}
//                 <span className="text-sm text-neutral-400">{"  "}|  {exp.duration}</span>
//               </p>

//               <ul className="text-left text-neutral-400 dark:text-neutral-300 mt-3 list-disc list-inside">
//                 {exp.points.map((point, idx) => (
//                   <li key={idx}>{point}</li>
//                 ))}
//               </ul>
//               {Array.isArray(exp.links) && exp.links.length > 0 && (
//                 <p className="text-base mt-3 text-neutral-600">
//                   Links:{" "}
//                   {exp.links
//                     .map((link, i) => (
//                       <a
//                         key={i}
//                         href={link.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:underline underline-offset-2 text-[#0cc115] mx-1"
//                       >
//                         {link.text}
//                       </a>
//                     ))
//                     .reduce((acc, curr, i) => {
//                       if (i === 0) return [curr];
//                       return [
//                         ...acc,
//                         <span key={`sep-${i}`} className="text-neutral-500">
//                           |
//                         </span>,
//                         curr,
//                       ];
//                     }, [])}
//                 </p>
//               )}
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Experience;

"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const experiences = [
  {
    company: "Beesi",
    role: "Full Stack Developer",
    duration: "Jan - Mar 2025",
    points: [
      "Internal tooling in dashboard using Redux, Firebase, TypeScript, MUI",
    ],
    links: [
      { text: "beesidiary.in", href: "https://beesidiary.in" },
      { text: "poolmoney.in", href: "https://poolmoney.in" },
    ],
  },
  {
    company: "Spotmies",
    role: "Cloud & React Intern",
    duration: "Jun - Jul 2024",
    points: [
      "Built features with AWS Cognito, Rekognition, and React UI tooling",
    ],
    links: [{ text: "Spotmies", href: "https://spotmies.com" }],
  },
  {
    company: "theAnanta",
    role: "Full Stack Developer",
    duration: "May 2024 - Jan 2025",
    points: [
      "Built Shramasa & freelance projects using Next.js, Express, PostgreSQL",
    ],
    links: [{ text: "TheAnanta", href: "https://theananta.in" }],
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end end"],
  });

  // Smooth out scroll-based motion using useSpring
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.6,
  });

  // Define all transforms regardless of viewport
  const x = useTransform(smoothScroll, [0, 1], ["0%", "-60%"]);
  const particleX = useTransform(smoothScroll, [0, 1], ["0%", "3600%"]);
  // const particleY = useTransform(smoothScroll, [0, 1], ["3000%", "-300%"]);
  const particleY = useTransform(
    smoothScroll,
    [0, 0.5, 1],
    ["3000%", "1100%", "-300%"]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-12 md:py-24 px-4 overflow-hidden md:h-screen mx-4 md:mx-24"
    >
      <h2 className="text-[#0cc115] text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center md:text-left">
        Experience
      </h2>

      {/* Timeline only visible on desktop */}
      {!isMobile && (
        <div className="relative mb-16 h-12 hidden md:flex items-center border-black">
          {/* Timeline line */}
          <div className="absolute top-[70%] left-0 w-full h-[1px] bg-neutral-200 dark:bg-[#00FF0D]/30 z-10 transform -translate-y-[60%]" />

          {/* Particle dot */}
          <motion.div
            className="absolute top-1/2 left-0 w-6 h-6 bg-[#0cc115] rounded-full border-[3px] border-green-200 dark:border-[#121212] z-20 transform -translate-y-1/2 -translate-x-1/2"
            style={{
              x: particleX,
              boxShadow: "0 0 15px 5px rgba(12, 193, 21, 0.3)",
            }}
          />
        </div>
      )}

      {isMobile && (
        <div className="flex items-center justify-center">
          {/* Vertical timeline line */}
          <div className="absolute top-0 left-4 w-[1px] h-[80%] mt-48 bg-neutral-200 dark:bg-[#00FF0D]/30 z-10" />

          {/* Vertical particle dot */}
          <motion.div
            className="absolute left-1 top-0 w-6 h-6 bg-[#0cc115] rounded-full border-[3px] border-green-200 dark:border-[#121212] z-20"
            style={{
              y: particleY,
              boxShadow: "0 0 15px 5px rgba(12, 193, 21, 0.3)",
            }}
          />
        </div>
      )}

      {/* Mobile version: vertical layout */}
      {isMobile ? (
        <div className="flex flex-col space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="w-[95%] duration-300 relative">
              <div className="flex items-start">
                <div className="flex-1 flex flex-col items-start justify-start space-y-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 ml-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    {exp.company}
                  </h3>
                  <div className="w-full h-[1px] bg-neutral-200 dark:bg-[#00FF0D]/30" />
                  <p className="text-base text-neutral-600">
                    {exp.role}
                    <span className="text-sm text-neutral-400 block mt-1">
                      {exp.duration}
                    </span>
                  </p>

                  <ul className="text-left text-neutral-400 dark:text-neutral-300 mt-2 list-disc list-inside">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  {Array.isArray(exp.links) && exp.links.length > 0 && (
                    <p className="text-sm mt-2 text-neutral-600">
                      Links:{" "}
                      {exp.links
                        .map((link, i) => (
                          <a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline underline-offset-2 text-[#0cc115] mx-1"
                          >
                            {link.text}
                          </a>
                        ))
                        .reduce((acc, curr, i) => {
                          if (i === 0) return [curr];
                          return [
                            ...acc,
                            <span key={`sep-${i}`} className="text-neutral-500">
                              |
                            </span>,
                            curr,
                          ];
                        }, [])}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop version: horizontal scroll */
        <motion.div
          style={{ x }}
          className="flex space-x-24 items-center relative px-8 transition-transform duration-100"
        >
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="checkpoint flex flex-col items-center min-w-[550px] max-w-[600px] duration-300"
            >
              <div className="flex flex-col items-start justify-start text-center space-y-3 p-6 bg-white/5 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-3xl font-semibold text-neutral-900 dark:text-white">
                  {exp.company}
                </h3>
                <div className="w-full h-[1px] bg-neutral-200 dark:bg-[#00FF0D]/30 z-10 transform -translate-y-[60%]" />
                <div className="w-full flex items-center justify-between">
                  <p className="text-lg text-neutral-600">{exp.role}</p>
                  <span className="text-sm text-neutral-400">
                    {exp.duration}
                  </span>
                </div>

                <ul className="text-left text-neutral-400 dark:text-neutral-300 mt-3 list-disc list-inside">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                {Array.isArray(exp.links) && exp.links.length > 0 && (
                  <p className="text-base mt-3 text-neutral-600">
                    Links:{" "}
                    {exp.links
                      .map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline underline-offset-2 text-[#0cc115] mx-1"
                        >
                          {link.text}
                        </a>
                      ))
                      .reduce((acc, curr, i) => {
                        if (i === 0) return [curr];
                        return [
                          ...acc,
                          <span key={`sep-${i}`} className="text-neutral-500">
                            |
                          </span>,
                          curr,
                        ];
                      }, [])}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Experience;
