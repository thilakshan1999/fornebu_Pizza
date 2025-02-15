import { formatPrice } from "../../../../utils/formatPrize";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Box, useTheme } from "@mui/material";
import CustomTypography from "../../../typography/customTypography";
import QuantityButton from "../../../button/quantityButton";
import { useState } from "react";
const ProductExtraCard = ({ index, option, prize, setPrize }) => {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const handleQuantityChange = (amount) => {
    setQuantity((prev) => {
      const newQuantity = Math.max(0, prev + amount);

      const priceDifference = (newQuantity - prev) * option.amount;
      setPrize((prevPrize) => prevPrize + priceDifference);

      setIsSelected(newQuantity > 0); // Update selection state
      return newQuantity;
    });
  };

  const handleToggleSelect = () => {
    setIsSelected((prev) => {
      const newSelectedState = !prev;

      setPrize((prevPrize) => {
        if (newSelectedState) {
          return prevPrize + option.amount;
        } else {
          return prevPrize - option.amount * quantity;
        }
      });

      setQuantity(newSelectedState ? 1 : 0);
      return newSelectedState;
    });
  };

  return (
    <Box
      key={index}
      onClick={handleToggleSelect}
      sx={{
        padding: "10px",
        borderRadius: 2,
        cursor: "pointer",
        border: "1px solid #ccc",
        backgroundColor: isSelected
          ? theme.palette.primary.light
          : "transparent",
        transition: "0.3s",
        "&:hover": {
          border: `1px solid ${theme.palette.primary.main}`, // Primary border on hover
        },
        display: "flex",
        alignItems: "center",
      }}
    >
      {isSelected ? (
        <CheckBoxIcon
          sx={{ fontSize: "36px", color: theme.palette.primary.main }}
        />
      ) : (
        <CheckBoxOutlineBlankIcon
          sx={{ fontSize: "36px", color: theme.palette.border.main }}
        />
      )}
      <Box marginLeft={"15px"} sx={{ width: "100%" }}>
        <CustomTypography
          color={theme.palette.text.black}
          text={option.name}
          sx={{
            fontSize: "16px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CustomTypography
            color={theme.palette.text.green}
            text={"+ " + formatPrice(option.amount)}
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              flexGrow: 1,
            }}
          />
          <QuantityButton
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
            size={"28px"}
            fontSize={"18px"}
            iconSize={"16px"}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default ProductExtraCard;
