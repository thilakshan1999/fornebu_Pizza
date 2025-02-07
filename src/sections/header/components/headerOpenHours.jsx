import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CustomTypography from "../../../components/typography/customTypography";
import { getTodayHours, isShopOpen } from "../../../utils/storeHours";
import OpeningHoursDialogBox from "./openHoursDialogBox";

const HeaderOpeningHours = () => {
  const { t } = useTranslation();
  const { open, close } = getTodayHours();
  const theme = useTheme();

  const [openDialog, setOpenDialog] = useState(false);
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* Clock Icon */}
      <WatchLaterIcon
        sx={{ color: theme.palette.text.white, marginRight: 1 }}
      />

      <CustomTypography
        color={theme.palette.text.white}
        text={t("Opening_hours")}
        sx={{
          fontSize: "14px",
        }}
      />

      <CustomTypography
        color={
          isShopOpen() ? theme.palette.text.darkGreen : theme.palette.text.red
        }
        text={`${open} - ${close}`}
        sx={{
          fontSize: "14px",
          marginLeft: "10px",
        }}
      />

      <CustomTypography
        color={
          isShopOpen() ? theme.palette.text.darkGreen : theme.palette.text.red
        }
        text={isShopOpen() ? t("Open") : t("Closed")}
        sx={{
          fontSize: "14px",
          marginLeft: "15px",
        }}
      />

      <KeyboardDoubleArrowRightIcon
        sx={{
          color: theme.palette.text.white,
          marginLeft: "10px",
          cursor: "pointer",
        }}
        onClick={handleDialogOpen} // Open dialog on click
      />

      <OpeningHoursDialogBox
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
      />
    </Box>
  );
};

export default HeaderOpeningHours;
