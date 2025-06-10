"use client";
import Experience from "./Experience";
import Projects from "./Projects";
import Miscellaneous from "./Miscellaneous";
import Links from "./Links";

export default function Main() {
  return (
    <div className="relative z-20 py-12 px-8 md:px-12 md:pt-12 bg-transparent flex flex-col items-start w-full text-white">
      <div className="flex lg:flex-row  flex-col justify-between  mb-8 gap-8 h-full">
        <div className="dynamic-glow-red border border-red-900 bg-gradient-to-br from-red-950 to-black p-4 rounded-xl">
          <h1 className="text-4xl mb-6 md:text-[36px] text-center lg:text-left w-full lg:text-5xl font-semibold">
            Philkhana Sidharth
          </h1>
          {/* <h2 className="mt-4 text-center lg:text-left w-full font-medium text-xl ">
            Student    |    Developer
          </h2> */}
          <p className="text-md lg:text-base text-center md:text-left text-rose-100 font-medium w-full md:w-[94%] leading-7 my-6 lg:mt-4">
            I&apos;m a developer who{" "}
            <span className="bg-red-950 border mx-1 border-red-800 p-1 rounded-md">
              loves
            </span>{" "}
            building and pouring out code. My journey started at{" "}
            <span className="mx-1 underline underline-offset-2 font-medium">
              12
            </span>{" "}
            with Web and hasn&apos;t paused since. From winning{" "}
            <span className="text-red-500">hackathons</span> to building
            multiple <span className="text-red-500">Full Stack</span> apps, I
            craft code with intent and intensity.
          </p>
        </div>
        <Links />
      </div>

      <div className="lg:flex hidden">
        <div className="w-full flex lg:flex-row flex-col gap-y-12  lg:gap-y-0 lg:gap-6 overflow-y-scroll overflow-x-hidden">
          <Experience />
          <Projects />
          <Miscellaneous />
        </div>
      </div>
      <div className="lg:hidden flex">
        <div className="w-full flex lg:flex-row flex-col gap-y-6 p-1 lg:gap-y-0 lg:gap-6 ">
          <Experience />
          <Projects />
          <Miscellaneous />
        </div>
      </div>
    </div>
  );
}
