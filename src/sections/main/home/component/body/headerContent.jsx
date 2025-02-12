import { Box, Grid, Grid2 } from "@mui/material";
import { dummyProducts } from "../../../../../model/product";
import ProductCard from "../../../../../components/card/productCard";

const HeaderContent = () => {
  return (
    <Box sx={{ padding: "10px" }}>
      <Grid2
        container
        spacing={2}
        sx={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {dummyProducts.map((product, index) => (
          <Grid2 size={{ xs: 12, md: 6 }} key={product.id}>
            <ProductCard product={product} id={index + 1} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
export default HeaderContent;
