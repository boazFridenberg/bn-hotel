import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0F172A" },
    secondary: { main: "#BFA37A" },
    background: { default: "#F7F7F7", paper: "#FFFFFF" },
    text: { primary: "#0F172A", secondary: "#4B5563" }
  },
  typography: {
    fontFamily: ['"Inter"', "system-ui", "Arial", "sans-serif"].join(","),
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 600 }
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 999 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 20 } } }
  }
});

export default theme;
