import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar /> <HomePage /> <Footer />
              </>
            }
          />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route
            path="/privacy"
            element={
              <>
                <Navbar />
                <h1 className="other-page">Privacy Policy</h1>
                <Footer />
              </>
            }
          />

          <Route
            path="/terms"
            element={
              <>
                <Navbar />
                <h1 className="other-page">Terms of Use</h1>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
