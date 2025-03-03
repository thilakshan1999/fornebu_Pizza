import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const UnauthorizedSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/");
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 3,
        }}
      >
        <ErrorOutlineOutlinedIcon
          sx={{
            fontSize: 80,
            color: "error.main",
            marginBottom: 2,
          }}
        />
        <Typography variant="h4" color="error" sx={{ marginBottom: 2 }}>
          Unauthorized
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          You are not authorized to view this page.
        </Typography>
        <Button
          onClick={handleNavigateHome}
          color="primary"
          variant="contained"
          sx={{
            backgroundColor: theme.palette.button.black,
            color: "white",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#444444",
            },
          }}
        >
          Go to Home Page
        </Button>
      </Box>
    </Container>
  );
};

export default UnauthorizedSection;
