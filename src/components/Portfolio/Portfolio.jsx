import React from "react";
import portfolio1 from "../../assets/imgproject1.png";
import portfolio2 from "../../assets/imgproject2.png";
import portfolio3 from "../../assets/imgproject3.png";
import portfolio4 from "../../assets/imgproject4.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: portfolio1,
      title: "Morocco Travel Guide",
    },
    {
      id: 2,
      image: portfolio2,
      title: "Restaurant Management",
    },
    {
      id: 3,
      image: portfolio3,
      title: "Construction Company",
    },
    {
      id: 4,
      image: portfolio4,
      title: "GameSetup Hub",
    },
  ];

  return (
    <section id="portfolio" className="py-16 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-2">PORTFOLIO</h2>
      <span className="block w-32 h-1 bg-blue-500 mx-auto mt-3 rounded"></span>
      <br />
      <p className="text-gray-600 mb-10">
        Présentation de mes dernières expériences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
