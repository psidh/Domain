import blogPosts from 'src/app/data/blogPosts';
import Image from 'next/image';

const Blog = () => {
  const majorBlog = blogPosts[0];

  return (
    <div className="bg-black">
      <main id="blog">
        <div className="container mx-auto pt-4 pb-8 px-6 md:px-16 md:py-10">
          <h2 className="text-white md:text-4xl text-3xl font-semibold text-center md:text-left mb-8">
            Blogs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href={majorBlog.link}
              className="block md:col-span-2 md:row-span-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="bg-[#1a1a1a] rounded-lg transform transition 
              duration-300 shadow-lg hover:shadow-blue-500 p-6"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-200">
                  {majorBlog.title}
                </h3>
                <Image
                  src={majorBlog.image}
                  alt="Blog Image"
                  width="auto"
                  height="auto"
                  className="w-full h-full rounded-3xl p-4"
                />

                <p className="text-gray-400 ">{majorBlog.date}</p>
                <p className="mt-2 text-gray-200">{majorBlog.content}</p>
              </div>
            </a>

            {/* Smaller Blogs on the Right */}
            {blogPosts.slice(1, 3).map((post, index) => (
              <a
                key={index}
                href={post.link}
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="bg-[#1a1a1a] rounded-lg transform transition duration-300 
                shadow-lg hover:shadow-blue-500 p-6"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 ">{post.date}</p>
                  <p className="mt-2 text-gray-200">{post.content}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
