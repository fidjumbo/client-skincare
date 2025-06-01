import React, { useState, useEffect } from "react";
import skin1 from "../assets/skin1.png";
import skin2 from "../assets/skin2.png";
import skin3 from "../assets/skin3.png";

const HeroSection = () => {
 const images = [skin1, skin2, skin3];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen" id="home">
      <img
        src={images[currentImageIndex]}
        alt="Skincare"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bashand Beauties And Skincare
        </h1>
        <p className="text-2xl font-bold text-gray-300 md:text-xl mb-6">
          Discover the glow within – Premium skincare for your natural beauty.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
