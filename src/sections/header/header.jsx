import React from "react";
import { AppBar, Box } from "@mui/material";
import HeaderOpeningHours from "./components/headerOpenHours";
import HeaderPhoneNumber from "./components/hederPhoneNumber";
import HeaderAllergensBtn from "./components/headerAllergensBtn";
import HeaderMyOrderBtn from "./components/headerMyOrderBtn";
import LanguageSelection from "./components/languageSelection";

const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "#000000",
          display: {
            xs: "none",
            md: "flex",
          },
          padding: "0 10px",
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "auto",
            width: "100%",
            display: "flex",
            minHeight: "45px",
          }}
        >
          <HeaderOpeningHours />
          <HeaderPhoneNumber />
          <Box sx={{ flexGrow: 1 }} />
          <HeaderAllergensBtn />
          <HeaderMyOrderBtn />
          <LanguageSelection />
        </Box>
      </AppBar>
    </>
  );
};

export default Header;
