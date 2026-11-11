import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  function handleLogin(e) {
    e.preventDefault();
    alert("Login submitted successfully!");
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Welcome Back!</h1>

        <p className="login-subtitle">Login to your BLISS CAFE account</p>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="back-home">
          Don't have an account?
          <Link to="/contact"> Contact us</Link>
        </p>

        <Link to="/" className="home-link">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
