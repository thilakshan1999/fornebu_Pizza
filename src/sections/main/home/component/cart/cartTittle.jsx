import { Box, useTheme } from "@mui/material";
import CustomTypography from "../../../../../components/typography/customTypography";
import { useTranslation } from "react-i18next";

const CartTittle = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 15px",
          border: "1px solid ",
          borderColor: theme.palette.border.main,
          backgroundColor: theme.palette.primary.light,
          borderRadius: "10px",
        }}
      >
        <CustomTypography
          color={theme.palette.text.grey}
          text={t("Takeaway")}
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
          }}
        />
      </Box>
      <CustomTypography
        color={theme.palette.text.green}
        text={t("Preparing Time") + ":~15 " + t("Minutes")}
        sx={{
          fontSize: "14px",
          marginTop: "10px",
        }}
      />
    </Box>
  );
};
export default CartTittle;
