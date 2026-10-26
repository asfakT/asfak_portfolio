import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ChatWidget from './components/Chat/ChatWidget';
import SocialRail from './components/ui/SocialRail';
import ScrollButton from './components/ui/ScrollButton';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import BlogPage from './pages/BlogPage';
import LabPage from './pages/LabPage';

// Reset scroll to top on route change (except when a section scroll is requested)
function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (state?.scrollTo) return; // HomePage handles the section scroll
    window.scrollTo(0, 0);
  }, [pathname, state]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black">
        <Navbar />
        <SocialRail />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/lab" element={<LabPage />} />
        </Routes>
        <ScrollButton />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
