import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NewNavbar from "@/components/NewNavbar";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { Developers } from "@/pages/Developers";
import { ScrollingClients } from "@/components/home/ScrollingClients";
import { Newsletter } from "@/components/home/Newsletter";
import { Testimonials } from "@/components/home/Testimonials";
import { Blog } from "@/pages/Blog";
import { BlogPost } from "@/pages/BlogPost";
import { GetInTouch } from "@/components/home/GetInTouch";
import { About } from "@/pages/About";
import { ImageSwitcher } from "@/components/home/ImageSwitcher";
import { MSSP } from "@/pages/MSSP";
import TryKikimora from "@/pages/TryKikimora";
import ManagedSecurity from "@/pages/managed-security";
import { PlatformSection } from "./components/home/PlatformSection";
import { SoCyberPodcast } from "@/components/podcast/SoCyberPodcast";
import PricingInfo from "@/pages/pricing-info";
import { Startup } from "@/pages/startup";
import { Healthcare } from "@/pages/healthcare";
import { Fintech } from "@/pages/fintech";
import { SME } from "@/pages/sme";
import { PodcastEpisodePage } from "@/pages/PodcastEpisodePage";
import { Careers } from "@/pages/careers";
import RoleDetails from "@/pages/RoleDetails";
import OTSecurityPage from "@/pages/ot-security";
import ContactPage from "@/pages/contact";
import PressKitPage from "@/pages/press-kit";
import SecurityBundle from "@/pages/security-bundle";

// Add ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <AnnouncementBar onVisibilityChange={setIsAnnouncementVisible} />
        <NewNavbar isAnnouncementVisible={isAnnouncementVisible} />
        <main className="flex-grow overflow-x-hidden mt-[56px]">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ScrollingClients />
                  <ImageSwitcher />
                  <Benefits />
                  <PlatformSection />
                  <Testimonials />
                  <Blog />
                  <SoCyberPodcast />
                  <GetInTouch />
                  <Newsletter />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/podcast/:id" element={<PodcastEpisodePage />} />
            <Route path="/docs" element={<div>Documentation Page</div>} />
            <Route path="/privacy" element={<div>Privacy Policy Page</div>} />
            <Route path="/terms" element={<div>Terms & Conditions Page</div>} />
            <Route path="/mssp" element={<MSSP />} />
            <Route path="/trykikimora" element={<TryKikimora />} />
            <Route path="/managed-security" element={<ManagedSecurity />} />
            <Route path="/pricing-info" element={<PricingInfo />} />
            <Route path="/startup" element={<Startup />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/fintech" element={<Fintech />} />
            <Route path="/sme" element={<SME />} />
            <Route path="/ot-security" element={<OTSecurityPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:role" element={<RoleDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/press-kit" element={<PressKitPage />} />
            <Route path="/security-bundle" element={<SecurityBundle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
