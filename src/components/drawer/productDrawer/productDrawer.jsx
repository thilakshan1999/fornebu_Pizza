import React, { useEffect, useState } from "react";
import { Box, Drawer, useTheme } from "@mui/material";
import ProductAddAndQuantity from "./drawerComponent/productAddAndQuantity";
import ProductDrawerTittle from "./drawerComponent/productDrawerTittle";
import ProductDrawerBody from "./drawerComponent/productDrawerBody";

const ProductDrawer = ({ open, onClose, product, id }) => {
  const [quantity, setQuantity] = useState(1);
  const [prize, setPrize] = useState(product.amount);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  useEffect(() => {
    if (open) {
      setPrize(product.amount); // Reset prize to product.amount when the drawer opens
    }
  }, [open, product.amount]);

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
        />

        {/* Add & Quantity */}
        <ProductAddAndQuantity
          handleQuantityChange={handleQuantityChange}
          quantity={quantity}
          prize={prize}
        />
      </Box>
    </Drawer>
  );
};

export default ProductDrawer;
