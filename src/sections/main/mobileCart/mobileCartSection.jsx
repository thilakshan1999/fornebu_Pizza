import { Box } from "@mui/material";

import { useContext, useState } from "react";
import { CartContext } from "../../../provider/cartProvider";
import CartItems from "../home/component/cart/cartItems";
import NoCartItem from "../home/component/cart/noCartItem";
import CartCheckout from "../home/component/cart/cartCheckout";
import CartTittle from "../home/component/cart/cartTittle";
import BottomNavBar from "../../bottomNavigation/bottomNavBar";
import CategoryDrawer from "../home/component/categoryDrawer";

const MobileCartSection = () => {
  const [open, setOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  return (
    <Box
      sx={{
        height: "100vh", // Full screen height
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "20px 10px 100px 10px",
          p: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          height: "100%",
          bgcolor: "white",
          borderRadius: "10px",
          overflow: "hidden",
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
      <BottomNavBar id="bottomNav" setOpen={setOpen} />
      <CategoryDrawer open={open} setOpen={setOpen} />
    </Box>
  );
};
export default MobileCartSection;
