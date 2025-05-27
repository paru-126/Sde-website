
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, CheckCircle, Radio, Zap } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const DroneTelemetrySystem = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation direction="fade" className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-tech-black mb-6">
                Drone Telemetry System
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized telemetry systems for drone and unmanned vehicle operations with real-time video streaming capabilities.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="up" className="mb-16">
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Drone Telemetry System"
                className="w-full max-w-4xl mx-auto h-96 object-cover rounded-lg shadow-lg"
              />
            </ScrollAnimation>

            {/* Key Features */}
            <ScrollAnimation direction="up">
              <h3 className="text-2xl font-bold mb-8 text-center">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Radio className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Long-range Communication</h4>
                    <p className="text-gray-600">Extended range for comprehensive mission coverage</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Low Power Consumption</h4>
                    <p className="text-gray-600">Optimized for extended flight operations</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Real-time Video Streaming</h4>
                    <p className="text-gray-600">Live video data transmission and tracking</p>
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

export default DroneTelemetrySystem;
