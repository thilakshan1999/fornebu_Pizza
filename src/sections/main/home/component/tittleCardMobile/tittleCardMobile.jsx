import { Box, Divider, useTheme } from "@mui/material";
import tittleMobileBackground from "../../../../../assets/images/home/tittleMobileBackground.png";
import TittleMobileInfo from "./tittleMobileInfo";
import OpeningHoursMobile from "./openingHoursMobile";
import MobilePhoneNumber from "./mobilePhoneNumber";
import MobileAddress from "./mobileAddress";
import SearchBar from "../menu/searchBar";
import CustomTypography from "../../../../../components/typography/customTypography";
import { useTranslation } from "react-i18next";
import HeaderAllergensBtn from "../../../../header/components/headerAllergensBtn";

const TittleCardMobile = () => {
  const theme = useTheme();
  const { t } = useTranslation();
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
          marginTop: "-40px",
          zIndex: 1,
        }}
      >
        <Box sx={{ paddingInline: "15px" }}>
          <TittleMobileInfo />
          <OpeningHoursMobile />
          <MobilePhoneNumber />
          <MobileAddress />
        </Box>
        <Divider
          sx={{ borderColor: theme.palette.border.main, marginBottom: "15px" }}
        />
        <Box sx={{ paddingInline: "15px" }}>
          <SearchBar />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBlock: "5px",
            }}
          >
            <CustomTypography
              color={theme.palette.text.green}
              text={t("Preparing Time") + ":~15 " + t("Minutes")}
              sx={{
                fontSize: "14px",
              }}
            />
            <HeaderAllergensBtn />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TittleCardMobile;
