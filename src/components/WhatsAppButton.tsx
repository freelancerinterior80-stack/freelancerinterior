"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "96541039976"; // Kuwait number without +
    const message = encodeURIComponent(
      "Hello, I'm interested in your interior fit-out services."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      aria-label="Contact us on WhatsApp"
      className="
        fixed
        bottom-5 right-5
        sm:bottom-6 sm:right-6
        w-12 h-12 sm:w-14 sm:h-14
        rounded-full
        bg-[hsl(var(--gold))]
        text-black
        flex items-center justify-center
        hover:bg-[hsl(var(--gold-matte))]
        transition-all duration-300 ease-in-out
        animate-fade-in animate-pulse-glow whatsapp-pulse
        shadow-[0_0_25px_hsl(40_40%_63%_/_0.4)]
        z-[999999] pointer-events-auto
      "
      style={{
        position: "fixed",
        zIndex: 999999,
      }}
    >
      <FaWhatsapp size={26} />
    </button>
  );
};

export default WhatsAppButton;
