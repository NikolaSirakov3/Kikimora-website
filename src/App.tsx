import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Developers } from "@/components/Developers";
import { Clients } from "@/components/Clients";

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
                </>
              }
            />
            <Route path="/about" element={<div>About Page</div>} />
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
