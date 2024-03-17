import { extendTheme } from "@chakra-ui/react";

const navbar = extendTheme({
  styles: {
    global: {
      ".navbar-body": {
        bg: "green.400",
        color: "white",
        fontSize: "xl",
        align: "center",
        justify: "space-between",
        padding: "1rem",
      },
      ".navbar-box": {
        bg: "green.400",
        color: "white",
        padding: "1rem",
      },
    },
  },
});

export default navbar;
