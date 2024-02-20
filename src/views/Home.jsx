import React from "react";
import LandingDisplay from "../components/LandingDisplay";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="bg-[#0A1828]">
      <Navbar />
      <LandingDisplay />
      <About />
      <Skills />
    </div>
  );
}

export default Home;
