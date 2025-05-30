
import { Mail, Phone, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Director {
  title: string;
  name: string;
  email?: string;
  phone: string;
}

const directors: Director[] = [
  {
    title: "Managing Director",
    name: "HLN Sastry",
    email: "hlnsastry@sridattaelectronics.com",
    phone: "+91 9492430198"
  },
  {
    title: "Director",
    name: "Hari Swarnalatha",
    phone: "+91 9505889636"
  }
];

const DirectorsSection = () => {
  return (
    <section id="directors" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
            <User size={20} />
            <span className="uppercase tracking-wider text-sm font-semibold">Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Board of Directors</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Our experienced leadership team guides Sri Datta Electronics with strategic vision 
            and industry expertise, ensuring excellence in defense and aerospace solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {directors.map((director, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg border-l-4 border-l-tech-blue">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User size={32} className="text-tech-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-tech-black mb-2">{director.name}</h3>
                  <p className="text-tech-blue font-medium text-lg">{director.title}</p>
                </div>
                
                <div className="space-y-4">
                  {director.email && (
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Mail size={18} className="text-tech-blue flex-shrink-0" />
                      <a 
                        href={`mailto:${director.email}`}
                        className="text-gray-700 hover:text-tech-blue transition-colors text-sm"
                      >
                        {director.email}
                      </a>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Phone size={18} className="text-tech-blue flex-shrink-0" />
                    <a 
                      href={`tel:${director.phone}`}
                      className="text-gray-700 hover:text-tech-blue transition-colors text-sm"
                    >
                      {director.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;
