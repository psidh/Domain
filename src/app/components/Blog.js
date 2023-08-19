// src/components/Blog.js
import React from "react";
import blogPosts from "src/app/data/blogPosts";

const Blog = () => {
  return (

    <div className="container mx-auto px-16 py-12">
      <h2 className="md:text-4xl text-2xl font-semibold mb-8">Blog Posts</h2>
      <div className="grid gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.date}</p>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
