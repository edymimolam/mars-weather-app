import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  fontWeights: {
    light: 300,
    normal: 400,
    semi: 500,
    bold: 700,
  },
  fontSizes: {
    h1: "1.5rem",
    h2: "2.25rem",
    body: "1rem",
    xl: "4.5rem",
  },
  colors: {
    light: "#fff",
    gray: "#989898",
    dark: "#444",
    accent: "#D06D6D",
    accentDark: "#613131",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
