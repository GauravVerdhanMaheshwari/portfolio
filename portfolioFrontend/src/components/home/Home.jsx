import React from "react";
import { Link } from "react-router-dom";
import { Hero, About, TechSkills, Projects, Blogs } from "./index";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechSkills />
      <Projects />
      <Blogs />
    </>
  );
}
