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
      <div className="flex flex-col justify-center mb-10">
        <hr className="text-white h-0.5 my-8 bg-gray-200 border-0 " />
        <h1 className="text-white text-4xl font-semibold text-left mx-50 underline underline-offset-10 text-shadow-gray-200/65 text-shadow-[1px_1px_19px]">
          Blogs
        </h1>
        <div className="flex flex-row justify-center m-10">
          {blogs.map((blog) => {
            if (numberOfBlogs <= 3) {
              numberOfBlogs++;
              return (
                <div
                  key={blog.id}
                  className="flex flex-col justify-center m-10 p-5 bg-violet-500 backdrop-blur-3xl rounded-xl shadow-[0px_0px_70px] shadow-violet-400/90 border border-violet-100/80 inset-shadow-[0px_10px_100px] inset-shadow-violet-600"
                >
                  <h2 className="text-white text-3xl font-semibold text-center underline underline-offset-10 p-4 text-pretty">
                    {blog.title}
                  </h2>
                  <p className="text-2xl p-2 mx-2 my-1">{blog.content}</p>
                  <div className="flex flex-row justify-center m-10">
                    <p className="text-xl px-4 py-2 mx-2 text-center my-1 bg-red-500 border border-red-400 rounded-full h-fit w-fit">
                      {blog.topic.topic1}
                    </p>
                    {blog.topic.topic2 ? (
                      <p className="text-xl px-4 py-2 mx-2 text-center my-1 bg-red-500 border border-red-400 rounded-full h-fit w-fit">
                        {blog.topic.topic2}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="text-xl p-2 mx-2 my-1 text-center">
                    {blog.date}
                  </p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl p-2 text-center bg-yellow-200 rounded-lg inset-shadow-[0px_1px_100px] inset-shadow-yellow-400 border border-yellow-300 hover:bg-yellow-500 transition-all duration-200 ease-in-out hover:scale-105 hover:inset-shadow-[0px_1px_100px] hover:inset-shadow-yellow-600/40"
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
