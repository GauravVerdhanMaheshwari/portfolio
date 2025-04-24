import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white justify-center text-black p-5 flex shadow-md">
      <nav>
        <ul className="flex gap-5">
          <li className="text-2xl p-3 font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="text-2xl p-3 font-semibold">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              About Me
            </NavLink>
          </li>
          <li className="text-2xl p-3 font-semibold">
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li className="text-2xl p-3 font-semibold">
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Blogs
            </NavLink>
          </li>
          <li className="text-2xl p-3 font-semibold">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
