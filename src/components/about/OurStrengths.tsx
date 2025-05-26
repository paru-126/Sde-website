
import { Award, Globe, TrendingUp, Users } from "lucide-react";

const OurStrengths = () => {
  return (
    <section id="strengths" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
            <Award size={20} />
            <span className="uppercase tracking-wider text-sm font-semibold">Our Strengths</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Makes Us Stand Out
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            High reliability RF & microwave components & sub systems backed by unmatched expertise and service excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Customer-Centric Excellence</h3>
            <p className="text-gray-700 mb-6">
              Our in-depth knowledge of the products and applications along with efficient and 
              personalized service enable us to build ever lasting relationships with our customers 
              and suppliers. We are continuously enhancing our product portfolio by keeping 
              ourselves updated on new technological development and market trends to help our 
              customers find suitable solutions for their applications.
            </p>
            <p className="text-gray-700">
              Offices at important locations in India and abroad within proximity reach of the customers.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd" 
              alt="RF & Microwave Components" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* TQM Section */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-tech-blue" size={32} />
            <h3 className="text-2xl font-bold">Total Quality Management (TQM)</h3>
          </div>
          <p className="text-gray-700 mb-6">
            It is SDE strict policy on TQM (Total Quality Management) to meet or exceed 
            customer requisites. It is SDE objective to operate and perform activities that fulfils 
            total customer requirements in terms of Technology to provide world class service with 
            cutting edge solution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-tech-blue">Quality Monitoring</h4>
              <p className="text-gray-700">
                The Company is having Quality check program on every day to monitor the jobs done 
                & to maintain quality objectives and infrastructures for effective operations. All these 
                exercises will lead to continuous improvements & services.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-tech-blue">Quality Measures</h4>
              <p className="text-gray-700">
                Every week, the company will generate the Reports for quality considerations 
                undertaken by the personnel's either from Office automation, Technical Installations, 
                Customer satisfaction on different levels, submitted by each employee.
              </p>
            </div>
          </div>
        </div>

        {/* Technology & Training */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-tech-blue text-white p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={28} />
              <h3 className="text-xl font-bold">Technology Updates</h3>
            </div>
            <p className="text-white/90">
              Facilities provided to impart training to our employees/executives in the state of 
              the art, technology to ensure we stay at the forefront of innovation.
            </p>
          </div>
          <div className="bg-white border-2 border-tech-blue p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-tech-blue" size={28} />
              <h3 className="text-xl font-bold">TQM Training</h3>
            </div>
            <p className="text-gray-700">
              The Company has external hired TQM specialists who conducts Quality training 
              program often to the personnel's. This training program will keep the personnel's 
              always in positive direction when the work is undertaken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStrengths;
