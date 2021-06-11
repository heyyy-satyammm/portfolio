import React from "react";
import "./HeroSection.css";
import "./TextAnimation.css";

function TextAnimation() {
  return (
    <div className="wrapper">
      <div className="static-text">I'M </div>
      <ul className="dynamic-text">
        <li>
          <span>ENGINEER</span>
        </li>
        <li>
          <span>WEB DEVELOPER</span>
        </li>
        <li>
          <span>PROGRAMMER</span>
        </li>
        <li>
          <span>WEB DESIGNER</span>
        </li>
      </ul>
    </div>
  );
}

export default TextAnimation;
