import { Box } from "@mui/material";
import ProductDrawerInfo from "./productDrawerInfo";
import ProductSelectOption from "./productSelectOption";
import ProductDeselectOption from "./productDeselectOption";
import ProductExtraOption from "./productExtraOption";
import { useTranslation } from "react-i18next";
import ProductOrderNote from "./ProductOrderNote";

const ProductDrawerBody = ({ product, prize, setPrize }) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: "calc(100vh - 145px)",
        overflowY: "auto",
      }}
    >
      <ProductDrawerInfo product={product} />

      {product.selectOption.length > 0 && (
        <ProductSelectOption
          selectList={product.selectOption}
          prize={prize}
          setPrize={setPrize}
        />
      )}

      {product.deselectOption.length > 0 && (
        <ProductDeselectOption deselectList={product.deselectOption} />
      )}

      {product.extra.length > 0 && (
        <ProductExtraOption
          tittle={t("Extra")}
          extraList={product.extra}
          prize={prize}
          setPrize={setPrize}
        />
      )}

      {product.extraDressing.length > 0 && (
        <ProductExtraOption
          tittle={t("Extra Dressing")}
          extraList={product.extraDressing}
          prize={prize}
          setPrize={setPrize}
        />
      )}

      {product.addDrink.length > 0 && (
        <ProductExtraOption
          tittle={t("Add drink")}
          extraList={product.addDrink}
          prize={prize}
          setPrize={setPrize}
        />
      )}

      <ProductOrderNote />
    </Box>
  );
};
export default ProductDrawerBody;
