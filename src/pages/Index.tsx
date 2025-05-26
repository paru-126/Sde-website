
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CompanyHighlights from "@/components/home/CompanyHighlights";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Newspaper, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Recent blog posts data
  const recentPosts = [
    {
      id: 1,
      title: "The Future of IoT in Manufacturing",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      category: "Technology",
      excerpt: "Exploring how Internet of Things is revolutionizing the manufacturing sector..."
    },
    {
      id: 2,
      title: "Sustainable Practices in Electronics",
      date: "April 28, 2025",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      category: "Sustainability",
      excerpt: "Our commitment to environmental responsibility and sustainable manufacturing..."
    },
    {
      id: 3,
      title: "5G Technology and Its Impact",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
      category: "Innovation",
      excerpt: "How next-generation connectivity is transforming industries and everyday life..."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Featured Products */}
        <ScrollAnimation direction="up" delay={100}>
          <FeaturedProducts />
        </ScrollAnimation>

        {/* Company Highlights */}
        <ScrollAnimation direction="up" delay={200}>
          <CompanyHighlights />
        </ScrollAnimation>

        {/* Updates Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation direction="up" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-black mb-4">
                Latest Updates
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay informed about our company news, events, and industry insights
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* News */}
              <ScrollAnimation direction="up" delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <Newspaper className="text-tech-blue mr-3" size={24} />
                    <h3 className="text-xl font-semibold">In the News</h3>
                  </div>
                  <p className="text-gray-600 mb-6">ElectroTech receives industry recognition for its innovative approach to sustainable electronics manufacturing.</p>
                  <Link to="/updates/news">
                    <Button variant="link" className="text-tech-blue p-0 font-medium">
                      Read Press Coverage <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>

              {/* References */}
              <ScrollAnimation direction="up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <Award className="text-tech-blue mr-3" size={24} />
                    <h3 className="text-xl font-semibold">Client References</h3>
                  </div>
                  <p className="text-gray-600 mb-6">See what our clients are saying about their experience working with ElectroTech.</p>
                  <Link to="/updates/references">
                    <Button variant="link" className="text-tech-blue p-0 font-medium">
                      View Testimonials <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>

              {/* Events */}
              <ScrollAnimation direction="up" delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <Calendar className="text-tech-blue mr-3" size={24} />
                    <h3 className="text-xl font-semibold">Upcoming Events</h3>
                  </div>
                  <p className="text-gray-600 mb-6">Join us at upcoming industry events and trade shows to see our latest innovations.</p>
                  <Link to="/updates/events">
                    <Button variant="link" className="text-tech-blue p-0 font-medium">
                      View Calendar <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>

            {/* Recent Blog Posts */}
            <div>
              <ScrollAnimation direction="up" className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-semibold">Recent Blog Posts</h3>
                <Link to="/updates/blog">
                  <Button variant="outline" className="border-tech-blue text-tech-blue">
                    View All Posts
                  </Button>
                </Link>
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentPosts.map((post, index) => (
                  <ScrollAnimation key={post.id} direction="up" delay={index * 100}>
                    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-tech-blue font-medium">{post.category}</span>
                          <span className="text-sm text-gray-500">{post.date}</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-3">{post.title}</h4>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <Button variant="link" className="text-tech-blue p-0 font-medium">
                          Read More <ArrowRight size={16} className="ml-1" />
                        </Button>
                      </div>
                    </article>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ScrollAnimation direction="up">
          <section className="py-20 bg-tech-blue">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Innovate with Us?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss how our electronic solutions can address your specific needs.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white text-tech-blue hover:bg-gray-100 border-white">
                  <Mail size={18} className="mr-2" /> Get in Touch
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
