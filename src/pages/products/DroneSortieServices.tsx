import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, CheckCircle, Zap, Map } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const DroneSortieServices = () => {
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
                    <Wrench size={20} />
                    <span className="uppercase tracking-wider text-sm font-semibold">Operational Services</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Drone Based Sorties for Defense Applications</h2>
                  <p className="text-gray-600 mb-6">
                    Specialized drone sorties designed for defense and surveillance, providing critical operational support.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Engineered with mission planning, real-time data collection, and secure communication for high-stakes defense operations.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <img
                  src="https://images.unsplash.com/photo-1591006639196-8d39f9d6f6d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Drone Sortie Service"
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
                    <Map className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Mission Planning</h4>
                    <p className="text-gray-600">Tailored strategies for effective operations</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Real-time Data Collection</h4>
                    <p className="text-gray-600">Immediate insights for informed decision-making</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Secure Communication</h4>
                    <p className="text-gray-600">Encrypted channels for data integrity</p>
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

export default DroneSortieServices;