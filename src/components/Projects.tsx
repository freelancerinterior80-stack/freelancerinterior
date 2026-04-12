"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import project1 from "@/assets/project-1.jpeg";
import project2 from "@/assets/project-2.jpeg";
import project3 from "@/assets/project-3.jpeg";
import project4 from "@/assets/project-4.jpeg";
import project5 from "@/assets/project-5.jpeg";
import project6 from "@/assets/project-6.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      image: project1,
      title: "Lannister Residence",
      subtitle:
        "A modern sanctuary blending minimalist design with luxury finishes and natural light",
      location: "Salmiya",
    },
    {
      image: project2,
      title: "Elysium Vista",
      subtitle:
        "Contemporary living spaces featuring clean lines and sophisticated material palette",
      location: "Kuwait City",
    },
    {
      image: project3,
      title: "The Grand Maison",
      subtitle:
        "Timeless elegance meets modern comfort in this meticulously crafted residence",
      location: "Fintas",
    },
    {
      image: project4,
      title: "Serenity Villas",
      subtitle:
        "Coastal-inspired interiors with an emphasis on calm, neutral tones and textures",
      location: "Jabriya",
    },
    {
      image: project5,
      title: "Azure Estate",
      subtitle:
        "Sophisticated urban dwelling with custom millwork and curated finishes",
      location: "Shuwaikh",
    },
    {
      image: project6,
      title: "Vista Heights",
      subtitle:
        "Modern residential masterpiece harmonizing form, light, and atmosphere",
      location: "Abu Halifa",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-playfair font-extralight tracking-[0.15em] text-white uppercase leading-none">
            Our Projects
          </h2>
          <motion.div
            className="mt-4 mx-auto h-[2px] w-32 bg-[#C5A15E]/60 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        {/* Mobile/Tablet → Horizontal Scroll */}
        <div className="block lg:hidden relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[85vw] sm:w-[60vw] snap-center group cursor-pointer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedImage(project.image)}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <div className="relative h-[400px] sm:h-[500px] rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                  <img
                    src={project.image}
                    alt={`${project.title} luxury interior design project in ${project.location}, Kuwait`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-playfair font-semibold text-white mb-2 tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-gray-200/80 text-sm font-inter leading-relaxed mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-[#C5A15E] text-xs font-inter uppercase tracking-wider">
                      {project.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop → Vertical Grid (fixes scroll issue) */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(project.image)}
              whileHover={{ scale: 1.02, y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[480px] rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                <img
                  src={project.image}
                  alt={`${project.title} luxury interior design project in ${project.location}, Kuwait`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-playfair font-semibold text-white mb-2 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-200/80 text-sm font-inter leading-relaxed mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-[#C5A15E] text-xs font-inter uppercase tracking-wider">
                    {project.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white hover:text-[#C5A15E] transition-colors"
              aria-label="Close lightbox"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <X size={32} />
            </motion.button>

            <motion.img
              src={selectedImage}
              alt="Luxury interior design project detail in Kuwait"
              loading="lazy"
              className="max-w-full max-h-[90vh] object-contain rounded-[2rem] shadow-[0_10px_60px_rgba(197,161,94,0.2)]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Projects;
