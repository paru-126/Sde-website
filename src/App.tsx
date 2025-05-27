
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Updates from "./pages/Updates";
import News from "./pages/updates/News";
import References from "./pages/updates/References";
import Events from "./pages/updates/Events";
import Blog from "./pages/updates/Blog";

// Product Pages
import TelemetryTrackingStations from "./pages/products/TelemetryTrackingStations";
import GroundTelemetryCheckoutSystem from "./pages/products/GroundTelemetryCheckoutSystem";
import AirborneTelemetrySystem from "./pages/products/AirborneTelemetrySystem";
import DroneTelemetrySystem from "./pages/products/DroneTelemetrySystem";
import HighPowerRFAmplifiers from "./pages/products/HighPowerRFAmplifiers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/updates/news" element={<News />} />
          <Route path="/updates/references" element={<References />} />
          <Route path="/updates/events" element={<Events />} />
          <Route path="/updates/blog" element={<Blog />} />
          
          {/* Product Routes */}
          <Route path="/products/telemetry-tracking-stations" element={<TelemetryTrackingStations />} />
          <Route path="/products/ground-telemetry-checkout-system" element={<GroundTelemetryCheckoutSystem />} />
          <Route path="/products/airborne-telemetry-system" element={<AirborneTelemetrySystem />} />
          <Route path="/products/drone-telemetry-system" element={<DroneTelemetrySystem />} />
          <Route path="/products/high-power-rf-amplifiers" element={<HighPowerRFAmplifiers />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
