import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import MenuHomeBtn from "./menuHomeBtn";
import SearchBar from "./searchBar";
import CategoryScroll from "./menuCategories";

const MenuBar = ({ isFixed }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: isFixed ? "fixed" : "relative",
        top: isFixed ? 0 : "auto",
        left: 0,
        width: "100%",
        zIndex: 1100,
        justifyContent: "space-between",
        padding: "0 10px",
        backgroundColor: theme.palette.primary.main,
        color: "white",
        transition: "top 0.3s ease-in-out",
        display: {
          xs: "none",
          md: "flex",
        },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
        }}
      >
        <MenuHomeBtn />
        <CategoryScroll />
        <SearchBar />
      </Box>
    </Box>
  );
};

export default MenuBar;
