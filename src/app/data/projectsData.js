
import React from "react"; // Import React

const projectsData = [
  {
    title: "Gita Generator",
    description: "Web Application that can generate Slokās of Gita with options to select from a specific chapter",
    technologies: [
      {
        name: "React",
        img: <img src="/images/projects/logos/reactlogo.png" className="w-10 h-10  rounded-md"/>
       },
      {
        name: "NextJs",
        img : <img src="/images/projects/logos/nextjslogo.png" className="w-10 h-10 rounded-md"/>
      },
    ],
    image: "/images/projects/project1.png",
    githubLink: "https://github.com/psidh/gita_generator",
    projectLink:"https:gita-generate.vercel.app",

  },

  {
    title: "To-Do List",
    description: "A todo List created using Express and NodeJs that helps you to make a goal setting for your day !",
    technologies: [
      {
        name: "Node",
        img: <img src="/images/projects/logos/nodelogo.png" className="w-10 h-10 rounded-md"/>
       },
      {
        name: "JS",
        img : <img src="/images/projects/logos/jslogo.png" className="w-10 h-10 rounded-md"/>
      },
    ],
    image: "/images/projects/project2.png",
    githubLink: "https://github.com/psidh/todolist-v1",
    projectLink:"https://github.com/psidh/todolist-v1",
  },
  // Add more project objects
];

export default projectsData;
