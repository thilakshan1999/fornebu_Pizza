import React from "react";
import { Helmet } from "react-helmet";
import HomeSection from "../sections/main/home/homeSection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeSection />
    </>
  );
};

export default HomePage;
