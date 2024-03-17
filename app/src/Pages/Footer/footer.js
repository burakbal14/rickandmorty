import { extendTheme } from "@chakra-ui/react";

const footer = extendTheme({
  style: {
    global: {
      ".footer-body": {
        bg: "green.400",
        color: "white",
        fontSize: "xl",
        align: "center",
        justify: "space-between",
        padding: "1rem",
      },
      ".footer-stack": {
        bg: "green.400",
        color: "white",
        padding: "1rem",
      },
    },
  },
});

export default footer;
