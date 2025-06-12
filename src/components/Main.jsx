"use client";
import Experience from "./Experience";
import Projects from "./Projects";
import Miscellaneous from "./Miscellaneous";
import Links from "./Links";

export default function Main() {
  return (
    <div className="relative z-20 py-12 px-8 md:px-12 md:pt-12 bg-transparent flex flex-col items-start w-full text-white">
      <div className="flex lg:flex-row  flex-col justify-between lg:ml-3 lg:mr-7 mb-8 gap-8 h-full">
        <div className="dynamic-glow-green border border-green-900 bg-gradient-to-br from-green-950/50 to-black p-4 rounded-xl">
          <div className="flex lg:flex-row flex-col-reverse items-center justify-center lg:justify-between">
            <div>
              <h1 className="text-4xl mb-6 md:text-[36px] text-center lg:text-left w-full lg:text-5xl font-semibold">
                Philkhana Sidharth
              </h1>
              <h2 className="mt-4 text-center lg:text-left w-full font-light text-base opacity-60">
                Full Stack Developer    |    Cloud
              </h2>
              <p className="text-md lg:text-base text-center md:text-left text-rose-50 font-normal w-full md:w-[98%] leading-7 my-6 lg:mt-4">
                I&apos;m a developer who{" "}
                <span className="text-green-500">loves</span> building and problem
                solving. My journey started at the age of{" "}
                <span className="mx-1 underline underline-offset-2 font-medium">
                  12
                </span>{" "}
                with Web and never looked back. From winning multiple{" "}
                <span className="text-green-500">hackathons</span> to building
                <span className="text-green-500">Full Stack</span> apps, I love exploring new avenues.
              </p>
            </div>
            <img
              src="/user.png"
              alt="User"
              className="w-32 h-32 lg:w-64 lg:h-64 object-cover rounded-full"
            />
          </div>
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
