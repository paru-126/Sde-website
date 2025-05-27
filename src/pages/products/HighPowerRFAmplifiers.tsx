
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, CheckCircle, Zap, Radio } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const HighPowerRFAmplifiers = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation direction="fade" className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-tech-black mb-6">
                High-Power RF Amplifiers
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Integration and supply of high-power RF amplifiers designed for demanding defense applications.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="up" className="mb-16">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="High-Power RF Amplifiers"
                className="w-full max-w-4xl mx-auto h-96 object-cover rounded-lg shadow-lg"
              />
            </ScrollAnimation>

            {/* Key Features */}
            <ScrollAnimation direction="up">
              <h3 className="text-2xl font-bold mb-8 text-center">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">High Output Power</h4>
                    <p className="text-gray-600">Up to 1000W power output capabilities</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Radio className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Wide Frequency Range</h4>
                    <p className="text-gray-600">1 MHz - 18 GHz frequency support</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">High Efficiency</h4>
                    <p className="text-gray-600">Greater than 85% efficiency with excellent linearity</p>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HighPowerRFAmplifiers;
