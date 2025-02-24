
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Schedule from "./pages/Schedule";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import OpeningCeremony from "./pages/events/OpeningCeremony";
import TechPolicy from "./pages/events/TechPolicy";
import AIGovernance from "./pages/events/AIGovernance";
import DigitalPolicy from "./pages/events/DigitalPolicy";
import Certificate from "./pages/Certificate";
import CertificateSearch from "./pages/CertificateSearch";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/common/LoadingScreen";

// Create a wrapper component for the routes
const RoutesWithTransition = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/opening-ceremony" element={<OpeningCeremony />} />
      <Route path="/events/tech-policy" element={<TechPolicy />} />
      <Route path="/events/ai-governance" element={<AIGovernance />} />
      <Route path="/events/digital-policy" element={<DigitalPolicy />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/certificate/search" element={<CertificateSearch />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RoutesWithTransition />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
