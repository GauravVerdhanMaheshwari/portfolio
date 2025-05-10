import React, { useState } from "react";
import { Me, HowItStarted, MyJourney, MyGoals } from "./index";

export default function About() {
  const [show, setShow] = useState("Me");

  const navItems = ["Me", "How it started", "My Journey", "My Goals"];

  const linkCss = (isActive) =>
    isActive
      ? "text-yellow-400 underline underline-offset-6 text-2xl font-semibold cursor-pointer hover:text-yellow-500 transition-all duration-300 ease-in-out text-shadow-yellow-200/65 text-shadow-[0px_0px_20px]"
      : "text-2xl font-semibold cursor-pointer hover:text-yellow-500 transition-all duration-300 ease-in-out text-shadow-yellow-200/65 text-shadow-[0px_0px_20px]";

  return (
    <div className="px-4 py-16 sm:py-24 md:px-10 lg:px-40 flex flex-col gap-10">
      <h1 className="text-white text-4xl font-semibold text-left text-shadow-gray-200/65 text-shadow-[0px_0px_30px]">
        About Me
      </h1>
      <hr className="border-yellow-500" />

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2">
          <img
            src="me.webp"
            alt="About Me"
            className="rounded-lg max-h-[80vh] w-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 text-white text-xl mx-2 lg:mx-6">
          <h2 className="text-4xl font-semibold mb-6">
            Hello everyone, I'm{" "}
            <span className="text-yellow-500 text-shadow-yellow-200/65 text-shadow-[0px_0px_20px]">
              Gaurav Verdahan Maheshwari
            </span>
          </h2>
          <hr className="border-2 border-yellow-500 mb-6" />

          <ul
            className="flex flex-wrap gap-6 mb-8"
            role="tablist"
            aria-label="About sections"
          >
            {navItems.map((item) => (
              <li
                key={item}
                className={linkCss(show === item)}
                role="tab"
                aria-selected={show === item}
                onClick={() => setShow(item)}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="transition-all duration-500 ease-in-out">
            {show === "Me" && <Me />}
            {show === "How it started" && <HowItStarted />}
            {show === "My Journey" && <MyJourney />}
            {show === "My Goals" && <MyGoals />}
          </div>
        </div>
      </div>
    </div>
  );
}
