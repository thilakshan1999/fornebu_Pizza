import TableCell from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { formatPrice } from "../../../../../../utils/formatPrize";
import { Box, CardMedia } from "@mui/material";
import FilterOutlinedIcon from "@mui/icons-material/FilterOutlined";
import CustomTypography from "../../../../../../components/typography/customTypography";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { MoreVert } from "@mui/icons-material";
import { Fragment, useEffect, useState } from "react";
import ProductTableItemMenu from "./productTableItemMenu";
import ProductViewDialog from "./dialog/view/productViewDialog";
import CustomDeleteDialog from "../../../../../../components/dialog/customDeleteDialog";
import showSuccessToast from "../../../../../../components/toast/showSucessToast";
import ProductApi from "../../../../../../api/product";
import ProductEditDialog from "./dialog/productEditDialog";

const ProductTableRow = ({ product, products, categories, fetchProducts }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const [openBody, setOpenBody] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleDeleteProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const success = await ProductApi.deleteProduct(product.id);
      if (success) {
        console.log("Category deleted successfully");
        setOpenDeleteDialog(false);
        fetchProducts();
        showSuccessToast(t("Product deleted successfully."));
      } else {
        setError("Failed to delete category. Please try again.");
      }
    } catch (err) {
      console.error("Error deleting category:", err);
      setError("Error deleting category. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (openDeleteDialog) {
      setLoading(false);
      setError(null);
    }
  }, [openDeleteDialog]);

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left" component="th" scope="row">
          {product.id}
        </TableCell>
        <TableCell align="left">{product.name}</TableCell>
        <TableCell align="center">{product.stock}</TableCell>
        <TableCell align="center">{formatPrice(product.amount)}</TableCell>
        <TableCell align="center">{product.category}</TableCell>
        <TableCell align="right">
          <IconButton aria-label="menu" size="small" onClick={handleMenuClick}>
            <MoreVert />
          </IconButton>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpenBody(!openBody)}
          >
            {openBody ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openBody} timeout="auto" unmountOnExit>
            <CustomTypography
              color={theme.palette.text.black}
              text={t("Product Details")}
              sx={{
                fontSize: "20px",
                marginTop: "10px",
              }}
            />
            <Box sx={{ display: "flex" }}>
              {/* Image */}
              <Box sx={{ margin: 1 }}>
                {product.imgURl && !imageError ? (
                  <CardMedia
                    component="img"
                    image={product.imgURl}
                    alt={product.name}
                    sx={{
                      width: "150px",
                      height: "100px",
                      borderRadius: 2,
                      objectFit: "cover",
                      backgroundColor: "#f0f0f0",
                    }}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <Box
                    sx={{
                      width: "150px",
                      height: "100px",
                      borderRadius: 2,
                      backgroundColor: "#f0f0f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FilterOutlinedIcon
                      sx={{ fontSize: 40, color: "#9e9e9e" }}
                    />
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: "14px",
                  }}
                >
                  {product.description}
                </Typography>

                {product.allerg !== "" && (
                  <CustomTypography
                    color={theme.palette.text.grey}
                    text={
                      <>
                        <strong>Allerg:</strong> {product.allerg}
                      </>
                    }
                    sx={{
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  />
                )}
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <ProductTableItemMenu
        menuAnchorEl={menuAnchorEl}
        setMenuAnchorEl={setMenuAnchorEl}
        setOpenViewDialog={setOpenViewDialog}
        setOpenDeleteDialog={setOpenDeleteDialog}
        setOpenEditDialog={setOpenEditDialog}
      />
      <CustomDeleteDialog
        openDialog={openDeleteDialog}
        setOpenDialog={setOpenDeleteDialog}
        onClick={() => {
          handleDeleteProduct();
        }}
        tittleText={t("Confirm Deletion")}
        msgText={t("Are you sure you want to delete this product?")}
        loading={loading}
        error={error}
      />
      <ProductViewDialog
        open={openViewDialog}
        onClose={() => setOpenViewDialog(false)}
        product={product}
      />
      <ProductEditDialog
        open={openEditDialog}
        onClose={() => setOpenEditDialog(false)}
        products={products}
        selectProduct={product}
        categories={categories}
        onProductEdited={fetchProducts}
      />
    </Fragment>
  );
};
export default ProductTableRow;
