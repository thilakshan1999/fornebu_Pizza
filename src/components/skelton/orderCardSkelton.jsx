import { Box, Card, Skeleton } from "@mui/material";

const OrderCardSkeleton = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        bgcolor: "white",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Skeleton variant="text" width={120} height={24} />
        <Skeleton variant="rounded" width={80} height={24} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}>
        <Skeleton variant="text" width={100} height={18} />
        <Skeleton variant="text" width={150} height={20} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}>
        <Skeleton variant="text" width={100} height={18} />
        <Skeleton variant="text" width={80} height={20} />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Skeleton variant="rounded" width={100} height={24} />
        <Skeleton variant="text" width={60} height={24} />
      </Box>
    </Card>
  );
};

export default OrderCardSkeleton;
