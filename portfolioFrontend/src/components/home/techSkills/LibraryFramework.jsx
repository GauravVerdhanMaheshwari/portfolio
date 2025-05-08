import React from "react";

function LibraryFramework() {
  const libraryFramework = ["Node JS", "React", "Tailwind CSS"];

  const libraryFrameworkImage = {
    "Node JS": { 
      image: "/nodeJS.webp", 
      classname: "w-14 sm:w-16 md:w-18 h-16 sm:h-18 md:h-20 mt-3 sm:mt-4 md:mt-5 mx-3 sm:mx-4 md:mx-5" 
    },
    React: { 
      image: "/react.webp", 
      classname: "w-16 sm:w-18 md:w-22 h-16 sm:h-18 md:h-20 mt-3 sm:mt-4 md:mt-5 mx-3 sm:mx-4 md:mx-5" 
    },
    "Tailwind CSS": {
      image: "/tailwind.webp",
      classname: "w-16 sm:w-18 md:w-22 h-12 sm:h-14 md:h-16 mt-3 sm:mt-4 md:mt-5 mb-2 sm:mb-2.5 md:mb-3 mx-3 sm:mx-4 md:mx-5",
    },
  };

  return (
    <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center flex-wrap m-auto">
      {libraryFramework.map((item) => (
        <div key={item} className="flex flex-col items-center">
          <img
            src={libraryFrameworkImage[item].image}
            alt={item}
            className={libraryFrameworkImage[item].classname + " rounded-xl"}
          />
          <span className="mt-1 sm:mt-1.5 md:mt-2 underline underline-offset-2 text-white text-shadow-[0px_0px_20px] text-shadow-white text-xs sm:text-sm md:text-base font-medium">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default LibraryFramework;
