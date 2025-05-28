import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Radio, Clock, CheckCircle, Cable } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const SingleChannelDecommutatorSystem = () => {
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
                  <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
                    <Radio size={20} />
                    <span className="uppercase tracking-wider text-sm font-semibold">Ground Equipment</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Single Channel Decommutator System</h2>
                  <p className="text-gray-600 mb-6">
                    Precision decommutation system for processing single-channel telemetry data streams with ultra-low latency.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Engineered with single-channel PCM processing, real-time data extraction, adaptive frame synchronization, and MIL-STD-1553 interface support for reliable data handling.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <img
                  src="https://i.ibb.co/46t8JQM/Single-Channel-Decommutator-System-Data-Link.webp"
                  alt="Single Channel Decommutator System"
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
                    <Radio className="mx-auto mb-4 text-blue-600" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Single-channel PCM Processing</h4>
                    <p className="text-gray-600">Efficient handling of telemetry data streams</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Clock className="mx-auto mb-4 text-blue-600" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Real-time Data Extraction</h4>
                    <p className="text-gray-600">Immediate access to critical information</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="mx-auto mb-4 text-blue-600" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Adaptive Frame Synchronization</h4>
                    <p className="text-gray-600">Reliable data alignment and integrity</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Cable className="mx-auto mb-4 text-blue-600" size={48} />
                    <h4 className="text-lg font-semibold mb-2">MIL-STD-1553 Interface Support</h4>
                    <p className="text-gray-600">Seamless integration with defense systems</p>
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

export default SingleChannelDecommutatorSystem;