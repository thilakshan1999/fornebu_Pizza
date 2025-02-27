import React from "react";
import { Helmet } from "react-helmet";
import MobileCartSection from "../sections/main/mobileCart/mobileCartSection";

const MobileCartPage = () => {
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <MobileCartSection />
    </>
  );
};

export default MobileCartPage;
