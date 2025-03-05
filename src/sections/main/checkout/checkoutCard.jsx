import { Box } from "@mui/material";
import CartTittle from "../home/component/cart/cartTittle";
import { useContext } from "react";
import { CartContext } from "../../../provider/cartProvider";
import NoCartItem from "../home/component/cart/noCartItem";
import CheckoutPlaceOrder from "./checkoutPlaceOrder";
import CartItem from "../home/component/cart/cartItems";

const CheckoutCard = ({ onClickPlaceOrder, loading }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "400px" },
        position: "sticky",
        top: `40px`,
        height: { xs: "100%", md: `100vh` },
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "40px 10px",
          transition: "height 0.3s ease-in-out",
          height: "calc(100% - 120px)",
          p: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          bgcolor: "white",
          borderRadius: "10px",
          boxSizing: "border-box",
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
              <CartItem cartItems={cartItems} isCheckout={true} />
            </Box>
            <Box flexGrow={1} />
            <CheckoutPlaceOrder
              onClickPlaceOrder={onClickPlaceOrder}
              loading={loading}
            />
          </Box>
        ) : (
          <NoCartItem />
        )}
      </Box>
    </Box>
  );
};
export default CheckoutCard;
