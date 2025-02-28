"use client";

import React from "react";
import { HeroHighlight } from "./ui/hero-highlight";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Image from "next/image";
import { motion } from "framer-motion";

import hero from "./images/pngwing.com (31).png";

const Hero = () => {
  const words = [
    { text: "Designing" },
    { text: "Intuitive" },
    { text: "Interfaces," },
    { text: "Building" },
    { text: "Engaging" },
    { text: "Interactions!", className: "text-red-500 font-bold" },
  ];

  return (
    <div className="w-full flex justify-center items-center font-serif ">
      <HeroHighlight className="flex justify-center items-center w-full">
        <div className="flex flex-col items-center text-center text-white mx-6 md:mx-20 lg:mx-40">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white"
          >
            <Image src={hero} alt="hero pic" className="w-full h-full object-cover" />
          </motion.div>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-lg mt-4 text-gray-300 font-light"
          >
            Hi, I am
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-4xl mt-2 font-semibold"
          >
            Adesanya Gbenga
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-2xl mt-4 text-gray-200 font-extrabold"
          >
            Creative Frontend Developer
          </motion.h2>

          {/* Typewriter Effect */}
          <TypewriterEffect words={words} className="text-blue-500 text-lg md:text-xl" />

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="px-6 py-3 mt-6 rounded-lg text-purple-950 bg-white font-semibold shadow-md transition duration-300 hover:bg-gray-200"
          >
            Download my cv
          </motion.button>
        </div>
      </HeroHighlight>
    </div>
  );
};

export default Hero;
