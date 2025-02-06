import { Button, useTheme } from "@mui/material";

const CustomTextButton = ({ text, padding, sx = {}, onClick }) => {
  const theme = useTheme();
  return (
    <Button
      onClick={onClick}
      variant="text"
      sx={{
        color: theme.palette.text.white,
        padding: padding,
        textTransform: "none",
        fontSize: {
          xs: "12px",
          sm: "16px",
        },
        fontFamily: theme.typography.fontFamily,
        borderRadius: "8px",
        ...sx,
      }}
    >
      {text}
    </Button>
  );
};
export default CustomTextButton;
