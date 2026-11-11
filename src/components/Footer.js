import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>BLISS</h1>
          <span>CAFE</span>
          <p>Small joys. Served daily.</p>
        </div>

        <div className="footer-links">
          <h4>EXPLORE</h4>
          <div>
            <Link to="/menu">Our menu</Link>
            <Link to="/cart">View Cart</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
          </div>
        </div>

        <div className="opening-hours">
          <h4>Opening hours</h4>
          <p>Mon - Thu: 9:00am - 11:00 pm</p>
          <p>Fri - Sun: 10:00am - 12:00 am</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 BLISS CAFE. All rights reserved.</p>

        <div>
          <Link to="/privacy">Privacy policy</Link>
          <Link to="/terms">Terms of use</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
