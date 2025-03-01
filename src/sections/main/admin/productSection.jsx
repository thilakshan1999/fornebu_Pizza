import { Alert, Box } from "@mui/material";
import CustomTypography from "../../../components/typography/customTypography";
import { useTheme } from "@emotion/react";
import AddItemButton from "../../../components/button/addItemButton";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import SkeletonButton from "../../../components/skelton/skeletonButton";
import ProductTable from "./components/table/productTable/productTable";
import ProductAddDialog from "./components/table/productTable/dialog/productAddDialog";
import ProductApi from "../../../api/product";
import CategoryApi from "../../../api/category";

const ProductSection = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async (categoryId) => {
    setLoading(true);
    setError(null);
    try {
      const data = await ProductApi.getProductsWithFilter(categoryId);
      console.log("data");
      console.log(data);
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(t("Failed to fetch products. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const result = await CategoryApi.getBasicCategory();
      if (result) {
        setCategories(result);
      } else {
        setCategories([]);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto" }}>
      {/* Show Error Box if error exists */}
      {error ? (
        <Alert severity="error" sx={{ marginBottom: "20px" }}>
          {error}
        </Alert>
      ) : (
        <Box>
          <Box sx={{ display: "flex", marginBottom: "20px" }}>
            <CustomTypography
              text={t("Product")}
              align="centre"
              sx={{
                fontWeight: "600",
                color: theme.palette.text.black,
                fontSize: "24px",
                flexGrow: "1",
              }}
            />
            {loading ? (
              <SkeletonButton width={"180px"} />
            ) : (
              <AddItemButton
                text={t("Add Product")}
                onClick={() => setOpenAddDialog(true)}
              />
            )}
          </Box>

          <ProductTable
            products={products}
            categories={categories}
            loading={loading}
            fetchProducts={fetchProducts}
          />

          <ProductAddDialog
            open={openAddDialog}
            onClose={() => setOpenAddDialog(false)}
            onProductAdded={fetchProducts}
            categories={categories}
            products={products}
          />
        </Box>
      )}
    </Box>
  );
};

export default ProductSection;
