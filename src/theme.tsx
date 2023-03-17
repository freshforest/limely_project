import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#7F8092",
    },
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 500,
      md: 750,
      header: 950,
      lg: 1200,
      xl: 1600,
    },
  },
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
    fontWeightMedium: 500,
    allVariants: { letterSpacing: 0.02 },
    h1: {
      fontSize: 70,
      fontWeight: "bold",
      ["& @media(max-width:700px)"]: {
        fontSize: 50,
      },
    },
    h2: { fontSize: 32, fontWeight: "bold" },
    h3: { fontSize: 24, fontWeight: "bold" },
    body1: { fontSize: 15, fontWeight: "regular", color: "#7F8092" },
    body2: { fontSize: 13, fontWeight: "regular" },
    nav: { fontSize: 18, fontWeight: "regular" },
    button1: { fontSize: 22, fontWeight: "medium" },
    button2: { fontSize: 13, fontWeight: "medium" },
    tiny: { fontSize: 10, fontWeight: "regular" },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: { padding: 10 },
          "& fieldset": { borderRadius: 0 },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecorationColor: "inherit",
          textDecorationThickness: 2,
          ":hover": {
            textDecorationThickness: 3,
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    header: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    nav: React.CSSProperties;
    button1: React.CSSProperties;
    button2: React.CSSProperties;
    tiny: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    nav?: React.CSSProperties;
    button1?: React.CSSProperties;
    button2?: React.CSSProperties;
    tiny?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    nav: true;
    button1: true;
    button2: true;
    tiny: true;
  }
}
