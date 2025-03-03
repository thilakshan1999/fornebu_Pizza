import { Box, Divider, Menu, MenuItem, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CustomTypography from "../typography/customTypography";
import { useTranslation } from "react-i18next";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { useAuth } from "../../provider/AuthProvider";

const ProfileMenu = ({ user, anchorEl, handleCloseMenu, setOpenLogout }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { checkIfUserIsAdmin } = useAuth();

  const handleNavigateAdmin = () => {
    handleCloseMenu();
    navigate("/admin");
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
          display: "flex",
          alignItems: "center",
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
      {checkIfUserIsAdmin() && (
        <Box>
          <MenuItem
            onClick={handleNavigateAdmin}
            sx={{ margin: "2px 6px", padding: "8px 10px", borderRadius: "6px" }}
          >
            <AdminPanelSettingsOutlinedIcon
              sx={{
                fontSize: 20,
                color: theme.palette.text.green,
                marginBottom: "2px",
                marginRight: "5px",
              }}
            />

            <CustomTypography
              text={t("Admin page")}
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
        </Box>
      )}
      <MenuItem
        onClick={() => {
          handleCloseMenu();
          setOpenLogout(true);
        }}
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
export default ProfileMenu;
