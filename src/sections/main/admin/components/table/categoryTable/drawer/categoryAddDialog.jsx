import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import CustomTypography from "../../../../../../../components/typography/customTypography";

const CategoryAddDialog = ({ open, onClose }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [categoryName, setCategoryName] = useState("");

  const handleAdd = () => {
    if (categoryName.trim() !== "") {
      setCategoryName("");
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
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
          text={t("Add Category")}
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            width: "480px",
          }}
        />
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          fullWidth
          label={t("Category Name")}
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          variant="outlined"
          sx={{
            marginTop: "10px",
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            color: theme.palette.text.black,
            border: "1px solid grey",
            textTransform: "none",
            "&:hover": {
              border: "1px solid black",
            },
          }}
        >
          {t("Cancel")}
        </Button>
        <Button
          onClick={handleAdd}
          color="primary"
          variant="contained"
          disabled={!categoryName.trim()}
          sx={{
            backgroundColor: theme.palette.button.black,
            color: "white",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#444444",
            },
          }}
        >
          {t("Add")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryAddDialog;
