// src/components/HeroSection.jsx

import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center font-dancing rounded-3xl"
      style={{ backgroundImage: "url('/bg.jpg')" }} // Make sure the image is in /public
    >
      {/* Optional overlay to soften the background */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] z-0 rounded-3xl" />

      {/* Main content section with animation */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-3xl mx-auto px-4 py-16"
      >
        {/* Floating hearts background */}
        <div className="absolute top-[-90px] left-0 right-0 -z-10 flex flex-col items-center space-y-2 animate-pulse opacity-10">
          <div className="text-7xl">💖  💕  💗</div>
          <div className="text-6xl">💘  💞  💓</div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-5xl md:text-6xl font-extrabold text-pink-500 leading-tight mb-6 drop-shadow-sm"
        >
          Happy Girlfriend’s Day, <span className="text-rose-600">SHIVI 💝</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}    
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl font-medium text-gray-700 bg-pink-50 p-6 rounded-2xl shadow-md backdrop-blur-sm"
        >
          Even though I’m not <span className="italic">officially</span> yours yet,<br />
          I already feel so deeply connected to you.  
          <br />
          And I promise —
          <span className="font-semibold text-rose-500"> that day isn’t far now. </span>
          💍💗
        </motion.p>

        {/* Cute scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 animate-bounce text-3xl text-pink-400"
        >
          💖 ↓ 💖
        </motion.div>
      </motion.section>
    </div>
  );
}

export default HeroSection;
