"use client";

import { motion } from "framer-motion";
import { Lightbulb, FileText, Box, Package } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Brief",
      description:
        "We explore your vision, goals, and space requirements to establish a clear creative direction.",
    },
    {
      icon: FileText,
      title: "Concept & Planning",
      description:
        "Our designers craft comprehensive plans and architectural drawings tailored to your brief.",
    },
    {
      icon: Box,
      title: "3D Modeling & Visualization",
      description:
        "Experience your space before it's built through photorealistic 3D renderings and walkthroughs.",
    },
    {
      icon: Package,
      title: "Delivery & Review",
      description:
        "Final inspection, walkthrough, and handover of your meticulously crafted interior space.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920"
          alt="3D visualization and interior design workspace in Kuwait"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]" />
      </div>

      {/* Section Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-playfair font-extralight tracking-[0.25em] text-white uppercase">
            How It Works
          </h2>
          <motion.div
            className="mt-4 mx-auto h-[2px] w-32 bg-[#C5A15E]/60 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        {/* Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector Line */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-[65px] right-[-50%] w-[100%] h-[2px]">
                    <div className="w-full h-full border-t-2 border-dashed border-[#C5A15E]/30" />
                  </div>
                )}

                {/* Step Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-32 h-32 mb-8 rounded-full bg-[#C5A15E]/10 border border-[#C5A15E]/40 flex items-center justify-center shadow-[0_0_25px_rgba(197,161,94,0.1)] group-hover:shadow-[0_0_45px_rgba(197,161,94,0.25)] transition-all duration-500"
                >
                  <Icon className="text-[#C5A15E]" size={42} strokeWidth={1.4} />
                </motion.div>

                {/* Step Title & Description */}
                <div className="max-w-xs mx-auto">
                  <h3 className="text-xl font-playfair font-semibold text-white mb-4 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-gray-300/80 text-sm font-inter leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
