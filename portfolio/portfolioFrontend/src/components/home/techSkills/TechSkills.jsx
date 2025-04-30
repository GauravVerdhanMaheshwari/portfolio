import React from "react";

function TechSkills() {
  return (
    <>
      <hr className="text-white h-0.5 my-8 bg-gray-200 border-0 " />
      <h1 className="text-white mx-50 text-4xl">Technical Skills</h1>
      <div className="my-10">
        <div className="flex justify-between text-white mx-55">
          <h1 className="text-xl font-mono">
            {"<"}Programming Language{">"}
          </h1>
          <img
            src="JS.webp"
            alt="Javascript"
            className="h-15 w-15 shadow-2xl shadow-amber-200"
          />
          <img src="java.webp" alt="Java" className="h-15 w-15" />
          <img src="C.webp" alt="C" className="h-15 w-14" />
          <img src="PHP.webp" alt="PHP" className="h-15 w-20" />
          <img src="python.webp" alt="Python" className="h-15 w-15" />
          <h1 className="text-xl mt-10 font-mono">
            {"</"}Programming Language{">"}
          </h1>
        </div>
      </div>
    </>
  );
}

export default TechSkills;
