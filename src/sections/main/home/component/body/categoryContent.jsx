import { Box, Grid2, useTheme } from "@mui/material";
import ProductCard from "../../../../../components/card/productCard";
import CustomTypography from "../../../../../components/typography/customTypography";
import { dummyProducts } from "../../../../../model/product";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryApi from "../../../../../api/category";
import CategorySkeleton from "../../../../../components/skelton/categorySkeleton";

const CategoryContent = () => {
  const theme = useTheme();
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const data = await CategoryApi.getCategoriesById(categoryId);
        if (data) {
          setCategory(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Box
      sx={{
        padding: { xs: "10px", md: "40px 20px" },
        marginBottom: { xs: "50px", md: "0px" },
        width: { xs: "100%", md: "calc(100% - 440px)" },
        boxSizing: "border-box",
      }}
    >
      {loading ? (
        <CategorySkeleton />
      ) : (
        <Box sx={{ scrollMarginTop: "80px", marginBottom: "40px" }}>
          <Box sx={{ display: "flex" }}>
            <CustomTypography
              color={theme.palette.text.black}
              text={category.name}
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "10px",
                marginRight: "20px",
              }}
            />
            <CustomTypography
              color={theme.palette.text.green}
              text={"(" + dummyProducts.length + " items)"}
              sx={{
                fontSize: "16px",
                marginBottom: "10px",
              }}
            />
          </Box>
          <Grid2 container spacing={2}>
            {category.products.map((product, index) => (
              <Grid2 size={{ xs: 12, lg: 6 }} key={product.id}>
                <ProductCard product={product} id={index + 1} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      )}
    </Box>
  );
};

export default CategoryContent;
