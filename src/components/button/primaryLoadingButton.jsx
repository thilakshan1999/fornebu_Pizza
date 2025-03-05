import { Button, CircularProgress, useTheme } from "@mui/material";

const PrimaryLoadingBtn = ({ text, onClick, sx, loading }) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={loading}
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
      {loading ? (
        <CircularProgress
          size={20}
          sx={{ margin: "4px 10px", color: "white" }}
        />
      ) : (
        text
      )}
    </Button>
  );
};
export default PrimaryLoadingBtn;
