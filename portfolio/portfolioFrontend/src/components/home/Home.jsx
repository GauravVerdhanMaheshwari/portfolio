import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-500 mt-25 mb-1 flex">
      <div className="p-5 flex-2 flex flex-col mb-45 justify-center text-center">
        <h1 className="text-5xl m-3 animate-typing font-medium">
          HELLO, I'M GAURAV 👋
        </h1>
        <h2 className="text-xl m-3 font-semibold">
          Website developer | Javascript & MERN Stack
        </h2>
      </div>
      <div className="p-5 flex-1 bg-amber-200 text-center">
        <img
          src="me.jpeg"
          alt="My image"
          className="w-100 rounded-3xl mx-auto flex object-center"
        />
      </div>
    </div>
  );
}
