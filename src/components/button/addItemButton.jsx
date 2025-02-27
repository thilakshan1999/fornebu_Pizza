import { Button, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddItemButton = ({ text, onClick, sx }) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        boxShadow: "none",
        borderRadius: "8px",
        padding: "8px 20px",
        backgroundColor: "#333333",
        color: "white",
        fontFamily: theme.typography.fontFamily,
        textTransform: "none",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        "&:hover": {
          boxShadow: "none",
        },
        ...sx,
      }}
    >
      <AddIcon sx={{ marginRight: "8px" }} />
      {text}
    </Button>
  );
};
export default AddItemButton;
