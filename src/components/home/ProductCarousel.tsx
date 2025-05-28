
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Satellite, Radio, Zap, HardHat, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '@/components/ui/scroll-animation';

const products = [
  {
    id: 1,
    name: "Ground Telemetry Tracking Systems",
    description: "Advanced ground-based tracking systems for satellite and aerospace applications with real-time data processing capabilities.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    icon: Satellite,
    category: "Telemetry Systems",
    link: "/products/ground-telemetry-tracking-systems",
    features: ["Real-time tracking", "Multi-satellite support", "Advanced algorithms"]
  },
  {
    id: 2,
    name: "UHF Data Link Systems",
    description: "Reliable UHF band communication systems designed for secure military and aerospace data transmission.",
    image: "https://images.unsplash.com/photo-1573337771586-2f06dd57d993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    icon: Radio,
    category: "Data Link Systems",
    link: "/products/uhf-data-link-systems",
    features: ["Secure encryption", "Long-range capability", "Military-grade"]
  },
  {
    id: 3,
    name: "RF Power Amplifiers",
    description: "High-performance integrated RF power amplifier units for enhanced signal strength and transmission quality.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    icon: Zap,
    category: "Integrated Subsystems",
    link: "/products/integrated-rf-power-amplifier-units",
    features: ["High efficiency", "Wide bandwidth", "Thermal management"]
  },
  {
    id: 4,
    name: "Industrial Panel PCs",
    description: "Ruggedized panel computers built for harsh industrial environments with touchscreen interfaces.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    icon: HardHat,
    category: "Industrial Systems",
    link: "/products/industrial-grade-panel-pcs",
    features: ["IP65 rated", "Fanless design", "Multi-touch display"]
  },
  {
    id: 5,
    name: "Network Adapters & Switches",
    description: "Enterprise-grade networking solutions for reliable data communication and network management.",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    icon: Wifi,
    category: "Networking",
    link: "/products/network-adapters-switches",
    features: ["Gigabit speeds", "PoE support", "Managed switching"]
  }
];

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-tech-black via-tech-gray-dark to-tech-black">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="up" className="text-center mb-16">
          <Badge variant="outline" className="border-tech-blue text-tech-blue mb-4">
            Featured Products
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-6">
            Advanced Electronic Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge products designed for defense, aerospace, and industrial applications
          </p>
        </ScrollAnimation>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-tech-gray-dark/50 backdrop-blur-sm border border-gray-700">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    {/* Product Image */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-t from-tech-black/80 to-transparent rounded-xl z-10" />
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                      />
                      <Badge className="absolute top-4 left-4 bg-tech-blue z-20">
                        {product.category}
                      </Badge>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-tech-blue/20">
                          <product.icon size={32} className="text-tech-blue" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">{product.name}</h3>
                      </div>
                      
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, index) => (
                            <Badge key={index} variant="secondary" className="bg-tech-blue/10 text-tech-blue border border-tech-blue/30">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Link to={product.link}>
                        <Button className="bg-tech-blue hover:bg-tech-accent text-white px-8 py-3">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-tech-black/80 border-tech-blue text-white hover:bg-tech-blue z-20"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-tech-black/80 border-tech-blue text-white hover:bg-tech-blue z-20"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-tech-blue w-8' : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
