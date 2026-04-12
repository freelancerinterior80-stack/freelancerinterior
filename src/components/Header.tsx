import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
          : "bg-black/90"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* === LOGO === */}
        <div className="flex items-center">
          <div
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer flex items-center gap-3"
          >
            <img
              src="/freelancerinteriorlogo.png"
              alt="Freelancer Interior Kuwait interior design company logo"
              className="h-12 md:h-14 lg:h-16 w-auto object-contain brightness-110 contrast-110"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-[#C5A15E] font-semibold tracking-wide text-lg md:text-xl">
                Freelancer
              </span>
              <span className="w-6 h-[2px] bg-[#C5A15E] mt-1"></span>
              <span className="text-white text-sm md:text-base font-light tracking-wide">
                Interior
              </span>
            </div>
          </div>
        </div>

        {/* === DESKTOP NAV === */}
        <nav className="hidden md:flex items-center gap-12">
          {[
            { name: "About", target: "about" },
            { name: "Services", target: "services" },
            { name: "Project", target: "projects" },
            { name: "Contact Us", target: "contact" },
          ].map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.target)}
              className="text-sm uppercase tracking-[0.25em] text-gray-200 hover:text-[#C5A15E] transition-all duration-300 ease-out font-inter"
            >
              {link.name}
            </button>
          ))}

          <Button
            className="rounded-lg bg-white hover:bg-[#C5A15E] text-black font-medium tracking-wider text-sm px-8 py-3 transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_12px_30px_rgba(197,161,94,0.24)] shadow-[0_8px_18px_rgba(0,0,0,0.22)]"
            onClick={() => scrollToSection("contact")}
          >
            Get Free Consultation
          </Button>
        </nav>

        {/* === MOBILE MENU BUTTON === */}
        <button
          className="md:hidden text-white transition-colors duration-300 hover:text-[#C5A15E]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === MOBILE MENU === */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-[#C5A15E]/20 animate-fade-in">
          <nav className="container mx-auto py-8 flex flex-col gap-6 text-center">
            {[
              { name: "About", target: "about" },
              { name: "Services", target: "services" },
              { name: "Project", target: "projects" },
              { name: "Contact Us", target: "contact" },
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.target)}
                className="uppercase tracking-[0.25em] text-gray-300 hover:text-[#C5A15E] font-inter text-sm transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}

            <Button
              className="bg-white hover:bg-[#C5A15E] text-black font-medium tracking-wider text-sm px-6 py-2 rounded-lg transition-all duration-300 hover:scale-[1.03]"
              onClick={() => scrollToSection("contact")}
            >
              Get Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
