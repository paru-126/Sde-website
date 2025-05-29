
import { Info, Satellite, Shield, Radio } from "lucide-react";

const CompanyProfile = () => {
  return (
    <section id="profile" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
              <Info size={20} />
              <span className="uppercase tracking-wider text-sm font-semibold">Company Profile</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technology Expertise in Critical Applications
            </h2>
            <p className="text-gray-700 mb-6">
              Sri Datta Electronics is a technology expertise organization with dedicated techno-commercial 
              professionals having extensive experience in providing services and solutions in satellite programs, 
              defense, avionics, and harsh environment applications where reliability is critical.
            </p>
            <p className="text-gray-700">
              Our engineering services capability has been established and proven with adequate expertise 
              in high reliability components, RF & microwave components, and Telemetry subsystems. We are 
              registered with all Defence Labs in India and actively work on Design and Development of 
              Electronic Sub-systems for DRDO.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092335878-0d0def49f09a" 
                  alt="Sri Datta Electronics laboratory and equipment" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-tech-blue text-white p-6 rounded-lg shadow-lg">
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm">Support Available</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Satellite className="text-tech-blue" size={28} />
              <h3 className="text-xl font-bold">Our Expertise</h3>
            </div>
            <p className="text-gray-700">
              Specialized in satellite programs, defense applications, avionics, and high reliability 
              components for harsh environment applications where mission-critical performance is essential.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-tech-blue" size={28} />
              <h3 className="text-xl font-bold">Defense Partnership</h3>
            </div>
            <p className="text-gray-700">
              Registered with all Defence Labs in India, working on Design and Development of Electronic 
              Sub-systems for DRDO with proven track record in defense applications.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Radio className="text-tech-blue" size={28} />
              <h3 className="text-xl font-bold">Advanced Solutions</h3>
            </div>
            <p className="text-gray-700">
              Providing drone-based telemetry tracking systems, real-time video data streaming, 
              and wireless communication solutions for low altitude missile programs.
            </p>
          </div>
        </div>

        {/* Key Achievements Section */}
        <div className="mt-16 bg-tech-blue text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Achievements & Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3">Make in India Success</h4>
              <p className="text-white/90">
                Successfully developed software for Ground Telemetry Checkout System under Make in India 
                program for DRDO, including Single Integrated Software for Dual Channel Receiver, 
                Dual Bit Sync and Dual Decom with Diversity Combiner.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Infrastructure & Support</h4>
              <p className="text-white/90">
                Equipped with advanced laboratory for equipment calibrations, internal Inventory Management 
                System, and dedicated team providing 24x7 support. Expanding operations across South India 
                with ambitions for pan-India presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
