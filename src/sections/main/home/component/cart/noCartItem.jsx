import { Box, Typography, useTheme } from "@mui/material";
import noCartItemImg from "../../../../../assets/images/home/no-cart-item.png";
import CustomTypography from "../../../../../components/typography/customTypography";
import { useTranslation } from "react-i18next";

const NoCartItem = () => {
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
        text={t(" Start choosing dishes")}
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
        }}
      />

      <CustomTypography
        color={theme.palette.text.grey}
        text={t(" Add items to your cart and place order here.")}
        sx={{
          fontSize: "14px",
        }}
      />
    </Box>
  );
};

export default NoCartItem;
