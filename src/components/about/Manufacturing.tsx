
import { Factory } from "lucide-react";

const Manufacturing = () => {
  return (
    <section id="manufacturing" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
            <Factory size={20} />
            <span className="uppercase tracking-wider text-sm font-semibold">Manufacturing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">State-of-the-Art Facilities</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Our advanced manufacturing capabilities enable us to deliver high-quality electronic solutions with precision, efficiency, and reliability.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="ElectroTech manufacturing facility" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-tech-blue">Industry 4.0</p>
                <p className="text-sm text-gray-600">Smart Manufacturing</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Advanced Production Capabilities</h3>
            <p className="text-gray-700 mb-6">
              Our manufacturing facilities span over 200,000 square feet across three continents, equipped with the latest technology for surface mount technology (SMT), through-hole assembly, and comprehensive testing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold mb-2">Automated Assembly</h4>
                <p className="text-gray-600">High-speed, precise component placement with industry-leading pick-and-place machines.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold mb-2">Quality Testing</h4>
                <p className="text-gray-600">Comprehensive ICT, functional testing, and AOI systems ensure perfect products.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold mb-2">Prototyping</h4>
                <p className="text-gray-600">Rapid prototyping services with quick turnaround times for product development.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold mb-2">Clean Room Facilities</h4>
                <p className="text-gray-600">ISO Class 7 clean rooms for sensitive component manufacturing and assembly.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Global Manufacturing Footprint</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-tech-blue text-white mb-4">
                <span className="text-2xl font-bold">US</span>
              </div>
              <h4 className="font-bold mb-2">Silicon Valley, California</h4>
              <p className="text-gray-700">Our innovation hub and R&D center, focusing on prototyping and specialized production.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-tech-blue text-white mb-4">
                <span className="text-2xl font-bold">DE</span>
              </div>
              <h4 className="font-bold mb-2">Munich, Germany</h4>
              <p className="text-gray-700">European headquarters with advanced automation and precision manufacturing.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-tech-blue text-white mb-4">
                <span className="text-2xl font-bold">SG</span>
              </div>
              <h4 className="font-bold mb-2">Singapore</h4>
              <p className="text-gray-700">Asia-Pacific production center with high-volume manufacturing capabilities.</p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-bold mb-4 text-center">Quality Certifications</h4>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="px-4 py-2 bg-white rounded-md shadow-sm">ISO 9001:2015</div>
              <div className="px-4 py-2 bg-white rounded-md shadow-sm">ISO 14001:2015</div>
              <div className="px-4 py-2 bg-white rounded-md shadow-sm">ISO 13485:2016</div>
              <div className="px-4 py-2 bg-white rounded-md shadow-sm">IATF 16949:2016</div>
              <div className="px-4 py-2 bg-white rounded-md shadow-sm">AS9100D</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
