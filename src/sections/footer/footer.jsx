import React from "react";
import { Box, useTheme } from "@mui/material";
import CustomTypography from "../../components/typography/customTypography";
import CustomTextButton from "../../components/button/customTextButton";

const Footer = () => {
  const theme = useTheme();
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
          <CustomTextButton text={"About us"} />
          <Box sx={{ width: "10px" }} />
          <CustomTextButton text={"Privacy policy"} />
          <Box sx={{ width: "10px" }} />
          <CustomTextButton text={"Term and conditions"} />
          <Box sx={{ width: "10px" }} />
          <CustomTextButton text={"FAQs"} />
        </Box>

        <CustomTypography
          align="center"
          color={theme.palette.text.white}
          text="Copyright © 2025 Fornebu Pizza AS, all rights reserved. Powered by RedHood"
          sx={{
            fontSize: "14px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
