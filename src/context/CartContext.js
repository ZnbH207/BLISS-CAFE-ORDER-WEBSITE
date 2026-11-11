import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (cartItem) => cartItem.name === item.name,
      );

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.name !== itemName),
    );
  };

  const updateQuantity = (itemName, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemName);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.name === itemName ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
