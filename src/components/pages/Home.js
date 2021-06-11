import React from "react";
import "../../App.css";
import AboutMe from "../AboutMe";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Skills from "../Skills";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
