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
      darkGreen: "#00ae60",
    },
    button: {},
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
