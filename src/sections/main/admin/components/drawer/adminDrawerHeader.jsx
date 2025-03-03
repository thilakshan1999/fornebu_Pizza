import { Avatar, Box, IconButton, Toolbar } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import AdminProfileMenu from "./adminProfileMenu";
import { useAuth } from "../../../../../provider/AuthProvider";
import LogoutDialog from "../../../../authentication/logoutDialog";
import { useNavigate } from "react-router-dom";

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

const AdminDrawerHeader = ({ open }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLogout, setOpenLogout] = useState(false);
  const { userDetails, logout } = useAuth();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
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
              {userDetails?.username?.charAt(0).toUpperCase() || "U"}
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
      <AdminProfileMenu
        user={
          userDetails?.username
            ? userDetails.username.charAt(0).toUpperCase() +
              userDetails.username.slice(1)
            : "User"
        }
        anchorEl={anchorEl}
        handleCloseMenu={handleCloseMenu}
        setOpenLogout={setOpenLogout}
      />
      <LogoutDialog
        openDialog={openLogout}
        setOpenDialog={setOpenLogout}
        onClick={handleLogout}
      />
    </AppBar>
  );
};
export default AdminDrawerHeader;
