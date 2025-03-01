import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  CardMedia,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import CustomTypography from "../../../../../../../../components/typography/customTypography";
import FilterOutlinedIcon from "@mui/icons-material/FilterOutlined";
import { formatPrice } from "../../../../../../../../utils/formatPrize";

const ProductViewDialog = ({ open, onClose, product }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [imageError, setImageError] = useState(false);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "12px",
          padding: "16px 0",
          backgroundColor: "#f8f8f8",
          minWidth: "480px",
          maxHeight: "600px",
        },
      }}
    >
      <DialogTitle>
        <CustomTypography
          color={theme.palette.text.black}
          text={t("Product Info")}
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
          }}
        />
      </DialogTitle>
      <DialogContent>
        {/* Info */}
        <Box
          sx={{
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#ffffff",
            padding: 2,
            marginBottom: "15px",
          }}
        >
          {/* Image */}
          <Box sx={{ margin: 1 }}>
            {product.imgURl && !imageError ? (
              <CardMedia
                component="img"
                image={product.imgURl}
                alt={product.name}
                sx={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  backgroundColor: "#f0f0f0",
                }}
                onError={() => setImageError(true)}
              />
            ) : (
              <Box
                sx={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {" "}
            <CustomTypography
              color={theme.palette.text.black}
              text={product.name}
              sx={{
                fontSize: "20px",
              }}
            />
            <CustomTypography
              color={theme.palette.text.grey}
              text={"(" + product.id + ")"}
              sx={{
                fontSize: "20px",
                marginLeft: "10px",
              }}
            />
          </Box>
          <CustomTypography
            color={theme.palette.text.green}
            text={product.category}
            sx={{
              fontSize: "16px",
            }}
          />
        </Box>

        {/* Stock & Amount */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          {/* Stock */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              padding: 2,
              width: "48%",
            }}
          >
            <CustomTypography
              color={theme.palette.text.grey}
              text={t("Stock")}
              sx={{
                fontSize: "14px",
              }}
            />
            <CustomTypography
              color={theme.palette.text.green}
              text={product.stock}
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            />
          </Box>

          {/* Prize */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              padding: 2,
              width: "48%",
            }}
          >
            <CustomTypography
              color={theme.palette.text.grey}
              text={t("Amount")}
              sx={{
                fontSize: "14px",
              }}
            />
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

        {/* Select Option */}
        {product.selectOptions.length > 0 && (
          <Box
            sx={{
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              backgroundColor: "#ffffff",
              marginBottom: "15px",
              padding: 2,
            }}
          >
            <Box sx={{ display: "flex", width: "100%" }}>
              <CustomTypography
                color={theme.palette.text.black}
                text={t("Select Option")}
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  flexGrow: 1,
                }}
              />
              <CustomTypography
                color={theme.palette.text.black}
                text={t("Amount")}
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              />
            </Box>
            {product.selectOptions.map((selectOption, index) => (
              <Box sx={{ display: "flex", width: "100%" }} key={index}>
                <CustomTypography
                  color={theme.palette.text.grey}
                  text={selectOption.name}
                  sx={{
                    fontSize: "14px",
                    flexGrow: 1,
                  }}
                />
                <CustomTypography
                  color={theme.palette.text.green}
                  text={formatPrice(selectOption.prize)}
                  sx={{
                    fontSize: "14px",
                  }}
                />
              </Box>
            ))}
          </Box>
        )}

        {/* Deselect Option */}
        {product.deselectOptions.length > 0 && (
          <Box
            sx={{
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              backgroundColor: "#ffffff",
              marginBottom: "15px",
              padding: 2,
            }}
          >
            <Box sx={{ display: "flex", width: "100%" }}>
              <CustomTypography
                color={theme.palette.text.black}
                text={t("Deselect Option")}
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  flexGrow: 1,
                }}
              />
            </Box>
            {product.deselectOptions.map((deselectOption, index) => (
              <Box sx={{ display: "flex", width: "100%" }} key={index}>
                <CustomTypography
                  color={theme.palette.text.grey}
                  text={deselectOption}
                  sx={{
                    fontSize: "14px",
                  }}
                />
              </Box>
            ))}
          </Box>
        )}

        {/* Extras */}
        {product.extras.length > 0 && (
          <Box
            sx={{
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              backgroundColor: "#ffffff",
              marginBottom: "15px",
              padding: 2,
            }}
          >
            <Box sx={{ display: "flex", width: "100%" }}>
              <CustomTypography
                color={theme.palette.text.black}
                text={t("Extra")}
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  flexGrow: 1,
                }}
              />
              <CustomTypography
                color={theme.palette.text.black}
                text={t("Amount")}
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              />
            </Box>
            {product.extras.map((extra, index) => (
              <Box sx={{ display: "flex", width: "100%" }} key={index}>
                <CustomTypography
                  color={theme.palette.text.grey}
                  text={extra.name}
                  sx={{
                    fontSize: "14px",
                    flexGrow: 1,
                  }}
                />
                <CustomTypography
                  color={theme.palette.text.green}
                  text={formatPrice(extra.amount)}
                  sx={{
                    fontSize: "14px",
                  }}
                />
              </Box>
            ))}
          </Box>
        )}

        {/* ExtraDressing */}
        {product.extraDressing.length > 0 && (
          <Box
            sx={{
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              backgroundColor: "#ffffff",
              marginBottom: "15px",
              padding: 2,
            }}
          >
            <Box sx={{ display: "flex", width: "100%" }}>
              <CustomTypography
                color={theme.palette.text.black}
                text={t("Extra Dressing")}
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  flexGrow: 1,
                }}
              />
              <CustomTypography
                color={theme.palette.text.black}
                text={t("Amount")}
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              />
            </Box>
            {product.extraDressing.map((extraDress, index) => (
              <Box sx={{ display: "flex", width: "100%" }} key={index}>
                <CustomTypography
                  color={theme.palette.text.grey}
                  text={extraDress.name}
                  sx={{
                    fontSize: "14px",
                    flexGrow: 1,
                  }}
                />
                <CustomTypography
                  color={theme.palette.text.green}
                  text={formatPrice(extraDress.prize)}
                  sx={{
                    fontSize: "14px",
                  }}
                />
              </Box>
            ))}
          </Box>
        )}

        {/* AddDrinks */}
        {product.addDrinks.length > 0 && (
          <Box
            sx={{
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              backgroundColor: "#ffffff",
              marginBottom: "15px",
              padding: 2,
            }}
          >
            <Box sx={{ display: "flex", width: "100%" }}>
              <CustomTypography
                color={theme.palette.text.black}
                text={t("Add Drink")}
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  flexGrow: 1,
                }}
              />
              <CustomTypography
                color={theme.palette.text.black}
                text={t("Amount")}
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              />
            </Box>
            {product.addDrinks.map((addDrink, index) => (
              <Box sx={{ display: "flex", width: "100%" }} key={index}>
                <CustomTypography
                  color={theme.palette.text.grey}
                  text={addDrink.name}
                  sx={{
                    fontSize: "14px",
                    flexGrow: 1,
                  }}
                />
                <CustomTypography
                  color={theme.palette.text.green}
                  text={formatPrice(addDrink.amount)}
                  sx={{
                    fontSize: "14px",
                  }}
                />
              </Box>
            ))}
          </Box>
        )}

        {/* Discription & Allerg */}
        <Box
          sx={{
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            backgroundColor: "#ffffff",
            padding: 2,
          }}
        >
          {product.allerg !== "" && (
            <Box marginBottom={"10px"}>
              <CustomTypography
                color={theme.palette.text.black}
                text={"Allerg:"}
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              />
              <CustomTypography
                color={theme.palette.text.grey}
                text={product.allerg}
                sx={{
                  fontSize: "14px",
                }}
              />
            </Box>
          )}

          <CustomTypography
            color={theme.palette.text.black}
            text={t("Description")}
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          />
          <CustomTypography
            color={theme.palette.text.grey}
            text={product.description}
            sx={{
              fontSize: "14px",
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            color: theme.palette.text.black,
            border: "1px solid grey",
            textTransform: "none",
            marginRight: "10px",
            "&:hover": {
              border: "1px solid black",
            },
          }}
        >
          {t("Cancel")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductViewDialog;
