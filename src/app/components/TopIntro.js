

"use client";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

// Create a global style that applies Ambit font to all text elements
const GlobalStyle = createGlobalStyle`
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  .blinking {
    animation: blink 1s infinite;
  }

  .rounded-full {
    border-radius: 50%;
  }
`;

const TopIntro = () => {
  return (
    <div className="bg-white dark:bg-black">
    <main> 
      <GlobalStyle />
      <section className="flex flex-col justify-center items-center pt-8 pb-8 px-4 lg:px-18">
        <h2 className="md:text-2xl text-4xl font-semibold mt-8">
          <span className="md:text-2xl text-xl font-normal">Hey, </span> 
          <span className="font-semibold md:text-4xl text-3xl 
          text-transparent bg-clip-text 
           bg-gradient-to-b from-gray-800 to-gray-500 
           dark:bg-gradient-to-t 
           dark:from-gray-500 
           dark:to-gray-100 ">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm P Sidharth</span></h2>
          <div className="py-2 px-4 lg:px-18 md:text-center text-justify mt-4 mb-8">
            <p className="md:text-2xl text-lg mb-4 my-2 ">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              I'm a Student, Developer passionate about [yet to write] 
            </p>
            <p className="md:text-2xl text-lg my-2 text-gray-700 dark:text-gray-300">
              With a background in <span className="underline underline-offset-4">Python </span> 
               and <span className="underline underline-offset-4">JavaScript</span>, 
              I bring Front-End and Back-End to the table </p>
            <p className="md:text-2xl text-lg my-2 text-gray-600 dark:text-gray-300 mt-4 mb-4">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Let's connect and build great things together...
              <span className="inline-flex opacity-50 text-2xl font-light blinking">|</span>
            </p>
          </div>
          <button className="mt-4 mb-10 bg-green-500 hover:bg-black dark:hover:bg-white dark:hover:text-black  hover:text-white text-white py-2 px-8 rounded-3xl">
          <span className="text-xl">Connect</span>
          </button>
      </section>
    </main>
    </div>
  );
};

export default TopIntro;
