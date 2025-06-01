import React from "react";
import { motion } from "framer-motion";

const services = [
  "Skincare",
  "Cosmetics",
  "Organic Cream Sales",
  "Hair Sales",
  "Makeup Studio",
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-10" id="services">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-pink-600 drop-shadow-lg tracking-wide">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xs text-center border border-pink-100 hover:shadow-pink-300 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-pink-500 drop-shadow-md tracking-wider">
              {service}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
