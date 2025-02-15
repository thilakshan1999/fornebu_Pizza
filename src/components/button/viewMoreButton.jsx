import { Button, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const ViewMoreBtn = ({ expanded, setExpanded, sx = {} }) => {
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
        fontStyle: "italic",
        textDecoration: "underline",
        borderRadius: "0",
        "&:hover": {
          backgroundColor: "transparent",
          textDecoration: "underline",
        },
        ...sx,
      }}
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? t("View Less") : t("View More")}
    </Button>
  );
};
export default ViewMoreBtn;
