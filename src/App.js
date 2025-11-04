import React from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Header />
      <Background>
        <Hero />
      </Background>
    </>
  );
}
