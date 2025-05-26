
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CompanyProfile from "@/components/about/CompanyProfile";
import TeamSection from "@/components/about/TeamSection";
import CoreValues from "@/components/about/CoreValues";
import Manufacturing from "@/components/about/Manufacturing";
import ScrollAnimation from "@/components/ui/scroll-animation";

const About = () => {
  const location = useLocation();
  
  // Scroll to section based on hash
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Remove the # symbol
      const id = hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ScrollAnimation direction="fade">
          <div className="hero-gradient text-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About ElectroTech</h1>
              <p className="text-xl max-w-3xl">
                Leading the industry with innovative electronic solutions and a commitment to excellence.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={100}>
          <CompanyProfile />
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={200}>
          <TeamSection />
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={300}>
          <CoreValues />
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={400}>
          <Manufacturing />
        </ScrollAnimation>
      </main>
      <Footer />
    </>
  );
};

export default About;
