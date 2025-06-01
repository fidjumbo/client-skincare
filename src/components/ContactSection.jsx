// src/components/ContactSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <motion.section
      className="py-12 px-6 md:px-16 bg-[#4B2E2B] text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="contact"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-pink-200 drop-shadow-md tracking-wide">
        Contact Us
      </h2>

      <div className="grid gap-8 md:grid-cols-3 text-center">
        {/* Address */}
        <div>
          <FaMapMarkerAlt className="text-4xl text-pink-300 mx-auto mb-3" />
          <p className="text-lg font-semibold text-white">No 9, Ebony Street, Oroazi, Port Harcourt</p>
        </div>

        {/* Phone */}
        <div>
          <FaPhoneAlt className="text-4xl text-pink-300 mx-auto mb-3" />
          <p className="text-lg font-semibold text-white">+234987665432</p>
        </div>

        {/* Instagram */}
        <div>
          <a
            href="https://www.instagram.com/bashands?igsh=MWxoOWtyNnp4ejk4ZQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <FaInstagram className="text-4xl text-pink-300 mx-auto mb-3 hover:scale-110 transition-transform duration-300" />
            <p className="text-lg font-semibold text-white">Follow on Instagram</p>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
