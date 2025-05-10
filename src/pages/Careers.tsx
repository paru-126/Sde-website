
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import JobList from "@/components/careers/JobList";
import WhyJoinUs from "@/components/careers/WhyJoinUs";
import { Briefcase } from "lucide-react";

const Careers = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Here you would typically send this to your backend
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="hero-gradient text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                <Briefcase size={20} />
                <span className="uppercase tracking-wider text-sm font-semibold">Careers</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team of Innovators</h1>
              <p className="text-xl mb-8">
                At ElectroTech, we're looking for talented individuals who are passionate about pushing the boundaries of what's possible in electronics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-tech-blue hover:bg-tech-accent text-white"
                  onClick={() => document.getElementById('openPositions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Open Positions
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  onClick={() => document.getElementById('whyJoinUs')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Why Join Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Join Us Section */}
        <WhyJoinUs />
        
        {/* Open Positions */}
        <JobList />
        
        {/* Job Alerts */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Get Job Alerts</h2>
              <p className="text-gray-700 mb-8">
                Don't see the right position? Subscribe to our job alerts and be the first to know when new opportunities match your skills.
              </p>
              
              {subscribed ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-green-600 text-xl font-semibold mb-2">Thank You for Subscribing!</h3>
                  <p className="text-gray-700">
                    You'll now receive alerts when new positions that match your interests become available.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-tech-blue hover:bg-tech-accent"
                    >
                      Subscribe to Job Alerts
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
