import React, { useState } from "react";
import { Card, CardMedia, Box, useTheme } from "@mui/material";
import CustomTypography from "../typography/customTypography";
import AddIcon from "@mui/icons-material/Add";
import FilterOutlinedIcon from "@mui/icons-material/FilterOutlined";
import ProductDrawer from "../drawer/productDrawer/productDrawer";
import { formatPrice } from "../../utils/formatPrize";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product, id }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [imageError, setImageError] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          bgcolor: "white",
          borderRadius: "10px",
        }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "calc(100% - 160px)",
          }}
        >
          {/* Product Name */}
          <CustomTypography
            color={theme.palette.text.black}
            text={id + ". " + product.name}
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "10px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          />
          <CustomTypography
            color={theme.palette.text.grey}
            text={product.description}
            sx={{
              fontSize: "14px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          />

          <CustomTypography
            color={theme.palette.text.grey}
            text={
              <>
                <strong>Allerg:</strong> {product.allerg}
              </>
            }
            sx={{
              fontSize: "14px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          />
          <Box sx={{ display: "flex", alignItems: "end", marginTop: "10px" }}>
            {[
              product.selectOption,
              product.extra,
              product.extraDressing,
              product.addDrink,
            ].some((list) => list && list.length > 0) && (
              <form>
                <CustomTypography
                  color={theme.palette.text.green}
                  text={"From"}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    marginRight: "10px",
                    marginBottom: "2px",
                  }}
                />
              </form>
            )}

            <CustomTypography
              color={theme.palette.text.green}
              text={formatPrice(product.amount)}
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ position: "relative" }}>
          {product.stock > 0 ? (
            <AddIcon
              sx={{
                position: "absolute",
                top: -10,
                right: -7,
                backgroundColor: "primary.main",
                color: "white",
                width: 24,
                height: 24,
                borderRadius: "50%",
              }}
            />
          ) : (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: 2,
              }}
            >
              {t("Out of Stock")}
            </Box>
          )}

          {/* Show image if it's valid and not broken */}
          {product.img && !imageError ? (
            <CardMedia
              component="img"
              image={product.img}
              alt={product.name}
              sx={{
                width: "150px",
                height: "100px",
                borderRadius: 2,
                objectFit: "cover",
                backgroundColor: "#f0f0f0",
              }}
              onError={() => setImageError(true)}
            />
          ) : (
            <Box
              sx={{
                width: "150px",
                height: "100px",
                borderRadius: 2,
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FilterOutlinedIcon sx={{ fontSize: 40, color: "#9e9e9e" }} />
            </Box>
          )}
        </Box>
      </Card>
      {/* Drawer Component */}
      <ProductDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        product={product}
        id={id}
      />
    </>
  );
};

export default ProductCard;
