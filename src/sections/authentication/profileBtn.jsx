import { Avatar, IconButton } from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";
import { useAuth } from "../../provider/AuthProvider";
import ProfileMenu from "../../components/menu/profileMenu";
import { useState } from "react";
import LogoutDialog from "./logoutDialog";
import { useNavigate } from "react-router-dom";

const ProfileBtn = () => {
  const navigate = useNavigate();
  const { user, userDetails, setOpenLogIn, logout } = useAuth();

  const handleOpenDialog = () => setOpenLogIn(true);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openLogout, setOpenLogout] = useState(false);
  const handleLogout = () => {
    setOpenLogout(false);
    logout();
    navigate("/");
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        sx={{
          color: { xs: "grey", md: "white" },
          padding: "0px",
          marginLeft: "5px",
        }}
        onClick={user ? handleOpenMenu : handleOpenDialog}
      >
        {user ? (
          <Avatar
            sx={{
              bgcolor: "grey.300",
              color: "grey.600",
              width: 32,
              height: 32,
              fontSize: "18px",
            }}
          >
            {userDetails?.username?.charAt(0).toUpperCase() || "U"}
          </Avatar>
        ) : (
          <AccountCircleOutlined
            sx={{
              fontSize: "2.25rem",
            }}
          />
        )}
      </IconButton>
      <ProfileMenu
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
    </>
  );
};
export default ProfileBtn;
