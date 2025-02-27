import { Box, Grid2 } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import ProductCardSkeleton from "./productCardSkeleton";

const CategorySkeleton = () => {
  return (
    <Box sx={{ marginBottom: "40px" }}>
      {/* Category Title */}
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <Skeleton variant="text" width={120} height={24} />
        <Skeleton
          variant="text"
          width={60}
          height={20}
          sx={{ marginLeft: "10px" }}
        />
      </Box>

      {/* Product List Skeleton */}
      <Grid2 container spacing={2}>
        {[1, 2, 3, 4].map((_, index) => (
          <Grid2 size={{ xs: 12, lg: 6 }} key={index}>
            <ProductCardSkeleton />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default CategorySkeleton;
