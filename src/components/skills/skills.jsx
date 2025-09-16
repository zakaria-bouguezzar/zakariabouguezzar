import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";

import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaWordpress,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiMysql,
  SiSqlite,
  SiDjango,
  SiTypescript,
  SiLaravel,
  SiPython,
  SiFirebase,
  SiExpress,
  SiCsharp,
  SiWindicss,
  SiTailwindcss,
} from "react-icons/si";

const skills = {
  experienced: [
    { icon: <FaReact className="text-4xl text-cyan-500" />, name: "React" },
    { icon: <FaNodeJs className="text-4xl text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-4xl text-gray-300" />, name: "ExpressJS" },
    { icon: <SiTailwindcss className="text-4xl text-sky-400" />, name: "TailwindCSS" },
    { icon: <SiFlutter className="text-4xl text-cyan-400" />, name: "Flutter" },
    { icon: <SiDart className="text-4xl text-sky-500" />, name: "Dart" },
    { icon: <FaJava className="text-4xl text-red-500" />, name: "Java" },
    { icon: <SiMysql className="text-4xl text-yellow-400" />, name: "MySQL" },
    { icon: <SiSqlite className="text-4xl text-blue-400" />, name: "SQLite" },
    { icon: <FaWordpress className="text-4xl text-slate-300" />, name: "WordPress" },
  ],
  learning: [
    { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-4xl text-blue-500" />, name: "CSS" },
    { icon: <FaPhp className="text-4xl text-indigo-500" />, name: "PHP" },
    { icon: <SiDjango className="text-4xl text-green-600" />, name: "Django" },
    { icon: <SiTypescript className="text-4xl text-blue-600" />, name: "Typescript" },
    { icon: <SiWindicss className="text-4xl text-teal-500" />, name: "Windev" },
    { icon: <SiLaravel className="text-4xl text-red-600" />, name: "Laravel" },
    { icon: <SiPython className="text-4xl text-yellow-400" />, name: "Python" },
    { icon: <SiFirebase className="text-4xl text-yellow-500" />, name: "Firebase" },
    { icon: <SiCsharp className="text-4xl text-purple-500" />, name: "C#" },
  ],
};

const SkillCard = ({ icon, name, status }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center bg-gray-800 bg-opacity-80 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
  >
    {icon}
    <h3 className="mt-3 text-lg font-semibold text-white">{name}</h3>
    <span
      className={`mt-2 px-3 py-1 rounded-full text-sm ${
        status === "Experienced"
          ? "bg-blue-600 text-white"
          : "bg-green-600 text-white"
      }`}
    >
      {status}
    </span>
  </motion.div>
);

const Skills = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x4e4e4e,
        backgroundColor: 0x0d1117,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={vantaRef}
      className="py-20 relative text-center text-white overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-white mb-16 relative z-10"
      >
        Explore My <span className="text-blue-500">Skills</span>
        <span className="block w-40 h-1 bg-blue-500 mx-auto mt-3 rounded"></span>
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Experienced Skills */}
        <h3 className="text-2xl font-semibold text-gray-200 mb-8">
          Experienced Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16">
          {skills.experienced.map((skill, idx) => (
            <SkillCard key={idx} {...skill} status="Experienced" />
          ))}
        </div>

        {/* Recently Learned Skills */}
        <h3 className="text-2xl font-semibold text-gray-200 mb-8">
          Recently Learned Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.learning.map((skill, idx) => (
            <SkillCard key={idx} {...skill} status="Learning" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
