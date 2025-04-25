import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  const linkCss = ({ isActive }) =>
    isActive
      ? "text-orange-500 custom-underline-active"
      : "text-black custom-underline";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-sm justify-center text-black p-5 flex shadow-md ">
      <nav>
        <ul className="flex gap-5">
          <li className="text-2xl p-3 font-semibold">
            <NavLink to="/" className={linkCss}>
              <h1>Home</h1>
            </NavLink>
          </li>
          <li className="text-2xl p-3 font-semibold ">
            <NavLink to="/about" className={linkCss}>
              <h1>About</h1>
            </NavLink>
          </li>
          <li className="text-2xl p-3 font-semibold">
            <NavLink to="/projects" className={linkCss}>
              <h1>Projects</h1>
            </NavLink>
          </li>
          <li className="text-2xl p-3 font-semibold">
            <NavLink to="/blogs" className={linkCss}>
              Blogs
            </NavLink>
          </li>
          <li className="text-2xl p-3 font-semibold">
            <NavLink to="/contact" className={linkCss}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
