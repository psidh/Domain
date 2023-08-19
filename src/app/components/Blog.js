// src/components/Blog.js
import React from "react";
import blogPosts from "src/app/data/blogPosts";

const Blog = () => {
  return (
  <main id="blog">
  <div className="container mx-auto px-16 py-12">
    <h2 className="md:text-4xl text-2xl font-semibold mb-8">Blog Posts</h2>
      <div className="grid gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl p-6">
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
