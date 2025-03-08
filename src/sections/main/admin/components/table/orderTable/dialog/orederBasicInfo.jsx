import { Box } from "@mui/material";
import CustomTypography from "../../../../../../../components/typography/customTypography";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import getStatusStyles from "../../../../../../../utils/status";
import formatCamelCase from "../../../../../../../utils/formatCamelCase";
import formatName from "../../../../../../../utils/formatCategoryName ";
import { format } from "date-fns";

const OrderBasicInfo = ({ order }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const status = order.orderStatus;
  const { text } = getStatusStyles(status);

  const estimatedTime = order.estimatedTime;
  const formattedTime = format(estimatedTime, "h:mm a");
  const createdAt = order.createdAt;
  const formattedDate = format(new Date(createdAt), "MMMM dd, yyyy"); // March 04, 2025

  return (
    <Box>
      {/* Order Info */}
      <Box
        sx={{
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          backgroundColor: "#ffffff",
          padding: 2,
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            // border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <CustomTypography
            color={theme.palette.text.grey}
            text={t("Order Status")}
            sx={{
              fontSize: "14px",
            }}
          />

          <CustomTypography
            color={text}
            text={formatCamelCase(status)}
            sx={{
              fontSize: "16px",
              padding: "5px 16px",
              borderRadius: "5px",
              display: "inline-block",
              fontWeight: "bold",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <CustomTypography
            color={theme.palette.text.grey}
            text={
              status === "completed" || status === "cancelled"
                ? t("Order At")
                : t("Order Estimated At")
            }
            sx={{
              fontSize: "14px",
            }}
          />

          <CustomTypography
            color={theme.palette.text.black}
            text={
              status === "completed" || status === "cancelled"
                ? formattedDate
                : formattedTime + " , " + formattedDate
            }
            sx={{
              fontSize: "14px",
              padding: "5px 16px",
              borderRadius: "5px",
              display: "inline-block",
            }}
          />
        </Box>
      </Box>

      {/* Payment */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        {/* Stock */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            padding: 2,
            width: "48%",
          }}
        >
          <CustomTypography
            color={theme.palette.text.grey}
            text={t("Payment Method")}
            sx={{
              fontSize: "14px",
            }}
          />
          <CustomTypography
            color={theme.palette.text.green}
            text={formatName(order.paymentMethod)}
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          />
        </Box>
        <Box sx={{ width: "10px" }} />
        {/* Prize */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            padding: 2,
            width: "48%",
          }}
        >
          <CustomTypography
            color={theme.palette.text.grey}
            text={t("Payment Status")}
            sx={{
              fontSize: "14px",
            }}
          />
          <CustomTypography
            color={
              order.paid ? theme.palette.text.green : theme.palette.text.red
            }
            text={order.paid ? t("Paid") : t("Pending")}
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default OrderBasicInfo;
