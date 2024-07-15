import React from "react";
import Banner from "../assets/Banner.webp";

export default function Hero() {
  return (
    <div className="hero-section">
      <img src={Banner} alt="Banner image" className="w-full" />
    </div>
  );
}
