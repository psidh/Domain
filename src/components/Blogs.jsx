import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogs = [
  {
    title: "Mastering OOPS",
    date: "June 2025",
    desc: "Series on object oriented programming in java",
    gradient: "",
    textColor: "",
    link: "https://medium.com/@philkhanasidharth14/mastering-java-oop-from-scratch-part-1-99a2c20f413b",
  },
  {
    title: "Inside the Machine",
    date: "June 2025",
    desc: "Introduction and overview of operating system",
    gradient: "",
    textColor: "",
  },
];

export default function Blogs() {
  const [index2, setIndex2] = useState(0);

  const nextBlog = () => setIndex2((prev) => (prev + 1) % blogs.length);
  const prevBlog = () =>
    setIndex2((prev) => (prev - 1 + blogs.length) % blogs.length);

  useEffect(() => {
    const timer2 = setInterval(() => {
      nextBlog();
    }, 5500); // 5 sec delay
    return () => clearInterval(timer2);
  }, []);

  return (
    <div className="dynamic-glow-purple border border-purple-900 bg-gradient-to-br from-purple-950/30 to-black p-4 rounded-xl">
      <h3 className="text-purple-300 text-3xl mb-4 lg:mt-0 lg:text-2xl font-semibold w-full lg:text-left text-center">
        Blogs
      </h3>

      <div className="w-full border border-purple-950/50 h-[1px] mb-4"></div>

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
              className={`p-4 rounded-2xl text-white shadow-lg cursor-pointer`}
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

        <div className="absolute top-1/2 -translate-y-1/2 left-0">
          <button onClick={prevBlog}>
            <ChevronLeft className="text-white hover:scale-110 transition" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0">
          <button onClick={nextBlog}>
            <ChevronRight className="text-white hover:scale-110 transition" />
          </button>
        </div>
      </div>
    </div>
  );
}
