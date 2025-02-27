import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
} from "@mui/material";
import CustomTypography from "../typography/customTypography";
import { useTranslation } from "react-i18next";

const CustomDeleteDialog = ({
  openDialog,
  setOpenDialog,
  onClick,
  tittleText,
  msgText,
  id,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "12px",
          padding: "16px 0",
        },
      }}
    >
      <DialogTitle>
        <CustomTypography
          color={theme.palette.text.black}
          text={tittleText}
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
          }}
        />
      </DialogTitle>
      <DialogContent>
        <CustomTypography
          color={theme.palette.text.grey}
          text={msgText}
          sx={{
            fontSize: "14px",
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setOpenDialog(false)}
          sx={{
            color: theme.palette.text.black,
            border: "1px solid gray",
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              borderColor: theme.palette.text.black,
            },
          }}
        >
          {t("No")}
        </Button>
        <Button
          onClick={onClick}
          color="error"
          sx={{
            backgroundColor: theme.palette.button.red,
            color: "white",
            textTransform: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: theme.palette.error.dark,
            },
          }}
        >
          {t("Yes")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CustomDeleteDialog;
