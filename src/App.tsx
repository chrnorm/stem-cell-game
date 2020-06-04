import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Flex,
  Heading,
  Stack,
  Box,
  ThemeProvider,
  theme,
  CSSReset,
  Button,
} from "@chakra-ui/core";

/** returns either 0 or 1 with a 50% chance of either */
const getRandomIndex = () => Math.floor(Math.random() * 2);

const leftBoxColours = ["#f5481e", "#00a1ff"];
const middleBoxColours = ["#000", "#fd65f7"];
const rightBoxColours = ["#69169a", "#fdfa65"];

function App() {
  const [leftBoxColour, setLeftBoxColour] = useState<string>(leftBoxColours[0]);

  const [middleBoxColour, setMiddleBoxColour] = useState<string>(
    middleBoxColours[0]
  );
  const [rightBoxColour, setRightBoxColour] = useState<string>(
    rightBoxColours[0]
  );

  const changeColours = () => {
    setLeftBoxColour(leftBoxColours[getRandomIndex()]);
    setMiddleBoxColour(middleBoxColours[getRandomIndex()]);
    setRightBoxColour(rightBoxColours[getRandomIndex()]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Flex flexDir="column" alignItems="center" h="100vh" w="100vw" p="20px">
        <Heading mb="100px" fontSize="72px">
          The Stem Cell Game
        </Heading>
        <Stack isInline spacing="50px" mb="100px">
          <Box size="300px" borderRadius="50%" bg={leftBoxColour} />
          <Box size="300px" borderRadius="50%" bg={middleBoxColour} />
          <Box size="300px" borderRadius="50%" bg={rightBoxColour} />
        </Stack>
        <Button size="lg" onClick={changeColours}>
          Change!
        </Button>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
