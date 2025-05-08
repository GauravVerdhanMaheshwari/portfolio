import React, { useState } from "react";
import {
  ProgrammingLanguage,
  LibraryFramework,
  Databases,
  Tools,
  Language,
} from "./index";

function TechSkills() {
  const getItemClass = (item) =>
    `text-base sm:text-lg md:text-xl cursor-pointer transition-all ease-in-out duration-200 ${
      activeItem === item
        ? "text-amber-400"
        : "text-white hover:text-amber-400 hover:drop-shadow-[0_0_5px_rgba(255,191,0,0.6)]"
    }`;

  const [activeItem, setActiveItem] = useState("Programming Languages");

  const itemsEmoji = {
    "Programming Languages": "🧠 ",
    "Libraries & Frameworks": "⚙️ ",
    Databases: "🗄️ ",
    "Tools & Platforms": "🛠️ ",
    "Spoken Languages": "🌍 ",
  };

  const items = [
    "Programming Languages",
    "Libraries & Frameworks",
    "Databases",
    "Tools & Platforms",
    "Spoken Languages",
  ];

  const itemsDescription = {
    "Programming Languages": {
      element: <ProgrammingLanguage />,
      css: "flex flex-1 ml-2 sm:ml-3 md:ml-5 p-3 sm:p-4 md:p-5 justify-start h-full w-full backdrop-blur-3xl rounded-xl bg-purple-400/90 shadow-[0px_0px_1000px] shadow-purple-400/90 border border-purple-100/80 inset-shadow-[0px_10px_100px] inset-shadow-purple-600",
    },
    "Libraries & Frameworks": {
      element: <LibraryFramework />,
      css: "flex flex-1 ml-2 sm:ml-3 md:ml-5 p-3 sm:p-4 md:p-5 justify-start h-full w-full backdrop-blur-3xl rounded-xl bg-red-400/90 shadow-[0px_0px_1000px] shadow-red-400/90 border border-red-100/80 inset-shadow-[0px_10px_100px] inset-shadow-red-600",
    },
    Databases: {
      element: <Databases />,
      css: "flex flex-1 ml-2 sm:ml-3 md:ml-5 p-3 sm:p-4 md:p-5 justify-start h-full w-full backdrop-blur-3xl rounded-xl bg-cyan-400/90 shadow-[0px_0px_1000px] shadow-cyan-400/90 border border-cyan-100/80 inset-shadow-[0px_10px_100px] inset-shadow-cyan-600",
    },
    "Tools & Platforms": {
      element: <Tools />,
      css: "flex flex-1 ml-2 sm:ml-3 md:ml-5 p-3 sm:p-4 md:p-5 justify-start h-full w-full backdrop-blur-3xl rounded-xl bg-yellow-400/90 shadow-[0px_0px_1000px] shadow-yellow-400/90 border border-yellow-100/80 inset-shadow-[0px_10px_100px] inset-shadow-yellow-600",
    },
    "Spoken Languages": {
      element: <Language />,
      css: "flex flex-1 ml-2 sm:ml-3 md:ml-5 p-3 sm:p-4 md:p-5 justify-start h-full w-full backdrop-blur-3xl rounded-xl bg-blue-400/90 shadow-[0px_0px_1000px] shadow-blue-400/90 border border-blue-100/80 inset-shadow-[0px_10px_100px] inset-shadow-blue-600",
    },
  };

  return (
    <div className="my-5 sm:my-8 md:my-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <hr className="text-white h-0.5 my-4 sm:my-6 md:my-8 bg-gray-200 border-0" />
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-left underline underline-offset-10 text-shadow-gray-200/65 text-shadow-[1px_1px_19px]">
        Technical Skills
      </h1>
      <div className="flex flex-col md:flex-row justify-center my-5 sm:my-8 md:my-10">
        <div className="flex justify-center md:justify-start md:flex-1 mb-6 md:mb-0">
          <ul className="grid gap-3 sm:gap-4 md:gap-6">
            {items.map((item) => (
              <li key={item}>
                <h1
                  className={getItemClass(item)}
                  onClick={() => setActiveItem(item)}
                >
                  {itemsEmoji[item]}
                  {item}
                </h1>
              </li>
            ))}
          </ul>
        </div>
        <div className={itemsDescription[activeItem].css}>
          {itemsDescription[activeItem].element}
        </div>
      </div>
    </div>
  );
}

export default TechSkills;
