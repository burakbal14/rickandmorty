import React from "react";
import { ChakraProvider, Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
import navbar from "./navbar.js";

const Navbar = () => {
  return (
    <ChakraProvider theme={navbar}>
      <Box>
        <Flex
          as="navbar"
          align="center"
          justify="space-between"
          bg="green.400"
        >
          <Box className="navbar-title">
            <Text fontSize="xl" userSelect="none">Rick and Morty</Text>
          </Box>

          <Button as="a" variant="link" href="/characters" className="navbar-button">
            <Heading as="h1" size="2.5rem" margin="1.5rem" color="white">
              Characters
            </Heading>
          </Button>

          <Button as="a" variant="link" href="/episodes" className="navbar-button">
            <Heading as="h1" size="2.5rem" margin="1.5rem" color="white">
              Episodes
            </Heading>
          </Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Navbar;
