import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skillIcons = [
  "aws",
  "docker",
  "firebase",
  "go",
  "java",
  "rust",
  "mongo",
  "react",
  "tail",
  "next",
  "type",
  "node",
  "post",
  "prisma",
  "redis",
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

const slides = [
  {
    title: "Prithvi",
    date: "Aug 2025",
    desc: "systems level project in optimising data",
    gradient: "from-[#7a7a7a] to-[#000000]",
    textColor: "text-white",
  },
  {
    title: "Agni",
    date: "Nov 2025",
    desc: "a blazingly fast low-level project",
    gradient: "from-[#000000] to-[#7a7a7a]",
    textColor: "text-white",
  },
];

const blogs = [
  {
    title: "Mastering OOPS",
    date: "June 2025",
    desc: "Series on object oriented programming in java",
    gradient: "from-[#000000] to-[#901d1d]",
    textColor: "text-orange-500",
    link: "https://medium.com/@philkhanasidharth14/mastering-java-oop-from-scratch-part-1-99a2c20f413b",
  },
  {
    title: "Inside the Machine",
    date: "June 2025",
    desc: "Introduction and overview of operating system",
    gradient: "from-[#000000] to-[#1d903a]",
    textColor: "text-green-500",
  },
];

export default function Mischellaneous() {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const nextBlog = () => setIndex2((prev) => (prev + 1) % blogs.length);
  const prevBlog = () =>
    setIndex2((prev) => (prev - 1 + blogs.length) % blogs.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5500); // 5 sec delay
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer2 = setInterval(() => {
      nextBlog();
    }, 5500); // 5 sec delay
    return () => clearInterval(timer2);
  }, []);

  return (
    <div className="flex flex-col gap-6 pr-2 w-full lg:w-1/3">
      <h3 className="text-3xl mt-6 lg:mt-0 lg:text-2xl text-neutral-200 font-semibold mb-1 w-full text-center">
        Blogs
      </h3>

      <div className="relative">
        <AnimatePresence mode="wait">
          <a
            href={blogs[index2].link}
            target="_blank"
            rel="noopener noreferrer"
            className="z-100 block hover:opacity-90 hover:-translate-y-2 transition-all duration-300"
          >
            <motion.div
              key={index2}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
              className={`p-4 rounded-2xl bg-gradient-to-br ${blogs[index2].gradient} text-white shadow-lg cursor-pointer`}
            >
              <div className="text-sm text-neutral-200 text-center">
                <p
                  className={`font-bold mb-2 text-2xl ${blogs[index2].textColor}`}
                >
                  {blogs[index2].title}
                </p>
                <p className="font-medium">{blogs[index2].desc}</p>
              </div>
            </motion.div>
          </a>
        </AnimatePresence>

        <div className="absolute top-1/2 -translate-y-1/2 left-2">
          <button onClick={prevBlog}>
            <ChevronLeft className="text-white hover:scale-110 transition" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          <button onClick={nextBlog}>
            <ChevronRight className="text-white hover:scale-110 transition" />
          </button>
        </div>
      </div>

      <h3 className="text-3xl mt-6 lg:mt-0 lg:text-2xl text-neutral-200 font-semibold mb-1 w-full text-center">
        Coming Soon
      </h3>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className={`p-4 rounded-2xl bg-gradient-to-br ${slides[index].gradient} text-white shadow-lg`}
          >
            <p className="text-3xl font-semibold text-center mb-2">
              {slides[index].date}
            </p>
            <div className="text-sm text-neutral-200 text-center">
              <p
                className={`font-bold mb-2 text-2xl ${slides[index].textColor}`}
              >
                {slides[index].title}
              </p>
              <p className="font-medium">{slides[index].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-1/2 -translate-y-1/2 left-2">
          <button onClick={prevSlide}>
            <ChevronLeft className="text-white hover:scale-110 transition" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          <button onClick={nextSlide}>
            <ChevronRight className="text-white hover:scale-110 transition" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
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
                width={40}
                height={40}
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
