import { Box, useTheme } from "@mui/material";
import CustomTypography from "../../../../../components/typography/customTypography";
import { useTranslation } from "react-i18next";
import { formatPrice } from "../../../../../utils/formatPrize";
import PrimaryBtn from "../../../../../components/button/primartButton";

const CartCheckout = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box>
      <Box
        sx={{
          padding: "15px",
          border: "1px solid ",
          borderColor: theme.palette.border.main,
          backgroundColor: theme.palette.primary.light,
          borderRadius: "10px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Total")}
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              marginRight: "5px",
            }}
          />
          <CustomTypography
            color={theme.palette.text.grey}
            text={"(" + t("Incl. tax") + ")"}
            sx={{
              fontSize: "16px",
              flexGrow: 1,
            }}
          />
          <CustomTypography
            color={theme.palette.text.green}
            text={formatPrice(10)}
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
            }}
          />
        </Box>
        <PrimaryBtn
          text={"Checkout"}
          sx={{ fontWeight: "bold", width: "100%", marginTop: "15px" }}
        />
      </Box>
    </Box>
  );
};
export default CartCheckout;
