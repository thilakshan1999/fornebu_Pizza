import { Box, Divider, useTheme } from "@mui/material";
import CustomTypography from "../../../components/typography/customTypography";
import { useTranslation } from "react-i18next";
import { formatPrice } from "../../../utils/formatPrize";
import { useContext } from "react";
import { CartContext } from "../../../provider/cartProvider";
import PrimaryLoadingBtn from "../../../components/button/primaryLoadingButton";

const CheckoutPlaceOrder = ({ onClickPlaceOrder, loading }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { getCartTotal } = useContext(CartContext);
  const subTotal = getCartTotal();
  const serviceCharge = getCartTotal() / 10;
  const total = subTotal + serviceCharge;

  return (
    <Box>
      <Box
        sx={{
          padding: "15px",
          border: "1px solid ",
          borderColor: theme.palette.border.main,
          backgroundColor: theme.palette.primary.light,
          borderRadius: "10px",
        }}
      >
        {/* Sub Total */}
        <Box sx={{ display: "flex" }}>
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Sub Total")}
            sx={{
              fontSize: "15px",
              marginRight: "5px",
              flexGrow: 1,
            }}
          />

          <CustomTypography
            color={theme.palette.text.black}
            text={formatPrice(subTotal)}
            sx={{
              fontSize: "16px",
            }}
          />
        </Box>

        {/* Service*/}
        <Box sx={{ display: "flex" }}>
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Service charge")}
            sx={{
              fontSize: "15px",
              marginRight: "5px",
              flexGrow: 1,
            }}
          />

          <CustomTypography
            color={theme.palette.text.black}
            text={formatPrice(serviceCharge)}
            sx={{
              fontSize: "16px",
            }}
          />
        </Box>

        <Divider sx={{ marginBlock: "5px" }} />
        {/* Total */}
        <Box sx={{ display: "flex" }}>
          <CustomTypography
            color={theme.palette.text.black}
            text={t("Total")}
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              marginRight: "5px",
            }}
          />
          <CustomTypography
            color={theme.palette.text.grey}
            text={"(" + t("Incl. tax") + ")"}
            sx={{
              fontSize: "16px",
              flexGrow: 1,
            }}
          />
          <CustomTypography
            color={theme.palette.text.green}
            text={formatPrice(total)}
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
            }}
          />
        </Box>
        <PrimaryLoadingBtn
          text={t("Place Order")}
          loading={loading}
          onClick={onClickPlaceOrder}
          sx={{ fontWeight: "bold", width: "100%", marginTop: "15px" }}
        />
      </Box>
    </Box>
  );
};
export default CheckoutPlaceOrder;
