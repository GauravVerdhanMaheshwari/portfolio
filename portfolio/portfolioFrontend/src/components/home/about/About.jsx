import React from "react";

function About() {
  const spanDiv =
    "font-bold text-shadow-gray-200/40 text-shadow-[1px_1px_19px]";

  return (
    <div className="flex flex-col justify-center">
      <hr className="text-white h-0.5 my-8 bg-gray-200 border-0 " />
      <h1 className="text-white text-4xl font-semibold text-left mx-50 underline underline-offset-10 text-shadow-gray-200/65 text-shadow-[1px_1px_19px]">
        About Me
      </h1>
      <div className="mx-50 my-10">
        <p className="text-white font-medium text-xl text-pretty">
          Hello there <span className={spanDiv}>Reader</span> , I am{" "}
          <span className={spanDiv}>Gaurav Verdhan Maheshwari.</span>
          <br />
          <br />I am a<span className={spanDiv}> MERN stack developer. </span>I
          like to learn about <span className={spanDiv}>new technology.</span>
          <br />
          <br />
          While this are my technical species in free time (if i get some :P ){" "}
          <span className={spanDiv}>
            I like to read books, make cool 3D models, drawing and cooking
          </span>
        </p>
        <button className="p-5 mt-10 text-2xl font-semibold text-white rounded-2xl cursor-pointer bg-yellow-400 transition-all duration-300 hover:font-bold hover:text-yellow-400 hover:bg-white hover:scale-105 hover:shadow-gray-600 hover:shadow-[0px_10px_9000px_6px]">
          Click here to know more about me !
        </button>
      </div>
    </div>
  );
}

export default About;
