import { Box } from "@mui/material";
import ProductDrawerInfo from "./productDrawerInfo";
import ProductSelectOption from "./productSelectOption";
import ProductDeselectOption from "./productDeselectOption";
import ProductExtraOption from "./productExtraOption";
import { useTranslation } from "react-i18next";
import ProductOrderNote from "./ProductOrderNote";

const ProductDrawerBody = ({ product, prize, setPrize, setCartItem }) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: "calc(100vh - 145px)",
        overflowY: "auto",
      }}
    >
      <ProductDrawerInfo product={product} />

      {product.selectOptions.length > 0 && (
        <ProductSelectOption
          selectList={product.selectOptions}
          prize={prize}
          setPrize={setPrize}
          setCartItem={setCartItem}
        />
      )}

      {product.deselectOptions.length > 0 && (
        <ProductDeselectOption
          deselectList={product.deselectOptions}
          setCartItem={setCartItem}
        />
      )}

      {product.extras.length > 0 && (
        <ProductExtraOption
          id={"extra"}
          tittle={t("Extra")}
          extraList={product.extras}
          setPrize={setPrize}
          setCartItem={setCartItem}
        />
      )}

      {product.extraDressing.length > 0 && (
        <ProductExtraOption
          id={"dressing"}
          tittle={t("Extra Dressing")}
          extraList={product.extraDressing}
          setPrize={setPrize}
          setCartItem={setCartItem}
        />
      )}

      {product.addDrinks.length > 0 && (
        <ProductExtraOption
          id={"drink"}
          tittle={t("Add drink")}
          extraList={product.addDrinks}
          setPrize={setPrize}
          setCartItem={setCartItem}
        />
      )}

      <ProductOrderNote setCartItem={setCartItem} />
    </Box>
  );
};
export default ProductDrawerBody;
