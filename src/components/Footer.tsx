import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img
              src="/freelancerinteriorlogo.png"
              alt="Freelancer Interior Logo"
              loading="lazy"
              className="h-16 mb-4 object-contain"
            />
            <h3 className="text-xl font-light mb-4">
              <span className="sr-only">Freelancer Interior</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              The Comfort of Luxury since 2009
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover-gold">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover-gold">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover-gold">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover-gold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Turnkey Interior Contracting</li>
              <li>Carpentry & Joinery</li>
              <li>Gypsum Works</li>
              <li>MEP Installation</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black transition-all hover-scale"
              >
                <Facebook size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/danaalbahar.kwt/"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black transition-all hover-scale"
              >
                <Instagram size={18} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/96541039976"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black transition-all hover-scale"
              >
                <FaWhatsapp size={18} />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@danaalbaharkwt?_t=ZS-90eAdqqPLrm&_r=1"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black transition-all hover-scale"
              >
                <FaTiktok size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gold/20 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Freelancer Interior. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
