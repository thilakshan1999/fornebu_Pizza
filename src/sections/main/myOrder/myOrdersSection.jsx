import { Box } from "@mui/material";
import MenuBar from "../home/component/menu/menuBar";
import { useEffect, useState } from "react";
import OrderApi from "../../../api/order";
import { useAuth } from "../../../provider/AuthProvider";
import BottomNavBar from "../../bottomNavigation/bottomNavBar";
import MyOrderList from "./component/myOrderList";

const MyOrderSection = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const data = await OrderApi.getOrdersByUserId(user?.uid);
        console.log("Order data");
        console.log(data);
        if (data) {
          setOrders(data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);
  return (
    <>
      <MenuBar isFixed={isFixed} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <MyOrderList orders={orders} loading={loading} />
      </Box>
      <BottomNavBar id="bottomNav" setOpen={false} />
    </>
  );
};
export default MyOrderSection;
