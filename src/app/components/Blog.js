// src/components/Blog.js
import React from "react";
import blogPosts from "src/app/data/blogPosts";

const Blog = () => {
  return (
  <main id="blog">
  <div className="container mx-auto pt-4 pb-8 px-16 md:py-10">
    <h2 className="md:text-4xl text-2xl font-semibold mb-8">Blog Posts</h2>
      <div className="grid gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 rounded-lg transform hover:scale-105 transition duration-300 shadow-md hover:shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">{post.title}</h3>
            <p className="text-gray-400 ">{post.date}</p>
            <p className="mt-2 dark:text-gray-200">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
};

export default Blog;