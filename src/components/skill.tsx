"use client"
import React from "react";
import { 
  FaCss3, FaGitAlt, FaHtml5, FaJs, FaReact 
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";

export const Skills: React.FC = () => {
  return (
    <div className="w-full">
      <div className="text-5xl md:text-6xl text-center flex justify-center py-16 font-bold">
        Skills
      </div>
      <section className="grid grid-cols-2 gap-6 md:h-[30em] px-10 md:px-20 justify-center">
        <div className="col-span-2 bg-purple-900 text-white p-8 py-10 md:p-20 h-fit rounded-2xl">
          <ul className="text-lg md:text-3xl grid grid-cols-4 items-center gap-10">
            <li className="flex flex-col items-center gap-4">
              <FaHtml5 />
              <div>HTML</div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <FaCss3 />
              <div>CSS</div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <FaJs />
              <div>JavaScript</div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <FaReact />
              <div>React</div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <SiReact />
              <div>React Native</div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <SiNextdotjs />
              <div>Next.js</div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <SiTypescript />
              <div>TypeScript</div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <FaGitAlt />
              <div>Git</div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <RiTailwindCssFill />
              <div>Tailwind CSS</div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <SiFramer />
              <div>Framer Motion</div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
