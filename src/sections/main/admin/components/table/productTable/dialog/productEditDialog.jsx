import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  CircularProgress,
  Box,
  Chip,
  Divider,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import CustomTypography from "../../../../../../../components/typography/customTypography";
import { formatPrice } from "../../../../../../../utils/formatPrize";
import showSuccessToast from "../../../../../../../components/toast/showSucessToast";
import ProductApi from "../../../../../../../api/product";

const ProductEditDialog = ({
  open,
  onClose,
  onProductEdited,
  categories,
  products,
  selectProduct,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [productName, setProductName] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [amount, setAmount] = useState("");
  const [stock, setStock] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const [description, setDescription] = useState("");
  const [allergen, setAllergen] = useState("");

  const [selectOptionName, setSelectOptionName] = useState("");
  const [selectOptionPrice, setSelectOptionPrice] = useState("");
  const [selectOptions, setSelectOptions] = useState([]);

  const [deselectInputValue, setDeselectInputValue] = useState("");
  const [deselectOptions, setDeselectOptions] = useState([]);

  const [extraOptions, setExtraOptions] = useState([]);

  const [dressingOptionName, setDressingOptionOptionName] = useState("");
  const [dressingOptionPrice, setDressingOptionOptionPrice] = useState("");
  const [dressingOptions, setDressingOptions] = useState([]);

  const [drinkOptions, setDrinkOptions] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSetCategoryId = (categoryName) => {
    const category = categories.find((cat) => cat.name === categoryName);
    if (category) {
      return category.id;
    } else {
      console.error("Category not found:", categoryName);
      return "";
    }
  };

  useEffect(() => {
    if (open) {
      setProductName(selectProduct.name);
      setImgURL(selectProduct.imgURl);
      setAmount(selectProduct.amount);
      setStock(selectProduct.stock);
      setCategoryId(handleSetCategoryId(selectProduct.category));

      setDescription(selectProduct.description);
      setAllergen(selectProduct.allerg);

      setSelectOptionName("");
      setSelectOptionPrice("");
      setSelectOptions(
        selectProduct.selectOptions.map(({ id, name, prize }) => ({
          id,
          name,
          price: prize,
        }))
      );

      setDeselectInputValue("");
      setDeselectOptions(selectProduct.deselectOptions);

      setExtraOptions(selectProduct.extras);

      setDressingOptionOptionName("");
      setDressingOptionOptionPrice("");
      setDressingOptions(
        selectProduct.extraDressing.map(({ id, name, prize }) => ({
          id,
          name,
          price: prize,
        }))
      );

      setDrinkOptions(selectProduct.addDrinks);

      setError("");
      setLoading(false);
    }
  }, [open]);

  //Deselect
  const handleAddDeselectOption = (event) => {
    if (event.key === "Enter" && deselectInputValue.trim() !== "") {
      setDeselectOptions([...deselectOptions, deselectInputValue.trim()]);
      setDeselectInputValue("");
      event.preventDefault();
    }
  };

  const handleRemoveDeselectOption = (option) => {
    setDeselectOptions(deselectOptions.filter((item) => item !== option));
  };

  //Select
  const handleAddSelectOption = () => {
    if (selectOptionName.trim() && selectOptionPrice.trim()) {
      setSelectOptions([
        ...selectOptions,
        { name: selectOptionName, price: parseFloat(selectOptionPrice) },
      ]);
      setSelectOptionName(""); // Clear inputs after adding
      setSelectOptionPrice("");
    }
  };

  const handleRemoveSelectOption = (index) => {
    const updatedOptions = selectOptions.filter((_, i) => i !== index);
    setSelectOptions(updatedOptions);
  };

  //Extra Dressing
  const handleAddDressingOption = () => {
    if (dressingOptionName.trim() && dressingOptionPrice.trim()) {
      setDressingOptions([
        ...dressingOptions,
        { name: dressingOptionName, price: parseFloat(dressingOptionPrice) },
      ]);
      setDressingOptionOptionName(""); // Clear inputs after adding
      setDressingOptionOptionPrice("");
    }
  };

  const handleRemoveDressingOption = (index) => {
    const updatedOptions = dressingOptions.filter((_, i) => i !== index);
    setDressingOptions(updatedOptions);
  };

  const handleEdit = async () => {
    if (!productName.trim() || !amount || !stock || !categoryId) {
      setError(t("Please fill in all required fields."));
      return;
    }
    setLoading(true);

    const extractExtraIds = (extraOptions) =>
      extraOptions.map((extra) => extra.id);
    const extractDrinkIds = (drinkOptions) =>
      drinkOptions.map((drink) => drink.id);

    const newProduct = {
      name: productName,
      description: description.trim(),
      allerg: allergen.trim(),
      stock: parseInt(stock),
      amount: parseFloat(amount),
      imgURl: imgURL,
      categoryId: categoryId,
      selectOptions: selectOptions,
      deselectOptions: deselectOptions,
      extraDressings: dressingOptions,
      extras: extractExtraIds(extraOptions),
      addDrinks: extractDrinkIds(drinkOptions),
    };

    console.log("product");
    console.log(newProduct);
    try {
      const result = await ProductApi.updateProduct(
        selectProduct.id,
        newProduct
      );
      if (result) {
        onProductEdited();
        onClose();
        showSuccessToast(t("Product updated successfully."));
      } else {
        setError(t("Failed to add product."));
      }
    } catch (err) {
      console.error(err);
      setError(t("Error adding product. Please try again."));
    } finally {
      setLoading(false);
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
          minWidth: "480px",
          maxHeight: "600px",
        },
      }}
    >
      <DialogTitle>
        <CustomTypography
          color={theme.palette.text.black}
          text={t("Edit Product")}
          sx={{ fontSize: "16px", fontWeight: "bold" }}
        />
      </DialogTitle>

      <DialogContent>
        {/* Basic Info */}
        <Box marginTop={"10px"} marginBottom={"20px"}>
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Basic Info")}
            sx={{ fontSize: "14px" }}
          />
          <TextField
            required
            fullWidth
            label={t("Product Name")}
            size="small"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            error={!!error && !productName}
            helperText={
              error && !productName ? t("Product name is required.") : ""
            }
            sx={{ marginTop: "10px" }}
          />

          <TextField
            fullWidth
            label={t("Image URL")}
            size="small"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            sx={{ marginTop: "10px" }}
          />

          <Box sx={{ display: "flex" }}>
            <TextField
              required
              fullWidth
              type="text"
              label={t("Amount")}
              size="small"
              value={amount}
              onChange={(e) => {
                const newValue = e.target.value.replace(/[^0-9.]/g, "");
                setAmount(newValue);
              }}
              error={!!error && !amount}
              helperText={error && !amount ? t("Amount is required.") : ""}
              sx={{ marginTop: "10px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Kr</InputAdornment>
                ),
                inputMode: "decimal", // Helps mobile keyboards show decimal input
                pattern: "[0-9]*", // Ensures numeric input
              }}
            />

            <Box width={20} />
            <TextField
              required
              fullWidth
              size="small"
              type="number"
              label={t("Stock")}
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              error={!!error && !stock}
              helperText={error && !stock ? t("Stock is required.") : ""}
              sx={{ marginTop: "10px" }}
            />
          </Box>

          <TextField
            select
            required
            fullWidth
            size="small"
            label={t("Category")}
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            error={!!error && !categoryId}
            helperText={error && !categoryId ? t("Category is required.") : ""}
            sx={{ marginTop: "10px" }}
          >
            {categories.length > 0 ? (
              categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>{t("No categories available")}</MenuItem>
            )}
          </TextField>
          {/* <Divider sx={{ marginTop: "20px" }} /> */}
        </Box>

        {/* Select Option */}
        <Box marginBlock={"20px"}>
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Select Option")}
            sx={{ fontSize: "14px" }}
          />

          {/* Name Input */}
          <TextField
            fullWidth
            label={t("Option Name")}
            size="small"
            value={selectOptionName}
            onChange={(e) => setSelectOptionName(e.target.value)}
            sx={{ marginTop: "10px" }}
          />

          {/* Price Input */}
          <TextField
            fullWidth
            label={t("Option Price")}
            size="small"
            value={selectOptionPrice}
            onChange={(e) => {
              const newValue = e.target.value.replace(/[^0-9.]/g, ""); // Only allow numbers and dots
              setSelectOptionPrice(newValue);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kr</InputAdornment>
              ),
              inputMode: "decimal",
            }}
            sx={{ marginTop: "10px" }}
          />

          {/* Add Button */}
          <Button
            onClick={handleAddSelectOption}
            variant="contained"
            color="primary"
            sx={{
              marginTop: "10px",
              textTransform: "none",
              backgroundColor: theme.palette.button.black,
              color: "white",
              "&:hover": { backgroundColor: "#444444" },
            }}
            disabled={!selectOptionName.trim() || !selectOptionPrice.trim()}
          >
            {t("Add Option")}
          </Button>

          {/* Selected Options List */}
          <Box marginBlock={"10px"}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              {selectOptions.map((option, index) => (
                <Chip
                  key={index}
                  label={`${option.name} - ${formatPrice(option.price)}`}
                  onDelete={() => handleRemoveSelectOption(index)}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Deselect */}
        <Box marginBlock={"20px"}>
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Deselect Option")}
            sx={{ fontSize: "14px" }}
          />
          <TextField
            fullWidth
            label={t("Deselect Options")}
            size="small"
            value={deselectInputValue}
            helperText={
              deselectOptions.length === 0
                ? t("Press Enter to add an option")
                : ""
            }
            onChange={(e) => setDeselectInputValue(e.target.value)}
            onKeyPress={handleAddDeselectOption}
            sx={{ marginTop: "10px" }}
          />

          <Box marginBlock={"10px"}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              {deselectOptions.map((option, index) => (
                <Chip
                  key={index}
                  label={option}
                  onDelete={() => handleRemoveDeselectOption(option)}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Extra Option */}
        <Box marginBlock={"20px"}>
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Extras Option")}
            sx={{ fontSize: "14px", marginBottom: "10px" }}
          />

          <Autocomplete
            multiple
            fullWidth
            options={products} // List of product options
            getOptionLabel={(option) => option.name} // Display product name
            value={extraOptions} // Multiple selected options
            onChange={(event, newValue) => setExtraOptions(newValue)} // Update selected options
            renderInput={(params) => (
              <TextField {...params} label={t("Select Extras")} size="small" />
            )}
          />
        </Box>

        {/* Dressing Option */}
        <Box marginBlock={"20px"}>
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Extra Dressing Option")}
            sx={{ fontSize: "14px" }}
          />

          {/* Name Input */}
          <TextField
            fullWidth
            label={t("Option Name")}
            size="small"
            value={dressingOptionName}
            onChange={(e) => setDressingOptionOptionName(e.target.value)}
            sx={{ marginTop: "10px" }}
          />

          {/* Price Input */}
          <TextField
            fullWidth
            label={t("Option Price")}
            size="small"
            value={dressingOptionPrice}
            onChange={(e) => {
              const newValue = e.target.value.replace(/[^0-9.]/g, ""); // Only allow numbers and dots
              setDressingOptionOptionPrice(newValue);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kr</InputAdornment>
              ),
              inputMode: "decimal",
            }}
            sx={{ marginTop: "10px" }}
          />

          {/* Add Button */}
          <Button
            onClick={handleAddDressingOption}
            variant="contained"
            color="primary"
            sx={{
              marginTop: "10px",
              textTransform: "none",
              backgroundColor: theme.palette.button.black,
              color: "white",
              "&:hover": { backgroundColor: "#444444" },
            }}
            disabled={!dressingOptionName.trim() || !dressingOptionPrice.trim()}
          >
            {t("Add Option")}
          </Button>

          {/* Selected Options List */}
          <Box marginBlock={"10px"}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              {dressingOptions.map((option, index) => (
                <Chip
                  key={index}
                  label={`${option.name} - ${formatPrice(option.price)}`}
                  onDelete={() => handleRemoveDressingOption(index)}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Add Drinks */}
        <Box marginBlock={"20px"}>
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Drinks Option")}
            sx={{ fontSize: "14px", marginBottom: "10px" }}
          />

          <Autocomplete
            multiple
            fullWidth
            options={products} // List of product options
            getOptionLabel={(option) => option.name} // Display product name
            value={drinkOptions} // Multiple selected options
            onChange={(event, newValue) => setDrinkOptions(newValue)} // Update selected options
            renderInput={(params) => (
              <TextField {...params} label={t("Select Drinks")} size="small" />
            )}
          />
        </Box>

        {/* Additional Info */}
        <Box marginBlock={"10px"}>
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Additional Info")}
            sx={{ fontSize: "14px" }}
          />
          <TextField
            fullWidth
            multiline
            size="small"
            rows={2}
            label={t("Allergen Information")}
            value={allergen}
            onChange={(e) => setAllergen(e.target.value)}
            sx={{ marginTop: "10px" }}
          />

          <TextField
            fullWidth
            multiline
            rows={5}
            size="small"
            label={t("Description")}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ marginTop: "10px" }}
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            color: theme.palette.text.black,
            border: "1px solid grey",
            textTransform: "none",
            "&:hover": { border: "1px solid black" },
          }}
        >
          {t("Cancel")}
        </Button>

        <Button
          onClick={handleEdit}
          color="primary"
          variant="contained"
          disabled={loading}
          sx={{
            backgroundColor: theme.palette.button.black,
            color: "white",
            textTransform: "none",
            "&:hover": { backgroundColor: "#444444" },
            marginRight: "10px",
          }}
        >
          {loading ? (
            <CircularProgress
              size={20}
              sx={{ margin: "4px 10px", color: "black" }}
            />
          ) : (
            t("Update")
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductEditDialog;
