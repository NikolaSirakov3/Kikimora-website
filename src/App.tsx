import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewNavbar from "@/components/NewNavbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { Developers } from "@/pages/Developers";
import { DevelopersCaseStudy } from "@/components/home/DevelopersCaseStudy";
import { Clients } from "@/components/home/Clients";
import { SecurityEfficiency } from "@/components/home/SecurityEfficiency";
import { Pricing } from "@/components/home/Pricing";
import { Newsletter } from "@/components/home/Newsletter";
import { Testimonials } from "@/components/home/Testimonials";
import { RequestDemo } from "@/components/home/RequestDemo";
import { Blog } from "@/pages/Blog";
import { BlogPost } from "@/pages/BlogPost";
import { GetInTouch } from "@/components/home/GetInTouch";
import { About } from "@/pages/About";
import { ImageSwitcher } from "@/components/home/ImageSwitcher";
import { MSSP } from "@/pages/MSSP";
import { TryKikimora } from "@/pages/TryKikimora";
import { AnimatedIntro } from "@/components/home/AnimatedIntro";
import ManagedSecurity from "@/pages/managed-security";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NewNavbar />
        <main className="flex-grow overflow-x-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AnimatedIntro />
                  <ImageSwitcher />
                  <Benefits />
                  <DevelopersCaseStudy />
                  <Clients />
                  <SecurityEfficiency />
                  <Pricing />
                  <Testimonials />
                  <RequestDemo />
                  <Blog />
                  <GetInTouch />
                  <Newsletter />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/docs" element={<div>Documentation Page</div>} />
            <Route path="/privacy" element={<div>Privacy Policy Page</div>} />
            <Route path="/terms" element={<div>Terms & Conditions Page</div>} />
            <Route path="/mssp" element={<MSSP />} />
            <Route path="/trykikimora" element={<TryKikimora />} />
            <Route path="/managed-security" element={<ManagedSecurity />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
