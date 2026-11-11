import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Bliss Cafe Logo" className="navbar-logo" />
          <span>BLISS CAFE</span>
        </Link>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/menu" onClick={() => setMenuOpen(false)}>
          Menu
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>
          Cart
        </Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
