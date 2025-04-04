import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { Developers } from "@/components/home/Developers";
import { Clients } from "@/components/home/Clients";
import { SecurityEfficiency } from "@/components/home/SecurityEfficiency";
import { Pricing } from "@/components/home/Pricing";
import { Newsletter } from "@/components/home/Newsletter";
import { Testimonials } from "@/components/home/Testimonials";
import { RequestDemo } from "@/components/home/RequestDemo";
import { Blog } from "@/components/home/Blog";
import { GetInTouch } from "@/components/home/GetInTouch";
import { About } from "@/pages/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Benefits />
                  <Developers />
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
            <Route path="/developers" element={<div>Developers Page</div>} />
            <Route path="/blog" element={<div>Blog Page</div>} />
            <Route path="/docs" element={<div>Documentation Page</div>} />
            <Route path="/privacy" element={<div>Privacy Policy Page</div>} />
            <Route path="/terms" element={<div>Terms & Conditions Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
