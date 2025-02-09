import React, { useState } from "react";
import {
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useTranslation } from "react-i18next";

const BottomNavBar = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: {
          xs: "flex",
          md: "none",
        },
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        sx={{
          width: "100%",
          height: "70px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <BottomNavigationAction
          sx={{ height: "100%" }}
          label={t("Home")}
          icon={<NavIcon IconComponent={HomeOutlinedIcon} />}
        />
        <BottomNavigationAction
          sx={{ height: "100%" }}
          label={t("Menu")}
          icon={<NavIcon IconComponent={MenuBookIcon} />}
        />
        <BottomNavigationAction
          sx={{ height: "100%" }}
          label={t("Cart")}
          icon={
            <Badge
              badgeContent={1}
              sx={{
                "& .MuiBadge-badge": {
                  top: 8,
                  right: -4,
                },
              }}
              color="error"
            >
              <NavIcon IconComponent={ShoppingBagOutlinedIcon} />
            </Badge>
          }
        />
        <BottomNavigationAction
          sx={{ height: "100%" }}
          label={t("Orders")}
          icon={<NavIcon IconComponent={DescriptionOutlinedIcon} />}
        />
      </BottomNavigation>
    </Paper>
  );
};

const NavIcon = ({ IconComponent }) => {
  return <IconComponent sx={{ fontSize: "28px" }} />;
};

export default BottomNavBar;
