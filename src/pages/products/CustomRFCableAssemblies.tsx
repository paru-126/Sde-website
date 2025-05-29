import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, CheckCircle, Zap, Cable } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const CustomRFCableAssemblies = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Product Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <ScrollAnimation direction="left">
                <div>
                  <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                    <Waves size={20} />
                    <span className="uppercase tracking-wider text-sm font-semibold">RF Components</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Custom RF Cable Assemblies</h2>
                  <p className="text-gray-600 mb-6">
                    Custom-designed RF cable assemblies tailored to meet specific application requirements.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Engineered for precision impedance matching, low loss, and custom configurations, ideal for demanding RF systems.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Custom RF Cable Assembly"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </ScrollAnimation>
            </div>

            {/* Key Features */}
            <ScrollAnimation direction="up" className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Precision Impedance Matching</h4>
                    <p className="text-gray-600">Ensures optimal signal integrity</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Low Loss Designs</h4>
                    <p className="text-gray-600">Minimizes signal attenuation</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Waves className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Custom Lengths and Connectors</h4>
                    <p className="text-gray-600">Tailored to specific application needs</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Cable className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Phase Stable Options</h4>
                    <p className="text-gray-600">Maintains consistent signal timing</p>
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

export default CustomRFCableAssemblies;