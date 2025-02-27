import { Avatar, Box, IconButton, Toolbar } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import AdminProfileMenu from "./adminProfileMenu";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer - 1,
  boxShadow: "none",
  backgroundColor: "#fff",
  // borderBottom: `1px solid ${theme.palette.grey[300]}`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const AdminDrawerHeader = ({ open, email = "redhood@example.com" }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
          }}
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
            <Avatar
              sx={{
                bgcolor: "grey.300",
                color: "grey.600",
                width: {
                  xs: 32,
                  sm: 40,
                },
                height: {
                  xs: 32,
                  sm: 40,
                },
                fontSize: {
                  xs: "16px",
                  sm: "18px",
                },
              }}
            >
              {email[0].toUpperCase()}
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
      <AdminProfileMenu
        email={email}
        anchorEl={anchorEl}
        handleCloseMenu={handleCloseMenu}
      />
    </AppBar>
  );
};
export default AdminDrawerHeader;
