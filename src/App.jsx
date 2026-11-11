
import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Lunch from "./Lunch";
import Seafood from "./Seafood";
import Footer from "./Footer";
import Time from "./Time";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/time" element={<Time/>} />          
          <Route path="/seafood" element={<Seafood />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
