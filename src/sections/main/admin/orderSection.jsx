import { Alert, Box, useTheme } from "@mui/material";
import { useState } from "react";
import CustomTypography from "../../../components/typography/customTypography";
import { useTranslation } from "react-i18next";
import OrderTable from "./components/table/orderTable/orderTable";

const OrderSection = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
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
          />
        </Box>
      )}
    </Box>
  );
};
export default OrderSection;
