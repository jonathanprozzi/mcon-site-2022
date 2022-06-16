import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({
  config,
  colors: {
    primaryRed: "#FD0943",
    primaryNeon: "#8AFF2A"
  }
});

export default theme;
