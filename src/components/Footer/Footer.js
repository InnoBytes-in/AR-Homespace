import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="contact" id="contact">
      <div className="main-content">
        <div class="contact-content">
          <Link to="/"> Home </Link>
          <Link
            to="/about"
          >
            About
          </Link>
          <Link to="/"> FAQ </Link>
          <Link to="/"> Services </Link>
        </div>

        <div className="contact-content">
          <Link to="/"> Shipping & Returns </Link>
          <Link to="/"> Store Policy </Link>
          <Link to="/"> Payment Method </Link>
        </div>

        <div className="contact-content">
          <Link to="/feedback"> Feedback </Link>
          <Link to="mailto:atharvadoifode@gmail.com" target="_blank">
            Contact
          </Link>
          <Link to="/"> Tel: 123-456-7890 </Link>
        </div>

        <div className="contact-content">
          <Link
            to="https://github.com/avdoifode09/AR-Homespace"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            to="https://www.linkedin.com/in/atharva-doifode-9419b7206/"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link to="https://twitter.com/av_doifode" target="_blank">
            Twitter
          </Link>
        </div>
      </div>

      <div class="action">
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <input type="submit" name="submit" value="Submit" required></input>
        
        </form>
      </div>
      <div class="last">
        <p>@ 2024 AR-homespace | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
