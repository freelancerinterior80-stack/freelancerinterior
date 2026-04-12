"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mohammed Al-Rashid",
      role: "Villa Owner",
      location: "Salmiya",
      quote:
        "Freelancer Interior transformed our villa into a masterpiece. Their attention to detail and commitment to quality exceeded all expectations.",
    },
    {
      name: "Fatima Al-Sabah",
      role: "Business Owner",
      location: "Kuwait City",
      quote:
        "Professional, reliable, and incredibly skilled. They delivered our office renovation on time and within budget. Highly recommended.",
    },
    {
      name: "Abdullah Al-Mutawa",
      role: "Hotel Manager",
      location: "Fintas",
      quote:
        "The craftsmanship is outstanding. Freelancer Interior brought our hotel's interior vision to life with elegance and precision.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* --- Subtle background texture overlay --- */}
      <div className="absolute inset-0 bg-[url('/textures/marble-dark.jpg')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 container mx-auto px-4 md:px-12">
        {/* === Header === */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#C5A15E]/80 text-xs uppercase tracking-[0.4em] mb-6 font-inter font-light">
            Testimonials
          </p>
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-playfair font-semibold mb-4 uppercase text-white">
            Client <span className="text-[#C5A15E]">Stories</span>
          </h2>
          <motion.div
            className="h-[2px] w-24 mx-auto bg-[#C5A15E]/60 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-base md:text-lg font-inter">
            Hear from those who have experienced the <span className="text-[#C5A15E]/90">Freelancer Interior</span> difference.
          </p>
        </motion.div>

        {/* === Testimonials Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-[#C5A15E]/10 rounded-3xl p-10 backdrop-blur-sm shadow-[0_0_25px_rgba(197,161,94,0.08)] hover:shadow-[0_0_40px_rgba(197,161,94,0.25)] transition-all duration-500 cursor-default"
            >
              <Quote className="text-[#C5A15E]/30 mb-6" size={48} strokeWidth={1.3} />
              <p className="text-gray-300 mb-8 leading-relaxed italic font-inter text-[15px] md:text-[16px]">
                “{t.quote}”
              </p>

              <div className="border-t border-[#C5A15E]/20 pt-6">
                <p className="font-poppins font-semibold text-[#C5A15E]">
                  {t.name}
                </p>
                <p className="text-sm text-gray-400 mt-1">{t.role}</p>
                <p className="text-xs text-[#C5A15E]/80 uppercase tracking-widest mt-1">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
