import React, { useContext } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../provider/cartProvider";
import { useAuth } from "../../provider/AuthProvider";

const BottomNavBar = ({ setOpen }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomeSelected = location.pathname === "/";
  const isCartSelected = location.pathname === "/cart";
  const isMyOrderSelected = location.pathname === "/myOrders";
  const value = isHomeSelected
    ? 0
    : isCartSelected
    ? 2
    : isMyOrderSelected
    ? 3
    : -1;
  const { cartItems } = useContext(CartContext);
  const { user, setOpenLogIn } = useAuth();

  const handleChange = (event, newValue) => {
    if (newValue === 0) {
      navigate("/");
    } else if (newValue === 1) {
      setOpen(true);
    } else if (newValue === 2) {
      navigate("/cart");
    } else if (newValue === 3) {
      if (user) {
        navigate("/myOrders");
      } else {
        setOpenLogIn(true);
      }
    }
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
          label={t("HOME")}
          icon={<NavIcon IconComponent={HomeOutlinedIcon} />}
        />
        <BottomNavigationAction
          sx={{ height: "100%" }}
          label={t("MENU")}
          icon={<NavIcon IconComponent={MenuBookIcon} />}
        />
        <BottomNavigationAction
          sx={{ height: "100%" }}
          label={t("CART")}
          icon={
            <Badge
              badgeContent={cartItems.length}
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
          label={t("ORDERS")}
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
