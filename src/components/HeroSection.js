import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import TextAnimation from "./TextAnimation";

function HeroSection() {
  return (
    <div className="hero-container" id="My__Home">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <div className="text-content">
        <h3>LET'S BUILD SOMETHING </h3>
        <h1>AMAZING</h1>
        {/* <p>I'M WEB DEVELOPER</p> */}
        <TextAnimation />
        <div className="hero-btns">
          {/* <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button> */}

          <a href="/" className="first-btn">
            <span className="First_button">GET STARTED</span>
          </a>

          {/* <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            CONTACT ME <i className="far fa-address-book" />
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
