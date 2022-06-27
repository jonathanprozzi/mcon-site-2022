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
  },
  components: {
    Input: {
      variants: {
        filled: {
          field: {
            color: "primaryNeon",
            bg: "primaryRed",
            borderRadius: 0,
            padding: "16px",
            _focus: {
              bg: "black",
              color: "primaryRed"
            },
            _hover: {
              bg: "primaryRed",
              color: "primaryNeon"
            },
            _placeholder: {
              color: "primaryNeon"
            }
          }
        }
      }
    },
    Textarea: {
      variants: {
        filled: {
          borderRadius: 0,
          color: [null, "primaryNeon"],
          bg: [null, "primaryRed"],
          padding: "16px",
          _hover: {
            bg: [null, "primaryRed"],
            color: [null, "primaryNeon"]
          },
          _focus: {
            bg: [null, "black"],
            color: [null, "primaryRed"]
          },
          _placeholder: {
            color: "primaryNeon"
          }
        }
      }
    }
  }
});

export default theme;
