import React from "react";
import { Helmet } from "react-helmet";
import AdminSection from "../sections/main/admin/adminSection";

const CheckoutPage = () => {
  return (
    <>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <AdminSection />
    </>
  );
};

export default CheckoutPage;
