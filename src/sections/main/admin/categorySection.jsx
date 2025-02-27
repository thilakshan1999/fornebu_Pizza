import { Alert, Box } from "@mui/material";
import CategoryTable from "./components/table/categoryTable/categoryTable";
import CustomTypography from "../../../components/typography/customTypography";
import { useTheme } from "@emotion/react";
import AddItemButton from "../../../components/button/addItemButton";
import { useTranslation } from "react-i18next";
import CategoryAddDialog from "./components/table/categoryTable/drawer/categoryAddDialog";
import { useEffect, useState } from "react";
import CategoryApi from "../../../api/category";
import SkeletonButton from "../../../components/skelton/skeletonButton";

const CategorySection = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await CategoryApi.getBasicCategory();
      console.log("data");
      console.log(data);
      if (data) {
        setCategories(data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError(t("Failed to fetch categories. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
              text={t("Category")}
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
                text={t("Add Category")}
                onClick={() => setOpenAddDialog(true)}
              />
            )}
          </Box>
          <CategoryTable
            categories={categories}
            loading={loading}
            fetchCategories={fetchCategories}
          />
          <CategoryAddDialog
            open={openAddDialog}
            onClose={() => setOpenAddDialog(false)}
            onCategoryAdded={fetchCategories}
          />
        </Box>
      )}
    </Box>
  );
};

export default CategorySection;
