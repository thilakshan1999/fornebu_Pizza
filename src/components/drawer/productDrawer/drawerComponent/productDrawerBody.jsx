import { Box } from "@mui/material";
import ProductDrawerInfo from "./productDrawerInfo";
import ProductSelectOption from "./productSelectOption";
import ProductDeselectOption from "./productDeselectOption";

const ProductDrawerBody = ({ product, prize, setPrize }) => {
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
    </Box>
  );
};
export default ProductDrawerBody;
