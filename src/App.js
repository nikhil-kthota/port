import React from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import StickyMenu from "./components/StickyMenu";

export default function App() {
  return (
    <>
      <Header />
      <Background>
        <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
          <div id="home">
            <Hero />
          </div>
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Certifications />
          <Footer />
        </div>
        <StickyMenu />
      </Background>
    </>
  );
}
