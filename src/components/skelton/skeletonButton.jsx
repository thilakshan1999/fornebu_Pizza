import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const SkeletonButton = ({ width = 140, height = 40 }) => {
  return (
    <Box>
      <Skeleton variant="rounded" width={width} height={height} />
    </Box>
  );
};

export default SkeletonButton;
