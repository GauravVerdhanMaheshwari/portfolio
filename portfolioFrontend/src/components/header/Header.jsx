import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkCss = ({ isActive }) =>
    isActive
      ? "text-orange-500 custom-underline-active"
      : "text-black custom-underline transition-all duration-300 ease-in-out hover:text-shadow-[0px_1px_40px] hover:text-orange-500 hover:text-shadow-orange-400/50";

  useEffect(() => {
    const handleScroll = () => {
      // Only handle scroll if menu is closed
      if (!isMenuOpen) {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          setShowHeader(false); // scrolling down
        } else {
          setShowHeader(true); // scrolling up
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // When menu is opened, ensure header is visible
    if (!isMenuOpen) {
      setShowHeader(true);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xs text-black p-5 flex shadow-md transition-all duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full flex justify-between items-center">
        {/* Logo/Home Link */}
        <NavLink 
          to="/" 
          className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors"
        >
          Gaurav
        </NavLink>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden p-2 text-black"
          onClick={toggleMenu}
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute lg:relative top-full left-0 lg:top-auto w-full lg:w-auto
          bg-white/70 lg:bg-transparent
          flex flex-col lg:flex-row gap-5 
          ${isMenuOpen ? "block" : "hidden"} lg:flex
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "border-t lg:border-0 max-h-[80vh] overflow-y-auto" : ""}`}
        >
          <li className="text-2xl p-3 font-semibold">
            <NavLink to="/" className={linkCss} onClick={() => setIsMenuOpen(false)}>
              <h1>Home</h1>
            </NavLink>
          </li>
          <li className="text-2xl p-3 font-semibold">
            <NavLink to="/about" className={linkCss} onClick={() => setIsMenuOpen(false)}>
              <h1>About Me</h1>
            </NavLink>
          </li>
          <li className="text-2xl p-3 font-semibold">
            <NavLink to="/projects" className={linkCss} onClick={() => setIsMenuOpen(false)}>
              <h1>Projects</h1>
            </NavLink>
          </li>
          <li className="text-2xl p-3 font-semibold">
            <NavLink to="/blogs" className={linkCss} onClick={() => setIsMenuOpen(false)}>
              Blogs
            </NavLink>
          </li>
          <li className="text-2xl p-3 font-semibold">
            <NavLink to="/contact" className={linkCss} onClick={() => setIsMenuOpen(false)}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
