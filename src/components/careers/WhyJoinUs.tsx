
const benefits = [
  {
    title: "Innovative Work Environment",
    description: "Work on cutting-edge technology that shapes the future of electronics.",
    icon: "💡"
  },
  {
    title: "Professional Growth",
    description: "Continuous learning opportunities, mentorship programs, and career advancement paths.",
    icon: "📈"
  },
  {
    title: "Competitive Compensation",
    description: "Attractive salary packages, performance bonuses, and equity options.",
    icon: "💰"
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness programs, and on-site fitness facilities.",
    icon: "🏥"
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working arrangements, generous PTO, and family-friendly policies.",
    icon: "⚖️"
  },
  {
    title: "Global Opportunities",
    description: "Possibilities to work across our global offices and gain international experience.",
    icon: "🌎"
  }
];

const WhyJoinUs = () => {
  return (
    <section id="whyJoinUs" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Join ElectroTech?</h2>
          <p className="text-gray-700">
            Joining ElectroTech means being part of a team that's passionate about innovation and making a difference through technology.
            We provide an environment where talent thrives and careers flourish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-tech-blue text-white rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Our Culture</h3>
              <p className="mb-4">
                At ElectroTech, we foster a culture of innovation, collaboration, and excellence. 
                We believe in empowering our employees to think creatively, take initiative, and contribute to our shared success.
              </p>
              <p>
                Our diverse and inclusive workplace brings together talented individuals from various backgrounds and disciplines,
                creating a rich environment where different perspectives lead to breakthrough solutions.
              </p>
            </div>
            <div className="md:w-1/2 bg-tech-blue-dark">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Team collaboration at ElectroTech" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">What Our Employees Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-700 mb-4">
                "Working at ElectroTech has given me the opportunity to grow professionally while working on technology that makes a real impact."
              </p>
              <div>
                <p className="font-bold">Sarah L.</p>
                <p className="text-sm text-gray-600">Senior Engineer, 4 years</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-700 mb-4">
                "The collaborative culture and focus on continuous learning makes ElectroTech an ideal place to build a meaningful career."
              </p>
              <div>
                <p className="font-bold">Michael R.</p>
                <p className="text-sm text-gray-600">Product Manager, 3 years</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-700 mb-4">
                "I appreciate how ElectroTech values work-life balance and supports professional development at every career stage."
              </p>
              <div>
                <p className="font-bold">Priya K.</p>
                <p className="text-sm text-gray-600">Software Developer, 2 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
