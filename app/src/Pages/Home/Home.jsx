import React from "react";
import { Box, ChakraProvider, Flex, Heading, Text } from "@chakra-ui/react";
import home from "./home.js";

const Home = () => {
  return (
    <ChakraProvider>
      <Flex>
        <Box>
          <Heading as="h2" className="home-heading">
            Rick And Morty
          </Heading>
          <Text as="h3" className="home-text">
            Lorem ipsum dolor sit amet, consectedur.
          </Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Home;
