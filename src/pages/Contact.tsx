import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import Map from "@/components/contact/Map";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <ScrollAnimation direction="fade">
          <div className="hero-gradient text-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                  <Phone size={20} />
                  <span className="uppercase tracking-wider text-sm font-semibold">Contact Us</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                <p className="text-xl mb-8">
                  Have questions about our products or services? Our team at Sri Datta Electronics is here to help you find the right solutions for your needs.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollAnimation direction="left" delay={100}>
                <ContactInfo />
              </ScrollAnimation>
              <ScrollAnimation direction="right" delay={200}>
                <ContactForm />
              </ScrollAnimation>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <ScrollAnimation direction="up">
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">Find Us</h2>
              <Map />
              <div className="mt-4 text-center">
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Visit our office and experience our innovations firsthand. 
                  Schedule a visit by contacting our team.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>
      <Footer />
    </>
  );
};

export default Contact;