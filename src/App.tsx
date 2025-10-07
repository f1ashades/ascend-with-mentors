import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Launch from "./pages/Launch";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import MentorProfile from "./pages/MentorProfile";
import Chat from "./pages/Chat";
import Conversations from "./pages/Conversations";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Launch />} />
          <Route path="/home" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/mentor/:id" element={<MentorProfile />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
