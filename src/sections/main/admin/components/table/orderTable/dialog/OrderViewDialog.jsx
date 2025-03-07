import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Alert,
  Skeleton,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import OrderApi from "../../../../../../../api/order";
import CustomTypography from "../../../../../../../components/typography/customTypography";
import OrderBillInfo from "./orderBillInfo";
import OrderBasicInfo from "./orederBasicInfo";
import OrderProductInfo from "./orderProductInfo";

const OrderViewDialog = ({ open, onClose, orderID }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!open) return;

      setLoading(true);
      try {
        const data = await OrderApi.getOrdersById(orderID);
        console.log("Single Order data");
        console.log(data);
        if (data) {
          setOrder(data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(t("Failed to fetch order. Please try again."));
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "12px",
          padding: "16px 0",
          backgroundColor: "#f8f8f8",
          minWidth: "480px",
          maxHeight: "600px",
        },
      }}
    >
      <DialogTitle>
        {loading ? (
          <Skeleton variant="text" width={150} height={24} />
        ) : order ? (
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Order ") + "# " + String(order.id).padStart(6, "0")}
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          />
        ) : (
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Order Info")}
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          />
        )}
      </DialogTitle>
      <DialogContent>
        <Box>
          {error ? (
            <Alert severity="error">{error}</Alert>
          ) : loading ? (
            <Box>
              <Skeleton
                variant="rounded"
                width="100%"
                height={80}
                sx={{ mb: 2 }}
              />
              <Skeleton variant="rounded" width="100%" height={150} />
            </Box>
          ) : (
            <Box>
              <OrderBasicInfo order={order} />
              <OrderProductInfo order={order} />
              <OrderBillInfo order={order} />
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        {loading ? (
          <Skeleton variant="rounded" width={80} height={36} />
        ) : (
          <Button
            onClick={onClose}
            sx={{
              color: theme.palette.text.black,
              border: "1px solid grey",
              textTransform: "none",
              marginRight: "10px",
              "&:hover": {
                border: "1px solid black",
              },
            }}
          >
            {t("Cancel")}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default OrderViewDialog;
