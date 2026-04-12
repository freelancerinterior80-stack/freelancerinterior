import { useState } from "react";
import { MapPin, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      contactSchema.parse(formData);

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* === Background Image === */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1920"
          alt="Modern interior fitout consultation space in Kuwait"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* === Content === */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* === Header === */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-playfair font-semibold text-off-white mb-6 tracking-wide">
              Have <span className="text-gold">a Project</span>
              <br />
              in Mind?
            </h2>
            <p className="text-off-white/80 text-lg font-inter max-w-2xl mx-auto leading-relaxed">
              Tell us about your project, and we'll prepare a customized proposal with timelines and pricing.
            </p>
          </div>

          {/* === Form Card === */}
          <div className="bg-off-white rounded-[2rem] p-8 md:p-12 shadow-elegant animate-fade-in max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white border-marble-dark/20 text-charcoal placeholder:text-charcoal/50 rounded-xl h-14 font-inter"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white border-marble-dark/20 text-charcoal placeholder:text-charcoal/50 rounded-xl h-14 font-inter"
                  required
                />
              </div>

              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white border-marble-dark/20 text-charcoal placeholder:text-charcoal/50 rounded-xl h-14 font-inter"
                required
              />

              <Textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className="bg-white border-marble-dark/20 text-charcoal placeholder:text-charcoal/50 rounded-xl min-h-[160px] font-inter resize-none"
                required
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-gold hover:bg-gold-matte text-black font-poppins font-medium px-12 py-6 text-base rounded-full uppercase tracking-wider transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* === Contact Info Below Form === */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            {/* === Location === */}
            <div className="text-center">
              <MapPin className="text-gold mx-auto mb-4" size={32} />
              <h3 className="text-white font-bold font-playfair text-lg mb-2">
                Location
              </h3>
              <p className="text-white font-bold text-sm font-inter leading-relaxed">
                Kuwait
              </p>
            </div>

            {/* === Phone === */}
            <div className="text-center">
              <MessageCircle className="text-gold mx-auto mb-4" size={32} />
              <h3 className="text-white font-bold font-playfair text-lg mb-2">
                Phone
              </h3>
              <p className="text-white font-bold text-sm font-inter">
                +965 50393979
              </p>
            </div>

            {/* === Email === */}
            <div className="text-center">
              <Mail className="text-gold mx-auto mb-4" size={32} />
              <h3 className="text-white font-bold font-playfair text-lg mb-2">
                Email
              </h3>
              <p className="text-white font-bold text-sm font-inter">
                info@freelancerinterior.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
