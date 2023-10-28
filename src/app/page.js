/* eslint-disable @next/next/no-page-custom-font */
'use client';
import React from 'react';
import NavBar from 'src/app/components/NavBar';
import TopIntro from 'src/app/components/TopIntro';
import Footer from 'src/app/components/Footer';
import Resume from 'src/app/components/Resume';
import Achievements from 'src/app/components/Achievements';
import Blog from 'src/app/components/Blog';
import Projects from 'src/app/components/Projects';
import ChartComponent from '/pages/chart.js';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;
function MyApp() {
  return (
    <div
      style={{ fontFamily: 'Ambit, sans-serif' }}
      className="bg-black font-Ambit"
    >

      <GlobalStyle />
      <NavBar />
      <TopIntro />
      <Achievements />
      <Resume />
      <Projects />
      <ChartComponent />
      <Blog />
      <Footer />
    </div>
  );
}

export default MyApp;
