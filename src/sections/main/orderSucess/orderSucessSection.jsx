import { Box, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTheme } from "@emotion/react";
import CustomTypography from "../../../components/typography/customTypography";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const OrderSuccessSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Function to handle navigation
  const moveToHome = () => {
    navigate("/");
  };

  const moveToOrders = () => {
    navigate("/orders");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: { xs: "90%", md: "600px" },
          margin: "auto",
          padding: "40px 20px",
          bgcolor: "white",
          boxShadow: 5,
          borderRadius: " 5px",
          boxSizing: "border-box",
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 80, color: "green", mb: 4 }} />
        <CustomTypography
          text={t("Thanks for ordering!")}
          sx={{
            fontWeight: "600",
            color: theme.palette.text.black,
            fontSize: "24px",
            mb: 1,
          }}
        />

        <CustomTypography
          text={t(
            "Your order has been placed successfully. You can track your order in the My Orders section."
          )}
          sx={{
            color: theme.palette.text.grey,
            fontSize: "16px",
          }}
        />
        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
          <Button
            sx={{
              color: theme.palette.text.black,
              border: "1px solid grey",
              textTransform: "none",
              "&:hover": { border: "1px solid black" },
            }}
            onClick={moveToOrders}
          >
            {t("View Orders")}
          </Button>
          <Button
            color="primary"
            variant="contained"
            sx={{
              backgroundColor: theme.palette.button.black,
              color: "white",
              textTransform: "none",
              "&:hover": { backgroundColor: "#444444" },
              marginRight: "10px",
            }}
            onClick={moveToHome}
          >
            {t("Continue Shopping")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default OrderSuccessSection;
