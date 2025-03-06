import { Box, useTheme } from "@mui/material";
import noCartItemImg from "../../../../assets/images/home/no-cart-item.png";
import { useTranslation } from "react-i18next";
import CustomTypography from "../../../../components/typography/customTypography";

const NoOrders = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        marginBlock: "auto",
        height: "80vh",
      }}
    >
      <Box
        component="img"
        src={noCartItemImg}
        alt="No Cart Items"
        sx={{
          width: "200px",
          height: "auto",
          marginBottom: "20px",
        }}
      />
      <CustomTypography
        color={theme.palette.text.black}
        text={t("You haven't placed any orders yet!")}
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
        }}
      />

      <CustomTypography
        color={theme.palette.text.grey}
        text={t(
          "Browse our menu, add your favorite dishes, and place an order to get started!"
        )}
        sx={{
          fontSize: "14px",
        }}
      />
    </Box>
  );
};

export default NoOrders;
