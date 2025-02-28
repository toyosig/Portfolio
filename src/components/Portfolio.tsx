"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "church web  ",
    description: "A church website for streaming live videos and reading morning devotions daily and sermon.",
    image: "/wing.png",
    projectLink: "https://your-project-link.com",
    githubLink: "https://github.com/yourusername/eprocurement",
  },
  {
    title: "Land Registry App",
    description: "A decentralized land registry using Solidity, React, Tailwind CSS and network is sepolia eth.",
    image: "/land.png",
    projectLink: "https://omoabuleshowo.vercel.app/",
    githubLink: "https://github.com/toyosig/land",
  },
  {
    title: "Junks",
    description: "A fast food landing page to get the price of various fast food.",
    image: "/junks.png",
    projectLink: "https://junks-eta.vercel.app/",
    githubLink: "https://github.com/toyosig/junks",
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 px-8 rounded-2xl  text-black relative">
      {/* Section Heading */}
      <motion.h2
        className="text-center text-3xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎨 My Portfolio
      </motion.h2>

      <motion.p
        className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Explore some of my latest projects showcasing my expertise in **React, Blockchain, and Web Development**.
      </motion.p>

      {/* Carousel Wrapper */}
      <div className="relative w-full flex justify-center items-center">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-12 bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Project Card */}
        <motion.div
          key={currentIndex}
          className="bg-gray-800 rounded-xl shadow-lg overflow-hidden text-white w-full max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-52">
            <Image
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold">{projects[currentIndex].title}</h3>
            <p className="text-gray-200 text-sm mt-2">{projects[currentIndex].description}</p>

            {/* Project Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href={projects[currentIndex].projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                View Project →
              </a>
              <a
                href={projects[currentIndex].githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-200 hover:text-gray-100 font-semibold"
              >
                View GitHub →
              </a>
            </div>
          </div>
        </motion.div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-12 bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
