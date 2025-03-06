import { Box, Card, SvgIcon, useTheme } from "@mui/material";
import CustomTypography from "../../../../components/typography/customTypography";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { formatPrice } from "../../../../utils/formatPrize";
import formatName from "../../../../utils/formatCategoryName ";
import { CreditCard, AccountBalance } from "@mui/icons-material";
import MoneyOutlinedIcon from "@mui/icons-material/MoneyOutlined";

const OrderCard = ({ order }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const estimatedTime = order.estimatedTime;
  const formattedTime = format(estimatedTime, "h:mm a");
  const createdAt = order.createdAt;
  const formattedDate = format(new Date(createdAt), "MMMM dd, yyyy"); // March 04, 2025

  const status = order.orderStatus;
  const { background, text } = getStatusStyles(status);

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        bgcolor: "white",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      // onClick={() => {
      //   if (product.stock > 0) setIsDrawerOpen(true);
      // }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        {/* Tittle */}
        <Box
          sx={{
            // border: "1px solid black",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* Id */}
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Order ") + "# " + String(order.id).padStart(6, "0")}
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
            }}
          />

          {/* Status */}
          <CustomTypography
            color={text}
            text={formatName(status)}
            sx={{
              fontSize: "14px",
              backgroundColor: background,
              padding: "5px 16px",
              borderRadius: "5px",
              display: "inline-block",
            }}
          />
        </Box>

        {/* Body */}
        <Box sx={{ marginBlock: "10px" }}>
          {/* Order  at */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <CustomTypography
              color={theme.palette.text.grey}
              text={t("Order On")}
              sx={{
                fontSize: "12px",
              }}
            />
            <CustomTypography
              color={theme.palette.text.black}
              text={formattedDate}
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                marginLeft: "5px",
              }}
            />
          </Box>

          {/* Estimate time */}
          {(order.orderStatus !== "completed" ||
            order.orderStatus !== "cancelled") && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <CustomTypography
                color={theme.palette.text.grey}
                text={t("Pickup At")}
                sx={{
                  fontSize: "12px",
                }}
              />
              <CustomTypography
                color={theme.palette.text.black}
                text={formattedTime}
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginLeft: "5px",
                }}
              />
            </Box>
          )}

          {/* Product Count */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <CustomTypography
              color={theme.palette.text.grey}
              text={t("Item Count")}
              sx={{
                fontSize: "12px",
              }}
            />
            <CustomTypography
              color={theme.palette.text.black}
              text={order.itemCount}
              sx={{
                fontSize: "13px",
                fontWeight: "bold",
                marginLeft: "5px",
              }}
            />
          </Box>
        </Box>

        {/* Tail */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          {/* Payment method & payment status */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {order.paymentMethod === "cash" && (
              <PaymentMethodItem icon={<MoneyOutlinedIcon />} order={order} />
            )}
            {order.paymentMethod === "bank" && (
              <PaymentMethodItem icon={<AccountBalance />} order={order} />
            )}
            {order.paymentMethod === "card" && (
              <PaymentMethodItem icon={<CreditCard />} order={order} />
            )}
            <CustomTypography
              color={theme.palette.text.black}
              text={"|"}
              sx={{
                fontSize: "16px",
                marginInline: "10px",
              }}
            />
            <CustomTypography
              color={order.paid ? "#4CAF50" : "#F44336"}
              text={order.paid ? "Paid" : "Not Paid"}
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
          </Box>

          {/* Total Prize */}
          <CustomTypography
            color={theme.palette.text.green}
            text={formatPrice(order.total)}
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              marginTop: "5px",
            }}
          />
        </Box>
      </Box>
    </Card>
  );
};
const PaymentMethodItem = ({ icon, order }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginBlock: "5px",
      }}
    >
      <SvgIcon
        sx={{
          marginRight: "5px",
          fontSize: "px",
          color: theme.palette.text.grey,
        }}
      >
        {icon}
      </SvgIcon>
      <CustomTypography
        color={theme.palette.text.grey}
        text={order.paymentMethod}
        sx={{
          fontSize: "14px",
        }}
      />
    </Box>
  );
};

const getStatusStyles = (status) => {
  let background, text;
  const cleanedStatus = status.trim();

  switch (cleanedStatus) {
    case "pending":
      background = "#FFD3B6"; // Light orange
      text = "#FF8C00"; // Dark orange
      break;
    case "confirmed":
      background = "#C3E6CB"; // Light green
      text = "#155724"; // Dark green
      break;
    case "inProgress":
      background = "#FFD966"; // Light yellow
      text = "#856404"; // Dark yellow
      break;
    case "readyForPickup":
      background = "#B8DAFF"; // Light blue
      text = "#004085"; // Dark blue
      break;
    case "completed":
      background = "#D4EDDA"; // Light green (similar to confirmed)
      text = "#155724"; // Dark green (similar to confirmed)
      break;
    case "cancelled":
      background = "#F8D7DA"; // Light red
      text = "#721C24"; // Dark red
      break;
    default:
      background = "#FFFFFF"; // Default white background
      text = "#000000"; // Default black text
      break;
  }

  return { background, text };
};

export default OrderCard;
