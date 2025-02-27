import { Box, Grid2, useTheme } from "@mui/material";
import ProductCard from "../../../../../components/card/productCard";
import CustomTypography from "../../../../../components/typography/customTypography";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryApi from "../../../../../api/category";
import CategorySkeleton from "../../../../../components/skelton/categorySkeleton";

const HomeContent = () => {
  const { categoryRefs } = useOutletContext();
  const theme = useTheme();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName, categoryId) => {
    navigate(
      `/${categoryName
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase()}/${categoryId}`
    );
  };

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const data = await CategoryApi.getCategories();
        if (data) {
          setCategories(data);
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
      {loading
        ? [1, 2, 3].map((_, index) => <CategorySkeleton key={index} />)
        : categories.map((category, index) => (
            <Box
              key={index}
              ref={(el) => (categoryRefs.current[index] = el)}
              sx={{ scrollMarginTop: "80px", marginBottom: "40px" }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    cursor: "pointer", // Make the typography clickable
                    display: "inline-block",
                  }}
                  onClick={() =>
                    handleCategoryClick(category.name, category.id)
                  }
                >
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
                </Box>
                <CustomTypography
                  color={theme.palette.text.green}
                  text={"(" + category.products.length + " items)"}
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
          ))}
    </Box>
  );
};

export default HomeContent;
