import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Main pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Updates = lazy(() => import("./pages/Updates"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Telemetry Systems
const GroundTelemetryTrackingSystems = lazy(() => import("./pages/products/GroundTelemetryTrackingSystems"));
const SingleChannelGroundTelemetryCheckoutSystem = lazy(() => import("./pages/products/SingleChannelGroundTelemetryCheckoutSystem"));
const TelemetryDataMonitoringSystems = lazy(() => import("./pages/products/TelemetryDataMonitoringSystems"));
const DroneBasedTelemetryReceivingStation = lazy(() => import("./pages/products/DroneBasedTelemetryReceivingStation"));
const AirborneTelemetrySystems = lazy(() => import("./pages/products/AirborneTelemetrySystems"));
const DualChannelTelemetrySystem = lazy(() => import("./pages/products/DualChannelTelemetrySystem"));

// Data Link Systems
const UHFDataLinkSystem = lazy(() => import("./pages/products/UHFDataLinkSystem"));
const LBandDataLinkSystem = lazy(() => import("./pages/products/LBandDataLinkSystem"));
const SBandDataLinkSystem = lazy(() => import("./pages/products/SBandDataLinkSystem"));
const SingleChannelDecommutatorSystem = lazy(() => import("./pages/products/SingleChannelDecommutatorSystem"));

// Integrated Subsystems
const CustomTestJigs = lazy(() => import("./pages/products/CustomTestJigs"));
const GroundLoopbackSystems = lazy(() => import("./pages/products/GroundLoopbackSystems"));
const RFPowerAmplifiers = lazy(() => import("./pages/products/RFPowerAmplifiers"));

// Industrial Grade Systems
const IndustrialIPCs = lazy(() => import("./pages/products/IndustrialIPCs"));
const IndustrialPanelPCs = lazy(() => import("./pages/products/IndustrialPanelPCs"));
const NetworkAdaptersSwitches = lazy(() => import("./pages/products/NetworkAdaptersSwitches"));
const AutomationCardsModules = lazy(() => import("./pages/products/AutomationCardsModules"));

// Components & RF Accessories
const MILGradeRFConnectors = lazy(() => import("./pages/products/MILGradeRFConnectors"));
const MILGradeCircularConnectors = lazy(() => import("./pages/products/MILGradeCircularConnectors"));
const DCDCConverters = lazy(() => import("./pages/products/DCDCConverters"));
const TelemetryAntennas = lazy(() => import("./pages/products/TelemetryAntennas"));
const LowNoiseAmplifiers = lazy(() => import("./pages/products/LowNoiseAmplifiers"));
const CustomRFCableAssemblies = lazy(() => import("./pages/products/CustomRFCableAssemblies"));

// Services
const CustomDefenseSoftware = lazy(() => import("./pages/products/CustomDefenseSoftware"));
const DroneSortieServices = lazy(() => import("./pages/products/DroneSortieServices"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/updates" element={<Updates />} />

            {/* Telemetry Systems */}
            <Route path="/products/ground-telemetry-tracking-systems" element={<GroundTelemetryTrackingSystems />} />
            <Route path="/products/single-channel-ground-telemetry-checkout-systems" element={<SingleChannelGroundTelemetryCheckoutSystem />} />
            <Route path="/products/telemetry-data-monitoring-systems" element={<TelemetryDataMonitoringSystems />} />
            <Route path="/products/drone-based-telemetry-receiving-station" element={<DroneBasedTelemetryReceivingStation />} />
            <Route path="/products/airborne-telemetry-systems" element={<AirborneTelemetrySystems />} />
            <Route path="/products/dual-channel-telemetry-system" element={<DualChannelTelemetrySystem />} />

            {/* Data Link Systems */}
            <Route path="/products/uhf-data-link-systems" element={<UHFDataLinkSystem />} />
            <Route path="/products/l-band-data-link-systems" element={<LBandDataLinkSystem />} />
            <Route path="/products/s-band-data-link-systems" element={<SBandDataLinkSystem />} />
            <Route path="/products/single-channel-decommutator-system" element={<SingleChannelDecommutatorSystem />} />

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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
