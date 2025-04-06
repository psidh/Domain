"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const icons = [
  "aws",
  "docker",
  "figma",
  "firebase",
  "go",
  "java",
  "mongo",
  "next",
  "node",
  "post",
  "prisma",
  "react",
  "redis",
  "rust",
  "tail",
  "type",
];

export default function Skill() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const [positions, setPositions] = useState([]);
  const [size, setSize] = useState(64);
  const [cardSize, setCardSize] = useState(20);

  useEffect(() => {
    const width = window.innerWidth;
    let radius;
    if (width > 1000) {
      radius = 325;
      setSize(64);
      setCardSize(20);
    } else if (width > 500) {
      radius = 300;
      setSize(48);
      setCardSize(16);
    } else {
      radius = 180;
      setSize(32);
      setCardSize(12);
    }

    const pos = icons.map((_, i) => {
      const angle = (i / icons.length) * 2 * Math.PI;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    });

    setPositions(pos);
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex justify-center items-center overflow-hidden h-[55vh] md:h-[100vh]"
    >
      {/* Center Label */}
      <motion.div
        className="z-10 rounded-3xl p-12 text-4xl font-bold dark:text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <section className="text-center">
          <h1 className="text-xl md:text-2xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-neutral-500 to-black dark:from-neutral-300 dark:to-white">
            I&apos;m Philkhana Sidharth
          </h1>
          <div className="mt-4 mb-2">
            <p className="font-normal text-sm md:text-lg text-black dark:text-neutral-400">
              Front-End  •  Back-End  •  Cloud  •  DevOps
            </p>
          </div>
          <a
            href="mailto:philkhanasidharth14@gmail.com"
            className="inline-block mt-6 hover:border hover:border-green-300 hover:bg-white hover:text-green-500 text-white bg-green-600 transition-all duration-300 px-8 py-2 rounded-full text-lg font-medium"
          >
            Connect
          </a>
        </section>
      </motion.div>

      {/* Icons */}
      {positions.map((pos, i) => (
        <motion.div
          key={icons[i]}
          className={`absolute w-[${cardSize}px] h-[${cardSize}px] p-2 dark:bg-neutral-900 border dark:border-neutral-700 rounded-2xl shadow-md`}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.7, rotate: 0 }}
          animate={
            inView
              ? {
                  x: pos.x,
                  y: pos.y,
                  opacity: 1,
                  scale: 1,
                  rotate: 360,
                }
              : {
                  x: 0,
                  y: 0,
                  opacity: 0,
                  scale: 0.7,
                  rotate: 0,
                }
          }
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 14,
            delay: i * 0.03,
            duration: 1.2,
          }}
        >
          <Image
            src={`/tools/${icons[i]}.svg`}
            alt={icons[i]}
            width={size}
            height={size}
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
