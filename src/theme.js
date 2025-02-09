import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#67b34c",
    },
    text: {
      black: "#000000",
      white: "#ffffff",
      grey: "#777777",
      green: "#28a745",
      red: "red",
      darkGreen: "#00ae60",
    },
    button: {
      grey: "#7f7f7f",
      white: "#ffffff",
    },
    border: {
      main: "#7f7f7f",
      white: "#ffffff",
      green: "#a4d194",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
