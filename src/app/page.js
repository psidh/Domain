/* eslint-disable @next/next/no-page-custom-font */
"use client";
import NavBar from 'src/app/components/NavBar';
import TopIntro from 'src/app/components/TopIntro';
import Footer from 'src/app/components/Footer';
import Resume from 'src/app/components/Resume';
import Achievements from 'src/app/components/Achievements';
import Blog from 'src/app/components/Blog';
import Projects from 'src/app/components/Projects';
import Example from '/pages/chart.js';


function MyApp(){
  return (
    <>
    <NavBar />
    <TopIntro /> 
    <Achievements />
    <Resume />
    <Projects />
    <Example />
    <Blog />
    <Footer />
    </>
  );
}



export default MyApp;
