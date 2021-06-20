import { createCss, StitchesCss } from "@stitches/react";

export const stitchesConfig = createCss({
  theme: {
    colors: {
      gray100: "gainsboro",
      gray400: "gray",

      blue50: '#dcf3ff',
      blue100: '#aedaff',
      blue200: '#7cc0ff',
      blue300: '#4aa7ff',
      blue400: '#1a8eff',
      blue500: '#0074e6',
      blue600: '#005ab4',
      blue700: '#004182',
      blue800: '#002751',
      blue900: '#000e21',
      
      accent50: "$blue50",
      accent100: "$blue100",
      accent200: "$blue200",
      accent300: "$blue300",
      accent400: "$blue400",
      accent500: "$blue500",
      accent600: "$blue600",
      accent700: "$blue700",
      accent800: "$blue800",
      accent900: "$blue900",
      
      error: "firebrick"
    },
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, Montserrat, Noto Sans KR, sans-serif"
    },
    fontSizes: {
      md: "13px",
      lg: "20px"
    },
  },
  media: {
    bp1: "(max-width: 320px)"
  }
});

export const { css, styled, global, getCssString } = stitchesConfig;

export type CSS = StitchesCss<typeof stitchesConfig>;

export const globalStyles = global({
  "html,body,#__next": {
    padding: 0,
    margin: 0,
    fontFamily: "$sans",
    height: "100%",
    overflowX: "hidden",
    fontSize: "16px",
  },
  body: {
    opacity: 1,
    visibility: "visible",
  },
});