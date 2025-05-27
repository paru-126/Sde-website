import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Zap, Settings, Shield, Radio, ChevronRight, Wrench } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

interface Product {
  id: number;
  name: string;
  type: string;
  category: string;
  description: string;
  image: string;
  specifications: string[];
  slug: string;
}

interface ProductCategory {
  id: string;
  name: string;
  icon: any;
  color: string;
}

const productCategories: ProductCategory[] = [
  {
    id: 'all',
    name: 'All Products',
    icon: Settings,
    color: 'bg-gray-500'
  },
  {
    id: 'telemetry',
    name: 'Telemetry Systems',
    icon: Radio,
    color: 'bg-blue-500'
  },
  {
    id: 'integration',
    name: 'Integration & System Solutions',
    icon: Cpu,
    color: 'bg-green-500'
  },
  {
    id: 'mil-infrastructure',
    name: 'MIL-Grade Electronic Infrastructure',
    icon: Shield,
    color: 'bg-red-500'
  },
  {
    id: 'services',
    name: 'Services',
    icon: Wrench,
    color: 'bg-purple-500'
  }
];

const products: Product[] = [
  // Telemetry Systems
  {
    id: 1,
    name: 'Telemetry Tracking Stations',
    type: 'Ground Systems',
    category: 'telemetry',
    description: 'Advanced telemetry tracking stations for real-time data acquisition and monitoring.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['Multi-frequency tracking', 'Real-time data processing', 'Weather-resistant design'],
    slug: 'telemetry-tracking-stations'
  },
  {
    id: 2,
    name: 'Ground Telemetry Checkout System',
    type: 'Telemetry Subsystems',
    category: 'telemetry',
    description: 'Comprehensive ground-based telemetry checkout and validation systems.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['Automated testing', 'Signal validation', 'Comprehensive reporting'],
    slug: 'ground-telemetry-checkout-system'
  },
  {
    id: 3,
    name: 'Airborne Telemetry System',
    type: 'Flight Systems',
    category: 'telemetry',
    description: 'High-performance airborne telemetry systems for aircraft and UAV applications.',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['Lightweight design', 'High data throughput', 'Multi-channel capability'],
    slug: 'airborne-telemetry-system'
  },
  {
    id: 4,
    name: 'Drone Telemetry System',
    type: 'UAV Systems',
    category: 'telemetry',
    description: 'Specialized telemetry systems designed for drone and unmanned vehicle operations.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['Long-range communication', 'Low power consumption', 'Compact form factor'],
    slug: 'drone-telemetry-system'
  },

  // Integration & System Solutions
  {
    id: 5,
    name: 'High-Power RF Amplifiers',
    type: 'RF Integration',
    category: 'integration',
    description: 'Integration and supply of high-power RF amplifiers for defense applications.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['High output power', 'Wide frequency range', 'Excellent linearity'],
    slug: 'high-power-rf-amplifiers'
  },
  {
    id: 6,
    name: 'Ground Loop Back Units',
    type: 'Test Equipment',
    category: 'integration',
    description: 'Specialized ground loop back units for system testing and validation.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['Automated testing', 'Multiple interfaces', 'Real-time monitoring'],
    slug: 'ground-loop-back-units'
  },
  {
    id: 7,
    name: 'Customized Defense Software',
    type: 'Software Solutions',
    category: 'integration',
    description: 'Tailored software solutions for defense and aerospace applications.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['Custom development', 'Real-time processing', 'Secure architecture'],
    slug: 'customized-defense-software'
  },
  {
    id: 8,
    name: 'Rugged Computers & Networking',
    type: 'Computing Solutions',
    category: 'integration',
    description: 'Customized rugged computers and networking switches for harsh environments.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['MIL-STD compliant', 'Extended temperature range', 'Shock and vibration resistant'],
    slug: 'rugged-computers-networking'
  },

  // MIL-Grade Electronic Infrastructure (combined category)
  {
    id: 9,
    name: 'MIL-Grade Missile Cable Assemblies',
    type: 'Cable Systems',
    category: 'mil-infrastructure',
    description: 'High-reliability missile cable assemblies meeting military specifications.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['MIL-STD-1553', 'High temperature rated', 'EMI/RFI shielding'],
    slug: 'mil-grade-missile-cables'
  },
  {
    id: 10,
    name: 'MIL-Grade RF Cable Assemblies',
    type: 'RF Cables',
    category: 'mil-infrastructure',
    description: 'Precision RF cable assemblies for military and aerospace applications.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['Low loss design', 'Phase stable', 'Environmental sealing'],
    slug: 'mil-grade-rf-cables'
  },
  {
    id: 11,
    name: 'MIL-Grade Connectors',
    type: 'Connectors',
    category: 'mil-infrastructure',
    description: 'Comprehensive range of MIL-grade connectors including Micro-D, Nano-D, D-Sub, and Circular.',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['Multiple form factors', 'Gold plated contacts', 'Hermetic sealing'],
    slug: 'mil-grade-connectors'
  },
  {
    id: 12,
    name: 'MIL-Grade DC-DC Converters',
    type: 'Power Conversion',
    category: 'mil-infrastructure',
    description: 'High-efficiency DC-DC converters designed for military applications.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['Wide input range', 'High efficiency', 'EMI compliant'],
    slug: 'mil-grade-dc-dc-converters'
  },
  {
    id: 13,
    name: 'DC Programmable Power Supplies',
    type: 'Power Systems',
    category: 'mil-infrastructure',
    description: 'Precision DC programmable power supplies for testing and development.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['Digital control', 'High precision', 'Remote programming'],
    slug: 'dc-programmable-power-supplies'
  },
  {
    id: 14,
    name: 'RF & Microwave Components',
    type: 'RF Components',
    category: 'mil-infrastructure',
    description: 'Comprehensive range of RF and microwave components for various applications.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    specifications: ['Wide frequency range', 'Low insertion loss', 'High power handling'],
    slug: 'rf-microwave-components'
  }

  // Services category is intentionally left empty as requested
];

