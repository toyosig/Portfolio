"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaMobileAlt } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiJavascript, SiNextdotjs } from "react-icons/si";

const skills = [
  { icon: <FaReact className="text-blue-400 text-5xl" />, name: "React.js" },
  { icon: <FaMobileAlt className="text-pink-400 text-5xl" />, name: "React Native" },
  { icon: <SiTailwindcss className="text-cyan-400 text-5xl" />, name: "Tailwind CSS" },
  { icon: <SiFramer className="text-purple-400 text-5xl" />, name: "Framer Motion" },
  { icon: <SiJavascript className="text-yellow-400 text-5xl" />, name: "JavaScript" },
  { icon: <SiNextdotjs className="text-gray-400 text-5xl" />, name: "Next.js" },
];

const AboutMe = () => {
  return (
    <motion.div 
      className="py-16 px-8 md:px-16 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 rounded-2xl text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-900 opacity-50"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.h2
        className="text-center text-3xl md:text-5xl font-bold mb-8 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👋 About Me
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto text-center text-lg md:text-xl text-gray-300 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="mb-6">
          Hi, I am <span className="text-emerald-300 font-semibold">Adesanya Gbenga</span>, a passionate React Developer with experience in web & mobile app development. 
          I specialize in building modern, interactive, and scalable applications using React.js, React Native, Tailwind CSS, and Framer Motion.
        </p>
        <p className="mb-6">
          My expertise lies in crafting visually appealing and high-performance user interfaces. Whether it is a single-page web app or a cross-platform mobile application, 
          I focus on clean code, smooth animations, and intuitive user experiences.
        </p>
      </motion.div>

      <motion.h3
        className="text-center text-2xl md:text-4xl font-bold my-8 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 My Tech Stack
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center items-center relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-purple-800 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {skill.icon}
            <p className="mt-3 text-sm md:text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutMe;
