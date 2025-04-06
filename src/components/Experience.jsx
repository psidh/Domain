"use client";
// const Projects = () => {
//   return (
//     <main className="my-32">
//       <div className="lg:px-24">
//         <h2 className="text-[#0cc115] md:text-4xl text-3xl font-semibold text-center md:text-left sm:ml-6 pt-4">
//           Experience
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:gap-8">
//           {/* Card Template */}
//           {[
//             {
//               company: "Beesi",
//               role: "Full Stack Developer",
//               duration: "Jan - Mar 2025",
//               links: [
//                 { text: "beesidiary.in", href: "https://beesidiary.in" },
//                 { text: "poolmoney.in", href: "https://poolmoney.in" },
//               ],
//               points: [
//                 "Handled Internal Tooling in dashboard in Redux, Firebase, TypeScript & MUI",
//               ],
//             },
//             {
//               company: "Spotmies",
//               role: "Cloud & React Intern",
//               duration: "Jun - Jul 2024",
//               points: [
//                 "Provided support and internal tooling in AWS Cognito, Rekognition, feature along with Front-End support in React",
//               ],
//             },
//             {
//               company: "theAnanta",
//               role: "Full Stack Developer",
//               duration: "May 2024 - Jan 2025",
//               points: [
//                 "Built Shramasa",
//                 "Built some freelance projects using Next.js, Tailwind CSS, Express, PostgreSQL",
//               ],
//             },
//           ].map((exp, index) => (
//             <div
//               key={index}
//               className="p-8 bg-white dark:bg-[#121212] rounded-2xl border border-neutral-200 dark:border-[#00FF0D]/30 text-neutral-900 dark:text-white space-y-5 shadow-md"
//             >
//               <h2 className="text-2xl md:text-4xl font-bold">{exp.company}</h2>
//               <div className="w-full h-[1px] bg-neutral-300 dark:bg-[#00FF0D]/30" />
//               <h3 className="text-xl md:text-2xl font-semibold">{exp.role}</h3>
//               <p className="text-md md:text-lg text-neutral-500">
//                 {exp.duration}
//               </p>
//               <ul className="list-disc space-y-2 text-[#00FF0D] ml-4">
//                 {exp.links && exp.links.length > 0 && (
//                   <li className="text-md md:text-lg">
//                     <span className="text-neutral-500">Built </span>
//                     {exp.links
//                       .map((link, i) => (
//                         <a
//                           key={i}
//                           href={link.href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="font-semibold text-neutral-700 dark:text-neutral-200 underline underline-offset-4 transition duration-300 hover:text-[#00FF0D]"
//                         >
//                           {link.text}
//                         </a>
//                       ))
//                       .reduce((prev, curr) => [
//                         prev,
//                         <span key="sep" className="text-neutral-400 mx-1">
//                           |
//                         </span>,
//                         curr,
//                       ])}
//                   </li>
//                 )}
//                 {exp.points.map((point, idx) => (
//                   <li
//                     key={idx}
//                     className="text-md md:text-lg text-neutral-700 dark:text-neutral-300"
//                   >
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Projects;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Projects = () => {
  // Refs for our animation targets
  const mainRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial page load animation
    const tl = gsap.timeline();

    // Animate the title with a glitch effect
    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        onComplete: () => {
          // Create glitch effect
          const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 5 });
          glitchTl
            .to(titleRef.current, {
              skewX: 10,
              duration: 0.1,
            })
            .to(titleRef.current, {
              skewX: -10,
              duration: 0.1,
            })
            .to(titleRef.current, {
              skewX: 0,
              duration: 0.3,
            });
        },
      }
    );

    // Animate cards with staggered entrance
    cardsRef.current.forEach((card, index) => {
      // Create card entrance animation
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.7,
          y: 100,
          rotation: -5 + Math.random() * 10,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          delay: 0.3 + index * 0.2,
          ease: "back.out(1.7)",
        }
      );

      // Create scroll animations
      ScrollTrigger.create({
        trigger: card,
        start: "top bottom-=100",
        onEnter: () => {
          gsap.to(card, {
            rotateY: 360,
            duration: 1.5,
            ease: "power2.out",
          });
        },
        once: true,
      });
    });

    // Background pulse animation
    gsap.to(mainRef.current, {
      background:
        "radial-gradient(circle at center, rgba(0,255,13,0.05) 0%, rgba(0,0,0,0) 70%)",
      backgroundSize: "200% 200%",
      backgroundPosition: "100% 100%",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      // Clean up animations when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([titleRef.current, ...cardsRef.current]);
    };
  }, []);

  // Function to add cards to the refs array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <main ref={mainRef} className="my-16 md:my-32 relative overflow-hidden">
      <div className="lg:px-24">
        <h2
          ref={titleRef}
          className="text-[#0cc115] md:text-4xl text-3xl font-semibold text-center md:text-left sm:ml-6 py-4"
        >
          Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:gap-8">
          {/* Card Template */}
          {[
            {
              company: "Beesi",
              role: "Full Stack Developer",
              duration: "Jan - Mar 2025",
              links: [
                { text: "beesidiary.in", href: "https://beesidiary.in" },
                { text: "poolmoney.in", href: "https://poolmoney.in" },
              ],
              points: [
                "Handled Internal Tooling in dashboard in Redux, Firebase, TypeScript & MUI",
              ],
            },
            {
              company: "Spotmies",
              role: "Cloud & React Intern",
              duration: "Jun - Jul 2024",
              points: [
                "Provided support and internal tooling in AWS Cognito, Rekognition, feature along with Front-End support in React",
              ],
            },
            {
              company: "theAnanta",
              role: "Full Stack Developer",
              duration: "May 2024 - Jan 2025",
              points: [
                "Built Shramasa",
                "Built some freelance projects using Next.js, Tailwind CSS, Express, PostgreSQL",
              ],
            },
          ].map((exp, index) => (
            <div
              key={index}
              ref={addToRefs}
              className=" p-8 bg-white dark:bg-[#121212] rounded-2xl border border-neutral-200 dark:border-[#00FF0D]/30 text-neutral-900 dark:text-white space-y-5 shadow-md relative"
            >
              {/* Glow effect div */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF0D] to-transparent -z-10 rounded-2xl opacity-0 glow-effect"></div>
              <h2 className="text-2xl md:text-4xl font-bold company-name">
                {exp.company}
              </h2>
              <div className="w-full h-[1px] bg-neutral-300 dark:bg-[#00FF0D]/30 " />
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-md text-neutral-500">{exp.duration}</p>
              <ul className="list-disc space-y-2 text-[#00FF0D] ml-4">
                {exp.links && exp.links.length > 0 && (
                  <li className="text-md">
                    <span className="text-neutral-500">Built </span>
                    {exp.links
                      .map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-neutral-700 dark:text-neutral-200 underline underline-offset-4 transition duration-300 hover:text-[#00FF0D]"
                        >
                          {link.text}
                        </a>
                      ))
                      .reduce(
                        (prev, curr, i) =>
                          i === 0
                            ? [curr]
                            : [
                                ...prev,
                                <span
                                  key={`sep-${i}`}
                                  className="text-neutral-400 mx-1"
                                >
                                  |
                                </span>,
                                curr,
                              ],
                        []
                      )}
                  </li>
                )}
                {exp.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-md font-light text-neutral-700 dark:text-neutral-300"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="particles-container fixed top-0 left-0 w-full h-full pointer-events-none -z-10"></div>
    </main>
  );
};

export default Projects;
