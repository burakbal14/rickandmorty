import React from "react";
import { ChakraProvider, Box, Flex, Text } from "@chakra-ui/react";
import navbar from "./navbar.js";

const Navbar = () => {
  return (
    <ChakraProvider theme={navbar}>
      <Box>
        <Flex
          as="navbar-body"
          align="center"
          justify="space-between"
        >
          <Box className="navbar-box">
            <Text fontSize="xl" userSelect="none">Rick and Morty</Text>
          </Box>
          <Box className="navbar-box">
            <Text fontSize="xl">Characters</Text>
          </Box>
          <Box className="navbar-box">
            <Text fontSize="xl">Locations</Text>
          </Box>
          <Box className="navbar-box">
            <Text fontSize="xl">Episodes</Text>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Navbar;
