import React, { useEffect, useState } from "react";

function Blogs() {
  let numberOfBlogs = 1;

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center mb-5 sm:mb-8 md:mb-10">
        <hr className="text-white h-0.5 my-4 sm:my-6 md:my-8 bg-gray-200 border-0" />
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-left mx-4 sm:mx-8 md:mx-50 underline underline-offset-8 sm:underline-offset-10 text-shadow-gray-200/65 text-shadow-[1px_1px_19px]">
          Blogs
        </h1>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center mx-2 sm:mx-4 md:mx-8">
          {blogs.map((blog) => {
            if (numberOfBlogs <= 3) {
              numberOfBlogs++;
              return (
                <div
                  key={blog.id}
                  className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] flex flex-col justify-center m-4 sm:m-6 md:m-8 p-3 sm:p-4 md:p-5 bg-violet-500 backdrop-blur-3xl rounded-xl shadow-[0px_0px_70px] shadow-violet-400/90 border border-violet-100/80 inset-shadow-[0px_10px_100px] inset-shadow-violet-600"
                >
                  <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center underline underline-offset-8 sm:underline-offset-10 p-2 sm:p-3 md:p-4 text-pretty">
                    {blog.title}
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl p-2 mx-2 my-1">{blog.content}</p>
                  <div className="flex flex-row flex-wrap justify-center m-4 sm:m-6 md:m-8 text-white gap-2">
                    {blog.topic.map((topic) => (
                      <p className="text-base sm:text-lg md:text-xl px-3 sm:px-4 py-1 sm:py-2 text-center bg-blue-500 border border-blue-400 rounded-full h-fit w-fit">
                        {topic}
                      </p>
                    ))}
                  </div>
                  <p className="text-base sm:text-lg md:text-xl p-2 mx-2 my-1 text-center">
                    {blog.date}
                  </p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg md:text-xl p-2 text-center bg-yellow-300 rounded-lg inset-shadow-[0px_1px_20px] inset-shadow-yellow-500 border border-yellow-300 hover:bg-yellow-400 transition-all duration-300 ease-in-out hover:scale-95 hover:inset-shadow-[0px_1px_20px] hover:inset-shadow-yellow-600"
                  >
                    Read More
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Blogs;
