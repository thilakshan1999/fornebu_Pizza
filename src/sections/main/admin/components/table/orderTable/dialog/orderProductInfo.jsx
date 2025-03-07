import { Box, Divider } from "@mui/material";
import CustomTypography from "../../../../../../../components/typography/customTypography";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import formatName from "../../../../../../../utils/formatCategoryName ";
import {
  formatAddPrice,
  formatPrice,
} from "../../../../../../../utils/formatPrize";
import { BorderTop } from "@mui/icons-material";
import OrderProductDialogItem from "./orderProductDialogItem";

const OrderProductInfo = ({ order }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
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
      {order.products.map((orderProduct, index) => (
        <OrderProductDialogItem key={index} orderProduct={orderProduct} />
      ))}

      {/*sub total*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CustomTypography
          color={theme.palette.text.grey}
          text={t("Sub Total")}
          sx={{
            fontSize: "14px",
          }}
        />

        <CustomTypography
          color={theme.palette.text.black}
          text={formatPrice(order.subTotal)}
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
          }}
        />
      </Box>

      {/*service charge*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CustomTypography
          color={theme.palette.text.grey}
          text={t("Service Charge")}
          sx={{
            fontSize: "14px",
          }}
        />

        <CustomTypography
          color={theme.palette.text.black}
          text={formatPrice(order.serviceCharge)}
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
          }}
        />
      </Box>

      {/*total*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          width: "100%",
        }}
      >
        <CustomTypography
          color={theme.palette.text.black}
          text={t("Total")}
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
          }}
        />

        <CustomTypography
          color={theme.palette.text.green}
          text={formatPrice(order.total)}
          sx={{
            fontSize: "15px",
            fontWeight: "bold",
          }}
        />
      </Box>
    </Box>
  );
};
export default OrderProductInfo;
