
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, CheckCircle, Zap, Radio } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const HighPowerRFAmplifiers = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden bg-gradient-to-r from-tech-black to-tech-accent">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-black/90 to-tech-black/70 z-10" />
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="High-Power RF Amplifiers"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-4xl">
              <ScrollAnimation direction="fade" className="mb-8">
                <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                  <Cpu size={20} />
                  <span className="uppercase tracking-wider text-sm font-semibold">RF Integration</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  High-Power RF Amplifiers
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-2xl">
                  Integration and supply of high-power RF amplifiers designed for demanding defense applications.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <ScrollAnimation direction="left">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Superior RF Performance</h2>
                  <p className="text-gray-600 mb-6">
                    Our High-Power RF Amplifiers are carefully selected and integrated to meet the demanding 
                    requirements of defense and aerospace applications. We provide comprehensive solutions 
                    that deliver exceptional performance, reliability, and efficiency.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Each amplifier system is rigorously tested and validated to ensure optimal performance 
                    in mission-critical environments where failure is not an option.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="High-Power RF Amplifiers"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </ScrollAnimation>
            </div>

            {/* Key Features */}
            <ScrollAnimation direction="up" className="mb-16">
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
                    <p className="text-gray-600">{'>'}85% efficiency with excellent linearity</p>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>

            {/* CTA Section */}
            <ScrollAnimation direction="up" className="text-center">
              <div className="bg-tech-black rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Power Your Communications</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Enhance your RF systems with our high-performance amplifier solutions designed for critical applications.
                </p>
                <Button size="lg" className="bg-tech-blue hover:bg-tech-accent">
                  Request Specifications
                </Button>
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
