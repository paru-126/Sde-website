import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollAnimation from '@/components/ui/scroll-animation';

const heroSlides = [
  {
    title: "Innovative Electronics For Tomorrow's World",
    subtitle: "Cutting-edge solutions that power the future of technology",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    title: "Precision Engineering, Exceptional Performance",
    subtitle: "Setting new standards in electronic manufacturing",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    title: "Connect With The Future",
    subtitle: "Experience next-generation electronic solutions",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Gradient Overlay + Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-tech-black to-tech-black/70 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute'
              }`}
            >
              {index === currentSlide && (
                <ScrollAnimation direction="fade" delay={500}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white/80 mb-8">
                    {slide.subtitle}
                  </p>
                </ScrollAnimation>
              )}
            </div>
          ))}

          <ScrollAnimation direction="up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-tech-blue hover:bg-tech-accent text-white">
                Explore Our Products
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white bg-transparent hover:bg-white hover:text-tech-black">
                <Link to="/about" className="flex items-center">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="fade" delay={1000}>
            {/* Slide Indicators */}
            <div className="flex mt-12 space-x-2">
              {heroSlides.map((_, index) => (
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
          </ScrollAnimation>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <ScrollAnimation direction="fade" delay={1200}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-1 h-8 mx-auto bg-white/30 rounded-full relative overflow-hidden">
              <div className="w-full h-1/2 bg-tech-blue absolute top-0 left-0 animate-[fadeInFromTop_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Hero;
