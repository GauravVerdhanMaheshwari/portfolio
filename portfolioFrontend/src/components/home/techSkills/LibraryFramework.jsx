import React from "react";

function LibraryFramework() {
  const libraryFramework = ["Node JS", "React", "Tailwind CSS"];

  const libraryFrameworkImage = {
    "Node JS": { image: "/nodeJS.webp", classname: "w-18 h-20 mt-5 mx-5" },
    React: { image: "/react.webp", classname: "w-22 h-20 mt-5 mx-5" },
    "Tailwind CSS": {
      image: "/tailwind.webp",
      classname: "w-22 h-16 mt-5 mb-3 mx-5",
    },
  };

  return (
    <div className="flex gap-6 justify-center flex-wrap m-auto">
      {libraryFramework.map((item) => (
        <div key={item} className="flex flex-col items-center">
          <img
            src={libraryFrameworkImage[item].image}
            alt={item}
            className={libraryFrameworkImage[item].classname + " rounded-xl"}
          />
          <span className="mt-2 underline underline-offset-2 text-white text-shadow-[0px_0px_20px] text-shadow-white text-sm font-medium">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default LibraryFramework;
