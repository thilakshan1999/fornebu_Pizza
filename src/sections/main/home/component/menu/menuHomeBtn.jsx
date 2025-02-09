import { IconButton, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const MenuHomeBtn = () => {
  const theme = useTheme();
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Hook for navigating

  const isHomeSelected = location.pathname === "/";

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <IconButton
      style={{
        backgroundColor: isHomeSelected ? "rgba(0, 0, 0, 0.3)" : "transparent",
        padding: "10px",
        borderRadius: "0%",
        transition: "background-color 0.3s",
      }}
      onClick={handleHomeClick}
    >
      <HomeOutlinedIcon
        style={{
          fontSize: "36px",
          color: theme.palette.text.white,
        }}
      />
    </IconButton>
  );
};
export default MenuHomeBtn;
