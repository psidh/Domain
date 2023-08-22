// src/components/Blog.js
import React , {useEffect} from "react";
import blogPosts from "src/app/data/blogPosts";
import styled, { createGlobalStyle } from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;
const Blog = () => {

  useEffect(() => {
    AOS.init({ 
      delay: 100,    // Delay between animations (ms)
    offset: 100,   // Offset (in px) from the element's position when animation starts
    duration: 800, // Duration of animations (ms)}); // Initialize AOS
    once: true, // Whether animations should be repeated
    mirror: true
  });
}, []);
  return (
  <main id="blog">
  <div className="container mx-auto pt-4 pb-8 px-6 md:px-16 md:py-10 ">
    <h2 className="md:text-4xl text-3xl font-semibold text-center md:text-left mb-8" 
    data-aos="fade-up">Blogs</h2>
      
      <div className="grid gap-4">
      {blogPosts.map((post, index) => (
        <a key={index} href={post.link} className="block" target="_blank" rel="noopener noreferrer">
          <div className="dark:bg-gray-900 rounded-lg transform hover:scale-105 transition duration-300 
            shadow-lg 
            shadow-green-400 hover:shadow-green-900 
            dark:shadow-blue-700 
            dark:hover:shadow-blue-500 
            p-6"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">{post.title}</h3>
            <p className="text-gray-400 ">{post.date}</p>
            <p className="mt-2 dark:text-gray-200">{post.content}</p>
          </div>
        </a>
      ))}
    </div>

      
    </div>
    </main>
  );
};

export default Blog;
