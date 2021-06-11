import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 800) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            SS <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              {/* <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link> */}
              <a href="#My__Home">
                <span className="nav-links" onClick={closeMobileMenu}>
                  Home
                </span>
              </a>
            </li>
            <li className="nav-item">
              {/* <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link> */}
              <a href="#About__Me">
                <span className="nav-links" onClick={closeMobileMenu}>
                  About
                </span>
              </a>
            </li>
            <li className="nav-item">
              {/* <Link
                to="/skills"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Skills
              </Link> */}
              <a href="#My__Skills">
                <span className="nav-links" onClick={closeMobileMenu}>
                  Skills
                </span>
              </a>
            </li>
            <li className="nav-item">
              {/* <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link> */}
              <a href="#My__Projects">
                <span className="nav-links" onClick={closeMobileMenu}>
                  Projects
                </span>
              </a>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && ( */}
          {/* <Button buttonStyle="btn--outline"> */}

          <a href="#My__Footer">
            <span className="nav-links__button">CONTACT</span>
          </a>
          {/* </Button> */}
          {/* )} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
