import React from "react";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Container from "../../components/common/Container";
import Navbar from "../../components/global/Navbar";
import bgImage from "../images/delaware_full1.webp";

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Gatsby + Node.js (TypeScript) API</title>
      </Helmet>
      <Navbar />
      <Flex
        w="100%"
        h="100vh"
        bg="tealGreen.700"
        position="relative"
        _before={{
          content: "''",
          position: "absolute",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          bg: "tealGreen.700",
          backgroundBlendMode: "luminosity",
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: "20%",
        }}
      >
        <Box mt="auto" w="100%" mb="12" position="relative">
          <Container>
            <Grid py="6" templateColumns="repeat(12, 1fr)" gap="6">
              <GridItem colStart="3" colSpan="8">
                <Box borderBottomWidth="1px" borderColor="white">
                  <Heading size="xl" mb="8" color="white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Heading>
                </Box>
                <Box mt="6">
                  <Text color="white" fontSize="xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </Container>
        </Box>
      </Flex>
      <Container>
        <Grid py="32" templateColumns="repeat(12, 1fr)" gap="6">
          <GridItem colStart="3" colSpan="8">
            <Box>
              <Text fontSize="2xl" lineHeight="2" color="tealGreen.700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </main>
  );
}
