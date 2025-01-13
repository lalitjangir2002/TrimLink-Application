import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.98 }}
      className="relative flex flex-col px-6 py-8 gap-4 rounded-lg text-white transition-all duration-300 cursor-pointer"
      style={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        border: "none",
      }}
    >
      {/* Colorful Overlay Decoration */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.2), rgba(0,0,0,0))",
        }}
      />

      <h1 className="relative z-10 text-white text-2xl font-bold">{title}</h1>
      <p className="relative z-10 text-white text-sm">{desc}</p>
    </motion.div>
  );
};

export default Card;
