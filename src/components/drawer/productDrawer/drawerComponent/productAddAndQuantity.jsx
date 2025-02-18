import { Box } from "@mui/material";
import PrimaryBtn from "../../../button/primartButton";
import { formatPrice } from "../../../../utils/formatPrize";
import { useTranslation } from "react-i18next";
import QuantityButton from "../../../button/quantityButton";
import { useContext } from "react";
import { CartContext } from "../../../../provider/cartProvider";
import { toast } from "react-toastify";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import showSuccessToast from "../../../toast/showSucessToast";

const ProductAddAndQuantity = ({
  handleQuantityChange,
  quantity,
  prize,
  cartItem,
  onClose,
}) => {
  const { t } = useTranslation();
  const { addToCart } = useContext(CartContext);
  const totalPrize = prize * quantity;

  const handleAddToCart = () => {
    addToCart(cartItem);
    onClose();
    showSuccessToast(t("Item added to cart successfully"));
  };

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
      <QuantityButton
        quantity={quantity}
        handleQuantityChange={handleQuantityChange}
        size={"40px"}
        fontSize={"20px"}
        iconSize={"24px"}
      />
      <Box flexGrow={1} />

      {/* Add to Cart Button */}
      <PrimaryBtn
        text={
          <>
            <strong>{t("Add To Cart")}</strong>&nbsp;{formatPrice(totalPrize)}
          </>
        }
        onClick={() => {
          handleAddToCart();
        }}
      />
    </Box>
  );
};
export default ProductAddAndQuantity;
