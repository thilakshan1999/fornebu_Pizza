import { useTranslation } from "react-i18next";
import { getTodayHours, isShopOpen } from "../../../../../utils/storeHours";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { Box } from "@mui/material";
import CustomTypography from "../../../../../components/typography/customTypography";
import OpeningHoursDialogBox from "../../../../header/components/openHoursDialogBox";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const OpeningHoursMobile = () => {
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "8px",
      }}
    >
      {/* Clock Icon */}
      <WatchLaterIcon
        sx={{
          color: theme.palette.text.grey,
          marginRight: 1,
        }}
      />

      <CustomTypography
        color={theme.palette.text.grey}
        text={t("Opening_hours") + ":"}
        sx={{
          fontSize: "14px",
          fontWeight: "bold",
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

      <Box flexGrow={1} />

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
          color: theme.palette.text.grey,
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
export default OpeningHoursMobile;
