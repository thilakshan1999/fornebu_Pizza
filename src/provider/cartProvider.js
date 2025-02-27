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
    console.log(cartItems);
  }, [cartItems]);

  const generateUniqueId = () => {
    return `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  const addToCart = (cartItem) => {
    // Check if the product is already in the cart
    const existingCartItem = cartItems.find(
      (item) => item.productId === cartItem.productId
    );
    if (existingCartItem) {
      // Compare relevant fields (note, select, extras, extraDressings, deselectIngredients, addDrinks)
      const isSame =
        existingCartItem.note === cartItem.note &&
        JSON.stringify(existingCartItem.select) ===
          JSON.stringify(cartItem.select) &&
        JSON.stringify(existingCartItem.extras) ===
          JSON.stringify(cartItem.extras) &&
        JSON.stringify(existingCartItem.extraDressings) ===
          JSON.stringify(cartItem.extraDressings) &&
        JSON.stringify(existingCartItem.deselectIngredients) ===
          JSON.stringify(cartItem.deselectIngredients) &&
        JSON.stringify(existingCartItem.addDrinks) ===
          JSON.stringify(cartItem.addDrinks);

      if (isSame) {
        // If all the fields are the same, just update the quantity of the existing item
        const updatedCartItems = cartItems.map((item) =>
          item.productId === cartItem.productId
            ? { ...item, quantity: item.quantity + cartItem.quantity }
            : item
        );
        setCartItems(updatedCartItems);
      } else {
        // If the fields are different, add it as a new item with a unique ID
        const updatedCartItem = { ...cartItem, id: generateUniqueId() };
        setCartItems((prevItems) => [...prevItems, updatedCartItem]);
      }
    } else {
      // If the productId doesn't exist, add it as a new item with a unique ID
      const updatedCartItem = { ...cartItem, id: generateUniqueId() };
      setCartItems((prevItems) => [...prevItems, updatedCartItem]);
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.productUnitPrize * item.quantity,
      0
    );
  };

  const updateCartItemQuantity = (id, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  //------------------------------------
  const removeFromCart = (id) => {
    console.log("removeFromCart id " + id);
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.foodInfo.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItemQuantity,
        getCartTotal,
        removeFromCart,
        isInCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
