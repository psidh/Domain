import React from "react";
const Card = ({ title, subtitle, period, description }) => (
  <div className="p-4 backdrop-blur-3xl bg-opacity-[%] bg-black rounded-lg">
    <h3 className="text-xl font-semibold">{title}</h3>
    <div className="w-full h-[0.1px] mt-3 bg-neutral-600" />
    <div className="flex items-center justify-between text-lg font-normal">
      <h4 className="my-4 text-sm text-neutral-300 font-medium">{subtitle}</h4>
      <p className="text-neutral-200 text-sm font-medium">{period}</p>
    </div>
    <p className="text-neutral-300 font-medium">{description}</p>
  </div>
);

export default function Experience() {
  return (
    <div className="flex flex-col gap-6 pr-2 w-full lg:w-1/3">
      <h3 className="text-3xl mt-6 lg:mt-0 lg:text-lg text-blue-300 font-semibold w-full text-center">
        Experience
      </h3>
      <Card
        title="PoolMoney"
        subtitle="Full Stack Developer"
        period="Jan - Mar 2025"
        description="Internal tooling in dashboard using Redux, Firebase, TypeScript, MUI"
      />
      <Card
        title="Spotmies"
        subtitle="Cloud & React Intern"
        period="Jun - Jul 2024"
        description="Built features with AWS Cognito, Rekognition, and React UI tooling"
      />
      <Card
        title="TheAnanta"
        subtitle="Full Stack Developer"
        period="Jun - Jul 2024"
        description="Built Shramasa & freelance projects using Next.js, Express, PostgreSQL"
      />
    </div>
  );
}
