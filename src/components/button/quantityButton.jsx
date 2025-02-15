import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, IconButton, useTheme } from "@mui/material";
import CustomTypography from "../typography/customTypography";

const QuantityButton = ({
  quantity,
  handleQuantityChange,
  size,
  iconSize,
  fontSize,
}) => {
  const theme = useTheme();
  return (
    <Box display="flex" alignItems="center" justifyContent="start">
      <IconButton
        onClick={(e) => {
          e.stopPropagation(); // Prevent parent onClick
          handleQuantityChange(-1);
        }}
        sx={{
          border: "2px solid",
          borderRadius: "5px",
          width: size,
          height: size,
          "& .MuiSvgIcon-root": {
            fontSize: iconSize,
          },
          color: theme.palette.button.red,
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <RemoveIcon />
      </IconButton>
      <CustomTypography
        color={theme.palette.text.green}
        text={quantity}
        sx={{
          fontSize: fontSize,
          fontWeight: "bold",
          padding: "3px 15px",
        }}
      />
      <IconButton
        onClick={(e) => {
          e.stopPropagation(); // Prevent parent onClick
          handleQuantityChange(1);
        }}
        sx={{
          border: "2px solid",
          borderRadius: "5px",
          width: size,
          height: size,
          padding: "4px",
          "& .MuiSvgIcon-root": {
            fontSize: iconSize,
          },
          color: theme.palette.button.main,
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};
export default QuantityButton;
