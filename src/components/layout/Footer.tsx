
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-6">
              <img 
                src="https://drive.google.com/thumbnail?id=1OyvUSlaxgDqGS5lRgps0egCBp8182rXc"
                alt="Sri Datta Electronics Logo" 
                referrerPolicy="no-referrer"
                className="h-12 w-12 object-contain rounded-full border-2 border-blue-500/50"
              />
              <div className="ml-4">
                <h2 className="text-xl font-bold text-white">
                  Sri Datta <span className="text-blue-400">Electronics</span>
                </h2>
                <p className="text-sm text-slate-400">
                  Defense & Aerospace Solutions
                </p>
              </div>
            </Link>
            
            <p className="text-slate-300 leading-relaxed mb-8 max-w-md">
              Leading the industry in innovative electronic solutions for defense and aerospace applications with cutting-edge technology and unmatched reliability.
            </p>

            {/* DMV Brand */}
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://drive.google.com/thumbnail?id=1OyvUSlaxgDqGS5lRgps0egCBp8182rXc"
                  alt="Sri Datta DMV Logo" 
                  referrerPolicy="no-referrer"
                  className="h-10 w-10 object-contain rounded-full border border-blue-500/50"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">
                    Sri Datta <span className="text-blue-400">DMV</span>
                  </h3>
                  <p className="text-sm text-slate-400">
                    Empowering electronics innovation
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
                { to: "/updates", label: "Products" }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="flex items-center text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Info
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div className="text-slate-300 text-sm leading-relaxed">
                  <div>FLAT NO:201, CHAITYANYA CHAMBERS</div>
                  <div>SAI NAGAR, CHAITANYAPURI</div>
                  <div>HYDERABAD-500060</div>
                </div>
              </li>
              
              <li className="flex items-start">
                <Phone size={18} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  <div>Tel: 040-35868174</div>
                  <div>Mobile: +91 9492430198</div>
                </div>
              </li>
              
              <li className="flex items-start">
                <Mail size={18} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:sales@sridattaelectronics.com" 
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  sales@sridattaelectronics.com
                </a>
              </li>
              
              <li className="text-slate-400 text-xs bg-slate-800/30 p-3 rounded border border-slate-700/30">
                <span className="font-mono">GSTIN: 36ABGCS2174P1ZR</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-slate-700 pt-8">
          <div className="text-center text-slate-400 text-sm">
            <p>&copy; 2024 Sri Datta Electronics. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
