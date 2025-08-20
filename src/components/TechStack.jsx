import Image from "next/image";

const skillIcons = [
  "next",
  "go",
  "type",
  "node",
  "post",
  "prisma",
  "firebase",
  "docker",
  "java",
  "mongo",
  "react",
  "tail",
];

export default function TechStack() {
  return (
    <div className="p-4 flex flex-col w-full border border-neutral-700 bg-gradient-to-br from-neutral-900/80 to-black rounded-xl">
      <div className="">
        <h3 className="text-3xl mb-4 lg:mt-0 font-semibold w-full lg:text-left text-center text-neutral-20">
          Tech Stack
        </h3>
        <div className="w-full border border-neutral-700 h-[1px] mb-4"></div>
        <div className="grid grid-cols-4 gap-6 place-items-center">
          {skillIcons.map((icon) => (
            <div key={icon}>
              <Image
                src={`/tools/${icon}.svg`}
                alt={icon}
                width={34}
                height={34}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
