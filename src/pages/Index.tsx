import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients"; // ✅ Add this
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <Hero />

      <About />

      <Services />

      {/* ✅ Add Clients Section Here */}
      <section id="clients">
        <Clients />
      </section>

      <Projects />

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <Contact />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
