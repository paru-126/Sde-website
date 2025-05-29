
import { Award } from "lucide-react";

interface Value {
  title: string;
  description: string;
  icon: string;
}

const values: Value[] = [
  {
    title: "Innovation",
    description: "We continuously push boundaries to develop cutting-edge technologies that transform industries and improve lives.",
    icon: "🚀"
  },
  {
    title: "Excellence",
    description: "We hold ourselves to the highest standards in every aspect of our work, from research and development to customer service.",
    icon: "⭐"
  },
  {
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices that build trust with our clients and partners.",
    icon: "🤝"
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnership to achieve exceptional results and overcome complex challenges.",
    icon: "👥"
  },
  {
    title: "Sustainability",
    description: "We are committed to environmentally responsible practices and developing solutions that contribute to a more sustainable world.",
    icon: "🌱"
  },
  {
    title: "Customer Focus",
    description: "We put our customers at the center of everything we do, striving to exceed expectations and deliver exceptional value.",
    icon: "🎯"
  }
];

const CoreValues = () => {
  return (
    <section id="values" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
            <Award size={20} />
            <span className="uppercase tracking-wider text-sm font-semibold">Core Values</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Principles That Guide Us</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Our core values are more than just words—they're the foundation of our culture and guide every decision we make.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gray-50 p-8 md:p-12 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
              <h3 className="text-2xl font-bold mb-4">Our Commitment to Ethics</h3>
              <p className="text-gray-700 mb-4">
                At ElectroTech, we believe that how we do business is just as important as what we achieve. Our ethical guidelines ensure that we maintain the highest standards of integrity in all our operations.
              </p>
              <p className="text-gray-700">
                We are proud signatories of the Electronics Industry Citizenship Coalition (EICC) Code of Conduct and are committed to continuous improvement in our ethical, social, and environmental responsibility practices.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-tech-blue text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Our Ethics Policy</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Labor and Human Rights
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Health and Safety
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Environmental Responsibility
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Management Systems
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Ethics and Compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
