import React, { useState } from "react";
import { NavLink } from "react-router";

function Hero() {
  const [memeImage, setMemeImage] = useState(false);
  const image = Math.floor((Math.random() * 100) % 22) + 1;
  const ChangeImage = (e) => {
    if (!memeImage) {
      e.target.src = `/${image}.webp`;
      console.log(image);
      setMemeImage(true);
    } else {
      e.target.src = "/me.webp";
      setMemeImage(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-16 sm:py-24 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl m-3 text-white text-shadow-[0px_2px_40px_rgb(1_1_1)] text-shadow-white/65">
          HELLO, I'M GAURAV{" "}
          <span className="text-shadow-[0px_0px_0px_rgb(0_0_0)]">👋</span>
        </h1>
        <h2 className="text-lg sm:text-xl text-shadow-orange-400/70 text-shadow-[0px_1px_15px_rgb(255_167_38)] text-orange-400 m-3 font-semibold">
          Website developer | Javascript & MERN Stack
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 w-full justify-center">
          <button className="w-full sm:w-auto px-6 py-3 rounded-2xl text-white cursor-pointer bg-yellow-400 text-lg sm:text-xl font-semibold transition-all duration-300 ease-in-out hover:font-bold hover:text-yellow-400 hover:bg-white hover:scale-105 hover:shadow-gray-600 hover:shadow-[0px_10px_10000px_6px]">
            View My Blogs
          </button>
          <button className="w-full sm:w-auto px-6 py-3 text-yellow-400 bg-white rounded-2xl cursor-pointer text-lg sm:text-xl font-semibold transition-all duration-300 ease-in-out hover:font-bold hover:bg-yellow-400 hover:text-white hover:scale-105 hover:shadow-amber-300/50 hover:shadow-[0px_10px_10000px_6px]">
            Contact Me
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4">
        <img
          src="me.webp"
          alt="My image"
          className="w-48 sm:w-64 md:w-80 rounded-3xl mx-auto cursor-pointer transition-transform hover:scale-105"
          onClick={ChangeImage}
        />
      </div>
    </div>
  );
}

export default Hero;
