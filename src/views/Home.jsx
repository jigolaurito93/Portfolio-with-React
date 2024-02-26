import React from "react";
import LandingDisplay from "../components/LandingDisplay";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-[#0A1828]">
      {/* <Navbar /> */}
      <LandingDisplay />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
