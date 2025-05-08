import React from "react";

function Tools() {
  const tools = ["Git", "Postman", "Blender", "Figma"];

  const toolsImage = {
    Git: { 
      image: "/Git.webp", 
      classname: "w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mt-3 sm:mt-4 md:mt-5 mx-3 sm:mx-4 md:mx-5" 
    },
    Postman: { 
      image: "/postman.webp", 
      classname: "w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mt-3 sm:mt-4 md:mt-5 mx-3 sm:mx-4 md:mx-5" 
    },
    Blender: { 
      image: "/Blender.webp", 
      classname: "w-16 sm:w-18 md:w-22 h-14 sm:h-16 md:h-20 mt-3 sm:mt-4 md:mt-5 mx-3 sm:mx-4 md:mx-5" 
    },
    Figma: { 
      image: "/Figma.webp", 
      classname: "w-12 sm:w-14 md:w-15 h-14 sm:h-16 md:h-20 mt-3 sm:mt-4 md:mt-5 mx-3 sm:mx-4 md:mx-5" 
    },
  };

  return (
    <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center flex-wrap m-auto">
      {tools.map((item) => (
        <div key={item} className="flex flex-col items-center">
          <img
            src={toolsImage[item].image}
            alt={item}
            className={toolsImage[item].classname + " rounded-xl"}
          />
          <span className="mt-1 sm:mt-1.5 md:mt-2 underline underline-offset-2 text-white text-shadow-[0px_0px_20px] text-shadow-white text-xs sm:text-sm md:text-base font-medium">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Tools;
