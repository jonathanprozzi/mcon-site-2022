import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({
  config,
  //   fonts: {
  //     heading: "",
  //     body: "",
  //     mono: "Menlo, monospace",
  //   },
  colors: {
    primaryRed: "#FD0A44",
    primaryNeon: "#8BFF2A"
  }
});

export default theme;
