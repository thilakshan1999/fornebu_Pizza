import React from "react";
import { Box, useTheme } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CustomTypography from "../../../components/typography/customTypography";

const HeaderOpeningHours = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* Clock Icon */}
      <WatchLaterIcon
        sx={{ color: theme.palette.text.white, marginRight: 1 }}
      />

      <CustomTypography
        color={theme.palette.text.white}
        text=" Opening hours :"
        sx={{
          fontSize: "14px",
        }}
      />

      <CustomTypography
        color={theme.palette.text.darkGreen}
        text=" 11:00 - 22:00 "
        sx={{
          fontSize: "14px",
          marginLeft: "10px",
        }}
      />

      <CustomTypography
        color={theme.palette.text.darkGreen}
        text="Open"
        sx={{
          fontSize: "14px",
          marginLeft: "15px",
        }}
      />

      <KeyboardDoubleArrowRightIcon
        sx={{ color: theme.palette.text.white, marginLeft: "10px" }}
      />
    </Box>
  );
};

export default HeaderOpeningHours;
