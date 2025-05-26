
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CompanyProfile from "@/components/about/CompanyProfile";
import OurStrengths from "@/components/about/OurStrengths";
import OurVision from "@/components/about/OurVision";
import FocusedMarket from "@/components/about/FocusedMarket";
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sri Datta Electronics</h1>
              <p className="text-xl max-w-3xl">
                Technology expertise organization with dedicated professionals delivering excellence in satellite programs, defense, and avionics.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={100}>
          <CompanyProfile />
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={200}>
          <OurStrengths />
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={300}>
          <OurVision />
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={400}>
          <FocusedMarket />
        </ScrollAnimation>
      </main>
      <Footer />
    </>
  );
};

export default About;
