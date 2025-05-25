import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavLinkProps {
  title: string;
  href: string;
  children?: {
    title: string;
    href: string;
  }[];
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
      { title: 'Team', href: '/about#team' },
      { title: 'Core Values', href: '/about#values' },
      { title: 'Manufacturing', href: '/about#manufacturing' }
    ]
  },
  { 
    title: 'Careers', 
    href: '/careers' 
  },
  { 
    title: 'Contact', 
    href: '/contact' 
  },
  { 
    title: 'Updates', 
    href: '/updates',
    children: [
      { title: 'In News', href: '/updates/news' },
      { title: 'References', href: '/updates/references' },
      { title: 'Events', href: '/updates/events' },
      { title: 'Blog', href: '/updates/blog' }
    ]
  }
];

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // For home page: change background on scroll
      if (isHomePage) {
        setIsScrolled(currentScrollY > 10);
      }

      // For all pages: hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isHomePage]);

  // Toggle dropdown for mobile menu
  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  // Determine navbar styling based on page and scroll state
  const getNavbarClasses = () => {
    const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
    
    if (isHomePage) {
      // Home page: transparent when at top, black when scrolled
      return `${baseClasses} ${
        isScrolled ? 'bg-tech-black/90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`;
    } else {
      // Other pages: always black background
      return `${baseClasses} bg-tech-black/90 shadow-md backdrop-blur-sm py-2 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`;
    }
  };

  return (
    <header className={getNavbarClasses()}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">Electro<span className="text-tech-blue">Tech</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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

                {/* Dropdown for desktop */}
                {link.children && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50">
                    <div className="py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.title}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-tech-blue"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className="hidden md:block bg-tech-blue hover:bg-tech-accent transition-colors">
            Get a Quote
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-tech-black/95 backdrop-blur-sm py-4 shadow-lg animate-fade-in">
            <div className="container mx-auto px-4">
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
                          {link.children.map((child) => (
                            <Link
                              key={child.title}
                              to={child.href}
                              className="block py-2 px-4 text-white/80 hover:text-tech-blue"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.title}
                            </Link>
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
              
              <div className="mt-4 px-4">
                <Button className="w-full bg-tech-blue hover:bg-tech-accent">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
