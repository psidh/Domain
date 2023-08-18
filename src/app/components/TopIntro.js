
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
`;

const TopIntro = () => {
  return (
    <div className="bg-white dark:bg-black">
    <main> 
      <GlobalStyle />
      <section className="flex flex-col justify-center items-center pt-16 pb-4 px-4 lg:px-18">
      <h2 className="md:text-2xl text-4xl font-semibold mb-4">
        <span className="md:text-2xl text-xl font-normal">Hey, </span> 
      <span className="font-semibold md:text-4xl text-3xl ">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      I'm P Sidharth</span></h2>
      <div className="py-2 px-4 lg:px-18 md:text-center text-justify">
      <p className="md:text-2xl text-lg mb-4 my-2 ">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        I'm a Student, Developer passionate about [yet to write] 
      </p>
      <p className="md:text-2xl text-lg my-2 text-gray-700 dark:text-gray-300">
        With a background in Python and JavaScript, I bring Front-End and Back-End to the table
      </p>
      <p className="md:text-2xl text-lg my-2 text-gray-600 dark:text-gray-300">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Let's connect and build great things together...
        <span className="inline-flex opacity-50 text-2xl font-light blinking">|</span>
      </p>
    </div>
    </section>
    </main>
    </div>
  );
};

export default TopIntro;
