
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Newspaper } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  source: string;
  excerpt: string;
  link: string;
  image?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "ElectroTech Unveils Revolutionary Battery Technology",
    date: "April 15, 2025",
    source: "Tech Daily",
    excerpt: "ElectroTech has announced a breakthrough in battery technology that promises to double the capacity of existing lithium-ion batteries while reducing charging time by 50%.",
    link: "#",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
  },
  {
    id: 2,
    title: "ElectroTech Wins Innovation Award for Smart Home Solutions",
    date: "March 22, 2025",
    source: "Electronics Weekly",
    excerpt: "ElectroTech's new line of smart home products has won the prestigious Global Innovation Award at the annual Consumer Electronics Show.",
    link: "#",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  },
  {
    id: 3,
    title: "ElectroTech Partners with Automotive Giant for Next-Gen Vehicle Systems",
    date: "February 10, 2025",
    source: "Automotive News",
    excerpt: "ElectroTech has signed a multi-year partnership agreement with a leading automotive manufacturer to develop advanced electronic systems for electric vehicles.",
    link: "#",
    image: "https://images.unsplash.com/photo-1608446781624-9ee9b8ac88ea",
  },
  {
    id: 4,
    title: "ElectroTech Expands Manufacturing Facilities in Singapore",
    date: "January 30, 2025",
    source: "Business Insider",
    excerpt: "ElectroTech has announced a $200 million investment to expand its manufacturing capabilities in Singapore, creating over 500 new jobs.",
    link: "#",
  },
  {
    id: 5,
    title: "ElectroTech Reports Record Q4 Earnings, Exceeding Market Expectations",
    date: "January 15, 2025",
    source: "Financial Times",
    excerpt: "ElectroTech has reported record Q4 earnings, with revenue up 28% year-over-year, driven by strong demand for its industrial automation solutions.",
    link: "#",
  },
  {
    id: 6,
    title: "ElectroTech CEO Named Among Top 50 Tech Leaders",
    date: "December 5, 2024",
    source: "Tech Innovators",
    excerpt: "ElectroTech's CEO, Sarah Johnson, has been recognized as one of the Top 50 Tech Leaders of the Year for her contributions to the electronics industry.",
    link: "#",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
  },
];

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredNews = newsItems.filter(news => 
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="hero-gradient text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                <Newspaper size={20} />
                <span className="uppercase tracking-wider text-sm font-semibold">ElectroTech in the News</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News & Press</h1>
              <p className="text-xl mb-8">
                Stay updated with the latest news, press releases, and media coverage featuring ElectroTech.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold mb-4 md:mb-0">Media Coverage</h2>
              <div className="w-full md:w-64">
                <Input
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((news) => (
                  <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {news.image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={news.image} 
                          alt={news.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                    <CardContent className={`${news.image ? 'pt-6' : 'pt-8'}`}>
                      <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
                        <span>{news.date}</span>
                        <span>{news.source}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                      <p className="text-gray-700 mb-4">{news.excerpt}</p>
                      <Button variant="outline" className="text-tech-blue hover:bg-tech-blue/10" asChild>
                        <a href={news.link}>Read Full Article</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No results found</h3>
                <p className="text-gray-700 mb-4">
                  No news articles match your search criteria. Please try a different search term.
                </p>
                <Button onClick={() => setSearchTerm("")} className="bg-tech-blue hover:bg-tech-accent">
                  Clear Search
                </Button>
              </div>
            )}
            
            {/* Press Kit Section */}
            <div className="mt-20 bg-gray-50 p-8 md:p-12 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                  <h3 className="text-2xl font-bold mb-4">Press Kit</h3>
                  <p className="text-gray-700 mb-4">
                    Download our press kit for high-resolution company logos, product images, executive headshots, and background information.
                  </p>
                  <Button className="bg-tech-blue hover:bg-tech-accent">Download Press Kit</Button>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold mb-3">Media Contact</h4>
                    <p className="text-gray-700 mb-2">Jane Smith</p>
                    <p className="text-gray-700 mb-2">Press Relations Manager</p>
                    <p className="text-gray-700 mb-2">press@electrotech.com</p>
                    <p className="text-gray-700">+1 (234) 567-899</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default News;
