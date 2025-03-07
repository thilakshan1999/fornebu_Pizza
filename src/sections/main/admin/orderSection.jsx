import { Alert, Box, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import CustomTypography from "../../../components/typography/customTypography";
import { useTranslation } from "react-i18next";
import OrderTable from "./components/table/orderTable/orderTable";
import OrderApi from "../../../api/order";

const OrderSection = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("pending");

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const data = await OrderApi.getOrdersByStatus(activeTab);
      console.log("Order data");
      console.log(data);
      if (data) {
        setOrders(data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError(t("Failed to fetch orders. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [activeTab]);
  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto" }}>
      {error ? (
        <Alert severity="error" sx={{ marginBottom: "20px" }}>
          {error}
        </Alert>
      ) : (
        <Box>
          <Box sx={{ display: "flex", marginBottom: "20px" }}>
            <CustomTypography
              text={t("Orders")}
              align="centre"
              sx={{
                fontWeight: "600",
                color: theme.palette.text.black,
                fontSize: "24px",
                flexGrow: "1",
              }}
            />
          </Box>
          <OrderTable
            orders={orders}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            loading={loading}
            setLoading={setLoading}
            fetchOrders={fetchOrders}
          />
        </Box>
      )}
    </Box>
  );
};
export default OrderSection;
