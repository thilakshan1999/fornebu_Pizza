import { Box, useTheme } from "@mui/material";
import tittleIcon from "../../../../../assets/images/home/Icon.png";
import CustomTypography from "../../../../../components/typography/customTypography";
import LanguageSelection from "../../../../header/components/languageSelection";
import ProfileBtn from "../../../../authentication/profileBtn";

const TittleMobileInfo = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "end",
      }}
    >
      {/* Icon img */}
      <img
        src={tittleIcon}
        alt="Profile"
        style={{
          width: "75px",
          height: "75px",
          objectFit: "contain",
          borderRadius: "50%",
          border: "1px solid grey",
          borderColor: theme.palette.border.main,
        }}
      />

      <CustomTypography
        color={theme.palette.text.black}
        text={"Fornebu Pizza - Fornebu"}
        sx={{
          fontSize: { xs: "16px", sm: "18px" },
          fontWeight: "bold",
        }}
      />
      <Box flexGrow={1} />
      <Box sx={{ display: "flex" }}>
        <LanguageSelection />
        <ProfileBtn />
      </Box>
    </Box>
  );
};
export default TittleMobileInfo;
