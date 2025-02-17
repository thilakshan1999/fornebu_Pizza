// CartContext.js
import React, { createContext, useState, useEffect } from "react";
import CartItem from "../model/cartItem";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const loadCartFromStorage = () => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cartItems, setCartItems] = useState(loadCartFromStorage);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cartItem) => {
    console.log(cartItem);
    //complete function
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.foodInfo.id !== id)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.foodInfo.id === id);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.foodInfo.price * item.count,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isInCart,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
