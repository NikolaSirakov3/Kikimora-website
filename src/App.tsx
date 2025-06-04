import { useState, useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NewNavbar from "@/components/NewNavbar";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";

// Lazy load components
const Hero = lazy(() => import("@/components/home/Hero"));
const ScrollingClients = lazy(
  () => import("@/components/home/ScrollingClients")
);
const ImageSwitcher = lazy(() => import("@/components/home/ImageSwitcher"));
const Benefits = lazy(() => import("@/components/home/Benefits"));
const PlatformSection = lazy(() => import("@/components/home/PlatformSection"));
const Testimonials = lazy(() => import("@/components/home/Testimonials"));
const Blog = lazy(() => import("@/pages/Blog"));
const SoCyberPodcast = lazy(
  () => import("@/components/podcast/SoCyberPodcast")
);
const GetInTouch = lazy(() => import("@/components/home/GetInTouch"));
const Newsletter = lazy(() => import("@/components/home/Newsletter"));
const Developers = lazy(() => import("@/pages/Developers"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const About = lazy(() => import("@/pages/About"));
const MSSP = lazy(() => import("@/pages/MSSP"));
const TryKikimora = lazy(() => import("@/pages/TryKikimora"));
const ManagedSecurity = lazy(() => import("@/pages/managed-security"));
const PricingInfo = lazy(() => import("@/pages/pricing-info"));
const Startup = lazy(() => import("@/pages/startup"));
const Healthcare = lazy(() => import("@/pages/healthcare"));
const Fintech = lazy(() => import("@/pages/fintech"));
const SME = lazy(() => import("@/pages/sme"));
const PodcastEpisodePage = lazy(() => import("@/pages/PodcastEpisodePage"));
const Careers = lazy(() => import("@/pages/careers"));
const RoleDetails = lazy(() => import("@/pages/RoleDetails"));

// Loading component
const LoadingFallback = () => (
  <div className="w-screen h-screen flex items-center justify-center bg-[#001E38]">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

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
          <Suspense fallback={<LoadingFallback />}>
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
              <Route
                path="/terms"
                element={<div>Terms & Conditions Page</div>}
              />
              <Route path="/mssp" element={<MSSP />} />
              <Route path="/trykikimora" element={<TryKikimora />} />
              <Route path="/managed-security" element={<ManagedSecurity />} />
              <Route path="/pricing-info" element={<PricingInfo />} />
              <Route path="/startup" element={<Startup />} />
              <Route path="/healthcare" element={<Healthcare />} />
              <Route path="/fintech" element={<Fintech />} />
              <Route path="/sme" element={<SME />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:role" element={<RoleDetails />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
