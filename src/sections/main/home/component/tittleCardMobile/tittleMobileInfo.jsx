import { Box, useTheme } from "@mui/material";
import tittleIcon from "../../../../../assets/images/home/Icon.png";
import CustomTypography from "../../../../../components/typography/customTypography";
import LanguageSelection from "../../../../header/components/languageSelection";

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
          width: "80px",
          height: "80px",
          objectFit: "contain",
          borderRadius: "50%",
          marginRight: "10px",
          border: "1px solid",
          marginLeft: "10px",
          borderColor: theme.palette.border.main,
        }}
      />

      <CustomTypography
        color={theme.palette.text.black}
        text={"Fornebu Pizza - Fornebu"}
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
        }}
      />
      <Box flexGrow={1} />
      <Box>
        <LanguageSelection />
      </Box>
    </Box>
  );
};
export default TittleMobileInfo;
