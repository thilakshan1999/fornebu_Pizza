import React from "react";
import { Helmet } from "react-helmet";
import CheckoutSection from "../sections/main/checkout/checkoutSection";

const CheckoutPage = () => {
  return (
    <>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <CheckoutSection />
    </>
  );
};

export default CheckoutPage;
