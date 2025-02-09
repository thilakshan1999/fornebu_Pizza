import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import MenuHomeBtn from "./menuHomeBtn";
import SearchBar from "./searchBar";
import CategoryScroll from "./menuCategories";

const MenuBar = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        justifyContent: "space-between",
        padding: "0 10px",
        backgroundColor: theme.palette.primary.main,
        color: "white",
        display: {
          xs: "none",
          md: "flex",
        },
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