// ... rest of the component code remains the same ...

const Products = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFiltering, setIsFiltering] = useState(false);

  // Handle hash-based navigation from navbar
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && productCategories.some(cat => cat.id === hash)) {
      setActiveCategory(hash);
    }
  }, [location.hash]);

  useEffect(() => {
    setIsFiltering(true);
    setTimeout(() => {
      if (activeCategory === 'all') {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(products.filter(product => product.category === activeCategory));
      }
      setIsFiltering(false);
    }, 150);
  }, [activeCategory]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId !== activeCategory) {
      setActiveCategory(categoryId);
      // Update URL hash without triggering navigation
      window.location.hash = categoryId === 'all' ? '' : categoryId;
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden bg-gradient-to-r from-tech-black to-tech-accent">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-black/90 to-tech-black/70 z-10" />
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Electronics and Technology"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-4xl">
              <ScrollAnimation direction="fade" className="mb-8">
                <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                  <Settings size={20} />
                  <span className="uppercase tracking-wider text-sm font-semibold">Our Products</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Advanced Electronics Solutions
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-2xl">
                  Discover our comprehensive range of telemetry systems, MIL-grade components, 
                  and cutting-edge RF solutions designed for defense and aerospace applications.
                </p>
                <Button 
                  size="lg" 
                  className="bg-tech-blue hover:bg-tech-accent text-white"
                  onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Products
                </Button>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation direction="up" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Product Range</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse our extensive catalog of products across different categories
              </p>
            </ScrollAnimation>

            {/* Category Filter Buttons */}
            <ScrollAnimation direction="up" delay={200} className="mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                {productCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-tech-blue text-white shadow-lg transform scale-105'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-tech-blue/30'
                      }`}
                    >
                      <IconComponent size={18} />
                      <span className="hidden sm:inline">{category.name}</span>
                      <span className="sm:hidden">
                        {category.name.split(' ')[0]} {category.name.includes('&') ? '& More' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </ScrollAnimation>

            {/* Products Grid */}
            <div className={`transition-all duration-300 ${isFiltering ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                  <ScrollAnimation
                    key={product.id}
                    direction="up"
                    delay={index * 50}
                    className="h-full"
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="bg-tech-blue/90 text-white text-xs px-3 py-1 rounded-full font-medium">
                            {product.type}
                          </span>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-tech-blue transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {product.description}
                          </p>
                          
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {product.specifications.slice(0, 3).map((spec, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1 h-1 bg-tech-blue rounded-full mt-2 flex-shrink-0"></span>
                                  {spec}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full bg-tech-blue hover:bg-tech-accent group-hover:bg-tech-accent transition-colors" 
                          asChild
                        >
                          <Link to={`/products/${product.slug}`} className="flex items-center justify-center">
                            Learn More <ChevronRight size={16} className="ml-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>

            {/* No Products Message */}
            {filteredProducts.length === 0 && !isFiltering && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;