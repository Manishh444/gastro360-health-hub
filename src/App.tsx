import InformationPage from "./pages/InformationPage";
import { centres } from "./data/clinic";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Routes>
          <Route path="/" element={<Index />} />
          {centres.map(centre => <Route key={centre.id} path={centre.href} element={<InformationPage centreId={centre.id}/>} />)}
          <Route path="/diagnostics/" element={<InformationPage diagnostics/>}/>
          <Route path="/conditions/" element={<InformationPage/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
