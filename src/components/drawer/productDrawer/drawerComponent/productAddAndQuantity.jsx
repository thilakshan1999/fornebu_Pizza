import { Box } from "@mui/material";
import PrimaryBtn from "../../../button/primartButton";
import { formatPrice } from "../../../../utils/formatPrize";
import { useTranslation } from "react-i18next";
import QuantityButton from "../../../button/quantityButton";

const ProductAddAndQuantity = ({ handleQuantityChange, quantity, prize }) => {
  const { t } = useTranslation();
  const totalPrize = prize * quantity;
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
        onClick={() => {}}
      />
    </Box>
  );
};
export default ProductAddAndQuantity;
