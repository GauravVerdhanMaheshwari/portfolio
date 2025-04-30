import React from "react";
import { Link } from "react-router-dom";
import { Hero, About, TechSkills } from "./index";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechSkills />
    </>
  );
}
