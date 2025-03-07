import { Box, Divider, useTheme } from "@mui/material";
import CustomTypography from "../../../../../../../components/typography/customTypography";
import {
  formatAddPrice,
  formatPrice,
} from "../../../../../../../utils/formatPrize";
import { useTranslation } from "react-i18next";

const OrderProductDialogItem = ({ orderProduct }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  // Calculate subtotal: product price + selections + extras + extra dressings + drinks
  const subtotal =
    orderProduct.product.amount +
    orderProduct.selections.reduce((sum, item) => sum + item.price, 0) +
    orderProduct.extras.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ) +
    orderProduct.extraDressing.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ) +
    orderProduct.addDrinks.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

  // Calculate total based on quantity
  const total = subtotal * orderProduct.quantity;

  return (
    <Box sx={{ marginBlock: "10px", width: "100%" }}>
      {/* Product Name */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CustomTypography
          color={theme.palette.text.black}
          text={orderProduct.product.name}
          sx={{
            fontSize: "15px",
            fontWeight: "bold",
          }}
        />
        <CustomTypography
          color={theme.palette.text.black}
          text={formatPrice(orderProduct.product.amount)}
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
          }}
        />
      </Box>

      {/* Select */}
      {orderProduct.selections.length > 0 && (
        <Box marginBottom={"8px"}>
          <CustomTypography
            color={theme.palette.text.grey}
            text={t("Select") + ":"}
            sx={{
              fontSize: "13px",
              fontWeight: "bold",
            }}
          />
          {orderProduct.selections.map((selectItem) => (
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
                text={formatAddPrice(selectItem.price)}
                sx={{
                  fontSize: "13px",
                }}
              />
            </Box>
          ))}
        </Box>
      )}

      {/* Deselect */}
      {orderProduct.deselectOptions.length > 0 && (
        <Box marginBottom={"8px"}>
          <CustomTypography
            color={theme.palette.text.grey}
            text={t("Deselect Ingredients") + ":"}
            sx={{
              fontSize: "13px",
              fontWeight: "bold",
            }}
          />
          {orderProduct.deselectOptions.map((deselectItem) => (
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
      {orderProduct.extras.length > 0 && (
        <Box marginBottom={"8px"}>
          <CustomTypography
            color={theme.palette.text.grey}
            text={t("Extra") + ":"}
            sx={{
              fontSize: "13px",
              fontWeight: "bold",
            }}
          />
          {orderProduct.extras.map((selectItem) => (
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
                    fontSize: "12px",
                    marginRight: "5px",
                  }}
                />
                <CustomTypography
                  color={theme.palette.text.lightGrey}
                  text={" x " + selectItem.quantity}
                  sx={{
                    fontSize: "12px",
                  }}
                />
              </Box>

              <CustomTypography
                color={theme.palette.text.black}
                text={formatAddPrice(selectItem.price * selectItem.quantity)}
                sx={{
                  fontSize: "12px",
                }}
              />
            </Box>
          ))}
        </Box>
      )}

      {/* Extras Dressing*/}
      {orderProduct.extraDressing.length > 0 && (
        <Box marginBottom={"8px"}>
          <CustomTypography
            color={theme.palette.text.grey}
            text={t("Extra Dressing") + ":"}
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
            }}
          />
          {orderProduct.extraDressing.map((selectItem) => (
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
                    fontSize: "12px",
                    marginRight: "5px",
                  }}
                />
                <CustomTypography
                  color={theme.palette.text.lightGrey}
                  text={" x " + selectItem.quantity}
                  sx={{
                    fontSize: "12px",
                  }}
                />
              </Box>

              <CustomTypography
                color={theme.palette.text.black}
                text={formatAddPrice(selectItem.price * selectItem.quantity)}
                sx={{
                  fontSize: "12px",
                }}
              />
            </Box>
          ))}
        </Box>
      )}

      {/* Drink*/}
      {orderProduct.addDrinks.length > 0 && (
        <Box marginBottom={"8px"}>
          <CustomTypography
            color={theme.palette.text.grey}
            text={t("Add drink") + ":"}
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
            }}
          />
          {orderProduct.addDrinks.map((selectItem) => (
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
                    fontSize: "12px",
                    marginRight: "5px",
                  }}
                />
                <CustomTypography
                  color={theme.palette.text.lightGrey}
                  text={" x " + selectItem.quantity}
                  sx={{
                    fontSize: "12px",
                  }}
                />
              </Box>

              <CustomTypography
                color={theme.palette.text.black}
                text={formatAddPrice(selectItem.price * selectItem.quantity)}
                sx={{
                  fontSize: "12px",
                }}
              />
            </Box>
          ))}
        </Box>
      )}

      {/*  Note */}
      {orderProduct.note !== "" && (
        <Box
          sx={{
            display: "flex",
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
            text={orderProduct.note}
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
        }}
      >
        <CustomTypography
          color={theme.palette.text.black}
          text={t("Quantity") + " : " + orderProduct.quantity}
          sx={{
            fontSize: "12px",
            fontWeight: "bold",
          }}
        />

        <CustomTypography
          color={theme.palette.text.green}
          text={formatPrice(total)}
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
          }}
        />
      </Box>

      <Divider />
    </Box>
  );
};

export default OrderProductDialogItem;
