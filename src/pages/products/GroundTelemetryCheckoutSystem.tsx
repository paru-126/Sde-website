
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Radio, CheckCircle, Settings, Zap } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const GroundTelemetryCheckoutSystem = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden bg-gradient-to-r from-tech-black to-tech-accent">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-black/90 to-tech-black/70 z-10" />
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Ground Telemetry Checkout System"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-4xl">
              <ScrollAnimation direction="fade" className="mb-8">
                <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                  <Settings size={20} />
                  <span className="uppercase tracking-wider text-sm font-semibold">Telemetry Subsystems</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Ground Telemetry Checkout System
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-2xl">
                  Comprehensive ground-based telemetry checkout and validation systems for mission-critical applications.
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
                  <h2 className="text-3xl font-bold mb-6">DRDO Partnership Success</h2>
                  <p className="text-gray-600 mb-6">
                    We have successfully developed software for Ground Telemetry Checkout System under the 
                    "Make in India" program for DRDO. Our Single Integrated Software solution combines 
                    Dual Channel Receiver, Dual Bit Sync, and Dual Decom with Diversity Combiner capabilities.
                  </p>
                  <p className="text-gray-600 mb-6">
                    This system is specifically designed for phase checks, flight trials, and post-analysis 
                    of flight trails, providing comprehensive telemetry validation and verification capabilities.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Ground Telemetry Checkout System"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </ScrollAnimation>
            </div>

            {/* Key Features */}
            <ScrollAnimation direction="up" className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">System Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Settings className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Automated Testing</h4>
                    <p className="text-gray-600">Comprehensive automated testing protocols for telemetry systems validation</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Radio className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Signal Validation</h4>
                    <p className="text-gray-600">Advanced signal processing and validation for dual-channel operations</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Comprehensive Reporting</h4>
                    <p className="text-gray-600">Detailed analysis and reporting for mission-critical decision making</p>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>

            {/* Technical Features */}
            <ScrollAnimation direction="up" className="mb-16">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Technical Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Software Components</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Dual Channel Receiver Integration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Dual Bit Synchronization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Dual Decommutation System</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Diversity Combiner</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Applications</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Phase Checks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Flight Trials Monitoring</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Post-Flight Analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Real-time Validation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* CTA Section */}
            <ScrollAnimation direction="up" className="text-center">
              <div className="bg-tech-black rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Proven DRDO Partnership</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Experience the reliability of our DRDO-proven Ground Telemetry Checkout System. 
                  Contact us to learn how we can customize this solution for your specific requirements.
                </p>
                <Button size="lg" className="bg-tech-blue hover:bg-tech-accent">
                  Get More Information
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

export default GroundTelemetryCheckoutSystem;
