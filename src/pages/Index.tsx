
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductCarousel from "@/components/home/ProductCarousel";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Newspaper, Award, Calendar, Target, Users, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const companyStats = [
    {
      icon: Target,
      value: "15+",
      label: "Years of Excellence",
      description: "Delivering cutting-edge solutions"
    },
    {
      icon: Users,
      value: "100+",
      label: "Expert Team",
      description: "Skilled professionals and engineers"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Projects Delivered",
      description: "Across defense and aerospace"
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Support",
      description: "Continuous technical assistance"
    }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Advanced Telemetry Systems in Modern Defense",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      category: "Technology",
      excerpt: "How next-generation telemetry systems are revolutionizing defense communications and data acquisition..."
    },
    {
      id: 2,
      title: "RF Power Solutions for Aerospace Applications",
      date: "April 28, 2025",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      category: "Innovation",
      excerpt: "Exploring high-efficiency RF amplifiers and their critical role in satellite communications..."
    },
    {
      id: 3,
      title: "Industrial Computing in Harsh Environments",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      category: "Engineering",
      excerpt: "The importance of ruggedized computing solutions in mission-critical industrial applications..."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        

        {/* Product Carousel */}
        <ScrollAnimation direction="up" delay={200}>
          <ProductCarousel />
        </ScrollAnimation>

        {/* Core Expertise */}
        <ScrollAnimation direction="up" delay={300}>
          <section className="py-20 bg-gradient-to-r from-tech-blue to-tech-accent">
            <div className="container mx-auto px-4">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-6">Our Core Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">Defense Systems</h3>
                    <p className="text-white/90">
                      Advanced telemetry, data link systems, and RF solutions for defense applications
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">Aerospace Solutions</h3>
                    <p className="text-white/90">
                      Satellite communication systems and airborne telemetry for space missions
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">Industrial Systems</h3>
                    <p className="text-white/90">
                      Ruggedized computing and automation solutions for harsh environments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Contact CTA */}
        <ScrollAnimation direction="up">
          <section className="py-24 bg-gradient-to-r from-tech-black to-tech-gray-dark">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Innovate With Us?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Contact our team to discuss how our electronic solutions can address your specific needs.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-tech-blue hover:bg-tech-accent text-white px-10 py-4 text-lg">
                  <Mail size={20} className="mr-2" /> Get In Touch
                </Button>
              </Link>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
