
import { Target, Heart, DollarSign, CheckCircle } from "lucide-react";

const OurVision = () => {
  return (
    <section id="vision" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
            <Target size={20} />
            <span className="uppercase tracking-wider text-sm font-semibold">Our Vision</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Leading India's Space & Defense Future
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-tech-blue to-tech-accent text-white p-8 md:p-12 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed mb-6">
              Sri Datta Electronics envisions becoming a global leader in delivering innovative, data-driven telemetry solutions, empowering industries with precise and reliable data collection and analysis to foster sustainable growth and operational excellence. With a strong commitment to supporting India’s space, defense, and avionics sectors, the company strives to lead the market through four strategic initiatives focused on high-quality products, services, and solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Heart className="mx-auto mb-3" size={32} />
                <h4 className="font-semibold">Customer Friendly</h4>
              </div>
              <div className="text-center">
                <CheckCircle className="mx-auto mb-3" size={32} />
                <h4 className="font-semibold">Service Excellence</h4>
              </div>
              <div className="text-center">
                <DollarSign className="mx-auto mb-3" size={32} />
                <h4 className="font-semibold">Financial Stability</h4>
              </div>
              <div className="text-center">
                <Target className="mx-auto mb-3" size={32} />
                <h4 className="font-semibold">Consistency</h4>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-tech-blue">Environmental Commitment</h3>
              <p className="text-gray-700">
                We are committed to integrating environmental and social issues into our business, 
                ensuring sustainable practices in all our operations.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-tech-blue">Leadership Goals</h3>
              <p className="text-gray-700">
                Our goal is to be leader in providing best support, quality and services against 
                customer requirements across the defense and aerospace sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
