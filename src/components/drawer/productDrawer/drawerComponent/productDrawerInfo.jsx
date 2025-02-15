import { Box, CardMedia, Typography, useTheme } from "@mui/material";
import FilterOutlinedIcon from "@mui/icons-material/FilterOutlined";
import { useEffect, useRef, useState } from "react";
import CustomTypography from "../../../typography/customTypography";
import { formatPrice } from "../../../../utils/formatPrize";
import ViewMoreBtn from "../../../button/viewMoreButton";
import { useTranslation } from "react-i18next";

const ProductDrawerInfo = ({ product }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [imageError, setImageError] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const descriptionRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (descriptionRef.current) {
        setIsOverflowing(
          descriptionRef.current.scrollHeight >
            descriptionRef.current.clientHeight
        );
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [product.description]); // Re-run when description changes
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderBottom: "1px solid",
        borderColor: theme.palette.border.main,
        alignItems: "center",
        padding: "15px",
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "150px" },
        }}
      >
        {product.stock <= 0 && (
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
              width: { xs: "100%", md: "150px" },
              height: { xs: "", md: "100px" },
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

      <Box
        sx={{
          marginLeft: { xs: "0", md: "15px" },
          marginTop: { xs: "15px", md: "0" },
          width: { xs: "100$", md: "350px" },
        }}
      >
        <CustomTypography
          color={theme.palette.text.green}
          text={formatPrice(product.amount)}
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        />

        <Typography
          ref={descriptionRef}
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontSize: "14px",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: expanded ? "unset" : 2,
            overflow: expanded ? "visible" : "hidden",
            whiteSpace: expanded ? "normal" : "unset",
          }}
        >
          {product.description}
        </Typography>

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

        {/* Show 'View More' only if the text is long */}
        {isOverflowing && (
          <ViewMoreBtn
            expanded={expanded}
            setExpanded={setExpanded}
            sx={{
              marginBlock: "10px",
            }}
          />
        )}
      </Box>
    </Box>
  );
};
export default ProductDrawerInfo;
