import React from "react";

function Language() {
  const language = ["English", "Spanish", "Hindi", "Gujarati"];

  return (
    <div className="gap-6 justify-center flex-wrap m-auto">
      {language.map((item) => (
        <div key={item} className="flex flex-col items-center">
          <span className="my-5 underline underline-offset-10 text-white text-shadow-[0px_0px_20px] text-shadow-white/90 text-2xl font-medium">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Language;
