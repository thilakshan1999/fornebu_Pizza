import { Box, TextField } from "@mui/material";
import CheckoutCard from "./checkoutCard";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import FormProviderComponent from "../../../provider/formProviderComponent";
import CustomTypography from "../../../components/typography/customTypography";
import { useTheme } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { CartContext } from "../../../provider/cartProvider";
import { useAuth } from "../../../provider/AuthProvider";
import OrderApi from "../../../api/order";
import showSuccessToast from "../../../components/toast/showSucessToast";
import { useNavigate } from "react-router-dom";

const CheckoutSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  const { userDetails, user } = useAuth();

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const usernameRequiredMessage = t("Username is required");
  const usernameMinLengthMessage = t("Username must be at least 3 characters");
  const emailRequiredMessage = t("Email is required");
  const emailInvalidMessage = t("Invalid email");
  const phoneNumberRequiredMessage = t("Phone number is required");
  const phoneNumberInvalidMessage = t("Invalid phone number format");

  const orderSchema = yup.object().shape({
    username: yup
      .string()
      .required(usernameRequiredMessage)
      .min(3, usernameMinLengthMessage),
    email: yup
      .string()
      .required(emailRequiredMessage)
      .email(emailInvalidMessage),
    phoneNumber: yup
      .string()
      .required(phoneNumberRequiredMessage)
      .matches(/^\+?[1-9]\d{1,14}$/, phoneNumberInvalidMessage),
    phoneNumber2: yup
      .string()
      .required(phoneNumberRequiredMessage)
      .matches(/^\+?[1-9]\d{1,14}$/, phoneNumberInvalidMessage),
    orderNote: yup.string(),
  });

  const defaultOrderValues = {
    username: userDetails.username,
    email: userDetails.email,
    phoneNumber: userDetails.phoneNumber,
    phoneNumber2: "",
    orderNote: "",
  };

  const orderMethods = useForm({
    resolver: yupResolver(orderSchema),
    defaultValues: defaultOrderValues,
  });

  const {
    register,
    handleSubmit: handleSignUpSubmit,
    formState: { errors },
    reset,
  } = orderMethods;

  const onSubmit = async (data) => {
    setLoading(true);

    const subTotal = getCartTotal();
    const serviceCharge = subTotal / 10;
    const total = subTotal + serviceCharge;

    console.log("cartItem");
    console.log(cartItems);

    const orderData = {
      uid: user?.uid,
      userName: data.username,
      email: data.email,
      phoneNumber1: data.phoneNumber,
      phoneNumber2: data.phoneNumber2,
      note: data.orderNote,
      paymentMethod: paymentMethod,
      isPaid: false,
      orderStatus: "pending",
      subTotal: subTotal,
      serviceCharge: serviceCharge,
      total: total,
      products: cartItems.map((product) => ({
        productId: product.productId,
        quantity: product.quantity,
        note: product.note,
        deselectOptions: product.deselectIngredients,
        selections:
          product.select?.map((item) => ({
            name: item.name,
            price: item.prize,
            quantity: 1,
          })) || [],
        extras:
          product.extras?.map((item) => ({
            name: item.name,
            price: item.amount,
            quantity: item.quantity,
          })) || [],
        extraDressing:
          product.extraDressings?.map((item) => ({
            name: item.name,
            price: item.prize,
            quantity: item.quantity,
          })) || [],
        addDrinks:
          product.addDrinks?.map((item) => ({
            name: item.name,
            price: item.amount,
            quantity: item.quantity,
          })) || [],
      })),
    };

    console.log("order");
    console.log(orderData);

    try {
      const response = await OrderApi.addOrder(orderData);

      if (response) {
        console.log("Order placed successfully:", response);
        setError("");
        clearCart();
        navigate("/orderSuccess");
        showSuccessToast(t("Order placed successfully."));
      } else {
        console.error("Failed to place order.");
        setError(t("Failed to place order."));
      }
    } catch (error) {
      console.error("Error in order submission:", error);
      setError(t("Error in order submission. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  const onClickPlaceOrder = () => {
    handleSignUpSubmit(onSubmit)();
  };

  useEffect(() => {
    reset(defaultOrderValues);
    setLoading(false);
    setError("");
  }, []);

  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        justifyContent: "flex-start",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          padding: { xs: "10px", md: "40px 20px" },
          marginBottom: { xs: "50px", md: "0px" },
          width: { xs: "100%", md: "calc(100% - 440px)" },
          boxSizing: "border-box",
        }}
      >
        <FormProviderComponent onSubmit={onSubmit} methods={orderMethods}>
          {/* Billing */}
          <Box>
            {/* Title */}
            <CustomTypography
              text={t("Billing")}
              align="left"
              sx={{
                fontWeight: "600",
                color: theme.palette.text.black,
                fontSize: "24px",
              }}
            />
            <Box sx={{ height: "20px" }} />

            <TextField
              label={t("Username")}
              required
              fullWidth
              {...register("username")}
              error={!!errors.username || error}
              helperText={errors.username?.message}
              disabled={loading}
            />

            <Box sx={{ height: "20px" }} />

            {/* Email Field */}
            <TextField
              label={t("Email")}
              required
              fullWidth
              {...register("email")}
              error={!!errors.email || error}
              helperText={errors.email?.message}
              disabled={loading}
            />

            <Box sx={{ height: "20px" }} />

            {/* Phone Number Field */}
            <TextField
              label={t("Phone Number") + " 1"}
              required
              fullWidth
              {...register("phoneNumber")}
              error={!!errors.phoneNumber || error}
              helperText={errors.phoneNumber?.message}
              disabled={loading}
            />

            <Box sx={{ height: "20px" }} />

            <TextField
              label={t("Phone Number") + " 2"}
              required
              fullWidth
              {...register("phoneNumber2")}
              error={!!errors.phoneNumber2 || error}
              helperText={errors.phoneNumber2?.message}
              disabled={loading}
            />
          </Box>

          <Box sx={{ height: "40px" }} />

          {/* Addition info */}
          <Box>
            {/* Title */}
            <CustomTypography
              text={t("Additional information")}
              align="left"
              sx={{
                fontWeight: "600",
                color: theme.palette.text.black,
                fontSize: "24px",
              }}
            />
            <Box sx={{ height: "20px" }} />
            <TextField
              label={t("Order Note")}
              fullWidth
              multiline
              error={error}
              rows={4} // Adjust the number of rows as needed
              {...register("orderNote")}
              disabled={loading}
            />
          </Box>

          <Box sx={{ height: "40px" }} />

          {/* Payment Payment */}
          <Box>
            {/* Title */}
            <CustomTypography
              text={t("Payment Method")}
              align="left"
              sx={{
                fontWeight: "600",
                color: theme.palette.text.black,
                fontSize: "24px",
              }}
            />
            <Box sx={{ height: "10px" }} />
            <RadioGroup value={paymentMethod} onChange={handlePaymentChange}>
              <FormControlLabel
                value="cash"
                control={<Radio />}
                label={t("Cash on Pickup")}
              />
              {/* <FormControlLabel
                value="bank"
                control={<Radio />}
                label={t("Bank Transfer")}
              /> */}
            </RadioGroup>
          </Box>

          {error && (
            <CustomTypography
              color={theme.palette.text.red}
              text={error}
              sx={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            />
          )}
        </FormProviderComponent>
      </Box>

      <CheckoutCard
        onClickPlaceOrder={onClickPlaceOrder}
        loading={loading}
        error={error}
      />
    </Box>
  );
};
export default CheckoutSection;
