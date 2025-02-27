import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import MenuHomeBtn from "./menuHomeBtn";
import SearchBar from "./searchBar";
import CategoryScroll from "./menuCategories";
import { useLocation, useParams } from "react-router-dom";
import CustomTypography from "../../../../../components/typography/customTypography";
import { useTranslation } from "react-i18next";
import formatName from "../../../../../utils/formatCategoryName ";

const MenuBar = ({ isFixed, handleCategoryClick, ref }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const location = useLocation();
  const isHomeSelected = location.pathname === "/";
  const { categoryName } = useParams();
  return (
    <Box
      ref={ref}
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
          alignItems: "center",
        }}
      >
        <MenuHomeBtn />
        {isHomeSelected ? (
          <CategoryScroll handleCategoryClick={handleCategoryClick} />
        ) : (
          <CustomTypography
            color={theme.palette.text.white}
            text={categoryName ? formatName(categoryName) : t("Search")}
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginInline: "10px",
              flexGrow: 1,
            }}
          />
        )}

        <SearchBar />
      </Box>
    </Box>
  );
};

export default MenuBar;
