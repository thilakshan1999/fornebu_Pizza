import React from "react";
import { Box, useTheme } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import CustomTypography from "../../../components/typography/customTypography";

const HeaderPhoneNumber = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
      {/* Clock Icon */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          padding: "2px",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PhoneIcon sx={{ color: theme.palette.text.black, fontSize: "16px" }} />
      </Box>

      <CustomTypography
        color={theme.palette.text.white}
        text="+47 67 42 42 02"
        sx={{
          fontSize: "14px",
          marginLeft: "10px",
        }}
      />
    </Box>
  );
};

export default HeaderPhoneNumber;
