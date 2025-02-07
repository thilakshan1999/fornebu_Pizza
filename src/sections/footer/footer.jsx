import React from "react";
import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import CustomTypography from "../../components/typography/customTypography";
import CustomTextButton from "../../components/button/customTextButton";

const Footer = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        background: theme.palette.primary.main,
        padding: "20px 20px",
        display: {
          xs: "none",
          md: "flex",
        },
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <CustomTextButton text={t("About_us")} />
          <Box sx={{ width: "10px" }} />
          <CustomTextButton text={t("Privacy_policy")} />
          <Box sx={{ width: "10px" }} />
          <CustomTextButton text={t("Term_and_conditions")} />
          <Box sx={{ width: "10px" }} />
          <CustomTextButton text={t("FAQs")} />
        </Box>

        <CustomTypography
          align="center"
          color={theme.palette.text.white}
          text={t("copyright")}
          sx={{
            fontSize: "14px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
