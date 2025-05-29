import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Radio, Clock, CheckCircle, Package } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const DualChannelTelemetrySystem = () => {
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
                    <Radio size={20} />
                    <span className="uppercase tracking-wider text-sm font-semibold">Flight Systems</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Dual Channel Telemetry System</h2>
                  <p className="text-gray-600 mb-6">
                    Advanced dual-channel telemetry solution for simultaneous data acquisition from multiple sources during flight tests.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Engineered with dual independent channels, synchronized timestamping, and cross-channel validation for reliable data collection.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <img
                  src="https://i.ibb.co/h1CwqgSc/Dual-channel-Telemetry-System.webp" 
                  alt="Dual Channel Telemetry System"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </ScrollAnimation>
            </div>

            {/* Key Features */}
            <ScrollAnimation direction="up" className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Radio className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Dual Independent Channels</h4>
                    <p className="text-gray-600">Simultaneous data acquisition from multiple sources</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Clock className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Synchronized Timestamping</h4>
                    <p className="text-gray-600">Precise timing for accurate data correlation</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Cross-channel Validation</h4>
                    <p className="text-gray-600">Ensures data integrity across channels</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Package className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Compact Airborne Form Factor</h4>
                    <p className="text-gray-600">Optimized for space-constrained flight systems</p>
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

export default DualChannelTelemetrySystem;