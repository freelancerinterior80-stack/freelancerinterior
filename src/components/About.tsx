import pro1 from "@/assets/about/pro-1.jpeg";
import pro2 from "@/assets/about/pro-2.jpeg";
import pro3 from "@/assets/about/pro-3.jpeg";
import pro4 from "@/assets/about/pro-4.jpeg";
import pro5 from "@/assets/about/pro-5.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* WHO ARE WE Typography Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Image */}
          <div className="lg:col-span-3 animate-fade-in">
            <img
              src={pro1}
              alt="Luxury interior design in Kuwait by Freelancer Interior"
              loading="lazy"
              className="w-full h-[400px] md:h-[600px] object-cover rounded-lg shadow-[0_12px_34px_rgba(0,0,0,0.32)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(197,161,94,0.16)]"
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-6 space-y-10">
            {/* WHO */}
            <div
              className="text-center opacity-90 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-light tracking-[0.2em] text-white mb-8">
                WHO
              </h2>
            </div>

            {/* Center Image with Text Overlay */}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src={pro2}
                alt="Luxury bedroom interior design Kuwait"
                loading="lazy"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-[0_12px_34px_rgba(0,0,0,0.32)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(197,161,94,0.16)]"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center p-8">
                <p className="text-gray-200 text-center text-[13px] sm:text-sm md:text-base font-inter leading-relaxed max-w-md">
                  Freelancer Interior is a Kuwait-based studio delivering Interior Design Kuwait,
                  Fitout Company Kuwait expertise, and Residential Interior Kuwait projects through
                  precision craftsmanship and complete project delivery.
                </p>
              </div>
            </div>

            {/* ARE */}
            <div
              className="text-center opacity-90 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-light tracking-[0.2em] text-white">
                ARE
              </h2>
            </div>

            {/* Bottom Image with Text */}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <img
                src={pro3}
                alt="Premium fitout services Kuwait for modern living spaces"
                loading="lazy"
                className="w-full h-[250px] md:h-[350px] object-cover rounded-lg shadow-[0_12px_34px_rgba(0,0,0,0.32)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(197,161,94,0.16)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg flex items-end p-6 md:p-8">
                <p className="text-gray-200 text-[13px] sm:text-sm md:text-base leading-relaxed">
                  Serving Kuwait since 2009, our 200+ skilled professionals and
                  2,000 sqm of dedicated facilities turn ambitious visions into refined interiors.
                </p>
              </div>
            </div>

            {/* WE */}
            <div
              className="text-center opacity-90 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-light tracking-[0.2em] text-white">
                WE
              </h2>
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:col-span-3 space-y-8">
            <div
              className="animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <img
                src={pro4}
                alt="Renovation services Kuwait for elegant interior spaces"
                loading="lazy"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-[0_12px_34px_rgba(0,0,0,0.32)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(197,161,94,0.16)]"
              />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <img
                src={pro5}
                alt="Custom luxury interiors Kuwait craftsmanship detail"
                loading="lazy"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-[0_12px_34px_rgba(0,0,0,0.32)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(197,161,94,0.16)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
