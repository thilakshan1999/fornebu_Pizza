import { Box, Grid2, useTheme } from "@mui/material";
import ProductCard from "../../../../../components/card/productCard";
import CustomTypography from "../../../../../components/typography/customTypography";
import { dummyProducts } from "../../../../../model/product";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SearchContent = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { searchKeyword } = useParams();

  return (
    <Box
      sx={{
        padding: { xs: "10px", md: "40px 20px" },
        marginBottom: { xs: "50px", md: "0px" },
        width: { xs: "100%", md: "calc(100% - 440px)" },
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ scrollMarginTop: "80px", marginBottom: "40px" }}>
        <Box sx={{ display: "flex" }}>
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Search For") + ':"' + searchKeyword + '"'}
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "10px",
              marginRight: "20px",
            }}
          />
        </Box>
        <Grid2 container spacing={2}>
          {dummyProducts.map((product, index) => (
            <Grid2 size={{ xs: 12, lg: 6 }} key={product.id}>
              <ProductCard product={product} id={index + 1} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default SearchContent;
