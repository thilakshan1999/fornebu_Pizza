import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const CustomConfirmationDialog = ({ openDialog, setOpenDialog, onClick }) => {
  const { t } = useTranslation();
  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
      <DialogTitle>{t("Confirm Removal")}</DialogTitle>
      <DialogContent>
        {t("Are you sure you want to remove this item from the cart?")}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)}>{t("Cancel")}</Button>
        <Button onClick={onClick} color="error">
          {t("Remove")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CustomConfirmationDialog;
