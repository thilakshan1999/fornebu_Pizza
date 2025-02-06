import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import HeaderOpeningHours from "./components/headerOpenHours";
import HeaderPhoneNumber from "./components/hederPhoneNumber";
import HeaderAllergensBtn from "./components/headerAllergensBtn";
import HeaderMyOrderBtn from "./components/headerMyOrderBtn";

const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "#000000",
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "auto",
            width: "100%",
            padding: "0px 10px",
            display: "flex",
            minHeight: "45px",
          }}
        >
          <HeaderOpeningHours />
          <HeaderPhoneNumber />
          <Box sx={{ flexGrow: 1 }} />
          <HeaderAllergensBtn />
          <HeaderMyOrderBtn />
        </Box>
      </AppBar>
    </>
  );
};

export default Header;
