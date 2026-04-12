"use client";

import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  // Smooth scroll to a section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-black"
    >
      {/* === Background for Mobile === */}
      <div className="absolute inset-0 md:hidden z-0">
        <img
          src={heroBg}
          alt="Luxury interior design in Kuwait hero background"
          className="w-full h-full object-cover brightness-[0.55]"
        />
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* === 4 Vertical Panels (Desktop Only) === */}
      <div className="absolute inset-0 hidden md:flex justify-center items-end gap-[1%] px-[5%] md:px-[8%] lg:px-[10%] z-10">
        {[
          { height: "75%" },
          { height: "85%" },
          { height: "95%" },
          { height: "80%" },
        ].map((panel, i) => (
          <div
            key={i}
            className="relative w-[21%] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.4)] flex-shrink-0"
            style={{
              alignSelf: "flex-start",
              height: panel.height,
              borderBottomLeftRadius: "80px",
              borderBottomRightRadius: "80px",
              backgroundColor: "#000",
              clipPath: "inset(0 0 0 0 round 0 0 80px 80px)",
            }}
          >
            <img
              src={heroBg}
              alt={`Luxury interiors Kuwait hero panel ${i + 1}`}
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: `${i * 33.3}% center` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* === Bottom Marble Base === */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          className="w-full h-[150px] md:h-[220px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#0A0A0A"
            d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,133.3C1120,107,1280,85,1360,74.7L1440,64V220H0Z"
          ></path>
        </svg>
      </div>

      {/* === Text Positioned Inside First Rectangle === */}
      <div className="absolute left-[10%] md:left-[14.5%] bottom-[10%] md:bottom-[5%] z-20 max-w-4xl px-6">
        <div className="text-white text-left">
          <p className="text-[#C5A15E] uppercase tracking-[0.35em] text-[10px] mb-2 md:mb-3">
            Since 2009
          </p>

          {/* === Updated Text === */}
          <h1 className="text-[1.5rem] sm:text-[2.3rem] md:text-[3.1rem] lg:text-[4rem] xl:text-[4.6rem] leading-[1.05] font-light tracking-tight mb-12">
            <span className="text-white">TRANSFORMING</span>{" "}
            <span className="text-[#C5A15E]">SPACES</span>{" "}
            <span className="text-white block md:inline">
              INTO MASTERPIECES.
            </span>
          </h1>

          {/* === Button === */}
          <div className="flex justify-start md:justify-end pr-[10%] mt-10">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black px-8 sm:px-10 py-3 rounded-full font-medium text-sm sm:text-base tracking-wider flex items-center gap-2 hover:bg-gray-100 transition-all duration-300"
            >
              Request a Quote
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
