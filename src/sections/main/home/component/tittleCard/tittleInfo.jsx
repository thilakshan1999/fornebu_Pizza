import { Box, useTheme } from "@mui/material";

import tittleIcon from "../../../../../assets/images/home/Icon.png";

import CustomTypography from "../../../../../components/typography/customTypography";
import TittleAddress from "./tittleAddress";

const TittleInfo = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Icon img */}
      <img
        src={tittleIcon}
        alt="Profile"
        style={{
          width: "80px",
          height: "80px",
          objectFit: "contain",
          borderRadius: "50%",
          marginRight: "20px",
        }}
      />

      {/* Info */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* ✅ Name */}
        <CustomTypography
          color={theme.palette.text.white}
          text={"Fornebu Pizza - Fornebu"}
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        />
        <TittleAddress />
      </Box>
    </Box>
  );
};

export default TittleInfo;
