import { Box } from "@mui/material";

import CartTittle from "./cartTittle";
import CartCheckout from "./cartCheckout";
import NoCartItem from "./noCartItem";

const Cart = ({ height }) => {
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
          height: height, //"calc(100% - 120px)",
          p: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          bgcolor: "white",
          borderRadius: "10px",
        }}
      >
        <CartTittle />
        {/* <Box flexGrow={1} />
        <CartCheckout /> */}
        <NoCartItem />
      </Box>
    </Box>
  );
};

export default Cart;
