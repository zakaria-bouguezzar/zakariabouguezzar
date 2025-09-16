import React, { useEffect, useRef } from "react";
import { FaGem, FaEye, FaUsers, FaHeart } from "react-icons/fa";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min.js";

const Services = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = BIRDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color1: 0x415ea6, // birds color
        backgroundColor: 0xffffff, // section background
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  const items = [
    {
      icon: <FaGem className="text-5xl text-blue-500 mb-4" />,
      title: "Frameworks & Library",
      desc: "Bonne expérience avec les frameworks & Library suivants (React, Flutter, tikinter ...)",
    },
    {
      icon: <FaEye className="text-5xl text-blue-500 mb-4" />,
      title: "Veille techno",
      desc: "Toujours à l’affût des nouvelles technologies.",
    },
    {
      icon: <FaUsers className="text-5xl text-blue-500 mb-4" />,
      title: "Ergonomie",
      desc: "Soucieux de l'expérience utilisateur.",
    },
    {
      icon: <FaHeart className="text-5xl text-blue-500 mb-4" />,
      title: "Passion",
      desc: "Beaucoup de cœur à l’ouvrage pour chaque projet.",
    },
  ];

  return (
    <section
      id="service"
      ref={vantaRef}  // ✅ Vanta Birds applied here
      className="relative py-20 text-center text-black overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-12 relative inline-block">
        A votre service !
        <span className="block w-40 h-1 bg-blue-500 mx-auto mt-3 rounded"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-6 rounded-xl shadow hover:shadow-lg transition bg-white/80"
          >
            {item.icon}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
