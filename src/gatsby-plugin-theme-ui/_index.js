const theme = {
  config: {
    initialColorModeName: "light",
  },

  colors: {
    text: "rgba(49, 34, 14, 0.87)",
    textHeading: "#31140E",
    background: "#FEFCF9",
    primaryMain: "#A06B22",
    primaryDark: "#724C18",
    primaryLight: "#D49135",
    primaryContrastText: "#FFFFFF",
    modes: {
      dark: {
        text: "rgba(255, 255, 255, 0.87)",
        textHeading: "#FFFFFF",
        background: "#121212",
        primaryMain: "#E3B87D",
        primaryDark: "#F0D8B8",
        primaryLight: "#D99F4F",
        primaryContrastText: "#121212",
      },
    },
  },

  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // variants
  buttons: {
    primary: {
      color: "primaryContrastText",
      bg: "primaryMain",
      "&:hover,&:focus": {
        bg: "primaryDark",
      },
    },
  },

  styles: {
    root: {
      background: "background",
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
  },
};

export default theme;
