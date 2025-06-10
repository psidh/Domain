import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";

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
export default function ComingSoon() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const nextBlog = () => setIndex2((prev) => (prev + 1) % blogs.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5500); // 5 sec delay
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="dynamic-glow-sky border border-sky-900 bg-gradient-to-br from-sky-950 to-black p-4 rounded-xl mb-6">
      <h3 className="text-3xl lg:mt-0 lg:text-2xl text-neutral-200 font-semibold mb-4 w-full lg:text-left text-center">
        Coming Soon
      </h3>
      <div className="w-full border border-sky-950 h-[1px] mb-4"></div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className={`p-4 rounded-2xl text-white shadow-lg`}
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
    </div>
  );
}
