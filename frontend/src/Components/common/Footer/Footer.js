import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-bgcolor">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <Link to="/aboutus" className="nav-link text-white">
              <h3>About Us</h3>
            </Link>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 text-center">
            <Link to="/contactus" className="nav-link text-white">
              <h3>Contact Us</h3>
            </Link>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 text-center">
            <Link to="/ourteam" className="nav-link text-white">
              <h3>Our Team</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2023 Verbello. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
