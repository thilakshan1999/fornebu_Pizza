import React from "react";
import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import CustomTypography from "../../../components/typography/customTypography";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../provider/AuthProvider";

const HeaderMyOrderBtn = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { user, setOpenLogIn } = useAuth();
  const navigate = useNavigate();

  const handleNavigateMyOrder = () => {
    navigate("/myOrders");
  };

  const onClickMyOrder = () => {
    if (user) {
      handleNavigateMyOrder();
    } else {
      setOpenLogIn(true);
    }
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={onClickMyOrder}
    >
      <AssignmentOutlinedIcon
        sx={{ color: theme.palette.text.white, fontSize: "24px" }}
      />
      <CustomTypography
        color={theme.palette.text.white}
        text={t("My_order")}
        sx={{
          fontSize: "15px",
          marginRight: "10px",
          marginLeft: "5px",
        }}
      />
    </Box>
  );
};

export default HeaderMyOrderBtn;
