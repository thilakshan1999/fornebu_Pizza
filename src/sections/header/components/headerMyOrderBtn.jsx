import React from "react";
import { Box, useTheme } from "@mui/material";
import CustomTypography from "../../../components/typography/customTypography";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

const HeaderMyOrderBtn = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AssignmentOutlinedIcon
        sx={{ color: theme.palette.text.white, fontSize: "24px" }}
      />
      <CustomTypography
        color={theme.palette.text.white}
        text="My order"
        sx={{
          fontSize: "15px",
          marginRight: "20px",
          marginLeft: "5px",
        }}
      />
    </Box>
  );
};

export default HeaderMyOrderBtn;
