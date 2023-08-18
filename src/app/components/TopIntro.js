
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
    <div className="bg-white">
    <main> 
      <GlobalStyle />
      <section className="flex flex-col justify-center items-center py-16 px-8 lg:px-36">
      <h2 className=" md:text-4xl text-2xl font-bold mb-4"><span className="md:text-2xl text-xl mb-4 font-normal">Hey, </span> 
      <span className="font-semibold">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      I'm P Sidharth</span></h2>
      <p className="text-2xl mb-4 mt-4 text-gray-900">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        I'm a Student, Developer passionate about [yet to write] 
      </p>
      <p className="text-xl mt-4 text-gray-600">
        With a background in Python and JavaScript, I bring Front-End and Back-End to the table
      </p>
      <p className="text-xl mt-4 text-gray-600">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Let's connect and build great things together...
        <span class="inline-flex opacity-50 text-2xl font-light blinking">|</span>
      </p>
    </section>
    </main>
    </div>
  );
};

export default TopIntro;
