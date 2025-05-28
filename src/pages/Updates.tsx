import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Zap, Settings, Shield, Radio, ChevronRight, Wrench,Satellite, HardHat, Waves } from "lucide-react";
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
    id: 'data-link',
    name: 'Data Link Systems',
    icon: Satellite, // You may need to import this icon
    color: 'bg-indigo-500'
  },
  {
    id: 'integrated-subsystems',
    name: 'Integrated Sub Systems & Solutions',
    icon: Cpu,
    color: 'bg-green-500'
  },
  {
    id: 'industrial-grade',
    name: 'Industrial Grade Systems',
    icon: HardHat, // You may need to import this icon
    color: 'bg-amber-500'
  },
  {
    id: 'components-rf',
    name: 'Components & RF Accessories',
    icon: Waves, // You may need to import this icon
    color: 'bg-purple-500'
  },
  {
    id: 'services',
    name: 'Services',
    icon: Wrench,
    color: 'bg-red-500'
  }
];

const products: Product[] = [
  // Telemetry Systems
  {
    id: 1,
    name: 'Ground Telemetry Tracking Systems',
    type: 'Ground Systems',
    category: 'telemetry',
    description: 'Advanced ground-based telemetry tracking systems for real-time data acquisition and monitoring.',
    image: '',
    specifications: ['Multi-frequency tracking', 'High precision positioning', 'Weather-resistant design'],
    slug: 'ground-telemetry-tracking-systems'
  },
  {
    id: 2,
    name: 'Single Channel Ground Telemetry Checkout Systems',
    type: 'Telemetry Subsystems',
    category: 'telemetry',
    description: 'Compact and efficient single channel telemetry checkout systems for validation and testing.',
    image: '',
    specifications: ['Single channel operation', 'Automated testing', 'Compact design'],
    slug: 'single-channel-ground-telemetry-checkout-systems'
  },
  {
    id: 3,
    name: 'Telemetry Data Monitoring Systems',
    type: 'Monitoring Systems',
    category: 'telemetry',
    description: 'Comprehensive data monitoring solutions for telemetry applications.',
    image: '',
    specifications: ['Real-time data visualization', 'Customizable dashboards', 'Alert systems'],
    slug: 'telemetry-data-monitoring-systems'
  },
  {
    id: 4,
    name: 'Drone Based Telemetry Receiving Station',
    type: 'UAV Systems',
    category: 'telemetry',
    description: 'Mobile telemetry receiving stations based on drone platforms.',
    image: '',
    specifications: ['Portable design', 'Quick deployment', 'Long-range communication'],
    slug: 'drone-based-telemetry-receiving-station'
  },
  {
    id: 5,
    name: 'Airborne Telemetry Systems',
    type: 'Flight Systems',
    category: 'telemetry',
    description: 'High-performance airborne telemetry systems for aircraft applications.',
    image: '',
    specifications: ['Lightweight design', 'High data throughput', 'Multi-channel capability'],
    slug: 'airborne-telemetry-systems'
  },
  {
    id: 24, // Make sure this ID is unique in your products array
    name: 'Dual Channel Telemetry System',
    type: 'Flight Systems',
    category: 'telemetry',
    description: 'Advanced dual-channel telemetry solution for simultaneous data acquisition from multiple sources during flight tests.',
    image: 'https://i.ibb.co/h1CwqgSc/Dual-channel-Telemetry-System.webp',
    specifications: ['Dual independent telemetry channels','Synchronized data timestamping','Cross-channel data validation','Compact airborne form factor'],
    slug: 'dual-channel-telemetry-system'
  },

  // Data Link Systems
  {
    id: 6,
    name: 'UHF Data Link Systems',
    type: 'UHF Systems',
    category: 'data-link',
    description: 'Reliable UHF band data link systems for secure communication.',
    image: '',
    specifications: ['UHF frequency range', 'Secure encryption', 'Long-range capability'],
    slug: 'uhf-data-link-systems'
  },
  {
    id: 7,
    name: 'L-band Data Link Systems',
    type: 'L-band Systems',
    category: 'data-link',
    description: 'High-performance L-band data link solutions.',
    image: '',
    specifications: ['L-band frequency', 'High data rate', 'Interference resistant'],
    slug: 'l-band-data-link-systems'
  },
  {
    id: 8,
    name: 'S-band Data Link Systems',
    type: 'S-band Systems',
    category: 'data-link',
    description: 'Advanced S-band data link systems for critical applications.',
    image: '',
    specifications: ['S-band frequency', 'High reliability', 'Weather resistant'],
    slug: 's-band-data-link-systems'
  },
  {
    id: 25, // Make sure this ID is unique in your products array
    name: 'Single Channel Decommutator System',
    type: 'Ground Equipment',
    category: 'data-link',
    description: 'Precision decommutation system for processing single-channel telemetry data streams with ultra-low latency.',
    image: 'https://i.ibb.co/46t8JQM/Single-Channel-Decommutator-System-Data-Link.webp',
    specifications: ['Single-channel PCM processing','Real-time data extraction','Adaptive frame synchronization','MIL-STD-1553 interface support'],
    slug: 'single-channel-decommutator-system'
  },

  // Integrated Sub Systems & Solutions
  {
    id: 9,
    name: 'Customized Integrated Test Jigs',
    type: 'Test Equipment',
    category: 'integrated-subsystems',
    description: 'Tailored test jigs for specific system testing requirements.',
    image: '',
    specifications: ['Custom configurations', 'Precision testing', 'Modular design'],
    slug: 'customized-integrated-test-jigs'
  },
  {
    id: 10,
    name: 'Ground Loopback Link Integrated Systems',
    type: 'Test Systems',
    category: 'integrated-subsystems',
    description: 'Integrated loopback systems for comprehensive testing.',
    image: '',
    specifications: ['Automated testing', 'Multiple interfaces', 'Real-time monitoring'],
    slug: 'ground-loopback-link-integrated-systems'
  },
  {
    id: 11,
    name: 'Integrated RF Power Amplifier Units',
    type: 'RF Integration',
    category: 'integrated-subsystems',
    description: 'High-power RF amplifier units for integrated solutions.',
    image: '',
    specifications: ['High output power', 'Wide frequency range', 'Excellent linearity'],
    slug: 'integrated-rf-power-amplifier-units'
  },

  // Industrial Grade Systems
  {
    id: 12,
    name: 'Industrial Grade IPCs',
    type: 'Industrial PCs',
    category: 'industrial-grade',
    description: 'Rugged industrial grade industrial PCs for harsh environments.',
    image: '',
    specifications: ['MIL-STD compliant', 'Extended temperature range', 'Shock resistant'],
    slug: 'industrial-grade-ipcs'
  },
  {
    id: 13,
    name: 'Industrial Grade Panel PCs',
    type: 'Panel PCs',
    category: 'industrial-grade',
    description: 'Durable panel PCs designed for industrial applications.',
    image: '',
    specifications: ['Touchscreen displays', 'IP65 rated', 'Fanless design'],
    slug: 'industrial-grade-panel-pcs'
  },
  {
    id: 14,
    name: 'Network Adapters & Switches',
    type: 'Networking',
    category: 'industrial-grade',
    description: 'Industrial grade networking equipment for reliable connectivity.',
    image: '',
    specifications: ['Rugged design', 'High-speed connectivity', 'Industrial protocols'],
    slug: 'network-adapters-switches'
  },
  {
    id: 22, // Make sure this ID is unique
    name: 'Industrial Grade Automation Cards and Modules',
    type: 'Automation Components',
    category: 'industrial-grade',
    description: 'Rugged automation cards and modules designed for industrial control systems.',
    image: '',
    specifications: ['Wide temperature operation','High vibration resistance','Multiple I/O interfaces','Industrial protocol support'],
    slug: 'industrial-grade-automation-cards-modules'
  },

  // Components & RF Accessories
  {
    id: 15,
    name: 'MIL-Grade RF Connectors',
    type: 'RF Components',
    category: 'components-rf',
    description: 'High-quality RF connectors meeting military specifications.',
    image: '',
    specifications: ['MIL-STD compliant', 'Low insertion loss', 'Durable construction'],
    slug: 'mil-grade-rf-connectors'
  },
  {
    id: 16,
    name: 'MIL Grade Circular Connectors',
    type: 'Connectors',
    category: 'components-rf',
    description: 'Robust circular connectors for military applications.',
    image: '',
    specifications: ['Environmental sealing', 'Multiple pin configurations', 'High reliability'],
    slug: 'mil-grade-circular-connectors'
  },
  {
    id: 17,
    name: 'DC to DC Converters',
    type: 'Power Conversion',
    category: 'components-rf',
    description: 'Efficient DC-DC converters for various applications.',
    image: '',
    specifications: ['Wide input range', 'High efficiency', 'Compact size'],
    slug: 'dc-to-dc-converters'
  },
  {
    id: 18,
    name: 'Telemetry Antenna',
    type: 'Antennas',
    category: 'components-rf',
    description: 'Specialized antennas for telemetry applications.',
    image: '',
    specifications: ['High gain', 'Lightweight', 'Durable construction'],
    slug: 'telemetry-antenna'
  },

  {
    id: 19,
    name: 'Low Noise Amplifiers',
    type: 'RF Components',
    category: 'components-rf',
    description: 'Low Noise Amplifiers for sensitive RF applications.',
    image: '',
    specifications: ['Low noise figure', 'High gain', 'Wide bandwidth'],
    slug: 'lna'
  },
  {
    id: 23, // Make sure this ID is unique
      name: 'Custom RF Cable Assemblies',
      type: 'RF Components',
      category: 'components-rf',
      description: 'Custom-designed RF cable assemblies for specific application requirements.',
      image: '',
      specifications: ['Precision impedance matching','Low loss designs','Custom lengths and connectors','Phase stable options available'],
      slug: 'custom-rf-cable-assemblies'
  },

  // Services
  {
    id: 20,
    name: 'Customized Defense Software Solutions',
    type: 'Software Services',
    category: 'services',
    description: 'Tailored software solutions for defense applications.',
    image: '',
    specifications: ['Custom development', 'Secure architecture', 'Real-time processing'],
    slug: 'customized-defense-software-solutions'
  },
  {
    id: 21,
    name: 'Drone Based Sorties for Defense Applications',
    type: 'Operational Services',
    category: 'services',
    description: 'Specialized drone sorties for defense and surveillance.',
    image: '',
    specifications: ['Mission planning', 'Real-time data collection', 'Secure communication'],
    slug: 'drone-based-sorties-for-defense-applications'
  }
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