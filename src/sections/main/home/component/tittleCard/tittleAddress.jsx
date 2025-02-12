import { Box, useTheme } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CustomTypography from "../../../../../components/typography/customTypography";

const TittleAddress = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          padding: "2px",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LocationOnIcon
          sx={{ color: theme.palette.text.black, fontSize: "16px" }}
        />
      </Box>

      {/* ✅ Address */}
      <CustomTypography
        color={theme.palette.text.white}
        text={"Solgangsbrisen 5, 1364 Fornebu"}
        sx={{
          fontSize: "14px",
          marginLeft: "10px",
          fontWeight: "bold",
        }}
      />

      <KeyboardDoubleArrowRightIcon
        sx={{
          color: theme.palette.text.white,
          marginLeft: "10px",
          cursor: "pointer",
        }}
        //onClick
      />
    </Box>
  );
};

export default TittleAddress;
