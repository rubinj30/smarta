import { Box, Divider, Flex } from "@chakra-ui/react";
import React from "react";

export const Legend = () => {
  return (
    <>
      <Divider marginTop={4} marginBottom={4} />
      <Box w={{ base: "100%" }}>
        <Flex alignItems="center">
          <img src={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"} />{" "}
          <span>Buses</span>
        </Flex>
      </Box>
    </>
  );
};
