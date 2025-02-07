import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomTypography from "../../../components/typography/customTypography";
import { storeHours } from "../../../utils/storeHours";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";

const OpeningHoursDialogBox = ({ openDialog, handleDialogClose }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const today = new Date().toLocaleString("en-US", { weekday: "long" });

  return (
    <Dialog open={openDialog} onClose={handleDialogClose}>
      <DialogTitle sx={{ padding: "15px 0px 5px 15px" }}>
        <CustomTypography
          text={t("Opening time")}
          color={theme.palette.text.black}
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        />
        <IconButton
          onClick={handleDialogClose}
          sx={{
            position: "absolute",
            top: "8px",
            right: "8px",
            color: "#7f7f7f",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: 0 }}>
        <Divider
          sx={{
            width: "100%",
            color: "#7f7f7f",
            margin: "8px 0",
          }}
        />
        {Object.keys(storeHours).map((day, index, daysArray) => {
          const { open, close } = storeHours[day];
          const isLastItem = index === daysArray.length - 1;
          return (
            <Box key={day}>
              <Box
                sx={{
                  width: "400px",
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <CustomTypography
                  text={t(day)}
                  color={
                    day === today
                      ? theme.palette.primary.main
                      : theme.palette.text.grey
                  }
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    padding: "0px 15px",
                  }}
                />
                <CustomTypography
                  text={`${open} - ${close}`}
                  color={
                    day === today
                      ? theme.palette.primary.main
                      : theme.palette.text.grey
                  }
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    padding: "0px 15px",
                  }}
                />
              </Box>
              {!isLastItem && (
                <Divider
                  sx={{
                    width: "100%",
                    color: "#7f7f7f",
                    margin: "8px 0",
                  }}
                />
              )}
            </Box>
          );
        })}
      </DialogContent>
    </Dialog>
  );
};

export default OpeningHoursDialogBox;
