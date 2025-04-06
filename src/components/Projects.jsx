"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import projectsData from "@/app/data/projectsData.js";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const cardRefs = useRef([]);

  const projectsLimit = 3;

  useEffect(() => {
    // Clear existing triggers to avoid duplication
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, x: -30 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // when top of card hits 85% of viewport
            toggleActions: "play reverse play reverse"

          },
        }
      );
    });
  }, [showAllProjects]);

  return (
    <main>
      <div className="lg:px-24">
        <h2 className="text-[#1cac24] md:text-4xl text-3xl font-semibold text-center md:text-left sm:ml-4 pt-4">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:gap-4 lg:gap-8">
          {projectsData
            .slice(0, showAllProjects ? projectsData.length : projectsLimit)
            .map((project, index) => (
              <div
                key={index}
                className="my-4 mx-2"
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="project-card rounded-xl transform bg-neutral-50 dark:bg-neutral-900 overflow-clip transition duration-200 flex flex-col justify-start items-center h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-tr-md rounded-tl-md object-center object-cover w-full h-56"
                  />
                  <div className="p-6">
                    <p className="text-xl justify-center font-semibold my-4 flex items-center">
                      {project.title}
                    </p>
                    <p className="text-neutral-400 my-2">
                      {project.description}
                    </p>
                    <div className="grow" />
                    <div className="flex justify-between items-center w-full space-x-2">
                      {project.projectLink ? (
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:bg-[#00FF0D]/50 bg-neutral-300 dark:bg-neutral-800 rounded-full px-4 py-1 text-center mt-4 w-full transform transition-all duration-150"
                        >
                          Link
                        </a>
                      ) : (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:bg-[#00FF0D]/50 bg-neutral-300 dark:bg-neutral-800 rounded-full px-4 py-1 text-center mt-4 w-full transform transition-all duration-150"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {projectsData.length > projectsLimit && !showAllProjects && (
          <div className="my-8 flex flex-row items-center justify-center w-full px-16">
            <div className="h-[1px] w-full px-8 bg-neutral-600"></div>
            <button
              onClick={() => setShowAllProjects(true)}
              className="mx-8 shrink-0 bg-[#00FF0D] font-semibold text-black px-16 text-center py-2 rounded-full"
            >
              Show All
            </button>
            <div className="h-[1px] w-full px-8 bg-neutral-600"></div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;
