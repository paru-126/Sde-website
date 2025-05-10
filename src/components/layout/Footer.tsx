
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tech-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">Electro<span className="text-tech-blue">Tech</span></span>
            </Link>
            <p className="text-gray-400 mb-4">
              Leading the industry in innovative electronic solutions for over two decades. Quality, reliability, and cutting-edge technology define our commitment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-tech-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/about#team" className="text-gray-400 hover:text-tech-blue transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/about#values" className="text-gray-400 hover:text-tech-blue transition-colors">Core Values</Link>
              </li>
              <li>
                <Link to="/about#manufacturing" className="text-gray-400 hover:text-tech-blue transition-colors">Manufacturing</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-tech-blue transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-tech-blue transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Updates */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Updates</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/updates/news" className="text-gray-400 hover:text-tech-blue transition-colors">In News</Link>
              </li>
              <li>
                <Link to="/updates/references" className="text-gray-400 hover:text-tech-blue transition-colors">References</Link>
              </li>
              <li>
                <Link to="/updates/events" className="text-gray-400 hover:text-tech-blue transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/updates/blog" className="text-gray-400 hover:text-tech-blue transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-tech-blue mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Tech Boulevard, Innovation District, CA 94103, USA</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-tech-blue mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-tech-blue transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-tech-blue mr-2 flex-shrink-0" />
                <a href="mailto:info@electrotech.com" className="text-gray-400 hover:text-tech-blue transition-colors">info@electrotech.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ElectroTech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-tech-blue transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-tech-blue transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
