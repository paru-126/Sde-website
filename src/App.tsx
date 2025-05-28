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

          
          {/* Telemetry Systems */}
          <Route path="/products/ground-telemetry-tracking-systems" element={<GroundTelemetryTrackingSystems />} />
          <Route path="/products/single-channel-ground-telemetry-checkout-systems" element={<SingleChannelGroundTelemetryCheckoutSystem />} />
          <Route path="/products/telemetry-data-monitoring-systems" element={<TelemetryDataMonitoringSystems />} />
          <Route path="/products/drone-based-telemetry-receiving-station" element={<DroneBasedTelemetryReceivingStation />} />
          <Route path="/products/airborne-telemetry-systems" element={<AirborneTelemetrySystems />} />
          
          {/* Data Link Systems */}
          <Route path="/products/uhf-data-link-systems" element={<UHFDataLinkSystem />} />
          <Route path="/products/l-band-data-link-systems" element={<LBandDataLinkSystem />} />
          <Route path="/products/s-band-data-link-systems" element={<SBandDataLinkSystem />} />
          
          {/* Integrated Subsystems */}
          <Route path="/products/customized-integrated-test-jigs" element={<CustomTestJigs />} />
          <Route path="/products/ground-loopback-link-integrated-systems" element={<GroundLoopbackSystems />} />
          <Route path="/products/integrated-rf-power-amplifier-units" element={<RFPowerAmplifiers />} />
          
          {/* Industrial Grade Systems */}
          <Route path="/products/industrial-grade-ipcs" element={<IndustrialIPCs />} />
          <Route path="/products/industrial-grade-panel-pcs" element={<IndustrialPanelPCs />} />
          <Route path="/products/network-adapters-switches" element={<NetworkAdaptersSwitches />} />
          <Route path="/products/industrial-grade-automation-cards-modules" element={<AutomationCardsModules />} />
          
          {/* Components & RF Accessories */}
          <Route path="/products/mil-grade-rf-connectors" element={<MILGradeRFConnectors />} />
          <Route path="/products/mil-grade-circular-connectors" element={<MILGradeCircularConnectors />} />
          <Route path="/products/dc-to-dc-converters" element={<DCDCConverters />} />
          <Route path="/products/telemetry-antenna" element={<TelemetryAntennas />} />
          <Route path="/products/lna" element={<LowNoiseAmplifiers />} />
          <Route path="/products/custom-rf-cable-assemblies" element={<CustomRFCableAssemblies />} />
          
          {/* Services */}
          <Route path="/products/customized-defense-software-solutions" element={<CustomDefenseSoftware />} />
          <Route path="/products/drone-based-sorties-for-defense-applications" element={<DroneSortieServices />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;