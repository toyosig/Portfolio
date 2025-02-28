"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJest,
  SiMocha,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3 />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiReact />, name: "React Native" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
  { icon: <SiFramer />, name: "Framer Motion" },
  { icon: <SiMocha />, name: "Mocha" },
  { icon: <SiJest />, name: "Jest" },
];

export const Skills: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-16 px-6 md:px-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center mb-10"
      >
        Skills
      </motion.h2>
      
      {/* Skills Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-purple-900 text-white p-6 md:p-12 rounded-2xl w-full max-w-4xl"
      >
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-lg md:text-2xl">
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="text-5xl md:text-6xl">{skill.icon}</div>
              <div>{skill.name}</div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
