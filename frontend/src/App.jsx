import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Admin from "./components/Admin";
import WelcomePage from "./components/WelcomePage";
import ServicesDetail from "./components/ServicesDetail";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/home"
          element={
            <>
              <HeroSection />
              <About />
              <Services />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/services/:serviceName" element={<ServicesDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
