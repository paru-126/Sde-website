
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  excerpt: string;
  image?: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Embedded Systems in IoT Applications",
    date: "May 5, 2025",
    author: {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
    },
    category: "Technology",
    excerpt: "Explore how embedded systems are evolving to meet the demands of IoT applications, with improved power efficiency and enhanced security features.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["IoT", "Embedded Systems", "Innovation"]
  },
  {
    id: 2,
    title: "PCB Design Best Practices for High-Speed Applications",
    date: "April 22, 2025",
    author: {
      name: "Amina Patel",
      role: "VP of Product Development",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    },
    category: "Engineering",
    excerpt: "Learn essential PCB design techniques to minimize signal integrity issues and optimize performance in high-speed electronic applications.",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26",
    tags: ["PCB Design", "Engineering", "Best Practices"]
  },
  {
    id: 3,
    title: "Sustainable Electronics: Reducing Environmental Impact",
    date: "April 10, 2025",
    author: {
      name: "David Rodriguez",
      role: "Chief Operating Officer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    category: "Sustainability",
    excerpt: "Discover how electronics manufacturers are implementing sustainable practices to reduce environmental impact while maintaining product quality.",
    image: "https://images.unsplash.com/photo-1506555191898-a76bacf004ca",
    tags: ["Sustainability", "Manufacturing", "Green Technology"]
  },
  {
    id: 4,
    title: "Industry 4.0: Transforming Electronics Manufacturing",
    date: "March 28, 2025",
    author: {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    },
    category: "Industry Trends",
    excerpt: "An in-depth look at how Industry 4.0 technologies are revolutionizing electronics manufacturing through automation and data exchange.",
    tags: ["Industry 4.0", "Manufacturing", "Automation"]
  },
  {
    id: 5,
    title: "Security Considerations for Connected Devices",
    date: "March 15, 2025",
    author: {
      name: "Thomas Wright",
      role: "Head of Global Sales",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    category: "Security",
    excerpt: "Examining the security challenges facing IoT and connected devices, and strategies to protect against emerging threats.",
    image: "https://images.unsplash.com/photo-1563664369583-13a2201929f7",
    tags: ["Cybersecurity", "IoT", "Connected Devices"]
  },
  {
    id: 6,
    title: "Battery Technology Advancements for Portable Electronics",
    date: "March 5, 2025",
    author: {
      name: "Leila Kim",
      role: "Director of Innovation",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    category: "Research",
    excerpt: "Exploring recent breakthroughs in battery technology that promise longer life, faster charging, and improved safety for portable devices.",
    image: "https://images.unsplash.com/photo-1601065280555-79805e8cc574",
    tags: ["Battery Technology", "Research", "Mobile Devices"]
  },
];

const categories = ["All", "Technology", "Engineering", "Sustainability", "Industry Trends", "Security", "Research"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesTag = selectedTag === "" || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });
  
  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="hero-gradient text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                <BookOpen size={20} />
                <span className="uppercase tracking-wider text-sm font-semibold">Blog</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Expertise</h1>
              <p className="text-xl mb-8">
                Stay informed with the latest trends, technologies, and insights in the electronics industry from our team of experts.
              </p>
            </div>
          </div>
        </div>
        
        {/* Blog Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="md:w-1/3">
                  <Input
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="md:w-2/3 flex gap-2 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <Button 
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"} 
                      className={`whitespace-nowrap ${selectedCategory === category ? "bg-tech-blue" : ""}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Tags */}
              {allTags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-gray-600 font-medium py-1">Popular Tags:</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`text-sm ${selectedTag === "" ? "bg-gray-100" : ""}`}
                    onClick={() => setSelectedTag("")}
                  >
                    All
                  </Button>
                  {allTags.map((tag) => (
                    <Button
                      key={tag}
                      variant="ghost"
                      size="sm"
                      className={`text-sm ${selectedTag === tag ? "bg-gray-100" : ""}`}
                      onClick={() => setSelectedTag(tag)}
                    >
                      #{tag}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Blog Posts */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {post.image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                    <CardContent className={`${post.image ? 'pt-6' : 'pt-8'}`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-tech-blue font-medium">{post.category}</span>
                        <span className="text-gray-600 text-sm">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-gray-700 mb-6">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name} 
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <div>
                            <p className="font-medium text-sm">{post.author.name}</p>
                            <p className="text-gray-600 text-xs">{post.author.role}</p>
                          </div>
                        </div>
                        <Link to={`/updates/blog/${post.id}`} className="text-tech-blue hover:text-tech-accent">
                          Read More →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No articles found</h3>
                <p className="text-gray-700 mb-4">
                  No blog posts match your search criteria. Please try different filters or search terms.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setSelectedTag("");
                  }}
                  className="bg-tech-blue hover:bg-tech-accent"
                >
                  Clear Filters
                </Button>
              </div>
            )}
            
            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <div className="flex justify-center mt-12">
                <nav aria-label="Blog pagination">
                  <ul className="flex gap-2">
                    <li>
                      <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-50">
                        &laquo;
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-300 bg-tech-blue text-white rounded-md">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-50">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-50">
                        3
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-50">
                        &raquo;
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-700">
                  Get the latest electronics industry insights, tech trends, and ElectroTech news delivered directly to your inbox.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow"
                />
                <Button className="md:w-auto w-full bg-tech-blue hover:bg-tech-accent">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-600 text-center mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from ElectroTech.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
