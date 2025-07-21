import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/Navigation";
import NetworkBackground from "./components/NetworkBackground";
import SinglePagePortfolio from "./components/SinglePagePortfolio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <NetworkBackground />
      <Navigation />
      <SinglePagePortfolio />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
