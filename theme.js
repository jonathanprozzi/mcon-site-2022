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
            color: "primaryRed",
            bg: "black",
            borderRadius: 0,
            padding: "16px",
            _focus: {
              bg: "black",
              color: "primaryRed"
            },
            _hover: {
              bg: "black",
              color: "primaryRed"
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
          color: [null, "primaryRed"],
          bg: [null, "black"],
          padding: "16px",
          _hover: {
            bg: [null, "black"],
            color: [null, "primaryRed"]
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
