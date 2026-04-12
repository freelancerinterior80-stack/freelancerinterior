"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ArrowRight } from "lucide-react";

const Gallery = () => {
  const modules = import.meta.glob<{ default: string }>(
    "/src/assets/gallery/*.{jpg,jpeg,png}",
    { eager: true }
  );
  const images = Object.keys(modules)
    .sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)/)?.[1] || "0", 10);
      const numB = parseInt(b.match(/(\d+)/)?.[1] || "0", 10);
      return numA - numB;
    })
    .map((key, index) => ({
      src: modules[key].default,
      alt: `Luxury interiors Kuwait portfolio project ${index + 1}`,
    }));

  const [index, setIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  // === Auto-scroll logic ===
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 1.2;
    const interval = setInterval(() => {
      if (!isHovering.current) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
    }, 16);
    return () => clearInterval(interval);
  }, []);

  if (images.length === 0) {
    return <p className="text-center text-gray-400 py-20">No images found in /gallery folder.</p>;
  }

  const doubledImages = [...images, ...images];

  // smooth scroll to Projects section
  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-28 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-playfair font-light tracking-[0.2em] text-white uppercase">
            Our Portfolio Showcase
          </h2>
          <div className="h-[2px] w-24 bg-[#C5A15E] mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-sm md:text-base max-w-2xl mx-auto font-inter leading-relaxed">
            Experience a glimpse into our signature Kuwait interiors, where luxury meets craftsmanship.
          </p>
        </motion.div>

        {/* Auto-scrolling row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing relative"
          onMouseEnter={() => (isHovering.current = true)}
          onMouseLeave={() => (isHovering.current = false)}
        >
          {doubledImages.map((img, i) => (
            <motion.div
              key={i}
              onClick={() => setIndex(i % images.length)}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[25vw] h-[400px] rounded-lg overflow-hidden relative shadow-[0_12px_34px_rgba(0,0,0,0.32)] hover:shadow-[0_14px_34px_rgba(197,161,94,0.18)] transition-all duration-500 ease-out"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center text-[#C5A15E] text-sm font-medium uppercase">
                View Project
              </div>
            </motion.div>
          ))}
        </div>

        {/* === CTA Button === */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={handleScrollToProjects}
            className="flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#C5A15E] to-[#d4b97b] text-black font-medium uppercase tracking-wider rounded-lg hover:scale-[1.03] hover:shadow-[0_12px_30px_rgba(197,161,94,0.24)] transition-all duration-300 ease-out shadow-[0_8px_22px_rgba(197,161,94,0.2)]"
          >
            View All Projects
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>

      {/* Elegant fade edges */}
      <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0A0A0A] via-transparent to-transparent z-20"></div>

      {/* Lightbox */}
      <Suspense fallback={null}>
        {index !== null && (
          <Lightbox
            open={index !== null}
            close={() => setIndex(null)}
            slides={images}
            index={index}
            styles={{
              container: { backgroundColor: "rgba(0,0,0,0.95)" },
            }}
          />
        )}
      </Suspense>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Gallery;
