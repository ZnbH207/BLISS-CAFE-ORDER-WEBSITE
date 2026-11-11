import { useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useContext(CartContext);

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <div className="cart-header">
          <p>A LITTLE PAUSE. A LOT OF BLISS.</p>
          <h1>Your Cart</h1>
          <span>Review your delicious choices.</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>You haven't added anything to your cart yet.</p>

            <Link to="/menu" className="cart-btn">
              Explore Our Menu
            </Link>
          </div>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.name}>
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)} each</p>
                  </div>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateQuantity(item.name, item.quantity - 1)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.name, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <p className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.name)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-line">
                <span>Items</span>
                <span>
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </div>

              <div className="summary-line total-line">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>

              <Link to="/menu" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default CartPage;
