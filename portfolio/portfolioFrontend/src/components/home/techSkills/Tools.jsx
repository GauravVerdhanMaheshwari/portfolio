import React from "react";

function Tools() {
  const tools = ["Git", "Postman", "Blender", "Figma"];

  const toolsImage = {
    Git: { image: "/Git.webp", classname: "w-20 h-20 mt-5 mx-5" },
    Postman: { image: "/postman.webp", classname: "w-20 h-20 mt-5 mx-5" },
    Blender: { image: "/Blender.webp", classname: "w-22 h-20 mt-5 mx-5" },
    Figma: { image: "/Figma.webp", classname: "w-15 h-20 mt-5 mx-5" },
  };

  return (
    <div className="flex gap-6 justify-center flex-wrap m-auto">
      {tools.map((item) => (
        <div key={item} className="flex flex-col items-center">
          <img
            src={toolsImage[item].image}
            alt={item}
            className={toolsImage[item].classname + " rounded-xl"}
          />
          <span className="mt-2 underline underline-offset-2 text-white text-shadow-[0px_0px_20px] text-shadow-white text-sm font-medium">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Tools;
