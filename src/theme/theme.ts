import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#111111",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1f1f1f",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#111111",
      secondary: "#4b5563",
    },
    divider: "#e5e7eb",
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
    h1: {
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      lineHeight: 1.1,
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "clamp(1.5rem, 3.5vw, 2.3rem)",
      lineHeight: 1.2,
      fontWeight: 700,
      letterSpacing: "-0.015em",
    },
    h3: {
      fontSize: "1.25rem",
      lineHeight: 1.25,
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.75,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
          paddingBlock: 10,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #e5e7eb",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
