import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg fixed w-full z-50">
      {/* Logo */}
      <img src="/Image/logo.jpeg" alt="Logo" className="w-20 ml-20" />

      {/* Links */}
      <ul className="flex gap-12 text-lg font-medium items-center justify-center">
        <li>
          <a
            href="#home"
            className="hover:text-orange-400 transition duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-orange-400 transition duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            className="hover:text-orange-400 transition duration-300"
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-orange-400 transition duration-300"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#project"
            className="hover:text-orange-400 transition duration-300"
          >
            Project
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;