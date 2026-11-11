import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

import espresso from "../assets/images/espresso.png";
import cappuccino from "../assets/images/cappuccino.png";
import latte from "../assets/images/latte.png";
import americano from "../assets/images/americano.png";
import hotChocolate from "../assets/images/hot chocolate.png";

import strawberrySmoothie from "../assets/images/strawberry smoothie.png";
import mangoSmoothie from "../assets/images/mango smoothie.png";
import oreoMilkshake from "../assets/images/oreo milkshake.png";
import frappe from "../assets/images/frappe.png";
import icedLatte from "../assets/images/iced latte.png";

import cheesecake from "../assets/images/cheesecake.png";
import brownies from "../assets/images/brownies.png";
import croissant from "../assets/images/croissant.png";
import cookies from "../assets/images/cookies.png";
import tiramisu from "../assets/images/tiramisu.png";

function MenuPage() {
  const { addToCart, cartItems } = useContext(CartContext);
  const [message, setMessage] = useState("");

  const products = [
    {
      category: "hot",
      name: "Espresso",
      price: 2.5,
      image: espresso,
    },
    {
      category: "hot",
      name: "Cappuccino",
      price: 4.5,
      image: cappuccino,
    },
    {
      category: "hot",
      name: "Latte",
      price: 4.5,
      image: latte,
    },
    {
      category: "hot",
      name: "Americano",
      price: 3.5,
      image: americano,
    },
    {
      category: "hot",
      name: "Hot Chocolate",
      price: 4.5,
      image: hotChocolate,
    },
    {
      category: "cold",
      name: "Strawberry Smoothie",
      price: 5.5,
      image: strawberrySmoothie,
    },
    {
      category: "cold",
      name: "Mango Smoothie",
      price: 5.5,
      image: mangoSmoothie,
    },
    {
      category: "cold",
      name: "Oreo Milkshake",
      price: 6,
      image: oreoMilkshake,
    },
    {
      category: "cold",
      name: "Caramel Frappe",
      price: 4.5,
      image: frappe,
    },
    {
      category: "cold",
      name: "Iced Latte",
      price: 4.5,
      image: icedLatte,
    },
    {
      category: "desserts",
      name: "Cheese Cake",
      price: 6,
      image: cheesecake,
    },
    {
      category: "desserts",
      name: "Brownies",
      price: 4.5,
      image: brownies,
    },
    {
      category: "desserts",
      name: "Croissant",
      price: 3,
      image: croissant,
    },
    {
      category: "desserts",
      name: "Cookies",
      price: 2.5,
      image: cookies,
    },
    {
      category: "desserts",
      name: "Tiramisu",
      price: 5.5,
      image: tiramisu,
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage(`${product.name} added to your cart!`);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const renderProducts = (category) => {
    return products
      .filter((product) => product.category === category)
      .map((product) => (
        <div className="menu-card" key={product.name}>
          <img src={product.image} alt={product.name} />

          <h3>{product.name}</h3>

          <p>${product.price.toFixed(2)}</p>

          <button className="menu-btn" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ));
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar />

      <div className="menu-page" id="top">
        <div className="menu-title">
          <p>A LITTLE PAUSE. A LOT OF BLISS.</p>
          <h1>Our Menu</h1>
          <span>Discover something delicious.</span>
        </div>

        <div className="menu-navigation">
          <a href="#hot">Hot Drinks</a>
          <a href="#cold">Cold Drinks</a>
          <a href="#desserts">Desserts</a>

          <Link to="/cart" className="menu-cart-link">
            View Cart ({cartCount})
          </Link>
        </div>

        {message && <div className="menu-message">✓ {message}</div>}

        <section className="menu-section" id="hot">
          <h2>Hot Drinks</h2>
          <div className="menu-grid">{renderProducts("hot")}</div>
        </section>

        <section className="menu-section" id="cold">
          <h2>Cold Drinks</h2>
          <div className="menu-grid">{renderProducts("cold")}</div>
        </section>

        <section className="menu-section" id="desserts">
          <h2>Desserts</h2>
          <div className="menu-grid">{renderProducts("desserts")}</div>
        </section>

        <div className="menu-bottom">
          <Link to="/cart" className="menu-btn">
            Go to Cart
          </Link>

          <a href="#top" className="menu-top-link">
            Back to Top ↑
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MenuPage;
