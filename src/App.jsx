import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrekInfo from "./components/TrekInfo";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="content">
        <TrekInfo />
        <Sections />
      </div>
      <Footer id="footer" />
    </div>
  );
}

export default App;
