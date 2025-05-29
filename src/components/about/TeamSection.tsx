
import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    position: "Chief Executive Officer",
    bio: "With over 20 years of experience in the electronics industry, Sarah has led ElectroTech to become a market leader through strategic vision and operational excellence.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Michael Chen",
    position: "Chief Technology Officer",
    bio: "Michael's expertise in R&D has resulted in numerous patents and breakthrough technologies that have revolutionized our product line and industry standards.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "David Rodriguez",
    position: "Chief Operating Officer",
    bio: "David ensures that our global operations run seamlessly, maintaining the highest standards of quality while driving efficiency across all departments.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Amina Patel",
    position: "VP of Product Development",
    bio: "Amina leads our product teams in creating innovative solutions that meet the evolving needs of our clients across various industries.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Thomas Wright",
    position: "Head of Global Sales",
    bio: "Thomas has expanded ElectroTech's market presence to over 40 countries, building strong client relationships and driving sustainable growth.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Leila Kim",
    position: "Director of Innovation",
    bio: "Leila spearheads our research initiatives, continuously pushing the boundaries of what's possible in electronic engineering and design.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
            <Users size={20} />
            <span className="uppercase tracking-wider text-sm font-semibold">Our Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team Behind Our Success</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Our leadership team combines decades of industry expertise with a passion for innovation,
            driving ElectroTech forward in our mission to revolutionize the electronics industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-tech-blue font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
