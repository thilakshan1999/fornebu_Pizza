import { formatPrice } from "../../../../utils/formatPrize";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Box, useTheme } from "@mui/material";
import CustomTypography from "../../../typography/customTypography";
import QuantityButton from "../../../button/quantityButton";
import { useState } from "react";
const ProductExtraCard = ({ index, option, setPrize, id, setCartItem }) => {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const handleQuantityChange = (amount) => {
    const newQuantity = Math.max(0, quantity + amount);
    const priceDifference = (newQuantity - quantity) * option.amount;

    setQuantity(newQuantity);
    setPrize((prevPrize) => prevPrize + priceDifference);
    setIsSelected(newQuantity > 0);

    // Update cartItem based on the new quantity
    setCartItem((prev) => {
      let updatedExtras = [...prev.extras];
      let updatedExtraDressings = [...prev.extraDressings];
      let updatedAddDrinks = [...prev.addDrinks];

      if (id === "extra") {
        updatedExtras = updatedExtras.filter(
          (item) => item.name !== option.name
        );
      } else if (id === "dressing") {
        updatedExtraDressings = updatedExtraDressings.filter(
          (item) => item.name !== option.name
        );
      } else if (id === "drink") {
        updatedAddDrinks = updatedAddDrinks.filter(
          (item) => item.name !== option.name
        );
      }

      if (newQuantity > 0) {
        const updatedOption = { ...option, quantity: newQuantity };

        if (id === "extra") {
          updatedExtras.push(updatedOption);
        } else if (id === "dressing") {
          updatedExtraDressings.push(updatedOption);
        } else if (id === "drink") {
          updatedAddDrinks.push(updatedOption);
        }
      }

      return {
        ...prev,
        extras: updatedExtras,
        extraDressings: updatedExtraDressings,
        addDrinks: updatedAddDrinks,
      };
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

      setCartItem((prev) => {
        let updatedExtras = [...prev.extras];
        let updatedExtraDressings = [...prev.extraDressings];
        let updatedAddDrinks = [...prev.addDrinks];

        if (newSelectedState) {
          const updatedOption = { ...option, quantity: 1 };

          if (id === "extra") {
            updatedExtras.push(updatedOption);
          } else if (id === "dressing") {
            updatedExtraDressings.push(updatedOption);
          } else if (id === "drink") {
            updatedAddDrinks.push(updatedOption);
          }
        } else {
          if (id === "extra") {
            updatedExtras = updatedExtras.filter(
              (item) => item.name !== option.name
            );
          } else if (id === "dressing") {
            updatedExtraDressings = updatedExtraDressings.filter(
              (item) => item.name !== option.name
            );
          } else if (id === "drink") {
            updatedAddDrinks = updatedAddDrinks.filter(
              (item) => item.name !== option.name
            );
          }
        }

        return {
          ...prev,
          extras: updatedExtras,
          extraDressings: updatedExtraDressings,
          addDrinks: updatedAddDrinks,
        };
      });

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
            text={
              "+ " +
              (id === "dressing"
                ? formatPrice(option.prize)
                : formatPrice(option.amount))
            }
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
