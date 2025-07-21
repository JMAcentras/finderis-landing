
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import DeleteAccount from "./pages/DeleteAccount";
import Terms from "./pages/Terms";
import ChildSafety from "./pages/ChildSafety";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import ContentModeration from "./pages/ContentModeration";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/child-safety" element={<ChildSafety />} />
            <Route path="/community-guidelines" element={<CommunityGuidelines />} />
            <Route path="/content-moderation" element={<ContentModeration />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
