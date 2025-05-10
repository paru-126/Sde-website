
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Advanced Control Systems for Manufacturing Plant",
    client: "GlobalTech Industries",
    industry: "Manufacturing",
    challenge: "Needed to modernize factory automation systems to improve efficiency and reduce downtime.",
    solution: "Implemented ElectroTech's integrated control systems with real-time monitoring and predictive maintenance capabilities.",
    results: [
      "30% reduction in unplanned downtime",
      "22% increase in production efficiency",
      "Annual savings of $2.3 million"
    ],
    logo: "https://placeholder.co/100",
  },
  {
    id: 2,
    title: "Next-Generation Sensing Solutions for Autonomous Vehicles",
    client: "AutoDrive Technologies",
    industry: "Automotive",
    challenge: "Developing reliable sensor systems for autonomous driving in adverse weather conditions.",
    solution: "Custom-designed multi-modal sensor fusion system with advanced signal processing algorithms.",
    results: [
      "95% accuracy in adverse weather conditions",
      "60% improvement in object recognition distance",
      "Successfully integrated into prototype vehicles"
    ],
    logo: "https://placeholder.co/100",
  },
  {
    id: 3,
    title: "IoT Monitoring System for Smart Buildings",
    client: "Urban Development Corp",
    industry: "Real Estate",
    challenge: "Creating an energy-efficient building management system for a large office complex.",
    solution: "Comprehensive IoT solution with wireless sensors, central management dashboard, and AI-powered optimization.",
    results: [
      "28% reduction in energy consumption",
      "Improved tenant satisfaction ratings by 35%",
      "ROI achieved within 18 months"
    ],
    logo: "https://placeholder.co/100",
  },
];

const clients = [
  { name: "Aerospace Systems Inc.", logo: "https://placeholder.co/150", industry: "Aerospace" },
  { name: "MediTech Innovations", logo: "https://placeholder.co/150", industry: "Healthcare" },
  { name: "PowerGrid Solutions", logo: "https://placeholder.co/150", industry: "Energy" },
  { name: "Smart Home Technologies", logo: "https://placeholder.co/150", industry: "Consumer Electronics" },
  { name: "IndustrialTech", logo: "https://placeholder.co/150", industry: "Manufacturing" },
  { name: "TransportSystems", logo: "https://placeholder.co/150", industry: "Transportation" },
  { name: "DataCenter Solutions", logo: "https://placeholder.co/150", industry: "IT Infrastructure" },
  { name: "Defense Electronics Corp", logo: "https://placeholder.co/150", industry: "Defense" },
];

const References = () => {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="hero-gradient text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                <span className="uppercase tracking-wider text-sm font-semibold">Client References</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
              <p className="text-xl mb-8">
                Explore how ElectroTech solutions have helped organizations across industries overcome challenges and achieve their goals.
              </p>
            </div>
          </div>
        </div>
        
        {/* Case Studies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <Card key={study.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{study.title}</h3>
                      <div className="bg-gray-100 p-2 rounded">
                        <img src={study.logo} alt={study.client} className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-tech-blue font-medium">{study.client}</p>
                      <p className="text-gray-600 text-sm">{study.industry}</p>
                    </div>
                    <p className="text-gray-700 mb-6 line-clamp-3">{study.challenge}</p>
                    <Button 
                      className="w-full bg-tech-blue hover:bg-tech-accent"
                      onClick={() => setActiveCase(study)}
                    >
                      Read Case Study
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Case Study Modal */}
            {activeCase && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{activeCase.title}</h3>
                        <div className="flex items-center gap-3">
                          <p className="text-tech-blue font-medium">{activeCase.client}</p>
                          <span className="text-gray-400">|</span>
                          <p className="text-gray-600">{activeCase.industry}</p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        onClick={() => setActiveCase(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </Button>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Challenge</h4>
                      <p className="text-gray-700">{activeCase.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Solution</h4>
                      <p className="text-gray-700">{activeCase.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Results</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {activeCase.results.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        variant="outline"
                        onClick={() => setActiveCase(null)}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Client Logos */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Trusted by Industry Leaders</h2>
            <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              We're proud to work with leading organizations across various industries, providing innovative electronic solutions that drive success.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <img src={client.logo} alt={client.name} className="mb-4" />
                  <p className="font-bold text-center">{client.name}</p>
                  <p className="text-gray-600 text-sm text-center">{client.industry}</p>
                </div>
              ))}
            </div>
            
            {/* Testimonial */}
            <div className="mt-20 bg-white p-8 md:p-12 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-8 md:mb-0 md:pr-12 text-center">
                  <div className="inline-block rounded-full overflow-hidden border-4 border-tech-blue mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                      alt="Client testimonial" 
                      className="w-32 h-32 object-cover"
                    />
                  </div>
                  <p className="font-bold">Robert Chen</p>
                  <p className="text-sm text-gray-600">CTO, GlobalTech Industries</p>
                </div>
                <div className="md:w-3/4">
                  <blockquote className="text-xl italic text-gray-700 relative">
                    <span className="absolute -left-6 -top-6 text-5xl text-tech-blue/20">"</span>
                    ElectroTech's solutions have transformed our manufacturing operations. Their attention to detail, technical expertise, and commitment to our success have made them a valued partner. The system they implemented has exceeded our expectations in terms of performance and ROI.
                    <span className="absolute -right-4 -bottom-4 text-5xl text-tech-blue/20">"</span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-tech-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore How ElectroTech Can Help Your Business?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Contact our team to discuss your challenges and discover how our innovative solutions can drive your success.
            </p>
            <Button 
              className="bg-white text-tech-blue hover:bg-gray-100 px-8"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default References;
