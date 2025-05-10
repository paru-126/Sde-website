
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface Event {
  id: number;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  type: "conference" | "webinar" | "workshop" | "exhibition";
  description: string;
  image?: string;
  registrationLink?: string;
  past: boolean;
}

const events: Event[] = [
  {
    id: 1,
    title: "ElectroTech Innovation Summit 2025",
    date: "June 15, 2025",
    endDate: "June 17, 2025",
    location: "San Francisco, CA",
    type: "conference",
    description: "Join us for our annual Innovation Summit, featuring keynote speakers, product demos, and networking opportunities with industry leaders.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    registrationLink: "#",
    past: false
  },
  {
    id: 2,
    title: "Future of IoT: Smart Buildings Webinar",
    date: "May 22, 2025",
    location: "Online",
    type: "webinar",
    description: "Learn about the latest trends and technologies in IoT solutions for smart buildings and how they're revolutionizing facility management.",
    registrationLink: "#",
    past: false
  },
  {
    id: 3,
    title: "Electronics Manufacturing Expo 2025",
    date: "July 8, 2025",
    endDate: "July 10, 2025",
    location: "Munich, Germany",
    type: "exhibition",
    description: "Visit our booth at the Electronics Manufacturing Expo to see our latest products and talk to our experts about your specific needs.",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2",
    registrationLink: "#",
    past: false
  },
  {
    id: 4,
    title: "Advanced PCB Design Workshop",
    date: "April 5, 2025",
    location: "Boston, MA",
    type: "workshop",
    description: "A hands-on workshop covering advanced techniques in PCB design for high-performance electronic systems.",
    registrationLink: "#",
    past: false
  },
  {
    id: 5,
    title: "ElectroTech at Consumer Electronics Show",
    date: "January 7, 2025",
    endDate: "January 10, 2025",
    location: "Las Vegas, NV",
    type: "exhibition",
    description: "We showcased our latest consumer electronics solutions at CES 2025, including our award-winning smart home technology.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    past: true
  },
  {
    id: 6,
    title: "Industry 4.0 and The Future of Manufacturing",
    date: "February 18, 2025",
    location: "Online",
    type: "webinar",
    description: "This webinar explored how Industry 4.0 technologies are transforming manufacturing processes and creating new opportunities.",
    past: true
  },
];

const Events = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("upcoming");
  
  const filteredEvents = events.filter(event => {
    if (filter === "all") return true;
    if (filter === "upcoming") return !event.past;
    if (filter === "past") return event.past;
    return true;
  });

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="hero-gradient text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                <Calendar size={20} />
                <span className="uppercase tracking-wider text-sm font-semibold">Events & Speaking Engagements</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect With Us</h1>
              <p className="text-xl mb-8">
                Join us at industry events, webinars, and workshops to learn about our latest innovations and connect with our team of experts.
              </p>
            </div>
          </div>
        </div>
        
        {/* Events Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
              <h2 className="text-3xl font-bold">Events Calendar</h2>
              <div className="flex gap-2">
                <Button 
                  variant={filter === "upcoming" ? "default" : "outline"} 
                  onClick={() => setFilter("upcoming")}
                  className={filter === "upcoming" ? "bg-tech-blue" : ""}
                >
                  Upcoming Events
                </Button>
                <Button 
                  variant={filter === "past" ? "default" : "outline"} 
                  onClick={() => setFilter("past")}
                  className={filter === "past" ? "bg-tech-blue" : ""}
                >
                  Past Events
                </Button>
                <Button 
                  variant={filter === "all" ? "default" : "outline"} 
                  onClick={() => setFilter("all")}
                  className={filter === "all" ? "bg-tech-blue" : ""}
                >
                  All Events
                </Button>
              </div>
            </div>
            
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${event.past ? 'opacity-75' : ''}`}>
                    {event.image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                    <CardContent className={`${event.image ? 'pt-6' : 'pt-8'}`}>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            event.type === "conference" ? "bg-blue-100 text-blue-800" :
                            event.type === "webinar" ? "bg-green-100 text-green-800" :
                            event.type === "workshop" ? "bg-purple-100 text-purple-800" :
                            "bg-orange-100 text-orange-800"
                          }`}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {event.date}{event.endDate ? ` - ${event.endDate}` : ""}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-2">{event.location}</p>
                      <p className="text-gray-700 mb-4">{event.description}</p>
                      {!event.past && event.registrationLink && (
                        <Button className="w-full bg-tech-blue hover:bg-tech-accent" asChild>
                          <a href={event.registrationLink}>Register Now</a>
                        </Button>
                      )}
                      {event.past && (
                        <div className="text-center py-2 border border-gray-200 rounded-md text-gray-600">
                          Event Completed
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No events found</h3>
                <p className="text-gray-700 mb-4">
                  There are currently no {filter !== "all" ? filter : ""} events scheduled.
                </p>
                {filter !== "all" && (
                  <Button onClick={() => setFilter("all")} className="bg-tech-blue hover:bg-tech-accent">
                    Show All Events
                  </Button>
                )}
              </div>
            )}
          </div>
        </section>
        
        {/* Speaking Engagements */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Industry Speaking Engagements</h2>
            <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Our leadership team regularly participates in industry panels and delivers keynote presentations at leading technology conferences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2" 
                      alt="Speaker" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold mb-2">Future of Embedded Systems</h3>
                    <p className="text-gray-600 mb-2">TechCon 2025 | July 3, 2025 | Seattle, WA</p>
                    <p className="text-gray-700 mb-3">
                      Sarah Johnson, CEO, will discuss the evolving landscape of embedded systems and their role in next-generation electronics.
                    </p>
                    <p className="text-tech-blue font-medium">Keynote Presentation</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1560439513-74b037a25d84" 
                      alt="Speaker" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold mb-2">Sustainable Electronics Manufacturing</h3>
                    <p className="text-gray-600 mb-2">Green Tech Summit | August 15, 2025 | Amsterdam</p>
                    <p className="text-gray-700 mb-3">
                      Michael Chen, CTO, will join a panel discussion on sustainable practices in electronics manufacturing.
                    </p>
                    <p className="text-tech-blue font-medium">Panel Discussion</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="mb-6 text-gray-700">
                Interested in having an ElectroTech expert speak at your event?
              </p>
              <Button className="bg-tech-blue hover:bg-tech-accent" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Subscribe Section */}
        <section className="py-16 bg-tech-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Subscribe to our newsletter to receive notifications about upcoming events and webinars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-tech-blue hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Events;
