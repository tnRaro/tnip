import createCss from "@stitches/react";

export const { css, styled, global } = createCss({
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
      
      error: "crimson"
    },
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, Spoqa Han Sans Neo, sans-serif"
    },
    fontSizes: {
      md: "13px",
      lg: "20px"
    },
  }
});

global({
  "html,body,#__next": {
    padding: 0,
    margin: 0,
    fontFamily: "$sans",
    height: "100%",
  },
  "@font-face": [
    {
      fontFamily: "Spoqa Han Sans Neo",
      fontWeight: 400,
      src: [
        "url(/fonts/SpoqaHanSansNeo-Regular.woff2) format(\"woff2\")",
        "url(/fonts/SpoqaHanSansNeo-Regular.woff) format(\"woff\")",
      ]
    },
    {
      fontFamily: "Spoqa Han Sans Neo",
      fontWeight: 700,
      src: [
        "url(/fonts/SpoqaHanSansNeo-Bold.woff2) format(\"woff2\")",
        "url(/fonts/SpoqaHanSansNeo-Bold.woff) format(\"woff\")",
      ]
    }
  ]
})();