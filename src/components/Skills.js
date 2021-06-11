import React from "react";
import Gitinfo from "./gitinfo";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-section" id="My__Skills">
      <div className="skills-heading">
        <h1>MY FINEST SKILLS</h1>
      </div>
      <div className="skills-container">
        <ul className="honeycomb">
          <li className="honeycomb-cell">
            <img
              src="image/skills-img-1.png"
              alt="error"
              className="honeycomb-cell-img"
            />
            <div className="honeycomb-cell-title">C/C++</div>
          </li>

          <li className="honeycomb-cell">
            <img
              src="image/skills-img-2b.png"
              alt="error"
              className="honeycomb-cell-img"
            />
            <div className="honeycomb-cell-title">HTML CSS JS</div>
          </li>

          <li className="honeycomb-cell">
            <img
              src="image/skills-img-3b.png"
              alt="error"
              className="honeycomb-cell-img"
            />
            <div className="honeycomb-cell-title">DS Algorithms</div>
          </li>

          <li className="honeycomb-cell">
            <img
              src="image/skills-img-4.jpg"
              alt="error"
              className="honeycomb-cell-img"
            />
            <div className="honeycomb-cell-title">ReactJs</div>
          </li>

          <li className="honeycomb-cell">
            <img
              src="image/skills-img-5b.jpg"
              alt="error"
              className="honeycomb-cell-img"
            />
            <div className="honeycomb-cell-title">Firebase</div>
          </li>

          <li className="honeycomb-cell">
            <img
              src="image/skills-img-6.png"
              alt="error"
              className="honeycomb-cell-img"
            />
            <div className="honeycomb-cell-title">NodeJs</div>
          </li>

          <li className="honeycomb-cell">
            <img
              src="image/skills-img-7b.png"
              alt="error"
              className="honeycomb-cell-img"
            />
            <div className="honeycomb-cell-title">MySQL</div>
          </li>

          <li className="honeycomb-cell honeycomb-hidden"></li>
        </ul>
      </div>
      <div className="skills-footer">
        <p className="git-heading">MY GITHUB PROFILE</p>
        <Gitinfo />
      </div>
    </div>
  );
}

export default Skills;
