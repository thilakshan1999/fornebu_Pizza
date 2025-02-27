import { Card, Box, Skeleton } from "@mui/material";

const ProductCardSkeleton = () => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        bgcolor: "white",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "calc(100% - 160px)",
        }}
      >
        {/* Skeleton for Product Name */}
        <Skeleton variant="text" width="80%" height={24} />
        {/* Skeleton for Product Description */}
        <Skeleton variant="text" width="100%" height={18} />
        <Skeleton variant="text" width="60%" height={18} />

        <Box sx={{ display: "flex", alignItems: "end", marginTop: "10px" }}>
          <Skeleton variant="text" width="30px" height={18} />
          <Skeleton
            variant="text"
            width="60px"
            height={24}
            sx={{ marginLeft: "10px" }}
          />
        </Box>
      </Box>

      {/* Skeleton for Image */}
      <Skeleton
        variant="rectangular"
        width={150}
        height={100}
        sx={{ borderRadius: 2 }}
      />
    </Card>
  );
};

export default ProductCardSkeleton;
