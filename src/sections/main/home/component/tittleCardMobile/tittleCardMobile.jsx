import { Box, Divider, useTheme } from "@mui/material";
import tittleMobileBackground from "../../../../../assets/images/home/tittleMobileBackground.png";
import TittleMobileInfo from "./tittleMobileInfo";
import OpeningHoursMobile from "./openingHoursMobile";
import MobilePhoneNumber from "./mobilePhoneNumber";
import MobileAddress from "./mobileAddress";

const TittleCardMobile = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          md: "none",
        },
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingBottom: "44%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${tittleMobileBackground})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          top: "-40px",
          zIndex: 1,
        }}
      >
        <TittleMobileInfo />
        <OpeningHoursMobile />
        <MobilePhoneNumber />
        <MobileAddress />
        <Divider sx={{ borderColor: theme.palette.border.main }} />
      </Box>
    </Box>
  );
};

export default TittleCardMobile;
