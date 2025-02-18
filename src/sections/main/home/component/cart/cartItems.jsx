import { Box, Divider, useTheme } from "@mui/material";
import CustomTypography from "../../../../../components/typography/customTypography";
import { formatAddPrice, formatPrice } from "../../../../../utils/formatPrize";
import { useTranslation } from "react-i18next";
import QuantityButton from "../../../../../components/button/quantityButton";
import { useState } from "react";

const CartItems = ({ cartItems }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <Box marginBlock={"10px"}>
      {cartItems.map((item) => (
        <Box sx={{ marginBlock: "15px" }}>
          {/* Product Name */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
            }}
          >
            <CustomTypography
              color={theme.palette.text.black}
              text={item.productName}
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            />
            <CustomTypography
              color={theme.palette.text.black}
              text={formatPrice(item.productBasePrize * item.quantity)}
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            />
          </Box>

          {/* Select */}
          {item.select.length > 0 && (
            <Box marginBottom={"8px"}>
              <CustomTypography
                color={theme.palette.text.grey}
                text={t("Select") + ":"}
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              />
              {item.select.map((selectItem) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <CustomTypography
                    color={theme.palette.text.lightGrey}
                    text={selectItem.name}
                    sx={{
                      fontSize: "13px",
                    }}
                  />
                  <CustomTypography
                    color={theme.palette.text.black}
                    text={formatAddPrice(selectItem.price * item.quantity)}
                    sx={{
                      fontSize: "13px",
                    }}
                  />
                </Box>
              ))}
            </Box>
          )}

          {/* Deselect */}
          {item.deselectIngredients.length > 0 && (
            <Box marginBottom={"8px"}>
              <CustomTypography
                color={theme.palette.text.grey}
                text={t("Deselect Ingredients") + ":"}
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              />
              {item.deselectIngredients.map((deselectItem) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <CustomTypography
                    color={theme.palette.text.lightGrey}
                    text={deselectItem}
                    sx={{
                      fontSize: "13px",
                    }}
                  />
                </Box>
              ))}
            </Box>
          )}

          {/* Extras */}
          {item.extras.length > 0 && (
            <Box marginBottom={"8px"}>
              <CustomTypography
                color={theme.palette.text.grey}
                text={t("Extra") + ":"}
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              />
              {item.extras.map((selectItem) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <CustomTypography
                      color={theme.palette.text.lightGrey}
                      text={selectItem.name}
                      sx={{
                        fontSize: "13px",
                        marginRight: "5px",
                      }}
                    />
                    <CustomTypography
                      color={theme.palette.text.lightGrey}
                      text={" x " + selectItem.quantity}
                      sx={{
                        fontSize: "13px",
                      }}
                    />
                  </Box>

                  <CustomTypography
                    color={theme.palette.text.black}
                    text={formatAddPrice(selectItem.amount * item.quantity)}
                    sx={{
                      fontSize: "13px",
                    }}
                  />
                </Box>
              ))}
            </Box>
          )}

          {/* Extras Dressing*/}
          {item.extraDressings.length > 0 && (
            <Box marginBottom={"8px"}>
              <CustomTypography
                color={theme.palette.text.grey}
                text={t("Extra Dressing") + ":"}
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              />
              {item.extraDressings.map((selectItem) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <CustomTypography
                      color={theme.palette.text.lightGrey}
                      text={selectItem.name}
                      sx={{
                        fontSize: "13px",
                        marginRight: "5px",
                      }}
                    />
                    <CustomTypography
                      color={theme.palette.text.lightGrey}
                      text={" x " + selectItem.quantity}
                      sx={{
                        fontSize: "13px",
                      }}
                    />
                  </Box>

                  <CustomTypography
                    color={theme.palette.text.black}
                    text={formatAddPrice(selectItem.amount * item.quantity)}
                    sx={{
                      fontSize: "13px",
                    }}
                  />
                </Box>
              ))}
            </Box>
          )}

          {/* Drink*/}
          {item.addDrinks.length > 0 && (
            <Box marginBottom={"8px"}>
              <CustomTypography
                color={theme.palette.text.grey}
                text={t("Add drink") + ":"}
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              />
              {item.addDrinks.map((selectItem) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <CustomTypography
                      color={theme.palette.text.lightGrey}
                      text={selectItem.name}
                      sx={{
                        fontSize: "13px",
                        marginRight: "5px",
                      }}
                    />
                    <CustomTypography
                      color={theme.palette.text.lightGrey}
                      text={" x " + selectItem.quantity}
                      sx={{
                        fontSize: "13px",
                      }}
                    />
                  </Box>

                  <CustomTypography
                    color={theme.palette.text.black}
                    text={formatAddPrice(selectItem.amount * item.quantity)}
                    sx={{
                      fontSize: "13px",
                    }}
                  />
                </Box>
              ))}
            </Box>
          )}

          {/*  Note */}
          {item.note !== "" && (
            <Box
              sx={{
                display: "flex",
                marginBottom: "5px",
              }}
            >
              <CustomTypography
                color={theme.palette.text.grey}
                text={t("Note") + " :"}
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginRight: "5px",
                  whiteSpace: "nowrap",
                  display: "inline-block",
                }}
              />
              <CustomTypography
                color={theme.palette.text.lightGrey}
                text={item.note}
                sx={{
                  fontSize: "13px",
                }}
              />
            </Box>
          )}

          {/* Quantity and total*/}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <QuantityButton
              quantity={item.quantity}
              handleQuantityChange={(amount) => {
                setQuantity((prev) => Math.max(1, prev + amount));
              }}
              size={"28px"}
              fontSize={"18px"}
              iconSize={"16px"}
            />
            <CustomTypography
              color={theme.palette.text.green}
              text={formatPrice(item.productUnitPrize * item.quantity)}
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            />
          </Box>

          <Divider />
        </Box>
      ))}
    </Box>
  );
};
export default CartItems;
