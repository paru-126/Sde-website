import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, ArrowRight, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      
      <div className="relative container mx-auto px-6 pt-20 pb-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Company Brand Section */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
                  <img 
                    src="https://drive.google.com/thumbnail?id=1OyvUSlaxgDqGS5lRgps0egCBp8182rXc"
                    alt="Sri Datta Electronics Logo" 
                    referrerPolicy="no-referrer"
                    className="relative h-14 w-14 object-contain rounded-full border-2 border-blue-500/50 group-hover:border-blue-400 transition-all duration-300"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    Sri Datta <span className="text-blue-400">Electronics</span>
                  </h2>
                  <p className="text-sm text-slate-400 mt-1">
                    Defense & Aerospace Solutions
                  </p>
                </div>
              </Link>
            </div>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
              Leading the industry in innovative electronic solutions for defense and aerospace applications with cutting-edge technology and unmatched reliability.
            </p>

            {/* DMV Brand */}
            <div className="p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <Link to="/" className="flex items-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg group-hover:bg-blue-500/30 transition-all duration-300"></div>
                  <img 
                    src="https://drive.google.com/thumbnail?id=1OyvUSlaxgDqGS5lRgps0egCBp8182rXc"
                    alt="Sri Datta DMV Logo" 
                    referrerPolicy="no-referrer"
                    className="relative h-12 w-12 object-contain rounded-full border-2 border-blue-500/50"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    Sri Datta <span className="text-blue-400">DMV</span>
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Empowering electronics innovation — from design to distribution
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/contact", label: "Contact" },
                  { to: "/updates", label: "Products" }
                ].map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="group flex items-center text-slate-400 hover:text-blue-400 transition-all duration-300"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Products
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/updates#telemetry", label: "Telemetry Systems" },
                  { to: "/updates#integration", label: "Integration Solutions" },
                  { to: "/updates#mil-infrastructure", label: "MIL-Grade Infrastructure" },
                  { to: "/updates#services", label: "Services" }
                ].map((product) => (
                  <li key={product.to}>
                    <Link 
                      to={product.to} 
                      className="group flex items-center text-slate-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{product.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Contact Info
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                <li className="group">
                  <div className="flex items-start p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
                    <MapPin size={20} className="text-blue-400 mr-3 mt-0.5 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                    <div className="text-slate-300 text-sm leading-relaxed">
                      <div className="font-medium">FLAT NO:201, CHAITYANYA CHAMBERS</div>
                      <div>SAI NAGAR, CHAITANYAPURI</div>
                      <div>HYDERABAD-500060</div>
                    </div>
                  </div>
                </li>
                
                <li className="group">
                  <div className="flex items-start p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
                    <Phone size={20} className="text-blue-400 mr-3 mt-0.5 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                    <div className="text-slate-300 text-sm">
                      <div className="font-medium">Tel: 040-35868174</div>
                      <div>Mobile: +91 9492430198</div>
                    </div>
                  </div>
                </li>
                
                <li className="group">
                  <div className="flex items-start p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
                    <Mail size={20} className="text-blue-400 mr-3 mt-0.5 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                    <a 
                      href="mailto:sales@sridattaelectronics.com" 
                      className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium"
                    >
                      sales@sridattaelectronics.com
                    </a>
                  </div>
                </li>
                
                <li className="text-slate-400 text-xs bg-slate-800/20 p-2 rounded border border-slate-700/30">
                  <span className="font-mono">GSTIN: 36ABGCS2174P1ZR</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;