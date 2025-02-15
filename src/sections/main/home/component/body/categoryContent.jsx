import { Box, Grid2, useTheme } from "@mui/material";
import ProductCard from "../../../../../components/card/productCard";
import CustomTypography from "../../../../../components/typography/customTypography";
import { dummyProducts } from "../../../../../model/product";
import { useParams } from "react-router-dom";
import formatName from "../../../../../utils/formatCategoryName ";

const CategoryContent = () => {
  const theme = useTheme();
  const { categoryName, categoryId } = useParams();

  return (
    <Box
      sx={{
        padding: { xs: "10px", md: "40px 20px" },
        marginBottom: { xs: "50px", md: "0px" },
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Box sx={{ scrollMarginTop: "80px", marginBottom: "40px" }}>
        <Box sx={{ display: "flex" }}>
          <CustomTypography
            color={theme.palette.text.black}
            text={formatName(categoryName)}
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
          {dummyProducts.map((product, index) => (
            <Grid2 size={{ xs: 12, md: 6 }} key={product.id}>
              <ProductCard product={product} id={index + 1} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default CategoryContent;
