import Navbar from "./scenes/Navbar";
import Home from "./scenes/Home/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./scenes/AboutUs";
import React from "react";
import NDISServices from "./scenes/NDISServices";
import NDISPricing from "./scenes/NDISPricing";
import OurTeam from "./scenes/OurTeam";





function App() {
  return (
    <main className="App flex flex-col ">
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<AboutUs />} />

        <Route path='/ndis-services' element={<NDISServices />} />

        <Route path='/ndis-pricing' element={<NDISPricing />} />

        <Route path='/our-team' element={<OurTeam />} />
      </Routes>
    
    </main>
  );
}

export default App;
