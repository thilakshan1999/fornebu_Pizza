import { Box, useTheme } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CustomTypography from "../../../../../components/typography/customTypography";

const MobileAddress = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8px",
        marginBottom: "8px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#777777",
          borderRadius: "50%",
          padding: "2px",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LocationOnIcon
          sx={{ color: theme.palette.text.white, fontSize: "16px" }}
        />
      </Box>

      {/* ✅ Address */}
      <CustomTypography
        color={theme.palette.text.grey}
        text={"Solgangsbrisen 5, 1364 Fornebu"}
        sx={{
          fontSize: "14px",
          marginLeft: "10px",
          fontWeight: "bold",
        }}
      />

      <Box flexGrow={1} />

      <KeyboardDoubleArrowRightIcon
        sx={{
          color: theme.palette.text.grey,
          marginLeft: "10px",
          cursor: "pointer",
        }}
        //onClick
      />
    </Box>
  );
};

export default MobileAddress;
