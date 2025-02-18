import { Box } from "@mui/material";

import CartTittle from "./cartTittle";
import CartCheckout from "./cartCheckout";
import NoCartItem from "./noCartItem";
import { useContext } from "react";
import CartItems from "./cartItems";
import { CartContext } from "../../../../../provider/cartProvider";

const Cart = ({ height }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <Box
      sx={{
        width: "400px",
        position: "sticky",
        top: `40px`,
        height: `100vh`,
        overflowY: "auto",
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "40px 10px",
          transition: "height 0.3s ease-in-out",
          height: height,
          p: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          bgcolor: "white",
          borderRadius: "10px",
        }}
      >
        <CartTittle />
        {cartItems.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              overflowY: "hidden",
            }}
          >
            <Box
              sx={{
                overflowY: "auto",
                paddingRight: "5px",
                marginBlock: "10px",
              }}
            >
              <CartItems cartItems={cartItems} />
            </Box>
            <Box flexGrow={1} />
            <CartCheckout />
          </Box>
        ) : (
          <NoCartItem />
        )}
      </Box>
    </Box>
  );
};

export default Cart;
