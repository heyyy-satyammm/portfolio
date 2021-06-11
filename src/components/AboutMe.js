import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-wrap" id="About__Me">
      <div className="about-title">
        <h1 id="abo">ABO</h1>
        <h1 id="ut-me">UT ME</h1>
      </div>
      <div className="about-container">
        <div className="about-left">
          <img
            src="image/about-img-3.jpeg"
            className="about-my-image"
            alt="error"
          />
        </div>
        <div className="about-right">
          <div className="about-name">
            <p className="start-txt">Hi! I'm </p>
            <h2 className="about-myname">SATYAM SHARMA</h2>
          </div>

          <div className="about-content">
            <p className="about-para">
              I'm a Curious Programmer & an enthusiastic developer living in
              ghaziabad & currently pursuing my ICE degree from NSUT, Dwarka,
              New Delhi.
            </p>
            <p className="about-para">
              I'm a Full-Stack Web Developer with my expertise in Redux,
              ReactJs, NodeJs & Firebase & currently learning MySQL and MongoDB
              for expertising in database management.
            </p>
            <p className="about-para">
              I'm a Results driven person & likes to satisfy my clients with my
              work more than excuses. I always try to explore new technologies &
              regularly work on my Problem Solving Skills by polishing my
              knowledge of Data Structures and Algorithms.
            </p>
            <button className="about-btn">MY RESUME</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
