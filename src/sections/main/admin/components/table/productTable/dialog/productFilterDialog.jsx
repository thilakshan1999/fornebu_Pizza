import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import CustomTypography from "../../../../../../../components/typography/customTypography";
import CategoryApi from "../../../../../../../api/category";

const ProductFilterDialog = ({
  open,
  onClose,
  //categories,
  onApplyFilter,
  initialFilterValue = "",
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedCategoryId, setSelectedCategory] =
    useState(initialFilterValue);
  const [categories, setCategories] = useState([]);

  // Reset the selected value whenever the dialog opens.
  useEffect(() => {
    if (open) {
      setSelectedCategory(initialFilterValue);
    }
  }, [open, initialFilterValue]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await CategoryApi.getBasicCategoryHasProducts();
        console.log("data");
        console.log(data);
        if (data) {
          setCategories(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleApply = () => {
    const selectedCategory = selectedCategoryId
      ? categories.find(
          (category) => String(category.id) === selectedCategoryId
        )
      : null;
    onApplyFilter(selectedCategory);
    onClose();
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
          text={t("Filter Products")}
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            width: "480px",
          }}
        />
      </DialogTitle>
      <DialogContent>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <CustomTypography
              color={theme.palette.text.grey}
              text={t("Select a Category")}
              sx={{
                fontSize: "14px",
              }}
            />
          </FormLabel>
          <RadioGroup value={selectedCategoryId} onChange={handleChange}>
            {/* "None" option to clear the filter */}
            <FormControlLabel value="" control={<Radio />} label={t("None")} />
            {categories.map((category) => (
              <FormControlLabel
                key={category.id}
                value={String(category.id)}
                control={<Radio />}
                label={category.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
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
          onClick={handleApply}
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: theme.palette.button.black,
            color: "white",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#444444",
            },
          }}
        >
          {t("Apply Filter")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductFilterDialog;
