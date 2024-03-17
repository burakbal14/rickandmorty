import React from "react";
import footer from "./footer.js";
import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Flex,
  ChakraProvider,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <ChakraProvider theme={footer}>
      <Flex
        align="center"
        justify="space-between"
        bg="green.400"
        as="footer"
        role="contentinfo"
        h="100%"
      >
        <Flex spacing={{ base: "4", md: "5" }} bg="green.400" h="100%">
          <Stack justify="space-between" direction="row" align="center"></Stack>
          <Text userSelect="none" fontSize="sm" color="white">
            &copy; {new Date().getFullYear()} Burak Bal, All Rights Reserved
          </Text>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Footer;
