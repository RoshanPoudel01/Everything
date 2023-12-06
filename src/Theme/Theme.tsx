import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

// const {
//   Button,
//   Heading,
//   Input,
//   Text,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Table,
//   TableContainer,
// } = chakraTheme.;

// Define variant styles in the theme
export const Theme = extendTheme({
  components: {
    // Heading,
    // Input,
    // Text,
    // FormControl,
    // FormLabel,
    // FormErrorMessage,
    // Table,
    // TableContainer,
    Button: {
      variants: {
        primary: {
          bg: "#325C6A",
          color: "white",
          _hover: {
            bg: "#6A9A9E",
          },
        },
        secondary: {
          bg: "#03181A",
          color: "white",
          _hover: {
            bg: "#28345A",
          },
        },
      },
    },
  },
  colors: {
    brand: {
      background: "#EFF0F7",
    },
    whiteblue: {
      background: "#FFFFFF",
      color: "#03181A",
    },
  },
  styles: {
    global: {
      body: { fontFamily: `'Rubik', sans-serif`, bg: "brand.background" },
    },
  },
});
