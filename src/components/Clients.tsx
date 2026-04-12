"use client";

import { motion } from "framer-motion";

const Clients = () => {
  const clients = [
    "JY Burger",
    "Goose Coffee",
    "Mini Market Mini",
    "Aquaria",
    "Xcite",
    "Etam International",
    "Barton Restaurant",
    "Chocolate Bar",
  ];

  return (
    <section className="relative py-20 bg-[#0A0A0A] overflow-hidden border-y border-[#C5A15E]/10">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-black/90 to-[#0A0A0A]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] font-playfair font-light tracking-[0.2em] text-white uppercase mb-10">
          Trusted by <span className="text-[#C5A15E]">Leading Brands in Kuwait</span>
        </h2>

        {/* --- Row 1 (Left to Right) --- */}
        <div className="overflow-hidden whitespace-nowrap mb-6">
          <motion.div
            className="inline-block"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {clients.concat(clients).map((client, index) => (
              <span
                key={`row1-${index}`}
                className="inline-block text-lg sm:text-xl md:text-2xl text-[#C5A15E]/90 font-inter mx-10 tracking-wider hover:text-[#C5A15E] transition-colors duration-300"
              >
                {client}
              </span>
            ))}
          </motion.div>
        </div>

        {/* --- Row 2 (Right to Left) --- */}
        <div className="overflow-hidden whitespace-nowrap">
          <motion.div
            className="inline-block"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {clients.concat(clients).map((client, index) => (
              <span
                key={`row2-${index}`}
                className="inline-block text-lg sm:text-xl md:text-2xl text-[#C5A15E]/80 font-inter mx-10 tracking-wider hover:text-[#C5A15E] transition-colors duration-300"
              >
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
