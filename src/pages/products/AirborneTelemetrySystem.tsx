
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, CheckCircle, Zap, Radio } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const AirborneTelemetrySystem = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation direction="fade" className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-tech-black mb-6">
                Airborne Telemetry System
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                High-performance airborne telemetry systems for aircraft and UAV applications with exceptional reliability.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="up" className="mb-16">
              <img
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Airborne Telemetry System"
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
                    <h4 className="text-lg font-semibold mb-2">Lightweight Design</h4>
                    <p className="text-gray-600">Under 2kg for minimal aircraft impact</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Radio className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">High Data Throughput</h4>
                    <p className="text-gray-600">Up to 50 Mbps data transmission rates</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Extreme Environment</h4>
                    <p className="text-gray-600">Operational from -55°C to +85°C</p>
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

export default AirborneTelemetrySystem;
