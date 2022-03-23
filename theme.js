import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// customize by adding fonts -- load these via href in _document or @fontsource in _app

const theme = extendTheme({
  config,
  //   fonts: {
  //     heading: "",
  //     body: "",
  //     mono: "Menlo, monospace",
  //   },
  colors: {
    // If you want to be able to use colorScheme, use a tool like Smart Swatch and create a
    // palette with a range from 50 - 900
    // https://smart-swatch.netlify.app/
    brand: {
      offWhite: "#f4f4f4",
      green: "#81e6d9",
        black: "#100459",
        offWhite: "#f4f4f4",
        pink: "#FF74F2",
        cyan: "#74EEFF",
        darkblue: "#150B38",
        yellow: "#FFE283",
        orange: "#FA7242",
        red: "#EF5756",
        purple: "#34016A",
      },
    },
  })


export default theme;
