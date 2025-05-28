import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main pages
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

// Product Pages - Telemetry Systems
import GroundTelemetryTrackingSystems from "./pages/products/GroundTelemetryTrackingSystems";
import SingleChannelGroundTelemetryCheckoutSystem from "./pages/products/SingleChannelGroundTelemetryCheckoutSystem";
import TelemetryDataMonitoringSystems from "./pages/products/TelemetryDataMonitoringSystems";
import DroneBasedTelemetryReceivingStation from "./pages/products/DroneBasedTelemetryReceivingStation";
import AirborneTelemetrySystems from "./pages/products/AirborneTelemetrySystems";

// Product Pages - Data Link Systems
import UHFDataLinkSystem from "./pages/products/UHFDataLinkSystem";
import LBandDataLinkSystem from "./pages/products/LBandDataLinkSystem";
import SBandDataLinkSystem from "./pages/products/SBandDataLinkSystem";

// Product Pages - Integrated Subsystems
import CustomTestJigs from "./pages/products/CustomTestJigs";
import GroundLoopbackSystems from "./pages/products/GroundLoopbackSystems";
import RFPowerAmplifiers from "./pages/products/RFPowerAmplifiers";

// Product Pages - Industrial Grade Systems
import IndustrialIPCs from "./pages/products/IndustrialIPCs";
import IndustrialPanelPCs from "./pages/products/IndustrialPanelPCs";
import NetworkAdaptersSwitches from "./pages/products/NetworkAdaptersSwitches";
import AutomationCardsModules from "./pages/products/AutomationCardsModules";

// Product Pages - Components & RF Accessories
import MILGradeRFConnectors from "./pages/products/MILGradeRFConnectors";
import MILGradeCircularConnectors from "./pages/products/MILGradeCircularConnectors";
import DCDCConverters from "./pages/products/DCDCConverters";
import TelemetryAntennas from "./pages/products/TelemetryAntennas";
import LowNoiseAmplifiers from "./pages/products/LowNoiseAmplifiers";
import CustomRFCableAssemblies from "./pages/products/CustomRFCableAssemblies";


// Product Pages - Services
import CustomDefenseSoftware from "./pages/products/CustomDefenseSoftware";
import DroneSortieServices from "./pages/products/DroneSortieServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/updates/news" element={<News />} />
          <Route path="/updates/references" element={<References />} />
          <Route path="/updates/events" element={<Events />} />
          <Route path="/updates/blog" element={<Blog />} />
          
          {/* Telemetry Systems */}
          <Route path="/products/ground-telemetry-tracking-systems" element={<GroundTelemetryTrackingSystems />} />
          <Route path="/products/single-channel-ground-telemetry-checkout-systems" element={<SingleChannelGroundTelemetryCheckoutSystem />} />
          <Route path="/products/telemetry-data-monitoring-systems" element={<TelemetryDataMonitoringSystems />} />
          <Route path="/products/drone-based-telemetry-receiving-station" element={<DroneBasedTelemetryReceivingStation />} />
          <Route path="/products/airborne-telemetry-systems" element={<AirborneTelemetrySystems />} />
          
          {/* Data Link Systems */}
          <Route path="/products/uhf-data-link-system" element={<UHFDataLinkSystem />} />
          <Route path="/products/l-band-data-link-system" element={<LBandDataLinkSystem />} />
          <Route path="/products/s-band-data-link-system" element={<SBandDataLinkSystem />} />
          
          {/* Integrated Subsystems */}
          <Route path="/products/custom-test-jigs" element={<CustomTestJigs />} />
          <Route path="/products/ground-loopback-systems" element={<GroundLoopbackSystems />} />
          <Route path="/products/rf-power-amplifiers" element={<RFPowerAmplifiers />} />
          
          {/* Industrial Grade Systems */}
          <Route path="/products/industrial-ipcs" element={<IndustrialIPCs />} />
          <Route path="/products/industrial-panel-pcs" element={<IndustrialPanelPCs />} />
          <Route path="/products/network-adapters-switches" element={<NetworkAdaptersSwitches />} />
          <Route path="/products/automation-cards-modules" element={<AutomationCardsModules />} />
          
          {/* Components & RF Accessories */}
          <Route path="/products/mil-grade-rf-connectors" element={<MILGradeRFConnectors />} />
          <Route path="/products/mil-grade-circular-connectors" element={<MILGradeCircularConnectors />} />
          <Route path="/products/dc-dc-converters" element={<DCDCConverters />} />
          <Route path="/products/telemetry-antennas" element={<TelemetryAntennas />} />
          <Route path="/products/low-noise-amplifiers" element={<LowNoiseAmplifiers />} />
          <Route path="/products/custom-rf-cable-assemblies" element={<CustomRFCableAssemblies />} />
          
          {/* Services */}
          <Route path="/products/custom-defense-software" element={<CustomDefenseSoftware />} />
          <Route path="/products/drone-sortie-services" element={<DroneSortieServices />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;