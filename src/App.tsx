
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Index />} /> {/* Placeholder - will update with real page */}
          <Route path="/careers" element={<Index />} /> {/* Placeholder - will update with real page */}
          <Route path="/contact" element={<Index />} /> {/* Placeholder - will update with real page */}
          <Route path="/updates/news" element={<Index />} /> {/* Placeholder - will update with real page */}
          <Route path="/updates/references" element={<Index />} /> {/* Placeholder - will update with real page */}
          <Route path="/updates/events" element={<Index />} /> {/* Placeholder - will update with real page */}
          <Route path="/updates/blog" element={<Index />} /> {/* Placeholder - will update with real page */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
