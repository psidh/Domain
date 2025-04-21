import React from "react";
const ProjectCard = ({ title, subtitle, period, description }) => (
  <div className="p-4 backdrop-blur-3xl bg-opacity-[5%] rounded-lg">
    <h3 className="text-xl font-semibold">{title}</h3>
    <div className="w-full h-[0.1px] mt-3 bg-neutral-600" />
    <div className="flex items-center justify-between text-lg font-normal">
      <h4 className="my-4 text-sm text-neutral-300 font-medium">{subtitle}</h4>
      <p className="text-neutral-400 text-sm">{period}</p>
    </div>
    <p className="text-neutral-300 font-medium">{description}</p>
  </div>
);

export default function Projects() {
  return (
    <>
      <div className="flex flex-col gap-6 pr-2 w-full lg:w-1/3  ">
        <h3 className="text-3xl mt-6 lg:mt-0 lg:text-lg text-green-300 font-semibold w-full text-center">
          Projects
        </h3>
        <ProjectCard
          title="Sahayata"
          subtitle="Smart India Hackathon 2023"
          period="Jul - Nov 2023"
          description="Web app for shovel operators to monitor real-time dumper truck locations and statuses."
        />
        <ProjectCard
          title="GitHub Wrapper"
          subtitle="One-Click React Deployment"
          period="Jan - Mar 2025"
          description="Tool that deploys any React app in a click using Node.js and AWS ECS - S3"
        />
        <ProjectCard
          title="DevFest RSVP"
          subtitle="TheAnanta"
          period="Jun - Jul 2024"
          description="Central RSVP site for GDG DevFest Vizag 2023. Manages live check-ins, confirmations, and analytics."
        />
      </div>
    </>
  );
}
