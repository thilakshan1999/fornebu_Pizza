import { Box, Grid2, useTheme } from "@mui/material";
import ProductCard from "../../../../../components/card/productCard";
import CustomTypography from "../../../../../components/typography/customTypography";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import ProductApi from "../../../../../api/product";
import ProductCardSkeleton from "../../../../../components/skelton/productCardSkeleton";

const SearchContent = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { searchKeyword } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const data = await ProductApi.getProductsByKeyword(searchKeyword);
        console.log("search data");
        console.log(data);
        if (data) {
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, [searchKeyword]);

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
          {loading
            ? [1, 2, 3, 4].map((_, index) => (
                <Grid2 size={{ xs: 12, lg: 6 }} key={index}>
                  <ProductCardSkeleton />
                </Grid2>
              ))
            : products.map((product, index) => (
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
