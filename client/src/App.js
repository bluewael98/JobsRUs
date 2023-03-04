import { useState, useEffect } from "react";
import Navbar from "./scenes/Navbar";
import Home from "./scenes/Home/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./scenes/AboutUs";
import React from "react";
import NDISServices from "./scenes/NDISServices";
import NDISPricing from "./scenes/NDISPricing";
import OurTeam from "./scenes/OurTeam";
import Contact from "./scenes/Contact";
import Referral from "./scenes/Referral";
import Footer from "./scenes/Footer";
import jobsrus from "./assets/jobsrus.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    
    <main className="App flex flex-col w-full ">
      { isLoading ?
      
      <div className={`w-screen h-screen bg-lavender flex justify-center items-center content-center ${isLoading ? 'opacity-100 transition duration-300' : 'opacity-0 '}`}>
      <img src={jobsrus} alt="" className=" max-w-[100px]" />
    </div>
  
      : 
      <>
      <Navbar />
      <Referral />
   
      
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<AboutUs />} />

        <Route path='/ndis-services' element={<NDISServices />} />

        <Route path='/ndis-pricing' element={<NDISPricing />} />

        <Route path='/our-team' element={<OurTeam />} />

        <Route path='/contact' element={<Contact />} />

        
      </Routes>
      <Footer /> 
      </>}

      
    
    </main>
  );
}

export default App;
