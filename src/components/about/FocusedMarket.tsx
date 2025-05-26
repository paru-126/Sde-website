
import { Shield, Rocket, Plane, Handshake } from "lucide-react";

const FocusedMarket = () => {
  const marketSegments = [
    {
      icon: Shield,
      title: "Defence",
      description: "Comprehensive solutions for defense applications with high reliability and mission-critical performance."
    },
    {
      icon: Rocket,
      title: "Space",
      description: "Advanced space technology solutions supporting India's growing space program and satellite missions."
    },
    {
      icon: Plane,
      title: "Avionics",
      description: "Cutting-edge avionics systems for both civilian and military aviation applications."
    }
  ];

  return (
    <section id="market" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
            <Rocket size={20} />
            <span className="uppercase tracking-wider text-sm font-semibold">Market Focus</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Focused Market Segments
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Specialized expertise across three critical sectors driving India's technological advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {marketSegments.map((segment, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-tech-blue text-white rounded-full mb-6 mx-auto">
                <segment.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{segment.title}</h3>
              <p className="text-gray-700 text-center">{segment.description}</p>
            </div>
          ))}
        </div>

        {/* Business Partners Section */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Handshake className="text-tech-blue" size={32} />
            <h3 className="text-2xl font-bold">Business and Technology Partners</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-tech-blue text-white p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold mb-3">Current Partnership</h4>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-semibold">Lumistar Inc, USA</span>
                <a 
                  href="https://lumi-star.com/contact/international-reps/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-tech-accent hover:underline"
                >
                  Visit Partner
                </a>
              </div>
              <p className="text-white/90">
                Representing Lumistar Inc, USA since 2019 for advanced telemetry systems and solutions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Partnership Evolution</h4>
              <p className="text-gray-700">
                Earlier Sri Datta Electronics was represented L3 Communications, USA for Telemetry 
                systems. As L3 Communications has completely closed the Telemetry group, now Sri Datta 
                Electronics is representing Lumistar Inc, USA from 2019.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-tech-black text-white p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center">Contact Information</h3>
          <div className="text-center space-y-2">
            <p>FLAT NO:201, CHAITYANYA CHAMBERS, SAI NAGAR, CHAITANYAPURI, HYDERABAD-500060</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span>Tel: 040-35868174</span>
              <span>Fax: 040-49541605</span>
              <span>Email: sales@sridattaelectronics.com</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-tech-accent">
              <span>CIN: U31909TG2021PTC152171</span>
              <span>PAN: ABGCS2174P</span>
              <span>GSTIN: 36ABGCS2174P1ZR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusedMarket;
