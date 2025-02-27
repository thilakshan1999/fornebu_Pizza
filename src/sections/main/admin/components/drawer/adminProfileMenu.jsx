import { Divider, Menu, MenuItem, useTheme } from "@mui/material";
import CustomTypography from "../../../../../components/typography/customTypography";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const AdminProfileMenu = ({ email, anchorEl, handleCloseMenu }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleLogout = () => {
    handleCloseMenu();
    //Handle LogOut
  };

  const handleNavigateHome = () => {
    handleCloseMenu();
    navigate("/"); // Navigates to Home page
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleCloseMenu}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        "& .MuiPaper-root": {
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          border: `1px solid ${theme.palette.grey[300]}`,
        },
      }}
    >
      <MenuItem
        disabled
        sx={{
          "&.Mui-disabled": {
            opacity: 1, // Override the default opacity for disabled state
          },
        }}
      >
        <CustomTypography
          text={email}
          align="centre"
          sx={{
            fontWeight: "600",
            color: theme.palette.text.black,
            fontSize: "14px",
          }}
        />
      </MenuItem>
      <Divider
        sx={{ borderColor: theme.palette.grey[300], borderStyle: "dotted" }}
      />
      <MenuItem
        onClick={handleNavigateHome}
        sx={{ margin: "2px 6px", padding: "8px 10px", borderRadius: "6px" }}
      >
        <CustomTypography
          text={"Home"}
          align="centre"
          sx={{
            fontWeight: "600",
            color: theme.palette.primary.main,
            fontSize: "14px",
          }}
        />
      </MenuItem>

      <Divider
        sx={{ borderColor: theme.palette.grey[300], borderStyle: "dotted" }}
      />
      <MenuItem
        onClick={handleLogout}
        sx={{ margin: "2px 6px", padding: "8px 10px", borderRadius: "6px" }}
      >
        <CustomTypography
          text={"Logout"}
          align="centre"
          sx={{
            fontWeight: "600",
            color: theme.palette.primary.main,
            fontSize: "14px",
            flexGrow: "1",
          }}
        />
        <LogoutOutlinedIcon
          sx={{ fontSize: 20, color: theme.palette.primary.main }}
        />
      </MenuItem>
    </Menu>
  );
};
export default AdminProfileMenu;
