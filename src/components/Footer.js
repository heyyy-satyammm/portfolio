import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container" id="My__Footer">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">GET IN TOUCH</p>
        {/* <p className="footer-subscription-text">
          Connect with me by any medium and I will surely get you back
        </p> */}
        <div className="contact-sections">
          <div className="input-areas">
            <form action="">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="footer-input"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="footer-input"
                cols="30"
                rows="5"
              />
              <Button buttonStyle="btn--outline" type="reset">
                Submit
              </Button>
            </form>
          </div>
          {/* <div className="contact-details">
            <div className="Details-field">
              <p className="contact-details-heading">Mail ID :</p>
              <p className="contact-details-value">
                satyamyashsatyamyash@gmail.com
              </p>
            </div>
            <div className="Details-field">
              <p className="contact-details-heading">Phone No. :</p>
              <p className="contact-details-value">+91 8527753496</p>
            </div>
            <div className="Details-field">
              <p className="contact-details-heading">College Address :</p>
              <div className="contact-details-value">
                <p>Netaji Subhas University</p>
                <p>of Technology,</p>
                <p>Dwarka Sector-3, </p>
                <p>Dwarka,Delhi, 110078</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <a href="/" className="social-logo">
              SS
              <i class="fab fa-typo3" />
            </a>
          </div>
          <div class="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100011243261547"
              target="_blank"
              aria-label="Facebook"
              class="social-icon-link facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com/heyyy_satyammm/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              class="social-icon-link youtube"
              href="#About__Me"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </a>
            <a
              class="social-icon-link github"
              href="https://github.com/heyyy-satyammm"
              target="_blank"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="social-icon-link linkedin"
              href="https://www.linkedin.com/in/satyam-sharma-72737a191/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
          <small class="website-rights">
            Copyright © 2021 All Rights Reserved
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
