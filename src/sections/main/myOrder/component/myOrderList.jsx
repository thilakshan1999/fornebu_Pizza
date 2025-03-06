import { Box, Grid } from "@mui/material";
import NoOrders from "./noOrders";
import OrderCard from "./orderCard";
import OrderCardSkeleton from "../../../../components/skelton/orderCardSkelton";
const MyOrderList = ({ orders, loading }) => {
  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
      {loading ? (
        <Grid container spacing={2}>
          {[...Array(4)].map((_, index) => (
            <Grid item xs={12} md={6} key={index}>
              <OrderCardSkeleton />
            </Grid>
          ))}
        </Grid>
      ) : orders.length === 0 ? (
        <NoOrders />
      ) : (
        <Grid container spacing={2}>
          {orders.map((order, index) => (
            <Grid item xs={12} md={6} key={index}>
              <OrderCard order={order} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
export default MyOrderList;
