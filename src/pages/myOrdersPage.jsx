import React from "react";
import { Helmet } from "react-helmet";
import MyOrderSection from "../sections/main/myOrder/myOrdersSection";

const MyOrdersPage = () => {
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <MyOrderSection />
    </>
  );
};

export default MyOrdersPage;
