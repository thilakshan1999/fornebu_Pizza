import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import CustomTypography from "../../../../../../../components/typography/customTypography";
import CategoryApi from "../../../../../../../api/category";
import showSuccessToast from "../../../../../../../components/toast/showSucessToast";

const CategoryAddDialog = ({ open, onClose, onCategoryAdded }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setCategoryName("");
      setError(false);
      setLoading(false);
    }
  }, [open]);

  const handleAdd = async () => {
    if (categoryName.trim() !== "") {
      setLoading(true);
      try {
        const result = await CategoryApi.addCategory(categoryName);
        if (result) {
          onCategoryAdded();
          setCategoryName("");
          onClose();
          showSuccessToast(t("Category added successfully."));
        } else {
          setError(t("Failed to create category"));
        }
      } catch (err) {
        console.error(err);
        setError(t("Error creating category. Please try again."));
      } finally {
        setLoading(false);
      }
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
          error={!!error}
          helperText={error}
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
          disabled={!categoryName.trim() || loading}
          sx={{
            backgroundColor: theme.palette.button.black,
            color: "white",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#444444",
            },
          }}
        >
          {loading ? (
            <CircularProgress
              size={20}
              sx={{ margin: "4px 10px", color: "black" }}
            />
          ) : (
            t("Add")
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryAddDialog;
