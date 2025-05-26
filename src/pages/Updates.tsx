import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Newspaper, Calendar, Users, BookOpen, ChevronRight, ChevronLeft } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play functionality
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000); // Auto-advance every 4 seconds
    };

    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % updateSections.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + updateSections.length) % updateSections.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const getCardStyle = (index: number) => {
    const position = index - currentIndex;
    const absPosition = Math.abs(position);
    
    if (absPosition === 0) {
      // Center card - more opaque with white border
      return {
        transform: 'translateX(0%) scale(1.1)',
        opacity: 0.95,
        zIndex: 3,
        border: '2px solid white',
      };
    } else if (absPosition === 1) {
      // Adjacent cards
      return {
        transform: `translateX(${position * 85}%) scale(0.9)`,
        opacity: 0.6,
        zIndex: 2,
      };
    } else if (absPosition === 2) {
      // Second adjacent cards
      return {
        transform: `translateX(${position * 85}%) scale(0.8)`,
        opacity: 0.3,
        zIndex: 1,
      };
    } else {
      // Hidden cards
      return {
        transform: `translateX(${position * 85}%) scale(0.7)`,
        opacity: 0,
        zIndex: 0,
      };
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section with Parallax Carousel */}
        <section className="relative h-screen overflow-hidden">
          {/* Background Images */}
          <div className="absolute inset-0">
            {updateSections.map((section, index) => (
              <div
                key={section.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
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
            <div className="max-w-6xl w-full">
              <ScrollAnimation direction="fade" className="mb-12 text-center">
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
              </ScrollAnimation>

              {/* Parallax Carousel */}
              <ScrollAnimation direction="up" delay={300}>
                <div className="relative max-w-5xl mx-auto">
                  {/* Navigation Buttons */}
                  <button
                    onClick={() => { stopAutoPlay(); prevSlide(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
                    disabled={isTransitioning}
                  >
                    <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </button>
                  
                  <button
                    onClick={() => { stopAutoPlay(); nextSlide(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
                    disabled={isTransitioning}
                  >
                    <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </button>

                  {/* Carousel Container */}
                  <div 
                    className="relative h-80 flex items-center justify-center perspective-1000"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {updateSections.map((section, index) => {
                      const IconComponent = section.icon;
                      const cardStyle = getCardStyle(index);
                      
                      return (
                        <div
                          key={section.id}
                          className="absolute w-80 h-72 transition-all duration-500 ease-out cursor-pointer"
                          style={cardStyle}
                          onClick={() => { stopAutoPlay(); goToSlide(index); }}
                        >
                          <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 shadow-2xl">
                            <CardContent className="p-6 h-full flex flex-col justify-between">
                              <div>
                                <div className="flex items-start gap-4 mb-4">
                                  <div className="p-3 bg-tech-blue/30 rounded-lg backdrop-blur-sm">
                                    <IconComponent className="h-6 w-6 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                                    <p className="text-white/80 mb-3 text-sm">{section.subtitle}</p>
                                  </div>
                                </div>
                                <p className="text-white/70 text-sm mb-4 line-clamp-3">{section.description}</p>
                              </div>
                              
                              <div className="flex items-center justify-between mt-auto">
                                <span className="text-tech-blue text-sm font-medium bg-tech-blue/20 px-3 py-1 rounded-full">
                                  {section.stats}
                                </span>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="text-black bg-white border-white/30 hover:bg-gray-200 hover:text-black backdrop-blur-sm font-medium" 
                                  asChild
                                >
                                  <Link to={section.link} className="flex items-center">
                                    Explore <ChevronRight size={16} className="ml-1" />
                                  </Link>
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      );
                    })}
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex justify-center mt-8 space-x-2">
                    {updateSections.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => { stopAutoPlay(); goToSlide(index); }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'w-8 bg-tech-blue' : 'w-2 bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimation direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold">Explore All Updates</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {updateSections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <ScrollAnimation key={section.id} direction="up" delay={index * 100}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                  </ScrollAnimation>
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
