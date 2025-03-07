import { Divider, Menu, MenuItem, useTheme } from "@mui/material";
import CustomTypography from "../../../../../components/typography/customTypography";
import { useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useTranslation } from "react-i18next";

const AdminProfileMenu = ({
  user,
  anchorEl,
  handleCloseMenu,
  setOpenLogout,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleLogout = () => {
    handleCloseMenu();
    setOpenLogout(true);
  };

  const handleNavigateHome = () => {
    handleCloseMenu();
    navigate("/");
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
          minWidth: "150px",
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
        <BadgeOutlinedIcon
          sx={{
            fontSize: 20,
            color: theme.palette.text.black,
            marginBottom: "2px",
            marginRight: "5px",
          }}
        />

        <CustomTypography
          text={user}
          align="centre"
          sx={{
            fontWeight: "500",
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
        <HomeOutlinedIcon
          sx={{
            fontSize: 20,
            color: theme.palette.text.green,
            marginBottom: "2px",
            marginRight: "5px",
          }}
        />

        <CustomTypography
          text={t("Home")}
          align="centre"
          sx={{
            fontWeight: "600",
            color: theme.palette.text.green,
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
          text={t("Logout")}
          align="centre"
          sx={{
            fontWeight: "600",
            color: theme.palette.text.red,
            fontSize: "14px",
            flexGrow: "1",
          }}
        />
        <LogoutOutlinedIcon
          sx={{ fontSize: 20, color: theme.palette.text.red }}
        />
      </MenuItem>
    </Menu>
  );
};
export default AdminProfileMenu;
