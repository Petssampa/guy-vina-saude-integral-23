
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-guy-vina-medicina-chinesa" element={<About />} />
          <Route path="/servicos-medicina-tradicional-chinesa" element={<Projects />} />
          <Route path="/blog-medicina-chinesa" element={<Blog />} />
          <Route path="/contato-consulta-acupuntura" element={<Contact />} />
          {/* Redirect old URLs */}
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/mainecoon" element={<MaineCoonPost />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
