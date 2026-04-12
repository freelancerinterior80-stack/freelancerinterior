"use client";

import { motion } from "framer-motion";
import {
  Building,
  Hammer,
  PaintBucket,
  Wrench,
  Box,
  Lightbulb,
  Ruler,
  PenTool,
  Layers,
  ClipboardList,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: "Carpentry Works",
    },
    {
      icon: Wrench,
      title: "Furniture Works",
    },
    {
      icon: Layers,
      title: "Turnkey Interior Contracting",
    },
    {
      icon: Ruler,
      title: "Joinery Works",
    },
    {
      icon: PaintBucket,
      title: "Gypsum Plastering & Special Painting",
    },
    {
      icon: Lightbulb,
      title: "Mechanical, Electrical & Plumbing Works",
    },
    {
      icon: Box,
      title: "Light Fitting",
    },
    {
      icon: PenTool,
      title: "3D & 2D Designing and Detailed Drawings",
    },
    {
      icon: ClipboardList,
      title: "Bill of Quantity (BOQ) Analysis",
    },
    {
      icon: Building,
      title: "New Construction & Renovation",
      description:
        "Comprehensive construction and renovation services delivering modern, functional, and high-quality spaces tailored to your vision.",
      variant: "gold",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 md:py-36 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* === Section Header === */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-playfair font-extralight tracking-[0.15em] text-white uppercase leading-none">
            Services
          </h2>
          <p className="text-gray-400 mt-6 text-sm md:text-base max-w-2xl mx-auto font-inter">
            Explore Fitout Services Kuwait and Renovation Services Kuwait, from
            custom carpentry and joinery to 3D visualization and turnkey delivery.
          </p>
          <motion.div
            className="mt-4 mx-auto h-[2px] w-32 bg-[#C5A15E]/60 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        {/* === Services Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className="relative flex flex-col items-center justify-center text-center h-[300px] p-8 rounded-[2rem] bg-[#111] border border-[#C5A15E]/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(197,161,94,0.2)] transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#C5A15E]/10 border border-[#C5A15E]/30 mb-6">
                  <Icon className="text-[#C5A15E]" size={32} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-white text-lg md:text-xl font-poppins font-semibold uppercase tracking-wide">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center mt-12 px-8 py-3 rounded-full bg-[#C5A15E] text-black font-medium uppercase tracking-wider hover:opacity-90 transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* === Subtle Bottom Fade === */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Services;
