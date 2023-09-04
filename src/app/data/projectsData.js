/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react"; // Import React

const projectsData = [
  {
    title: "Gita Generator",
    description: "Web Application that can generate Slokās of Gita with options to select from a specific chapter",
    technologies: [
      {
        name: "JavaScript",
        img : <img src="/images/projects/logos/jslogo.png" className="w-10 h-10 rounded-md"/>
      },
      {
        name: "React",
        img: <img src="/images/projects/logos/reactlogo.png" className="w-10 h-10  rounded-md"/>
       },
      {
        name: "NextJs",
        img : <img src="/images/projects/logos/nextjslogo.png" className="w-10 h-10 rounded-md"/>
      },
      {
        name: "Tailwind CSS",
        img : <img src="/images/projects/logos/tailwind.png" className="w-13 h-12 rounded-md"/>
      },

    ],
    image: "/images/projects/project1.png",
    githubLink: "https://github.com/psidh/gita_generator",
    projectLink:"https:gita-generate.vercel.app",

  },

  {
    title: "To-Do List",
    description: "A todo List created using NextJs and React, using Typescript that helps you to make a goal setting for your day !",
    technologies: [
      {
        name: "TypeScript",
        img : <img src="/images/projects/logos/typescript.png" className="w-12 h-10 rounded-md"/>
      },
      {
        name: "React",
        img: <img src="/images/projects/logos/reactlogo.png" className="w-10 h-10  rounded-md"/>
       },
      {
        name: "NextJs",
        img : <img src="/images/projects/logos/nextjslogo.png" className="w-10 h-10 rounded-md"/>
      },
      {
        name: "Tailwind CSS",
        img : <img src="/images/projects/logos/tailwind.png" className="w-13 h-12 rounded-md"/>
      },
    ],
    image: "/images/projects/project2.png",
    githubLink: "https://github.com/psidh/TodoList",
    projectLink:"https://psidhtodolist.vercel.app",
  },

  {
    title: "Quotes Generator",
    description: "Static Website that generates my personal quotes/quotations!",
    technologies: [
      {
        name: "TypeScript",
        img : <img src="/images/projects/logos/typescript.png" className="w-12 h-10 rounded-md"/>
      },
      {
        name: "React",
        img: <img src="/images/projects/logos/reactlogo.png" className="w-10 h-10  rounded-md"/>
       },
      {
        name: "NextJs",
        img : <img src="/images/projects/logos/nextjslogo.png" className="w-10 h-10 rounded-md"/>
      },
      {
        name: "Tailwind CSS",
        img : <img src="/images/projects/logos/tailwind.png" className="w-13 h-12 rounded-md"/>
      },
    ],
    image: "/images/projects/project3.png",
    githubLink: "https://github.com/psidh/myQuotes",
    projectLink:"https://psidhquotes.vercel.app",
  },
  
  // Add more project objects
];

export default projectsData;
