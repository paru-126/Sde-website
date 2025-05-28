import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, CheckCircle, Zap } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const DCDCConverters = () => {
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
                    <span className="uppercase tracking-wider text-sm font-semibold">Power Conversion</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-6">DC to DC Converters</h2>
                  <p className="text-gray-600 mb-6">
                    Efficient DC-DC converters designed for a wide range of applications, delivering reliable power conversion.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Engineered for high efficiency and compact size, ideal for space-constrained and power-sensitive systems.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="DC to DC Converter"
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
                    <CheckCircle className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Wide Input Range</h4>
                    <p className="text-gray-600">Supports a broad range of input voltages</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">High Efficiency</h4>
                    <p className="text-gray-600">Optimized for minimal power loss</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Waves className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Compact Size</h4>
                    <p className="text-gray-600">Designed for space-constrained applications</p>
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

export default DCDCConverters;