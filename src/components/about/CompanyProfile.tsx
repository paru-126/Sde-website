
import { Info } from "lucide-react";

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
              Two Decades of Innovation in Electronics
            </h2>
            <p className="text-gray-700 mb-6">
              Founded in 2005, ElectroTech has grown from a small startup to a global leader in electronic solutions. 
              Our journey has been marked by continuous innovation, unwavering quality, and exceptional customer service.
            </p>
            <p className="text-gray-700">
              Today, we serve clients across multiple industries including healthcare, automotive, aerospace, 
              and consumer electronics. Our state-of-the-art facilities and dedicated team of over 500 professionals 
              ensure that we deliver nothing but the best.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="ElectroTech team at work" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-tech-blue text-white p-6 rounded-lg shadow-lg">
                <p className="text-3xl font-bold">20+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To revolutionize the electronics industry through cutting-edge technology and sustainable practices,
              while delivering exceptional value to our customers, employees, and stakeholders.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the global leader in innovative electronic solutions, recognized for our commitment to excellence,
              sustainability, and transformative impact on industries worldwide.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Promise</h3>
            <p className="text-gray-700">
              We promise reliability, quality, and innovation in every product and service we offer,
              backed by exceptional customer support and a commitment to continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
