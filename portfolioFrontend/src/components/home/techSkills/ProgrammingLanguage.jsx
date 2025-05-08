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
    HTML: { image: "/HTML.webp", classname: "w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 mt-3 sm:mt-4 md:mt-5 mx-1 sm:mx-2" },
    CSS: { image: "/css.webp", classname: "w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 mt-3 sm:mt-4 md:mt-5 mx-1 sm:mx-2" },
    Typescript: { image: "/typescript.webp", classname: "w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 mt-3 sm:mt-4 md:mt-5 mx-1 sm:mx-2" },
    Javascript: { image: "/JS.webp", classname: "w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 mt-3 sm:mt-4 md:mt-5 mx-1 sm:mx-2" },
    Java: { image: "/java.webp", classname: "w-10 sm:w-14 md:w-16 h-14 sm:h-18 md:h-22 mt-3 sm:mt-4 md:mt-5 mx-1 sm:mx-2" },
    C: { image: "/C.webp", classname: "w-12 sm:w-16 md:w-18 h-12 sm:h-16 md:h-20 mt-4 sm:mt-5 md:mt-7 mx-1 sm:mx-2" },
    PHP: { image: "/PHP.webp", classname: "w-20 sm:w-24 md:w-30 h-12 sm:h-16 md:h-20 mt-4 sm:mt-5 md:mt-7 mx-1 sm:mx-2" },
    Python: { image: "/python.webp", classname: "w-12 sm:w-16 md:w-20 h-14 sm:h-18 md:h-22 mt-3 sm:mt-4 md:mt-5 mx-1 sm:mx-2" },
  };

  return (
    <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center flex-wrap">
      {programmingLanguage.map((item) => (
        <div key={item} className="flex flex-col items-center">
          <img
            src={programmingImage[item].image}
            alt={item}
            className={programmingImage[item].classname + " rounded-xl"}
          />
          <span className="mt-1 sm:mt-1.5 md:mt-2 underline underline-offset-2 text-white text-shadow-[0px_0px_20px] text-shadow-white text-xs sm:text-sm md:text-base font-medium">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ProgrammingLanguage;
