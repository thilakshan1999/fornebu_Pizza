import { Box, IconButton, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CustomTypography from "../../../typography/customTypography";
import PrimaryBtn from "../../../button/primartButton";
import { formatPrice } from "../../../../utils/formatPrize";
import { useTranslation } from "react-i18next";

const ProductAddAndQuantity = ({ handleQuantityChange, quantity, prize }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="start"
      sx={{
        padding: "20px 15px",
        boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <IconButton
        onClick={() => handleQuantityChange(-1)}
        sx={{
          border: "2px solid",
          borderRadius: "5px",
          color: theme.palette.button.red,
          "&:hover": {
            backgroundColor: "transparent", // Prevent background color change on hover
          },
        }}
      >
        <RemoveIcon />
      </IconButton>
      <CustomTypography
        color={theme.palette.text.green}
        text={quantity}
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          padding: "3px 15px",
        }}
      />
      <IconButton
        onClick={() => handleQuantityChange(1)}
        sx={{
          border: "2px solid",
          borderRadius: "5px",
          color: theme.palette.button.main,
          "&:hover": {
            backgroundColor: "transparent", // Prevent background color change on hover
          },
        }}
      >
        <AddIcon />
      </IconButton>
      <Box flexGrow={1} />

      {/* Add to Cart Button */}
      <PrimaryBtn
        text={
          <>
            <strong>{t("Add To Cart")}</strong>&nbsp;{formatPrice(prize)}
          </>
        }
        onClick={() => {}}
      />
    </Box>
  );
};
export default ProductAddAndQuantity;
