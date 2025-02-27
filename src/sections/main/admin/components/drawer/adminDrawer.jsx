import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DescriptionIcon from "@mui/icons-material/Description";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AdminDrawerHeader from "./adminDrawerHeader";
import AdminDrawerIconList from "./adminDrawerIconList";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 80,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function AdminDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState("Orders");

  const menuItems = [
    { text: "Orders", icon: <DescriptionIcon /> },
    { text: "Categories", icon: <MenuBookIcon /> },
    { text: "Products", icon: <LunchDiningIcon /> },
  ];

  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen); // Toggle the drawer state
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AdminDrawerHeader open={open} handleDrawerOpen={handleDrawerToggle} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {open ? (
              theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )
            ) : theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <AdminDrawerIconList
          menuItems={menuItems}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          open={open}
        />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        {selectedMenu === "Orders" && <OrderSection />}
        {selectedMenu === "Categories" && <CategoriesSection />}
        {selectedMenu === "Products" && <ProductsSection />}
      </Box>
    </Box>
  );
}

const OrderSection = () => (
  <Box>
    <Typography variant="body1">This is the Order section content.</Typography>
  </Box>
);

const CategoriesSection = () => (
  <Box>
    <Typography variant="body1">
      This is the Category section content.
    </Typography>
  </Box>
);

const ProductsSection = () => (
  <Box>
    <Typography variant="body1">
      This is the Products section content.
    </Typography>
  </Box>
);
