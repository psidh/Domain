"use client";
import Experience from "./Experience";
import Projects from "./Projects";
import Miscellaneous from "./Miscellaneous";
import Links from "./Links";

export default function Main() {
  return (
    <div className="relative z-20 py-12 px-8 md:px-12 md:pt-12 bg-transparent flex flex-col items-start w-full text-white">
      <div className=" flex lg:flex-row flex-col items-center justify-between w-full mb-8 lg:gap-0 gap-8">
        <div>
          <h1 className="text-5xl md:text-[36px] text-center lg:text-left w-full lg:text-5xl font-semibold">
            Philkhana Sidharth
          </h1>
          <h2 className="mt-4 text-center lg:text-left w-full font-medium text-xl text-neutral-400">
            Student    |    Developer
          </h2>
          <p className="text-md lg:text-lg text-center md:text-left text-neutral-100 font-medium w-full md:w-[94%] leading-8 lg:leading-8 my-6 lg:mt-4">
            I&apos;m a developer who builds like a maximalist and enjoys pouring
            out code. My journey started at 12 with Web and hasn&apos;t paused
            since. From winning hackathons to building multiple Full Stack apps,
            I craft code with intent and intensity.
          </p>
        </div>
        <Links />
      </div>

      <div className="lg:flex hidden">
        <div className="w-full flex lg:flex-row flex-col gap-y-12 lg:gap-y-0 lg:gap-6 overflow-hidden">
          <Experience />
          <div className="hidden lg:flex mt-24 h-[50vh] w-[1px] my-2 bg-neutral-600" />
          <Projects />
          <div className="hidden lg:flex mt-24 h-[50vh] w-[1px] my-2 bg-neutral-600" />
          <Miscellaneous />
        </div>
      </div>
      <div className="lg:hidden flex">
        <div className="w-full flex lg:flex-row flex-col gap-y-12 lg:gap-y-0 lg:gap-6 overflow-hidden">
          <Miscellaneous />
          <div className="hidden lg:flex mt-24 h-[50vh] w-[1px] my-2 bg-neutral-600" />
          <Experience />
          <div className="hidden lg:flex mt-24 h-[50vh] w-[1px] my-2 bg-neutral-600" />
          <Projects />
        </div>
      </div>
    </div>
  );
}
