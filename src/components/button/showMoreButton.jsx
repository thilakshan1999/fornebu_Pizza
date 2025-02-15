import { Box, Button, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import CustomTypography from "../typography/customTypography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ShowMoreBtn = ({ showMore, handleShowMoreToggle, sx = {} }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Button
      disableRipple
      sx={{
        fontSize: "14px",
        textTransform: "none",
        textAlign: "left",
        padding: 0,
        fontFamily: theme.typography.fontFamily,
        borderRadius: "0",
        "&:hover": {
          backgroundColor: "transparent",
        },
        ...sx,
      }}
      onClick={handleShowMoreToggle}
    >
      {showMore ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ExpandLessIcon sx={{ fontSize: "30px" }} />
          <CustomTypography
            text={t("Show Less")}
            color={theme.palette.text.green}
            sx={{ fontSize: "14px" }}
          />
        </Box>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ExpandMoreIcon sx={{ fontSize: "30px" }} />
          <CustomTypography
            text={t("Show More")}
            color={theme.palette.text.green}
            sx={{ fontSize: "14px" }}
          />
        </Box>
      )}
    </Button>
  );
};
export default ShowMoreBtn;
