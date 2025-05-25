
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Newspaper, Calendar, Users, BookOpen, ChevronRight } from "lucide-react";

interface UpdateSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  link: string;
  image: string;
  stats: string;
}

const updateSections: UpdateSection[] = [
  {
    id: 1,
    title: "Latest News",
    subtitle: "Stay informed with our latest announcements",
    description: "Get the latest updates on ElectroTech's innovations, partnerships, and industry recognition. From breakthrough technologies to award-winning products.",
    icon: Newspaper,
    link: "/updates/news",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    stats: "15+ Articles This Month"
  },
  {
    id: 2,
    title: "Company Events",
    subtitle: "Join us at industry conferences and workshops",
    description: "Connect with our team at trade shows, conferences, and webinars. Learn about cutting-edge technologies and network with industry professionals.",
    icon: Calendar,
    link: "/updates/events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    stats: "8 Upcoming Events"
  },
  {
    id: 3,
    title: "References & Case Studies",
    subtitle: "Real-world applications of our solutions",
    description: "Discover how leading companies are leveraging ElectroTech solutions to drive innovation and achieve remarkable results in their industries.",
    icon: Users,
    link: "/updates/references",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    stats: "50+ Success Stories"
  },
  {
    id: 4,
    title: "Technical Blog",
    subtitle: "Deep insights from our engineering team",
    description: "Explore technical articles, tutorials, and insights from our expert engineers. Learn about best practices, emerging trends, and innovative solutions.",
    icon: BookOpen,
    link: "/updates/blog",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    stats: "20+ Technical Articles"
  }
];

const Updates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % updateSections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section with Carousel */}
        <section className="relative h-screen overflow-hidden">
          {/* Background Images */}
          <div className="absolute inset-0">
            {updateSections.map((section, index) => (
              <div
                key={section.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-tech-black/90 to-tech-black/70 z-10" />
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-4xl">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                  <BookOpen size={20} />
                  <span className="uppercase tracking-wider text-sm font-semibold">Stay Updated</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Latest Updates & Insights
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  Discover our latest news, events, case studies, and technical insights all in one place.
                </p>
              </div>

              {/* Carousel Cards */}
              <div className="max-w-3xl">
                <Carousel className="w-full">
                  <CarouselContent>
                    {updateSections.map((section, index) => {
                      const IconComponent = section.icon;
                      return (
                        <CarouselItem key={section.id}>
                          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4">
                                <div className="p-3 bg-tech-blue/20 rounded-lg">
                                  <IconComponent className="h-6 w-6 text-tech-blue" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                                  <p className="text-white/70 mb-3">{section.subtitle}</p>
                                  <p className="text-white/60 text-sm mb-4">{section.description}</p>
                                  <div className="flex items-center justify-between">
                                    <span className="text-tech-blue text-sm font-medium">{section.stats}</span>
                                    <Button 
                                      variant="outline" 
                                      size="sm" 
                                      className="text-white border-white/30 hover:bg-white hover:text-tech-black" 
                                      asChild
                                    >
                                      <Link to={section.link} className="flex items-center">
                                        Explore <ChevronRight size={16} className="ml-1" />
                                      </Link>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white hover:text-tech-black" />
                  <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white hover:text-tech-black" />
                </Carousel>
              </div>

              {/* Slide Indicators */}
              <div className="flex mt-8 space-x-2">
                {updateSections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? 'w-8 bg-tech-blue' : 'w-2 bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Explore All Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {updateSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <Card key={section.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="p-4 bg-tech-blue/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-tech-blue/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-tech-blue" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{section.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{section.subtitle}</p>
                      <p className="text-tech-blue text-sm font-medium mb-4">{section.stats}</p>
                      <Button 
                        className="w-full bg-tech-blue hover:bg-tech-accent" 
                        asChild
                      >
                        <Link to={section.link}>
                          View All
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Updates;
