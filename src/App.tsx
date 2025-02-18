
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Registration from "./pages/Registration";
import Schedule from "./pages/Schedule";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Certificate from "./pages/Certificate";
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
    }, 1000); // Show loading for 1 second

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/certificate" element={<Certificate />} />
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
