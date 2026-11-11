import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/images/home.png";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-text">
          <p className="small-title">A LITTLE PAUSE. A LOT OF BLISS.</p>

          <h1>
            Welcome to
            <br />
            BLISS CAFE !
          </h1>

          <p className="hero-description">
            Where Every Cup Brings a Little BLISS
          </p>

          <Link to="/menu" className="main-button">
            EXPLORE OUR MENU →
          </Link>

          <p className="hero-note">
            Fresh coffee. Delicious moments. Every day.
          </p>

          <p className="hero-small-note">MADE WITH LOVE AT BLISS CAFE</p>
        </div>

        <div className="hero-image">
          <img src={home} alt="A cup of freshly brewed coffee" />

          <div className="image-circle">
            A Moment
            <br />
            of Bliss
          </div>
        </div>
      </section>

      <section className="banner">
        <span>FRESHLY BREWED</span>
        <span>✦</span>
        <span>MADE WITH LOVE</span>
        <span>✦</span>
        <span>ALWAYS DELICIOUS</span>
      </section>

      <section className="favorites">
        <p className="small-title">OUR SPECIAL SELECTION</p>

        <h2>Our Customer Favorites</h2>

        <div className="products">
          <div className="product-card">
            <img src={card1} alt="Classic Cappuccino" />

            <h3>Classic Cappuccino</h3>
            <p>Smooth espresso topped with creamy, perfectly steamed milk.</p>

            <Link to="/menu">DISCOVER MORE →</Link>
          </div>

          <div className="product-card">
            <img src={card2} alt="Freshly Baked Croissant" />

            <h3>Freshly Baked</h3>
            <p>
              Delicious pastries prepared fresh for your perfect coffee break.
            </p>

            <Link to="/menu">DISCOVER MORE →</Link>
          </div>

          <div className="product-card">
            <img src={card3} alt="Iced Coffee" />

            <h3>Iced Coffee</h3>
            <p>Refreshing coffee with a smooth taste for every moment.</p>

            <Link to="/menu">DISCOVER MORE →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
