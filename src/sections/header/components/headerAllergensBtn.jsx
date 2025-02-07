import React from "react";
import { Box, styled, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Switch } from "@mui/material";
import CustomTypography from "../../../components/typography/customTypography";

const HeaderAllergensBtn = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 32, // Reduced width of the switch
    height: 20, // Reduced height of the switch
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(12px)", // Adjusted to fit new size
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#65C466",
          opacity: 1,
          border: 0,
          ...theme.applyStyles("dark", {
            backgroundColor: "#2ECA45",
          }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.grey[100],
        ...theme.applyStyles("dark", {
          color: theme.palette.grey[600],
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
        ...theme.applyStyles("dark", {
          opacity: 0.3,
        }),
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 16, // Reduced size of the thumb
      height: 16, // Reduced size of the thumb
    },
    "& .MuiSwitch-track": {
      borderRadius: 10, // Adjusted to fit new size
      backgroundColor: "#E9E9EA",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
      ...theme.applyStyles("dark", {
        backgroundColor: "#39393D",
      }),
    },
  }));

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IOSSwitch sx={{ m: 1 }} defaultChecked />
      <CustomTypography
        color={theme.palette.text.white}
        text={t("My_order")}
        sx={{
          fontSize: "15px",
          marginRight: "10px",
        }}
      />
    </Box>
  );
};

export default HeaderAllergensBtn;
