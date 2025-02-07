import { useState } from "react";
import { Divider, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import NorwayFlag from "../../../assets/images/flag/norway_flag.png";
import UKFlag from "../../../assets/images/flag/english_flag.png";
const LanguageSelection = () => {
  const { i18n } = useTranslation();
  const savedLanguage = localStorage.getItem("i18nLanguage") || "en";
  const initialFlag = savedLanguage === "no" ? NorwayFlag : UKFlag;
  const [selectedFlag, setSelectedFlag] = useState(initialFlag);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang, flag) => {
    if (i18n && typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(lang);
      localStorage.setItem("i18nLanguage", lang);
      setSelectedFlag(flag);
      console.log(i18n.language);
    } else {
      console.error("i18n.changeLanguage is not available.");
    }
    handleClose();
  };

  return (
    <>
      {/* Round Flag Button */}
      <IconButton
        onClick={handleClick}
        sx={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          backgroundColor: theme.palette.background.paper,
          margin: "auto",
          marginRight: "10px",
          padding: 0,
        }}
      >
        <img
          src={selectedFlag} // Show Norway flag inside the button
          alt="Norwegian Flag"
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />
      </IconButton>

      {/* Language Selection Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
        PaperProps={{
          style: { minWidth: 120 },
        }}
      >
        <MenuItem onClick={() => handleLanguageChange("no", NorwayFlag)}>
          <img
            src={NorwayFlag}
            alt="Norwegian"
            style={{ width: 24, height: 16, marginRight: 8 }}
          />
          Norwegian
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleLanguageChange("en", UKFlag)}>
          <img
            src={UKFlag}
            alt="English"
            style={{ width: 24, height: 16, marginRight: 8 }}
          />
          English
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSelection;
