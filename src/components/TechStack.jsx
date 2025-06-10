import { motion } from "framer-motion";
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

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function TechStack() {
  return (
    <div className="dynamic-glow p-4 flex flex-col w-full border border-neutral-700 bg-gradient-to-br from-neutral-800/80 to-black rounded-xl">
      <div className="">
        <h3 className="text-xl font-semibold mb-4 text-center lg:text-left text-white">
          Tech Stack
        </h3>
        <div className="w-full border border-neutral-700 h-[1px] mb-4"></div>
        <div className="grid grid-cols-4 gap-6 place-items-center">
          {skillIcons.map((icon, i) => (
            <motion.div
              key={icon}
              custom={Math.floor(i / 4)}
              initial="hidden"
              animate="visible"
              variants={rowVariants}
              className="transition-all"
            >
              <Image
                src={`/tools/${icon}.svg`}
                alt={icon}
                width={35}
                height={35}
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
