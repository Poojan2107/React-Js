import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />    
        <Route path="/Services" element={<Services/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </>
  );
};

export default App;
