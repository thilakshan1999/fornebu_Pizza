import React from "react";
import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import CustomTypography from "../../../components/typography/customTypography";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

const HeaderMyOrderBtn = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AssignmentOutlinedIcon
        sx={{ color: theme.palette.text.white, fontSize: "24px" }}
      />
      <CustomTypography
        color={theme.palette.text.white}
        text={t("Allergens")}
        sx={{
          fontSize: "15px",
          marginRight: "10px",
          marginLeft: "5px",
        }}
      />
    </Box>
  );
};

export default HeaderMyOrderBtn;
