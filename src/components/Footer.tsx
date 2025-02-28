"use client";

import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { GiLoveMystery } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="h-fit flex justify-between items-end md:items-center mt-16 left-0 right-0 px-5 md:px-20 p-4 border-t border-primary">
      {/* Social Links */}
      <div className="flex text-xs md:text-lg gap-4">
        <a
          href="https://x.com/olugbenga__?s=21"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.github.com/toyosig"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gbenga-adesanya-0b16a0210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="mailto:gadesanya9907@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition"
        >
          <IoIosMail />
        </a>
      </div>

      {/* Footer Text */}
      <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-4">
        <div className="text-xs">G.Adesanya &nbsp; 2024.</div>
        <div className="flex items-center text-sm gap-1">
          <GiLoveMystery />
          <div>
            Designed & Built by{" "}
            <span className="font-bold underline">Adesanya Gbenga</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
