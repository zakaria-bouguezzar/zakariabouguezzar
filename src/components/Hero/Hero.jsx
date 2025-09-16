import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";
import Services from "../../components/Service/service";
import profileImage from "../../assets/profile.png";
import cv from "../../assets/zakaria bouguezzar.pdf";



const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track active section
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Intersection Observer to detect visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set active section based on ID
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    // Observe sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Vanta.js effect
  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x4e4e4e,
        backgroundColor: 0x00000000,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  const menuItems = ["Home", "Service", "Portfolio", "Skills", "Contact"];

  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        ref={vantaRef}
        className="relative min-h-[100vh] flex flex-col justify-start overflow-hidden text-white"
      >
        {/* NAVBAR */}
        <nav className="fixed w-full flex justify-center top-4 z-50">
          <div className="bg-gray-700 bg-opacity-70 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg flex justify-between items-center w-[90%] max-w-6xl">
            {/* LOGO */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <span className="text-2xl font-bold text-blue-400">
                Zakaria Bouguezzar
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: "#60a5fa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`text-gray-200 cursor-pointer ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400 font-semibold"
                      : ""
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-200 hover:text-blue-400 focus:outline-none"
              >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="absolute top-20 w-[90%] max-w-6xl bg-gray-900 bg-opacity-95 backdrop-blur-md rounded-2xl shadow-lg md:hidden">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-blue-400 rounded-lg transition ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400 font-semibold"
                      : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-screen max-w-6xl mx-auto px-6">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left space-y-4 mt-32 md:mt-0"
          >
            <p className="text-1xl text-white">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-extrabold flex items-center">
              <span className="text-blue-400 ml-2">Zakaria Bouguezzar</span>
              <span className="ml-2 animate-blink">|</span>
            </h1>

            <h2 className="text-3xl md:text-3xl text-blue-400 font-medium">
              Fullstack Developer
            </h2>
            <p className="text-1xl text-white">
              From{" "}
              <span className="text-red-500">Moro</span>
              <span className="text-green-500">cco</span> 🇲🇦
            </p>

            {/* BUTTONS */}
            <div className="flex space-x-4 mt-6">
              <a
                href={cv}
                download
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Contact
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-6 mt-6">
              <a
                href="https://github.com/zakaria-bouguezzar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 text-2xl transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/zakaria-bou-2588b536b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 text-2xl transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="mt-12 md:mt-0 relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 20px rgba(0,123,255,0.6)",
                  "0 0 40px rgba(0,162,255,0.8)",
                  "0 0 20px rgba(0,123,255,0.6)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-72 h-72 rounded-full bg-blue-900 from-blue-600 to-blue-400 flex items-center justify-center p-1"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-68 h-68 rounded-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* SCROLL DOWN ARROW */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={scrollToNextSection}
            className="text-gray-200 hover:text-blue-400 focus:outline-none animate-bounce"
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </button>
        </div>

        {/* ABOUT ME SECTION */}
        <div id="about" className="relative z-10 py-20 text-center px-6">
          <div className="max-w-4xl mx-auto bg-gray-700 bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-blue-400 mb-6">About Me</h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Hi, I’m <span className="font-semibold">Zakaria Bouguezzar</span>, a{" "}
              <span className="text-blue-400 font-medium">Technicien Spécialisé</span>{" "}
              and passionate{" "}
              <span className="text-blue-400 font-medium">Full-Stack Developer</span>.
              I create modern websites, mobile applications, and desktop
              software that combine functionality with great user experience.
            </p>
            <p className="text-lg leading-relaxed text-gray-200 mt-4">
              I love turning ideas into real projects, solving problems with clean
              code, and continuously learning new technologies to stay ahead.
              Collaboration and innovation are at the heart of my work—I enjoy
              working on projects that bring value and make an impact.
            </p>
            <p className="text-lg leading-relaxed text-gray-200 mt-4">
              My goal is simple: to build smart, efficient, and creative digital
              solutions that help people and businesses grow.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="service" className="relative z-10 py-20 text-center px-6">
        <Services />
      </section>
    </>
  );
};

export default Hero;