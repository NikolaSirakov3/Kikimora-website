import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-center items-center h-screen w-screen bg-blue-500">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-6xl font-normal">Kikimora</h1>
              </div>
            </div>
          }
        />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/developers" element={<div>Developers Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/docs" element={<div>Documentation Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
