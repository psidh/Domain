const Projects = () => {
  return (
    <main className="my-32">
      <div className="lg:px-24">
        <h2 className="text-[#00FF0D] md:text-4xl text-3xl font-semibold  text-center md:text-left sm:ml-6 pt-4">
          Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:gap-8">
          <div className="p-8 bg-[#121212] rounded-2xl text-white space-y-5">
            <h2 className="text-2xl md:text-4xl font-bold">Beesi</h2>
            <div className="w-full px-4 border-[#00FF0D]/30 border-[0.1px]" />
            <h3 className="text-xl md:text-2xl font-semibold">Full Stack Developer</h3>
            <p className="text-md md:text-lg text-neutral-500">Jan - Mar 2025</p>
            <ul className="list-disc space-y-2 text-[#00FF0D] ml-4">
              <li className="text-md md:text-lg">
                <span className="text-neutral-400">Built </span>
                <a
                  href="https://beesidiary.in"
                  target="_blank"
                  className="font-semibold text-neutral-200 underline underline-offset-4 transition duration-500 hover:text-[#00FF0D]"
                >
                  beesidiary.in
                </a>{" "}
                <span className="text-neutral-500">|</span>{" "}
                <a
                  href="https://poolmoney.in"
                  target="_blank"
                  className="font-semibold text-neutral-200 underline underline-offset-4 transition duration-500 hover:text-[#00FF0D]"
                >
                  poolmoney.in
                </a>{" "}
              </li>
              <li>
                {" "}
                <span className="text-neutral-400">
                  Handled Internal Tooling in dashboard in{" "}
                </span>
                <span className="text-white">
                  Redux, Firebase, TypeScript & MUI
                </span>
              </li>
            </ul>
          </div>
          <div className="p-8 bg-[#121212] rounded-2xl text-white space-y-5">
            <h2 className="text-2xl md:text-4xl font-bold">Spotmies</h2>
            <div className="w-full px-4 border-[#00FF0D]/30 border-[0.1px]" />
            <h3 className="text-xl md:text-2xl font-semibold">Cloud & React Intern</h3>
            <p className="text-md md:text-lg text-neutral-500">Jun - Jul 2024</p>
            <ul className="list-disc space-y-2 text-[#00FF0D] ml-4">
              <li className="text-md md:text-lg">
                <span className="text-neutral-400">
                  Provided support and internal tooling in{" "}
                </span>
                <span className="text-white">
                  AWS Cognito, Rekognition,{" "}
                  <span className="text-neutral-400">
                    {" "}
                    feature along with Front-End support in{" "}
                  </span>{" "}
                  React
                </span>
              </li>
            </ul>
          </div>
          <div className="p-8 bg-[#121212] rounded-2xl text-white space-y-5">
            <h2 className="text-2xl md:text-4xl font-bold">theAnanta</h2>
            <div className="w-full px-4 border-[#00FF0D]/30 border-[0.1px]" />
            <h3 className="text-xl md:text-2xl font-semibold">Full Stack Developer</h3>
            <p className="text-md md:text-lg text-neutral-500">May 2024 - Jan 2025</p>
            <ul className="list-disc space-y-2 text-[#00FF0D] ml-4">
              <li className="text-md md:text-lg">
                <span className="text-neutral-400">Built </span>
                <span className="font-semibold text-neutral-200 underline underline-offset-4 transition duration-500 hover:text-[#00FF0D]">
                  Shramasa
                </span>{" "}
              </li>
              <li>
                {" "}
                <span className="text-neutral-400">
                  Built some freelance projects using{" "}
                </span>
                <span className="text-white">
                  Next.js, Tailwind CSS, Express, PostgreSQL,{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
