
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductCarousel from "@/components/home/ProductCarousel";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Newspaper, Award, Calendar, Target, Users, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const companyStats = [
    {
      icon: Target,
      value: "15+",
      label: "Years of Excellence",
      description: "Delivering cutting-edge solutions"
    },
    {
      icon: Users,
      value: "100+",
      label: "Expert Team",
      description: "Skilled professionals and engineers"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Projects Delivered",
      description: "Across defense and aerospace"
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Support",
      description: "Continuous technical assistance"
    }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Advanced Telemetry Systems in Modern Defense",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      category: "Technology",
      excerpt: "How next-generation telemetry systems are revolutionizing defense communications and data acquisition..."
    },
    {
      id: 2,
      title: "RF Power Solutions for Aerospace Applications",
      date: "April 28, 2025",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      category: "Innovation",
      excerpt: "Exploring high-efficiency RF amplifiers and their critical role in satellite communications..."
    },
    {
      id: 3,
      title: "Industrial Computing in Harsh Environments",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      category: "Engineering",
      excerpt: "The importance of ruggedized computing solutions in mission-critical industrial applications..."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Company Overview */}
        <ScrollAnimation direction="up" delay={100}>
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-tech-black mb-6">
                  Technology Excellence Organization
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Sri Datta Electronics is a dedicated technology organization with expert professionals 
                  delivering excellence in satellite programs, defense systems, and avionics solutions. 
                  We specialize in cutting-edge electronic systems for mission-critical applications.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyStats.map((stat, index) => (
                  <ScrollAnimation key={index} direction="up" delay={index * 100}>
                    <Card className="text-center bg-white border-gray-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-8">
                        <div className="p-4 rounded-full bg-tech-blue/10 inline-block mb-4">
                          <stat.icon size={32} className="text-tech-blue" />
                        </div>
                        <div className="text-3xl font-bold text-tech-black mb-2">{stat.value}</div>
                        <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                        <div className="text-gray-600">{stat.description}</div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Product Carousel */}
        <ScrollAnimation direction="up" delay={200}>
          <ProductCarousel />
        </ScrollAnimation>

        {/* Core Expertise */}
        <ScrollAnimation direction="up" delay={300}>
          <section className="py-20 bg-gradient-to-r from-tech-blue to-tech-accent">
            <div className="container mx-auto px-4">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-6">Our Core Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">Defense Systems</h3>
                    <p className="text-white/90">
                      Advanced telemetry, data link systems, and RF solutions for defense applications
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">Aerospace Solutions</h3>
                    <p className="text-white/90">
                      Satellite communication systems and airborne telemetry for space missions
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">Industrial Systems</h3>
                    <p className="text-white/90">
                      Ruggedized computing and automation solutions for harsh environments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Updates Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation direction="up" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tech-black mb-4">
                Latest Updates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed about our latest developments, industry insights, and company news
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* News */}
              <ScrollAnimation direction="up" delay={100}>
                <Card className="bg-white hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Newspaper className="text-tech-blue mr-3" size={28} />
                      <h3 className="text-2xl font-semibold">In the News</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Sri Datta Electronics recognized for innovative telemetry solutions in defense sector. 
                      Our cutting-edge technology continues to set industry standards.
                    </p>
                    <Link to="/updates/news">
                      <Button variant="link" className="text-tech-blue p-0 font-medium text-lg">
                        Read Press Coverage <ArrowRight size={18} className="ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* References */}
              <ScrollAnimation direction="up" delay={200}>
                <Card className="bg-white hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Award className="text-tech-blue mr-3" size={28} />
                      <h3 className="text-2xl font-semibold">Client Success</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Discover how our electronic solutions have helped clients achieve their mission objectives 
                      in defense and aerospace applications.
                    </p>
                    <Link to="/updates/references">
                      <Button variant="link" className="text-tech-blue p-0 font-medium text-lg">
                        View Case Studies <ArrowRight size={18} className="ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Events */}
              <ScrollAnimation direction="up" delay={300}>
                <Card className="bg-white hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Calendar className="text-tech-blue mr-3" size={28} />
                      <h3 className="text-2xl font-semibold">Industry Events</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Join us at upcoming defense and aerospace exhibitions to see our latest innovations 
                      and meet our expert team.
                    </p>
                    <Link to="/updates/events">
                      <Button variant="link" className="text-tech-blue p-0 font-medium text-lg">
                        View Events <ArrowRight size={18} className="ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>

            {/* Recent Blog Posts */}
            <div>
              <ScrollAnimation direction="up" className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-semibold">Technical Insights</h3>
                <Link to="/updates/blog">
                  <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white">
                    View All Articles
                  </Button>
                </Link>
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentPosts.map((post, index) => (
                  <ScrollAnimation key={post.id} direction="up" delay={index * 100}>
                    <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-tech-blue font-medium bg-tech-blue/10 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">{post.date}</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-3 text-tech-black">{post.title}</h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                        <Button variant="link" className="text-tech-blue p-0 font-medium">
                          Read More <ArrowRight size={16} className="ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ScrollAnimation direction="up">
          <section className="py-24 bg-gradient-to-r from-tech-black to-tech-gray-dark">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Advance Your Mission?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Partner with Sri Datta Electronics for cutting-edge electronic solutions tailored to your 
                defense, aerospace, and industrial requirements. Let's discuss your next project.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-tech-blue hover:bg-tech-accent text-white px-10 py-4 text-lg">
                  <Mail size={20} className="mr-2" /> Start Your Project
                </Button>
              </Link>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
