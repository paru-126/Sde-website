
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Radio, CheckCircle, Settings } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const GroundTelemetryCheckoutSystem = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation direction="fade" className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-tech-black mb-6">
                Ground Telemetry Checkout System
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive ground-based telemetry checkout and validation systems for mission-critical applications.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="up" className="mb-16">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Ground Telemetry Checkout System"
                className="w-full max-w-4xl mx-auto h-96 object-cover rounded-lg shadow-lg"
              />
            </ScrollAnimation>

            {/* Key Features */}
            <ScrollAnimation direction="up">
              <h3 className="text-2xl font-bold mb-8 text-center">System Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Settings className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Automated Testing</h4>
                    <p className="text-gray-600">Comprehensive automated testing protocols</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Radio className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Dual Channel Processing</h4>
                    <p className="text-gray-600">Advanced dual-channel operations with diversity combiner</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Real-time Validation</h4>
                    <p className="text-gray-600">Live monitoring and validation capabilities</p>
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

export default GroundTelemetryCheckoutSystem;
