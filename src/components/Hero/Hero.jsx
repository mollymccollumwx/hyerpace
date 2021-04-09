import React from "react";
import "./Hero.css";
import Stars from "../../Assets/Videos/Stars.mp4"

// simple hero component for title and video -- landing page
function Hero() {
  return (
    <div className="hero-container">
      <video src={Stars} autoPlay loop muted />
      <h1>HYPERSEARCH</h1>
      <p>The only search engine faster than lightspeed.</p>
      <p><em>Seriously, we'll make your search in less than 12 parsecs.</em></p>
      <div className="hero-btns">
      </div>
    </div>
  );
}

export default Hero;
