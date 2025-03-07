import { useTheme } from "@emotion/react";
import { Icon, Menu, MenuItem } from "@mui/material";
import { CheckCircle, Cancel, Visibility } from "@mui/icons-material";
import CustomTypography from "../../../../../../components/typography/customTypography";
import { useTranslation } from "react-i18next";
import OrderApi from "../../../../../../api/order";
import showSuccessToast from "../../../../../../components/toast/showSucessToast";
import showFailedToast from "../../../../../../components/toast/showFailedToast";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

const MenuItemComponent = ({ color, icon, text, onClick }) => {
  const { t } = useTranslation();

  return (
    <MenuItem
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
        margin: "0px 8px",
        borderRadius: "8px", // Corner radius
        color: color,
      }}
    >
      <Icon
        size="small"
        sx={{
          marginRight: 2,
          marginBottom: "6px",
        }}
      >
        {icon}
      </Icon>
      <CustomTypography
        text={t(text)}
        align="left"
        sx={{
          fontWeight: "500",
          color: color,
          fontSize: "16px",
        }}
      />
    </MenuItem>
  );
};

const OrderTableItemMenu = ({
  menuAnchorEl,
  setMenuAnchorEl,
  order,
  handleOpenDialog,
  fetchOrders,
  setLoading,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleOrderStatusUpdate = async (orderId, status) => {
    setLoading(true);
    try {
      const result = await OrderApi.updateOrderStatus(orderId, status);
      if (result) {
        console.log("Order status updated successfully:", result);
        showSuccessToast(t("Order status update successfully."));
        fetchOrders();
      } else {
        console.error("Failed to update order status.");
        showFailedToast(t("Failed to update order status."));
        setLoading(false);
      }
    } catch (err) {
      console.error("Error updating order status:", err);
      showFailedToast(t("Failed to update order status."));
      setLoading(false);
    }
  };

  const handleOrderPaymentUpdate = async (orderId) => {
    setLoading(true);
    try {
      const result = await OrderApi.updateOrderPayment(orderId);
      if (result) {
        console.log("Order payment updated successfully:", result);
        showSuccessToast(t("Order payment update successfully."));
        fetchOrders();
      } else {
        console.error("Failed to update order payment.");
        showFailedToast(t("Failed to update order payment."));
        setLoading(false);
      }
    } catch (err) {
      console.error("Error updating order payment:", err);
      showFailedToast(t("Failed to update order payment."));
      setLoading(false);
    }
  };

  const getMenuItems = (status) => {
    switch (status) {
      case "pending":
        return [
          <MenuItemComponent
            key="pending_view"
            icon={<Visibility />}
            text="View"
            onClick={() => {
              handleOpenDialog();
              handleMenuClose();
            }}
          />,
          <MenuItemComponent
            key="pending_confirm"
            color="#4CAF50"
            icon={<CheckCircle />}
            text="Confirm"
            onClick={() => {
              handleOrderStatusUpdate(order.id, "confirmed");
              handleMenuClose();
            }}
          />,
          <MenuItemComponent
            key="pending_cancel"
            color="#F44336"
            icon={<Cancel />}
            text="Cancel"
            onClick={() => {
              handleOrderStatusUpdate(order.id, "cancelled");
              handleMenuClose();
            }}
          />,
        ];
      case "confirmed":
        return [
          <MenuItemComponent
            key="confirmed_view"
            icon={<Visibility />}
            text="View"
            onClick={() => {
              handleOpenDialog();
              handleMenuClose();
            }}
          />,
          <MenuItemComponent
            key="confirmed_shipped"
            color="#4CAF50"
            icon={<OutdoorGrillOutlinedIcon />}
            text="In Progress"
            onClick={() => {
              handleOrderStatusUpdate(order.id, "inProgress");
              handleMenuClose();
            }}
          />,
        ];
      case "inProgress":
        return [
          <MenuItemComponent
            key="inProgress_view"
            icon={<Visibility />}
            text="View"
            onClick={() => {
              handleOpenDialog();
              handleMenuClose();
            }}
          />,
          <MenuItemComponent
            key="inProgress_readyForPickUp"
            color="#4CAF50" // Green for delivered
            icon={<DinnerDiningOutlinedIcon />}
            text="Ready"
            onClick={() => {
              handleOrderStatusUpdate(order.id, "readyForPickUp");
              handleMenuClose();
            }}
          />,
        ];
      case "readyForPickUp":
        return [
          <MenuItemComponent
            key="readyForPickUp_view"
            icon={<Visibility />}
            text="View"
            onClick={() => {
              handleOpenDialog();
              handleMenuClose();
            }}
          />,
          <MenuItemComponent
            key="readyForPickUp_completed"
            color="#4CAF50"
            icon={<TakeoutDiningOutlinedIcon />}
            text="Completed"
            onClick={() => {
              handleOrderStatusUpdate(order.id, "completed");
              handleMenuClose();
            }}
          />,
        ];
      case "completed":
        const menuItems = [
          <MenuItemComponent
            key="completed_view"
            icon={<Visibility />}
            text="View"
            onClick={() => {
              handleOpenDialog();
              handleMenuClose();
            }}
          />,
        ];
        if (order.paid === false) {
          menuItems.push(
            <MenuItemComponent
              key="completed_pay"
              icon={<PaidOutlinedIcon />}
              color="#4CAF50"
              text="Paid"
              onClick={() => {
                handleOrderPaymentUpdate(order.id);
                handleMenuClose();
              }}
            />
          );
        }
        return menuItems;
      case "cancelled":
        return [
          <MenuItemComponent
            key="cancelled_view"
            icon={<Visibility />}
            text="View"
            onClick={() => {
              handleOpenDialog();
              handleMenuClose();
            }}
          />,
        ];
      default:
        return null;
    }
  };

  return (
    <Menu
      key={order.orderStatus}
      anchorEl={menuAnchorEl}
      open={Boolean(menuAnchorEl)}
      onClose={handleMenuClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        "& .MuiPaper-root": {
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          border: `1px solid ${theme.palette.grey[300]}`,
        },
      }}
    >
      {getMenuItems(order.orderStatus)}
    </Menu>
  );
};
export default OrderTableItemMenu;
