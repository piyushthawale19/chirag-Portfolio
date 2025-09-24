import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg fixed w-full z-50">
      {/* Logo */}
      <img src="/images/logo.jpeg" alt="Logo" className="w-20 ml-20" />

      {/* Links */}
      <ul className="flex gap-12 text-lg font-medium items-center justify-center">
        {["home", "about", "gallery", "skills", "project"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="hover:text-orange-400 transition duration-300 capitalize"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
