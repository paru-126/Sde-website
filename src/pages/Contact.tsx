
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="hero-gradient text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                <Phone size={20} />
                <span className="uppercase tracking-wider text-sm font-semibold">Contact Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl mb-8">
                Have questions about our products or services? Our team is here to help you find the right solutions for your needs.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Global Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">North America</h3>
                <p className="text-gray-700 mb-2">123 Tech Boulevard</p>
                <p className="text-gray-700 mb-2">Silicon Valley, CA 94103</p>
                <p className="text-gray-700 mb-2">United States</p>
                <p className="text-gray-700">+1 (234) 567-890</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Europe</h3>
                <p className="text-gray-700 mb-2">45 Innovation Strasse</p>
                <p className="text-gray-700 mb-2">Munich, 80331</p>
                <p className="text-gray-700 mb-2">Germany</p>
                <p className="text-gray-700">+49 (89) 123-4567</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Asia Pacific</h3>
                <p className="text-gray-700 mb-2">78 Technology Park</p>
                <p className="text-gray-700 mb-2">Singapore, 118952</p>
                <p className="text-gray-700 mb-2">Singapore</p>
                <p className="text-gray-700">+65 6789 0123</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              {/* This would typically be replaced with an actual map implementation */}
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <p className="text-gray-500">Interactive map would be displayed here</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-700 max-w-2xl mx-auto">
                Visit our headquarters and experience our innovations firsthand. 
                Schedule a tour by contacting our customer service team.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
