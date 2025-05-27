import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navbarStyles = `
  /* Enable group hover effects */
  .group:hover .group-hover\\:visible {
    visibility: visible;
  }
  .group:hover .group-hover\\:opacity-100 {
    opacity: 1;
  }

  /* Enable subgroup hover effects */
  .group\\/subgroup:hover .group-hover\\/subgroup\\:visible {
    visibility: visible;
  }
  .group\\/subgroup:hover .group-hover\\/subgroup\\:opacity-100 {
    opacity: 1;
  }
`;

interface NavLinkProps {
  title: string;
  href: string;
  children?: NavLinkProps[];
}

const navLinks: NavLinkProps[] = [
  { 
    title: 'Home', 
    href: '/' 
  },
  { 
    title: 'About', 
    href: '/about',
    children: [
      { title: 'Company Profile', href: '/about#profile' },
      { title: 'Our Strengths', href: '/about#strengths' },
      { title: 'Our Vision', href: '/about#vision' },
      { title: 'Market Focus', href: '/about#market' }
    ]
  },
  
  { 
    title: 'Products', 
    href: '/updates',
    children: [
      { 
        title: 'Telemetry Systems', 
        href: '/updates#telemetry',
        children: [
          { title: 'Telemetry Tracking Stations', href: '/products/telemetry-tracking-stations' },
          { title: 'Ground Telemetry Checkout System', href: '/products/ground-telemetry-checkout-system' },
          { title: 'Airborne Telemetry System', href: '/products/airborne-telemetry-system' },
          { title: 'Drone Telemetry System', href: '/products/drone-telemetry-system' }
        ]
      },
      { 
        title: 'Integration & Sub Systems', 
        href: '/updates#integration',
        children: [
          { title: 'High-Power RF Amplifiers', href: '/products/high-power-rf-amplifiers' },
          { title: 'Ground Loop Back Units', href: '/products/ground-loop-back-units' },
          { title: 'Customized Defense Software', href: '/products/customized-defense-software' },
          { title: 'Rugged Computers & Networking', href: '/products/rugged-computers-networking' }
        ]
      },
      { 
        title: 'MIL-Grade Electronic Infrastructure', 
        href: '/updates#mil-infrastructure',
        children: [
          { title: 'MIL-Grade Missile Cable Assemblies', href: '/products/mil-grade-missile-cables' },
          { title: 'MIL-Grade RF Cable Assemblies', href: '/products/mil-grade-rf-cables' },
          { title: 'MIL-Grade Connectors', href: '/products/mil-grade-connectors' },
          { title: 'MIL-Grade DC-DC Converters', href: '/products/mil-grade-dc-dc-converters' },
          { title: 'DC Programmable Power Supplies', href: '/products/dc-programmable-power-supplies' },
          { title: 'RF & Microwave Components', href: '/products/rf-microwave-components' }
        ]
      },
      { 
        title: 'Services', 
        href: '/updates#services',
        children: []
      }
    ]
  },
  { 
    title: 'Contact', 
    href: '/contact' 
  },
];

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isHomePage) {
        setIsScrolled(currentScrollY > 10);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isHomePage]);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
    setActiveSubDropdown(null); // Reset sub dropdown when changing main dropdown
  };

  const toggleSubDropdown = (title: string) => {
    setActiveSubDropdown(activeSubDropdown === title ? null : title);
  };

  const getNavbarClasses = () => {
    const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
    
    if (isHomePage) {
      return `${baseClasses} ${
        isScrolled ? 'bg-tech-black/90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`;
    } else {
      return `${baseClasses} bg-tech-black/90 shadow-md backdrop-blur-sm py-2 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`;
    }
  };

    return (
    <header className={getNavbarClasses()}>
      <div className="container mx-auto px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://drive.google.com/thumbnail?id=1OyvUSlaxgDqGS5lRgps0egCBp8182rXc" 
              alt="Sri Datta Electronics Logo" 
              className="h-10 w-10 object-contain rounded-full"
            />
            <span className="text-xl font-bold text-white">Sri Datta <span className="text-tech-blue">Electronics</span></span>
          </Link>

          {/* Desktop Navigation */}
          
          <nav className="hidden md:flex items-center space-x-8 ml-8">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                <Link 
                  to={link.href} 
                  className="text-white/90 hover:text-tech-blue transition-colors font-medium"
                >
                  <span className="flex items-center">
                    {link.title}
                    {link.children && <ChevronDown size={16} className="ml-1" />}
                  </span>
                </Link>

                {/* First Level Dropdown (Categories) */}
                {link.children && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {link.children.map((category) => (
                        <div key={category.title} className="relative group/subgroup">
                          <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <Link to={category.href} className="flex-1 hover:text-tech-blue">
                              {category.title}
                            </Link>
                            {category.children && (
                              <ChevronRight size={16} className="ml-2 text-gray-400" />
                            )}
                          </div>
                          
                          {/* Second Level Dropdown (Products) */}
                          {category.children && (
                            <div className="absolute right-full top-0 mr-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/subgroup:opacity-100 group-hover/subgroup:visible transition-all duration-200">
                            <div className="py-2">
                                {category.children.map((product) => (
                                  <Link
                                    key={product.title}
                                    to={product.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-tech-blue"
                                  >
                                    {product.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setActiveDropdown(null);
              setActiveSubDropdown(null);
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-tech-black/95 backdrop-blur-sm py-4 shadow-lg animate-fade-in">
            <div className="container mx-auto px-6">
              {navLinks.map((link) => (
                <div key={link.title} className="py-2">
                  {link.children ? (
                    <>
                      <button 
                        className="flex items-center justify-between w-full text-white/90 py-2 px-4 rounded-md hover:bg-tech-gray-dark"
                        onClick={() => toggleDropdown(link.title)}
                      >
                        <span>{link.title}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            activeDropdown === link.title ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {activeDropdown === link.title && (
                        <div className="pl-4 mt-1 border-l-2 border-tech-blue">
                          {link.children.map((category) => (
                            <div key={category.title} className="py-1">
                              <button
                                className={`flex items-center justify-between w-full text-white/80 py-2 px-4 rounded-md ${
                                  category.children?.length ? 'hover:bg-tech-gray-dark' : ''
                                }`}
                                onClick={() => category.children?.length 
                                  ? toggleSubDropdown(category.title) 
                                  : setIsMenuOpen(false)
                                }
                              >
                                <Link to={category.href} className="text-left">
                                  {category.title}
                                </Link>
                                {category.children?.length && (
                                  <ChevronDown 
                                    size={16} 
                                    className={`transition-transform duration-200 ${
                                      activeSubDropdown === category.title ? 'rotate-180' : ''
                                    }`} 
                                  />
                                )}
                              </button>
                              
                              {activeSubDropdown === category.title && category.children?.length && (
                                <div className="pl-4 mt-1 border-l-2 border-tech-blue">
                                  {category.children.map((product) => (
                                    <Link
                                      key={product.title}
                                      to={product.href}
                                      className="block py-2 px-4 text-white/70 hover:text-tech-blue"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {product.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="block py-2 px-4 text-white/90 hover:bg-tech-gray-dark rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
