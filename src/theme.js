import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#67b34c",
      light: "#e1f0db",
    },
    text: {
      black: "#000000",
      white: "#ffffff",
      grey: "#777777",
      lightGrey: "#a7adb8",
      green: "#28a745",
      red: "red",
      darkGreen: "#00ae60",
    },
    button: {
      main: "#67b34c",
      red: "red",
      grey: "#7f7f7f",
      white: "#ffffff",
      black: "#333333",
    },
    border: {
      main: "#e9e9ec",
      white: "#ffffff",
      green: "#a4d194",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
