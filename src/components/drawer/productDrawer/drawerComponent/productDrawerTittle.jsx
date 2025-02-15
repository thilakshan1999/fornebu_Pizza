import { Box, IconButton, useTheme } from "@mui/material";
import CustomTypography from "../../../typography/customTypography";
import CloseIcon from "@mui/icons-material/Close";

const ProductDrawerTittle = ({ id, name, onClose }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid",
        padding: "10px 15px",
        borderColor: theme.palette.border.main,
        boxSizing: "border-box",
      }}
    >
      <CustomTypography
        color={theme.palette.text.black}
        text={id + ". " + name}
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
      />
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};
export default ProductDrawerTittle;
