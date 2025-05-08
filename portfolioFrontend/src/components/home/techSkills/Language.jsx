import React from "react";

function Language() {
  const language = ["English", "Spanish", "Hindi", "Gujarati"];

  return (
    <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center flex-wrap m-auto">
      {language.map((item) => (
        <div key={item} className="flex flex-col items-center">
          <span className="my-3 sm:my-4 md:my-5 underline underline-offset-6 sm:underline-offset-8 md:underline-offset-10 text-white text-shadow-[0px_0px_20px] text-shadow-white/90 text-lg sm:text-xl md:text-2xl font-medium">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Language;
