"use client";

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-purple-950 py-4 z-50 shadow-md">
      <nav className="text-white flex flex-row mx-[16px] md:mx-[60px] lg:mx-[120px] justify-between items-center h-[48px] md:h-[64px]">
        <h1 className="cursor-pointer">G.adesanya</h1>
        <div className="hidden sm:flex flex-row w-[40%] justify-between">
          {["home", "portfolio",  "about", "contact"].map((section, index) => (
            <ScrollLink
              key={index}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMobileMenu}>Menu</button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="bg-purple-900 py-4 sm:hidden text-white text-center">
          {["home", "portfolio", "about", "contact"].map((section, index) => (
            <ScrollLink
              key={index}
              to={section}
              smooth={true}
              duration={500}
              className="block py-2 cursor-pointer hover:text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
