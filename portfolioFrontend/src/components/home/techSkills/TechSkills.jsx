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
    `text-xl cursor-pointer transition-all ease-in-out duration-200 ${
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
      css: "flex flex-1 ml-5 p-5 justify-start h-full w-full backdrop-blur-3xl rounded-xl bg-purple-400/90 shadow-[0px_0px_1000px] shadow-purple-400/90 border border-purple-100/80 inset-shadow-[0px_10px_100px] inset-shadow-purple-600",
    },
    "Libraries & Frameworks": {
      element: <LibraryFramework />,
      css: "flex flex-1 ml-5 p-5 justify-start h-full w-full backdrop-blur-3xl rounded-xl bg-red-400/90 shadow-[0px_0px_1000px] shadow-red-400/90 border border-red-100/80 inset-shadow-[0px_10px_100px] inset-shadow-red-600",
    },
    Databases: {
      element: <Databases />, // update this if needed
      css: "flex flex-1 ml-5 p-5 justify-start h-full w-full backdrop-blur-3xl rounded-xl bg-cyan-400/90 shadow-[0px_0px_1000px] shadow-cyan-400/90 border border-cyan-100/80 inset-shadow-[0px_10px_100px] inset-shadow-cyan-600",
    },
    "Tools & Platforms": {
      element: <Tools />,
      css: "flex flex-1 ml-5 p-5 justify-start h-full w-full backdrop-blur-3xl rounded-xl bg-yellow-400/90 shadow-[0px_0px_1000px] shadow-yellow-400/90 border border-yellow-100/80 inset-shadow-[0px_10px_100px] inset-shadow-yellow-600",
    },
    "Spoken Languages": {
      element: <Language />,
      css: "flex flex-1 ml-5 p-5 justify-start h-full w-full backdrop-blur-3xl rounded-xl bg-blue-400/90 shadow-[0px_0px_1000px] shadow-blue-400/90 border border-blue-100/80 inset-shadow-[0px_10px_100px] inset-shadow-blue-600",
    },
  };

  return (
    <div className="my-10">
      <hr className="text-white h-0.5 my-8 bg-gray-200 border-0" />
      <h1 className="text-white text-4xl font-semibold text-left mx-50 underline underline-offset-10 text-shadow-gray-200/65 text-shadow-[1px_1px_19px]">
        Technical Skills
      </h1>
      <div className="flex flex-3 justify-center my-10 mx-50">
        <div className="flex flex-1 justify-start">
          <ul className="grid gap-6">
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
