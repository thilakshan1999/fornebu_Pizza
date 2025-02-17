import React, { useEffect, useState } from "react";
import { Box, Drawer } from "@mui/material";
import ProductAddAndQuantity from "./drawerComponent/productAddAndQuantity";
import ProductDrawerTittle from "./drawerComponent/productDrawerTittle";
import ProductDrawerBody from "./drawerComponent/productDrawerBody";

const ProductDrawer = ({ open, onClose, product, id }) => {
  const [quantity, setQuantity] = useState(1);
  const [prize, setPrize] = useState(product.amount);
  const [cartItem, setCartItem] = useState({
    id: 0,
    productId: product.id,
    productName: product.name,
    productBasePrize: product.amount,
    productUnitPrize: prize,
    quantity: quantity,
    note: "",
    select: [],
    deselectIngredients: [],
    extras: [],
    extraDressings: [],
    addDrinks: [],
  });

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  useEffect(() => {
    if (open) {
      setPrize(product.amount);
      setQuantity(1);
    }
  }, [open, product.amount]);

  useEffect(() => {
    setCartItem((prev) => ({
      ...prev,
      quantity: quantity,
      productUnitPrize: prize,
    }));
  }, [quantity, prize]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        onClose();
      }}
      sx={{
        "& .MuiDrawer-paper": {
          width: { xs: "100%", md: "550px" },
        },
      }}
    >
      <Box>
        {/* Tittle Box */}
        <ProductDrawerTittle id={id} name={product.name} onClose={onClose} />

        <ProductDrawerBody
          product={product}
          prize={prize}
          setPrize={setPrize}
          setCartItem={setCartItem}
        />

        {/* Add & Quantity */}
        <ProductAddAndQuantity
          handleQuantityChange={handleQuantityChange}
          quantity={quantity}
          prize={prize}
          cartItem={cartItem}
          onClose={onClose}
        />
      </Box>
    </Drawer>
  );
};

export default ProductDrawer;
