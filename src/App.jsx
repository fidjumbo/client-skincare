import React from "react";
import HeroSection from "./components/HeroSection"; // ✅ Adjust path if needed
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default App;
