import { Box } from "@mui/material";
import CustomTypography from "../../../../../../../components/typography/customTypography";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import formatName from "../../../../../../../utils/formatCategoryName ";

const OrderBillInfo = ({ order }) => {
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
      }}
    >
      <CustomTypography
        color={theme.palette.text.black}
        text={t("Bill Info")}
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
      />
      <CustomTypography
        color={theme.palette.text.grey}
        text={formatName(order.userName)}
        sx={{
          fontSize: "14px",
        }}
      />
      <CustomTypography
        color={theme.palette.text.grey}
        text={order.email}
        sx={{
          fontSize: "14px",
        }}
      />
      <CustomTypography
        color={theme.palette.text.grey}
        text={order.phoneNumber1}
        sx={{
          fontSize: "14px",
        }}
      />
      <CustomTypography
        color={theme.palette.text.grey}
        text={order.phoneNumber2}
        sx={{
          fontSize: "14px",
        }}
      />
    </Box>
  );
};
export default OrderBillInfo;
