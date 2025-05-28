import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Radio, CheckCircle, Zap } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const DroneBasedTelemetryReceivingStation = () => {
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
                  <Radio size={20} />
                  <span className="uppercase tracking-wider text-sm font-semibold">Telemetry Systems</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">Drone Based Telemetry Receiving Station</h2>
                <p className="text-gray-600 mb-6">
                  Mobile telemetry receiving stations based on drone platforms, designed for flexible and rapid deployment in defense and aerospace applications.
                </p>
                 <ScrollAnimation direction="right">
                    <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Drone Based Telemetry Receiving Station"
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
                    <Radio className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Portable Design</h4>
                    <p className="text-gray-600">Lightweight and compact for easy transport</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Quick Deployment</h4>
                    <p className="text-gray-600">Rapid setup for immediate operational use</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Long-range Communication</h4>
                    <p className="text-gray-600">Extended range for reliable telemetry data transmission</p>
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

export default DroneBasedTelemetryReceivingStation;