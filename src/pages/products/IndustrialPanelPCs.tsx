import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HardHat, CheckCircle, Zap } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const IndustrialPanelPCs = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Product Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation direction="left">
              <div>
                <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                  <HardHat size={20} />
                  <span className="uppercase tracking-wider text-sm font-semibold">Industrial Grade Systems</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">Industrial Grade Panel PCs</h2>
                <p className="text-gray-600 mb-6">
                  Durable panel PCs designed for industrial applications, offering robust performance in challenging environments.
                </p>
                 <ScrollAnimation direction="right">
                    <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Industrial Panel PCs"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            {/* Key Features */}
            <ScrollAnimation direction="up" className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <HardHat className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Touchscreen Displays</h4>
                    <p className="text-gray-600">Responsive and intuitive touchscreen interfaces</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">IP65 Rated</h4>
                    <p className="text-gray-600">Dust and water-resistant for harsh environments</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Fanless Design</h4>
                    <p className="text-gray-600">Silent operation with enhanced reliability</p>
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

export default IndustrialPanelPCs;