import React from "react";

function navbar() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Zakaria Bouguezzar</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center px-8 py-20"
      >
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Zakaria Bouguezzar</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            A passionate <span className="text-blue-300">Fullstack Developer</span>  
            who builds modern web & mobile applications.
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition"
          >
            View My Work
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="profilez.png"
            alt="Zakaria Bouguezzar"
            className="w-64 h-64 rounded-full border-4 border-blue-500 shadow-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default navbar;
