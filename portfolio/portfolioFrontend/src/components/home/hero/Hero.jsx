import React, { useState } from "react";
import { NavLink } from "react-router";

function Hero() {
  const [memeImage, setMemeImage] = useState(false);
  const image = Math.round((Math.random() * 100) % 22) + 1;
  const ChangeImage = (e) => {
    if (!memeImage) {
      e.target.src = `/${image}.jpg`;
      console.log(image);
      setMemeImage(true);
    } else {
      e.target.src = "/me.jpeg";
      setMemeImage(false);
    }
  };

  return (
    <div className="mt-25 mb-1 flex">
      <div className="p-5 flex-[2] mb-25 flex flex-col justify-center text-center">
        <h1 className="text-5xl m-3 text-white text-shadow-[0px_2px_40px_rgb(1_1_1)] text-shadow-white/65">
          HELLO, I'M GAURAV{" "}
          <span className="text-shadow-[0px_0px_0px_rgb(0_0_0)]">👋</span>
        </h1>
        <h2 className="text-xl text-shadow-orange-400/70 text-shadow-[0px_1px_15px_rgb(255_167_38)] text-orange-400 m-3 font-semibold">
          Website developer | Javascript & MERN Stack
        </h2>

        <div className="mt-10">
          <button className="w-50 p-5 rounded-2xl mx-10 text-white cursor-pointer bg-yellow-400 text-xl font-semibold transition-all duration-300 ease-in-out hover:font-bold hover:text-yellow-400 hover:bg-white hover:scale-105 hover:shadow-gray-600 hover:shadow-[0px_10px_10000px_6px]">
            View My Blogs
          </button>
          <button className="w-50 p-5 text-yellow-400 bg-white rounded-2xl mx-10 cursor-pointer text-xl font-semibold transition-all duration-300 ease-in-out hover:font-bold hover:bg-yellow-400 hover:text-white hover:scale-105 hover:shadow-amber-300/50 hover:shadow-[0px_10px_10000px_6px]">
            Contact Me
          </button>
        </div>
      </div>
      <div className="p-5 flex-1 text-center">
        <img
          src="me.jpeg"
          alt="My image"
          className="w-100 rounded-3xl mx-auto flex object-center"
          onClick={ChangeImage}
        />
      </div>
    </div>
  );
}

export default Hero;
