import React, { useState } from "react";
import {
  ProgrammingLanguage,
  LibraryFramework,
  Tools,
  Language,
} from "./index";

function TechSkills() {
  const getItemClass = (item) =>
    `text-xl cursor-pointer transition-all duration-200 ${
      activeItem === item
        ? "text-amber-400"
        : "text-white hover:text-amber-400 hover:drop-shadow-[0_0_5px_rgba(255,191,0,0.6)]"
    }`;

  const [activeItem, setActiveItem] = useState("Programming Languages");

  const items = [
    "Programming Languages",
    "Library & Framework",
    "Tools",
    "Language",
  ];

  const itemsDescription = {
    "Programming Languages": <ProgrammingLanguage />,
    "Library & Framework": <LibraryFramework />,
    Tools: <Tools />,
    Language: <Language />,
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
                  {item}
                </h1>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 ml-5 p-5 justify-start h-full w-full backdrop-blur-3xl rounded-xl bg-purple-400/90 shadow-[0px_0px_1000px] shadow-purple-400/90 border border-purple-100/80 inset-shadow-[0px_10px_100px] inset-shadow-purple-600">
          {itemsDescription[activeItem]}
        </div>
      </div>
    </div>
  );
}

export default TechSkills;
