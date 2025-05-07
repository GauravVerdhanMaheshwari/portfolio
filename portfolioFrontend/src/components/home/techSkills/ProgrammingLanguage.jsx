import React from "react";

function ProgrammingLanguage() {
  const programmingLanguage = [
    "HTML",
    "CSS",
    "Typescript",
    "Javascript",
    "Java",
    "C",
    "PHP",
    "Python",
  ];

  const programmingImage = {
    HTML: { image: "/HTML.webp", classname: "w-20 h-20 mt-5 mx-2" },
    CSS: { image: "/css.webp", classname: "w-20 h-20 mt-5 mx-2" },
    Typescript: { image: "/typescript.webp", classname: "w-20 h-20 mt-5 mx-2" },
    Javascript: { image: "/JS.webp", classname: "w-20 h-20 mt-5 mx-2" },
    Java: { image: "/java.webp", classname: "w-16 h-22 mt-5 mx-2" },
    C: { image: "/C.webp", classname: "w-18 h-20 mt-7 mx-2" },
    PHP: { image: "/PHP.webp", classname: "w-30 h-20 mr-2 mt-7 mx-2" },
    Python: { image: "/python.webp", classname: "w-20 h-22 mt-5 mx-2" },
  };

  return (
    <div className="flex gap-6 justify-center flex-wrap">
      {programmingLanguage.map((item) => (
        <div key={item} className="flex flex-col items-center">
          <img
            src={programmingImage[item].image}
            alt={item}
            className={programmingImage[item].classname + " rounded-xl"}
          />
          <span className="mt-2 underline underline-offset-2 text-white text-shadow-[0px_0px_20px] text-shadow-white text-sm font-medium">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ProgrammingLanguage;
