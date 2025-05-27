
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Radio, CheckCircle, Shield, Zap } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const TelemetryTrackingStations = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden bg-gradient-to-r from-tech-black to-tech-accent">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-black/90 to-tech-black/70 z-10" />
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Telemetry Tracking Stations"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-4xl">
              <ScrollAnimation direction="fade" className="mb-8">
                <div className="inline-flex items-center gap-2 text-tech-blue mb-4">
                  <Radio size={20} />
                  <span className="uppercase tracking-wider text-sm font-semibold">Telemetry Systems</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Telemetry Tracking Stations
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-2xl">
                  Advanced telemetry tracking stations for real-time data acquisition and monitoring in critical aerospace and defense applications.
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
                  <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
                  <p className="text-gray-600 mb-6">
                    Our Telemetry Tracking Stations represent the pinnacle of ground-based tracking technology, 
                    designed to provide reliable, real-time data acquisition for satellite programs, defense applications, 
                    and aerospace missions where precision and reliability are paramount.
                  </p>
                  <p className="text-gray-600 mb-6">
                    These systems are engineered to operate in harsh environments while maintaining exceptional 
                    performance standards required for critical mission success.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Telemetry Tracking Station"
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
                    <Radio className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Multi-frequency Tracking</h4>
                    <p className="text-gray-600">Support for multiple frequency bands with automatic switching capabilities</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Real-time Processing</h4>
                    <p className="text-gray-600">Instantaneous data processing and analysis for immediate decision making</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="mx-auto mb-4 text-tech-blue" size={48} />
                    <h4 className="text-lg font-semibold mb-2">Weather-resistant Design</h4>
                    <p className="text-gray-600">Robust construction designed to withstand extreme environmental conditions</p>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>

            {/* Technical Specifications */}
            <ScrollAnimation direction="up" className="mb-16">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Performance</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Frequency Range: S, C, X, Ku bands</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Data Rate: Up to 100 Mbps</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Tracking Accuracy: ±0.1°</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Environmental</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Operating Temperature: -40°C to +70°C</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Humidity: 0-95% non-condensing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Wind Resistance: Up to 150 km/h</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Applications */}
            <ScrollAnimation direction="up" className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Satellite Tracking", description: "Real-time satellite monitoring and data collection" },
                  { title: "Defense Systems", description: "Military telemetry and surveillance operations" },
                  { title: "Space Missions", description: "Deep space communication and tracking" },
                  { title: "Research", description: "Scientific data acquisition and analysis" }
                ].map((app, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{app.title}</h4>
                      <p className="text-sm text-gray-600">{app.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollAnimation>

            {/* CTA Section */}
            <ScrollAnimation direction="up" className="text-center">
              <div className="bg-tech-black rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Deploy Advanced Tracking?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact our experts to discuss your specific requirements and learn how our Telemetry Tracking Stations can enhance your mission capabilities.
                </p>
                <Button size="lg" className="bg-tech-blue hover:bg-tech-accent">
                  Contact Us Today
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

export default TelemetryTrackingStations;
