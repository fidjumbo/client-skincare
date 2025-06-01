import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger and close icons
import logo from "../assets/logo.png"; // Make sure logo.png exists in assets

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
   <nav className="fixed top-0 left-0 w-full z-50 bg-pink-100 shadow-md">
  {/* Entire nav wrapper */}
  <div className="flex items-center justify-between p-4 md:px-8 relative">
    {/* Brand logo and name */}
    <div className="flex items-center space-x-2">
      <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
      <h1 className="text-lg font-bold text-pink-700">Bashand Beauties And Skincare</h1>
    </div>

    {/* Desktop links */}
    <div className="hidden md:flex space-x-8 text-pink-700 font-medium text-sm absolute right-8 top-5">
      <a href="#home" className="hover:text-pink-900 transition">Home</a>
      <a href="#products" className="hover:text-pink-900 transition">Products</a>
      <a href="#services" className="hover:text-pink-900 transition">Our Services</a>
      <a href="#contact" className="hover:text-pink-900 transition">Contact Us</a>
    </div>
  </div>

  {/* Mobile menu icon - move outside the inner container */}
  <div className="md:hidden absolute right-4 top-4 z-[999]">
    {!menuOpen ? (
      <Menu onClick={toggleMenu} className="w-6 h-6 text-pink-700 cursor-pointer" />
    ) : (
      <X onClick={toggleMenu} className="w-6 h-6 text-pink-700 cursor-pointer" />
    )}
  </div>

  {/* Mobile sidebar */}
  {menuOpen && (
    <>
      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className="fixed inset-0 bg-black bg-opacity-30 z-40"
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-md z-50 p-6 space-y-6 transition-transform duration-300 transform translate-x-0">
        <a href="#home" onClick={closeMenu} className="block text-pink-700 hover:text-pink-900">Home</a>
        <a href="#products" onClick={closeMenu} className="block text-pink-700 hover:text-pink-900">Products</a>
        <a href="#services" onClick={closeMenu} className="block text-pink-700 hover:text-pink-900">Our Services</a>
        <a href="#contact" onClick={closeMenu} className="block text-pink-700 hover:text-pink-900">Contact Us</a>
      </div>
    </>
  )}
</nav>

  );
};

export default Navbar;
