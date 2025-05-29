
import { CheckCircle, Users, Factory, Award, Briefcase } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CompanyHighlights = () => {
  const stats = [
    { value: '20+', label: 'Years of Experience' },
    { value: '500+', label: 'Skilled Employees' },
    { value: '1000+', label: 'Projects Completed' },
    { value: '50+', label: 'Countries Served' }
  ];

  const capabilities = [
    { name: 'Innovative Design', progress: 95 },
    { name: 'Manufacturing Precision', progress: 90 },
    { name: 'Quality Assurance', progress: 98 },
    { name: 'Customer Satisfaction', progress: 96 }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About & Stats */}
          <div>
            <p className="text-tech-blue font-semibold mb-3">ABOUT OUR COMPANY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-tech-black mb-6">
              Excellence in Electronics Engineering & Manufacturing
            </h2>
            
            <p className="text-gray-600 mb-8">
              For over two decades, ElectroTech has been at the forefront of electronic innovation, delivering high-quality products that meet the evolving needs of industries worldwide. Our commitment to excellence, precision, and cutting-edge technology has established us as a trusted leader in the electronics sector.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-tech-blue">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/about">
                <Button className="bg-tech-blue hover:bg-tech-accent">
                  Learn More About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Capabilities & Values */}
          <div>
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-6">Our Capabilities</h3>
              
              <div className="space-y-6">
                {capabilities.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-semibold">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2 bg-gray-200" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Why Choose Us</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-tech-blue">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Expert Team</h4>
                    <p className="text-gray-600">Highly skilled professionals with deep industry knowledge</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-tech-blue">
                    <Factory size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Advanced Manufacturing</h4>
                    <p className="text-gray-600">State-of-the-art facilities for precision production</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-tech-blue">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-gray-600">Rigorous testing and quality control standards</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-tech-blue">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Customer Focus</h4>
                    <p className="text-gray-600">Dedicated to exceeding client expectations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;
