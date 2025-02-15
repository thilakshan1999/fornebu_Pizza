import { Box, Grid2, useTheme } from "@mui/material";
import ProductCard from "../../../../../components/card/productCard";
import { dummyData } from "../../../../../utils/dummyCateories";
import CustomTypography from "../../../../../components/typography/customTypography";
import { useNavigate, useOutletContext } from "react-router-dom";

const HomeContent = () => {
  const { categoryRefs } = useOutletContext();
  const theme = useTheme();

  const navigate = useNavigate();

  const handleCategoryClick = (categoryName, categoryId) => {
    navigate(
      `/${categoryName
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase()}/${categoryId}`
    );
  };

  return (
    <Box
      sx={{
        padding: { xs: "10px", md: "40px 20px" },
        marginBottom: { xs: "50px", md: "0px" },
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {dummyData.map((category, index) => (
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
                handleCategoryClick(category.categoryName, category.categoryId)
              }
            >
              <CustomTypography
                color={theme.palette.text.black}
                text={category.categoryName}
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
              text={"(" + category.productList.length + " items)"}
              sx={{
                fontSize: "16px",
                marginBottom: "10px",
              }}
            />
          </Box>
          <Grid2 container spacing={2}>
            {category.productList.map((product, index) => (
              <Grid2 size={{ xs: 12, md: 6 }} key={product.id}>
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
