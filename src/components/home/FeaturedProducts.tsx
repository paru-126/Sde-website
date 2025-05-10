
import { useState } from 'react';
import { ArrowRight, Cpu, Wifi, Zap, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: "XT-9000 Processor",
    description: "Next-gen processing power with AI acceleration built in",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    icon: Cpu,
    category: "Processors",
    featured: true
  },
  {
    id: 2,
    name: "ConnectPro Router",
    description: "Ultra-fast connectivity with advanced security protocols",
    image: "https://images.unsplash.com/photo-1573337771586-2f06dd57d993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    icon: Wifi,
    category: "Networking",
    featured: true
  },
  {
    id: 3,
    name: "PowerCore 5000",
    description: "High-capacity power management system for enterprise needs",
    image: "https://images.unsplash.com/photo-1536412597336-ade7b523ecfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    icon: Zap,
    category: "Power Systems",
    featured: true
  },
  {
    id: 4,
    name: "SmartTrack Device",
    description: "IoT-enabled tracking and management solution for assets",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    icon: Smartphone,
    category: "IoT Devices",
    featured: true
  }
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-b from-tech-gray-dark to-tech-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-tech-blue text-tech-blue mb-4">Featured Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cutting-Edge Electronics</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our innovative products designed to transform industries and enhance everyday experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id}
              className={`bg-tech-gray-dark border-gray-700 overflow-hidden transition-all duration-300 hover:border-tech-blue hover:shadow-lg hover:shadow-tech-blue/10 ${
                hoveredProduct === product.id ? 'transform scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-tech-black to-transparent z-10" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform: hoveredProduct === product.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <Badge className="absolute top-3 left-3 bg-tech-blue z-20">
                  {product.category}
                </Badge>
              </div>
              
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-lg bg-tech-blue/10 mr-3">
                    <product.icon size={20} className="text-tech-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                </div>
                
                <p className="text-gray-400 mb-5">
                  {product.description}
                </p>
                
                <Button variant="ghost" className="text-tech-blue hover:text-tech-accent hover:bg-tech-blue/10 p-0 flex items-center">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-tech-blue hover:bg-tech-accent">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
