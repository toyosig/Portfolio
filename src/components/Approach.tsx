'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Code, CheckCircle, Rocket } from "lucide-react";
import { useTheme } from "next-themes";

const ProjectApproach = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && (theme === "dark" || resolvedTheme === "dark");

  const steps = [
    {
      title: "Ideation & Planning",
      description:
        "We start by brainstorming and outlining a clear roadmap to ensure a smooth development process.",
      icon: <Lightbulb className="h-10 w-10 text-yellow-400" />,
    },
    {
      title: "Design & Development",
      description:
        "Using modern UI/UX principles and cutting-edge technologies, we bring ideas to life with clean, efficient code.",
      icon: <Code className="h-10 w-10 text-blue-400" />,
    },
    {
      title: "Testing & Refinement",
      description:
        "Rigorous testing ensures a seamless experience, catching issues early for a flawless final product.",
      icon: <CheckCircle className="h-10 w-10 text-green-400" />,
    },
    {
      title: "Launch & Optimization",
      description:
        "We deploy the project with precision and continuously optimize for the best performance and scalability.",
      icon: <Rocket className="h-10 w-10 text-red-400" />,
    },
  ];

  return (
    <div className="my-12 px-6 md:px-16 lg:px-24 xl:px-32">
      {/* Title Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDarkMode ? "text-white" : "text-black"} `}>
          My Project Approach
        </h2>
        <p className={`text-base sm:text-lg ${isDarkMode ? "text-white/85" : "text-gray-600"} mt-4`}>
          A structured and agile process to deliver exceptional results.
        </p>
      </motion.div>

      {/* Steps Section */}
      <div className="grid gap-6 md:gap-10 sm:grid-cols-1 md:grid-cols-2">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex items-start space-x-4 p-6 ${isDarkMode ? "bg-gray-700" : "bg-white"} rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex-shrink-0">{step.icon}</div>
            <div>
              <h3 className={`text-lg sm:text-xl font-semibold  ${isDarkMode ? "text-white" : "text-black"}`}>
                {step.title}
              </h3>
              <p className={`text-sm sm:text-base  ${isDarkMode ? "text-white/85" : "text-gray-600"} mt-2`}>
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SVG Illustration */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >

      </motion.div>
    </div>
  );
};

export default ProjectApproach;
