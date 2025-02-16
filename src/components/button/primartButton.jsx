import { Button, useTheme } from "@mui/material";

const PrimaryBtn = ({ text, onClick, sx }) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        boxShadow: "none",
        borderRadius: "8px",
        padding: "8px 20px",
        color: "white",
        fontFamily: theme.typography.fontFamily,
        fontSize: "16px",
        "&:hover": {
          boxShadow: "none",
        },
        ...sx,
      }}
    >
      {text}
    </Button>
  );
};
export default PrimaryBtn;
